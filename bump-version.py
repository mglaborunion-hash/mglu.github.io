#!/usr/bin/env python3
"""
배포 전 캐시 버전 일괄 갱신 스크립트.

실행: python bump-version.py
  - 새 버전값(YYYYMMDD-HHMM)을 생성
  - 모든 HTML의 CSS/JS 링크 ?v= 쿼리 갱신
  - 각 HTML <head>의 cache-guard 스크립트(var V=...) 갱신 (없으면 주입)
  - version.json 갱신

cache-guard 동작:
  페이지 로드 시 version.json을 no-store로 가져와, 내장 버전과 다르면
  ?_v=새버전 쿼리를 붙여 1회 자동 새로고침 → 기존 캐시 보유자도 최신 페이지를 봄.
"""
import re, io, os, sys, datetime, glob

ROOT = os.path.dirname(os.path.abspath(__file__))
os.chdir(ROOT)

# 버전값: 인자로 주면 그 값, 아니면 현재시각 기반
V = sys.argv[1] if len(sys.argv) > 1 else datetime.datetime.now().strftime("%Y%m%d-%H%M")

VIEWPORT = '<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">'

def guard_block(v):
    return (
        '\n<!-- cache-guard: 새 배포 자동 감지 후 새로고침 (version.json 기준) -->'
        '\n<meta http-equiv="Cache-Control" content="no-cache, must-revalidate">'
        '\n<script>(function(){var V="%s";try{fetch("version.json?_="+Date.now(),{cache:"no-store"})'
        '.then(function(r){return r.json()}).then(function(d){if(d&&d.v&&d.v!==V&&!sessionStorage.getItem("cg_"+d.v)){'
        'sessionStorage.setItem("cg_"+d.v,"1");var p=location.pathname;location.replace(p+"?_v="+encodeURIComponent(d.v))}})'
        '.catch(function(){})}catch(e){}})();</script>' % v
    )

# 단일 파일 번들(자기완결형)은 제외
html_files = [f for f in glob.glob("*.html") if "단일파일" not in f]

css_js_re = re.compile(r'((?:href|src)="(?:styles|data)/[^"?]+\.(?:css|js))(?:\?v=[0-9A-Za-z._-]+)?"')

changed = []
for f in html_files:
    s = io.open(f, encoding="utf-8").read()
    orig = s
    # 1) CSS/JS 버전 쿼리 갱신
    s = css_js_re.sub(lambda m: '%s?v=%s"' % (m.group(1), V), s)
    # 2) 기존 cache-guard 제거 후 재주입
    s = re.sub(r'\n<!-- cache-guard:.*?</script>', '', s, flags=re.S)
    s = re.sub(r'\n<meta http-equiv="Cache-Control"[^>]*>', '', s)
    if VIEWPORT in s:
        s = s.replace(VIEWPORT, VIEWPORT + guard_block(V), 1)
    else:
        print("  [경고] viewport 미발견, cache-guard 건너뜀:", f)
    if s != orig:
        io.open(f, "w", encoding="utf-8", newline="").write(s)
        changed.append(f)

# 3) version.json 갱신
io.open("version.json", "w", encoding="utf-8", newline="").write('{"v":"%s"}\n' % V)

print("버전 갱신 완료: v=%s" % V)
print("수정된 HTML: %d개" % len(changed))
for f in changed:
    print("  -", f)
print("version.json 갱신됨")
print("\n다음: git add -A && git commit -m \"deploy v=%s\" && git push" % V)

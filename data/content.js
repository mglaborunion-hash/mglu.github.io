/* =====================================================================
   기호 1번 온라인 공약집 — 콘텐츠 데이터 & 인터랙션
   출처: 「노동조합 3년, 이렇게 변화했습니다」(36p) + 핵심공약 공보물 9종
   ===================================================================== */

/* ---- 숫자로 증명한 지난 3년 ---- */
const STATS = [
  { icon:'users-three',   num:933, dec:0, unit:'명',     lab:'함께한 조합원' },
  { icon:'flag-banner',   num:35,  dec:0, unit:'년만의', lab:'노동조합 재건' },
  { icon:'network',       num:41,  dec:0, unit:'개',    lab:'금융노조 지부와 협력 및 산별교섭 기반 마련' },
  { icon:'handshake',     num:52,  dec:0, unit:'년만의',  lab:'중앙회 최초 단체협약' },
];

/* ---- 검증된 성과 하이라이트 (Before / After) ---- */
const HIGHLIGHTS = [
  { cat:'경조·복지',  icon:'baby',           title:'자녀출산 경조비 (첫째)', from:'50만원',  to:'500만원' },
  { cat:'육아·돌봄',  icon:'calendar-check', title:'육아휴직 기간',          from:'1년',     to:'2년' },
  { cat:'돌봄지원',   icon:'wheelchair',     title:'장애인 자녀양육비(연)',   from:'360만원', to:'1,200만원' },
  { cat:'임금·수당',  icon:'coins',          title:'연차수당 가산율',         from:'약 1.16', to:'1.4' },
  { cat:'교육·학자금', icon:'graduation-cap', title:'취학전 자녀학자금(연)',   from:'156만원', to:'240만원' },
  { cat:'노후·퇴직',  icon:'medal',          title:'퇴직공제 월지원금',       from:'월 50만원', to:'월 60만원' },
  { cat:'교육·연수',  icon:'airplane-tilt',  title:'해외연수제도 신설',        from:'없음',       to:'연간 10명' },
];

/* ---- 전체 성과 목록 (32건) ---- */
const ACHIEVEMENTS = [
  { ic:'baby',           t:'자녀출산 경조비 인상',         d:'첫째 50→<span class="chg">500만원</span>, 둘째 100→800, 셋째이상 200→1,000만원' },
  { ic:'calendar-check', t:'육아휴직 기간 확대',           d:'1년 → <span class="chg">2년</span> (대상 만8세→만9세·초3 이하)' },
  { ic:'hand-coins',     t:'육아휴직급여 신설',            d:'전기간 무급 → 자녀당 최초 1년 유급 및 초과기간 2달 <span class="chg">기본급 24%</span>' },
  { ic:'baby-carriage',  t:'출산전후 휴가급여 확대',       d:'초과기간 무급 → <span class="chg">기본급 24%</span>' },
  { ic:'heartbeat',      t:'난임휴직·급여 신설',           d:'없음 → 1년 이내 휴직, 최초 6개월 기본급 24%' },
  { ic:'hand-heart',     t:'가족돌봄휴직·급여 신설',       d:'없음 → 1년 이내 휴직, 최초 6개월 기본급 24%' },
  { ic:'coins',          t:'연차수당 가산율 증대',         d:'약 1.16 → <span class="chg">1.4</span>' },
  { ic:'money',          t:'준정년퇴직자 특별퇴직금 신설', d:'평균임금 24개월분 + A(최대 6개월 범위)' },
  { ic:'gavel',          t:'통상임금 대법원 판결 적용',    d:'재직자요건 수당 통상임금 산입(시간외 지급율 2.09 유지)' },
  { ic:'credit-card',    t:'복지카드 기본포인트 인상',     d:'3,600P → <span class="chg">4,800P</span>, 근속 1년당 50P→100P' },
  { ic:'medal',          t:'퇴직공제급여 월지원금 상향',   d:'월 50 → <span class="chg">60만원</span>' },
  { ic:'graduation-cap', t:'취학전 자녀학자금 확대',       d:'연 156 → <span class="chg">240만원</span>' },
  { ic:'wheelchair',     t:'장애인 자녀양육비 확대',       d:'연 360 → <span class="chg">1,200만원</span>' },
  { ic:'handshake',      t:'중앙회 52년 최초 단체협약 체결', d:'창립 이래 최초 단협 체결' },
  { ic:'buildings',      t:'금융산업사용자협의회 가입',    d:'산별교섭 기반 확보' },
  { ic:'shield-check',   t:'전략적업적평가 개정 저지',     d:'전조합원 투표 <span class="chg">92% 반대</span>' },
  { ic:'clock',          t:'시차출퇴근제 도입',            d:'유연한 출퇴근 운영' },
  { ic:'first-aid-kit',  t:'건강검진 당일 유급휴가',       d:'반차 사용 → 별도 반차 없이 휴식' },
  { ic:'stethoscope',    t:'전 임신기간 근로시간 단축',    d:'임금삭감 없는 근로시간 단축' },
  { ic:'baby',           t:'태아검진휴가 신설',            d:'없음 → 임신중 근로자 월 1일' },
  { ic:'clock-countdown',t:'초등 입학기 1시간 단축',       d:'없음 → 3~5월 중 2개월 1시간 단축' },
  { ic:'alarm',          t:'초등 저학년 부모 30분 지연출근', d:'없음 → 30분 지연출근 부여' },
  { ic:'medal-military', t:'군경력 퇴직금 가산제도 도입',  d:'없음 → 3년 내 군경력 재직기간 산정' },
  { ic:'coins',          t:'세종새마을금고 출자금 지원 신설', d:'연 회사지원 40만원 + 본인 10만원 매칭' },
  { ic:'house',          t:'사택제도 개선',                d:'출퇴근 거리·월세지원·근속 제한 개선' },
  { ic:'airplane-tilt',  t:'휴직가능 사유 다양화',         d:'국내박사·해외자비유학·해외어학연수' },
  { ic:'confetti',       t:'미혼직원 체육·문화활동 지원 신설', d:'만35세 이상 미혼직원 2년간 지원' },
  { ic:'trophy',         t:'장기근속자 인센티브 강화',     d:'장기근속휴가 및 지원금' },
  { ic:'book-open',      t:'학위과정(석사) 운영 실시',     d:'직무 역량 강화 과정 신설' },
  { ic:'shopping-cart',  t:'중앙본부 외 지역 소모품비 인상', d:'지역 근무환경 개선' },
  { ic:'users',          t:'사내동호회 활성화',            d:'기본지원금 + 실비지원금 지원' },
  { ic:'airplane-tilt',  t:'해외연수제도 신설',            d:'매년 10명 규모의 <span class="chg">해외연수제도 신설</span>' },
];

/* ---- 공약 인포그래픽 9장 ---- */
/* 번들(오프라인) 시 window.__resources의 blob URL을 우선 사용, 아니면 상대경로 */
const __RES = (typeof window !== 'undefined' && window.__resources) || {};
const asset = (id, path) => __RES[id] || path;
const GALLERY = [
  { no:'01', src:asset('pledge1','assets/infographics/pledge-1.jpg'), title:'경영환경 변화에 따른 조합원 보호' },
  { no:'02', src:asset('pledge2','assets/infographics/pledge-2.jpg'), title:'금고 부당행위 대응 체계 확립' },
  { no:'03', src:asset('pledge3','assets/infographics/pledge-3.jpg'), title:'성과로 증명, 더 크게 — 임금·보상' },
  { no:'04', src:asset('pledge4','assets/infographics/pledge-4.jpg'), title:'금요일 1시간 조기퇴근' },
  { no:'05', src:asset('pledge5','assets/infographics/pledge-5.jpg'), title:'주 4.5일제 산별합의 즉시 적용' },
  { no:'06', src:asset('pledge6','assets/infographics/pledge-6.jpg'), title:'근속 단계별 휴가·지원금 도입' },
  { no:'07', src:asset('pledge7','assets/infographics/pledge-7.jpg'), title:'공정·투명 인사 원칙 확립' },
  { no:'08', src:asset('pledge8','assets/infographics/pledge-8.jpg'), title:'시간외·주말 근무제도 합리화' },
  { no:'09', src:asset('pledge9','assets/infographics/pledge-9.jpg'), title:'비효율적 규정시험 폐지' },
];

/* ---- 책임 파트: 4개 하위 카테고리 ---- */
/* images: GALLERY 인덱스(0-based) — [자세히 보기]가 해당 인포그래픽을 라이트박스로 염 */
const CATEGORIES = [
  { no:'①', title:'중앙회의 미래를 지키겠습니다',
    lead:'변화의 파고 속에서도 흔들리지 않겠습니다.',
    points:[
      '경영환경 변화에 따른 조합원 보호',
      '감독체계 변화 대응',
      '공적자금 투입 등 주요 현안 대응',
      '지방 이전 등 조직 변화 대응',
      '조합원 고용안정 확보',
    ],
    note:'기호 1번은 금융노조 41개 지부, 한국노총, 협동조합 노동조합 협의회 등과의 굳건한 연대를 바탕으로 조합원의 권익과 중앙회의 미래를 지켜나가겠습니다.',
    images:[0], more:'자세히 보기', href:'future.html' },

  { no:'②', title:'조합원의 삶을 지키겠습니다',
    lead:'더 나은 보상과 더 나은 복지',
    points:[
      '3년간 총임금 최소 10% 인상',
      '업적달성장려금 지급률 상향',
      '금요일 1시간 조기퇴근제 시행',
      '주 4.5일제 산별합의 즉시 적용',
      '근속 단계별 휴가·지원금 제도 도입',
    ],
    images:[2,3,4,5], more:'자세히 보기', href:'life.html' },

  { no:'③', title:'공정한 인사와 건강한 조직문화를 만들겠습니다',
    points:[
      '부당행위 대응체계 확립',
      '공정·투명 인사 원칙 확립',
      '시간외·주말근무 제도 합리화',
      '규정시험 폐지',
    ],
    images:[1,6,7,8], more:'자세히 보기', href:'fair.html' },

  { no:'④', title:'IT센터 조합원과의 약속',
    lead:'현장의 목소리를 공약에 담았습니다.',
    points:[
      '계정계 차세대 등 프로젝트 관련 현장 의견 반영',
      '프로젝트 수당 신설',
      '프로젝트 참여 시 업무부담 완화',
      'IT 맞춤형 교육 확대',
      '생성형 AI 개인계정 구독 지원',
      '모션데스크 및 주변기기 지원',
      '내근직 복장 완전 자율화',
      '야간 식대·택시비 지원',
      '시차출퇴근제 개선',
    ],
    it:true, images:[], more:'IT센터 세부 공약 보기', href:'it-center.html' },
];

/* ---- 핵심 공약 9 (제목 그리드 → 탭하면 상세) ---- */
const PLEDGES = [
  { no:'01', cat:'위기 대응', icon:'shield-check', flag:false,
    title:'경영환경 변화에 따른 <em>조합원 보호</em>',
    sub:'감독체계 변화·공적자금 투입 가능성·지방 이전 등 어떤 변화 속에서도 일터와 생존권을 지킵니다.',
    points:[
      {ic:'warning-circle', b:'대외 환경 변화 선제 대응', s:'중앙회·금고를 둘러싼 환경 변화에 미리 대비'},
      {ic:'lock-key',       b:'급여·복지·근로제도 후퇴 방어', s:'변화의 부담이 조합원에게만 전가되지 않도록'},
      {ic:'network',        b:'금융노조·대외 네트워크로 실질 보호장치 확보', s:'선제적 정보 파악과 교섭으로 대응'},
    ],
    foot:{ic:'shield', t:'위기에는 실험보다 <em>검증된 보호</em>가 필요합니다'} },

  { no:'02', cat:'권익 보호', icon:'shield-warning', flag:false,
    title:'금고 부당행위 <em>대응 체계</em> 확립',
    sub:'폭언·부당요구·외부압력으로부터 조합원을 보호합니다. 현장의 어려움을 개인이 감당하지 않도록.',
    points:[
      {ic:'chats-circle',  b:'노동조합 신고·상담 창구 운영', s:'폭언·부당요구 발생 시 즉시 상담·기록 지원'},
      {ic:'clipboard-text',b:'사안별 대응 매뉴얼·데이터 축적', s:'반복·악성 사례는 노조가 공식 대응'},
      {ic:'megaphone',     b:'필요 시 사용자 측 공식 시정 요구', s:'제도와 절차로 재발 방지 장치 마련'},
    ],
    foot:{ic:'users-three', t:'혼자 참지 않도록, <em>노동조합이 함께</em> 대응합니다'} },

  { no:'03', cat:'임금·보상', icon:'chart-line-up', flag:true,
    title:'3년간 총임금 <em>최소 10% 인상</em>',
    sub:'2024년 4.0% + 2025년 3.9% 성과를 넘어, 더 큰 임금개선으로 이어가겠습니다.',
    points:[
      {ic:'trend-up',      b:'3년간 총임금 최소 10% 인상', s:'검증된 임금 성과를 더 큰 인상으로'},
      {ic:'chart-line-up', b:'2년 연속 임금인상 성과 계승', s:'2024년 4.0% + 2025년 3.9%'},
      {ic:'money',         b:'실질임금을 지키는 교섭', s:'물가·생활비를 반영한 임금 협상'},
    ],
    foot:{ic:'seal-check', t:'성과로 증명, <em>더 크게</em> 바꾸겠습니다'} },

  { no:'04', cat:'임금·보상', icon:'coins', flag:false,
    title:'업적달성장려금 <em>지급률 상향</em>',
    sub:'노력한 만큼 정당하게 보상받는 구조, 업적달성장려금을 두 배로 끌어올리겠습니다.',
    points:[
      {ic:'coins',     b:'업적달성장려금 지급률 상향', s:'<span class="metric"><span class="from">300%</span><span class="arrow">→</span><span class="to">600%</span></span>'},
      {ic:'scales',    b:'성과가 제대로 보상받는 구조', s:'전략적 업적평가 개정 저지(전조합원 92% 반대)'},
      {ic:'seal-check',b:'노력한 만큼, 정당한 보상', s:'성과가 보상으로 이어지는 체계'},
    ],
    foot:{ic:'coins', t:'성과는 <em>정당한 보상</em>으로 돌아와야 합니다'} },

  { no:'05', cat:'일·생활 균형', icon:'sun-horizon', flag:false,
    title:'매주 금요일 <em>1시간 조기퇴근</em>',
    sub:'일할 만큼 일했다! 한 시간 더 빠르게, 삶은 더 여유롭게.',
    points:[
      {ic:'clock-afternoon', b:'매주 금요일 1시간 조기퇴근', s:'주말의 시작을 한 시간 더 여유롭게'},
      {ic:'scales',          b:'일과 삶의 균형 실현', s:'더 건강한 조직, 더 행복한 우리'},
      {ic:'heart',           b:'조합원의 삶을 바꾸는 실천 공약', s:'제도로 작동하는 실질 혜택'},
    ],
    foot:{ic:'coffee', t:'금요일 오후, <em>더 여유 있는</em> 우리의 삶'} },

  { no:'06', cat:'근무 혁신', icon:'calendar-dots', flag:false,
    title:'주 4.5일제 <em>산별합의 즉시 적용</em>',
    sub:'금융노조가 주5일제를 산별합의로 앞장서 도입했듯, 주4.5일제 산별합의 시 중앙회지부에도 즉시 도입하겠습니다.',
    points:[
      {ic:'handshake',      b:'금융노조와의 강한 연대', s:'즉시 도입 가능한 교섭·네트워크 역량'},
      {ic:'calendar-check', b:'4일 전일근무 + 금요일 반일근무', s:'월·화·수·목 전일, 금요일 ½'},
      {ic:'lightning',      b:'산별합의 즉시, 중앙회지부도 즉시 적용', s:'연대의 힘으로 더 빠르게, 더 현실적으로'},
    ],
    foot:{ic:'shield-check', t:'현 집행부가 <em>가능하게</em> 합니다'} },

  { no:'07', cat:'휴식·복지', icon:'island', flag:false,
    title:'근속 단계별 <em>휴가·지원금</em> 제도 도입',
    sub:'입사 5년부터 안식월까지! 일한 만큼, 쉴 권리도 보장받아야 합니다.',
    points:[
      {ic:'confetti', b:'입사 5년 조합원', s:'연속 휴가 5일 + 축하 지원금 <em>100만원</em>'},
      {ic:'island',   b:'15년 이상 — MG Re-Born 안식월', s:'안식월(1개월) 유급휴가 부여 추진'},
      {ic:'heart',    b:'일과 삶의 균형 실현', s:'충분한 휴식과 재충전 지원'},
    ],
    foot:{ic:'clock', t:'일한 시간도 소중하지만, <em>쉴 시간</em>도 존중받아야 합니다'} },

  { no:'08', cat:'공정 인사', icon:'scales', flag:false,
    title:'공정·투명 <em>인사 원칙</em> 확립',
    sub:'전보기준을 치밀하게 분석·보완하여, 조합원이 납득할 수 있는 예측 가능한 인사체계를 세웁니다.',
    points:[
      {ic:'magnifying-glass', b:'현행 전보기준 정밀 분석·보완', s:'직무·경력·전문성을 반영한 기준 보완'},
      {ic:'eye',              b:'절차의 투명성 강화', s:'납득할 수 있는 설명과 공개 원칙'},
      {ic:'chats',            b:'정기인사 전후 조합원 의견 수렴', s:'불필요한 불이익과 편차 최소화'},
    ],
    foot:{ic:'scales', t:'기준은 더 투명하게, <em>절차는 더 공정하게</em>'} },

  { no:'09', cat:'근무 합리화', icon:'clock-countdown', flag:false,
    title:'시간외·주말 근무제도 <em>합리화</em>',
    sub:'무임금 초과근로를 막겠습니다. 막는 것이 아니라, 현장 실정에 맞게 합리적으로 운영해야 합니다.',
    points:[
      {ic:'prohibit',      b:'일괄적 시간외근무 금지 조치 철폐', s:'업무성과를 내야 함에도 일괄 금지로 낭비 발생'},
      {ic:'clipboard-text',b:'주말근무 승인절차 합리화', s:'본부장 결재 → 부장 결재로 간소화'},
      {ic:'clock',         b:'08:30~09:00 / 18:00~18:30 임금 지급 요청', s:'또는 야근신청 18시부터 가능하도록 개선'},
    ],
    foot:{ic:'scales', t:'조합원의 시간과 노동은 <em>정당하게 보상</em>받아야 합니다'} },

  { no:'10', cat:'교육 혁신', icon:'book-open-text', flag:false,
    title:'비효율적 <em>규정시험 폐지</em>',
    sub:'AI 시대에 맞지 않는 암기식 규정시험, 실무형 역량 강화 체계로 전환하겠습니다.',
    points:[
      {ic:'trash',              b:'규정시험 폐지 추진', s:'불합격 시 인사상 감점 등 불이익 요소 정비'},
      {ic:'chalkboard-teacher', b:'사례형·디지털 규정 활용 교육', s:'검색 가능한 규정·지식 활용 체계 강화'},
      {ic:'list-checks',        b:'실무형 평가로 전환', s:'교육 이수·과제·실무 적용 중심으로'},
    ],
    foot:{ic:'book-open-text', t:'암기보다 <em>이해와 활용</em> 중심으로'} },
];

/* ===================================================================== */
/* Renderers                                                             */
/* ===================================================================== */
function renderHubStats() {
  const w = document.getElementById('hub-stats'); if (!w) return;
  w.innerHTML = STATS.map((s) => `
    <div class="hstat">
      <i class="ic ic-${s.icon}"></i>
      <div class="hstat__num" data-target="${s.num}" data-dec="${s.dec}">0<small>${s.unit}</small></div>
      <div class="hstat__lab">${s.lab}</div>
    </div>`).join('');
}

function renderHighlights() {
  const w = document.getElementById('highlights'); if (!w) return;
  w.innerHTML = HIGHLIGHTS.map(h => `
    <article class="ba">
      <span class="ba__cat"><i class="ic ic-${h.icon}"></i>${h.cat}</span>
      <h3 class="ba__title">${h.title}</h3>
      <div class="ba__rows">
        <div class="ba__from"><span class="ba__cap">기존</span><span class="ba__val">${h.from}</span></div>
        <i class="ic ic-arrow-right ba__arrow"></i>
        <div class="ba__to"><span class="ba__cap">개선 후</span><span class="ba__val">${h.to}</span></div>
      </div>
    </article>`).join('');
}

function renderAchievements() {
  const w = document.getElementById('achv-list'); if (!w) return;
  w.innerHTML = ACHIEVEMENTS.map(a => `
    <div class="achv-item"><i class="ic ic-${a.ic}"></i>
      <div><h4>${a.t}</h4><p>${a.d}</p></div></div>`).join('');
}

function renderCategories() {
  const w = document.getElementById('cat-list'); if (!w) return;
  w.innerHTML = CATEGORIES.map((c) => `
    <article class="cat${c.it ? ' cat--it' : ''}">
      <header class="cat__head"><span class="cat__no">${c.no}</span><h3 class="cat__title">${c.title}</h3></header>
      ${c.lead ? `<p class="cat__lead">${c.lead}</p>` : ''}
      <ul class="cat__points">
        ${c.points.map(p => `<li><i class="ic ic-check-circle"></i><span>${p}</span></li>`).join('')}
      </ul>
      ${c.note ? `<p class="cat__note">${c.note}</p>` : ''}
      <button class="cat__more" data-images="${(c.images || []).join(',')}"${c.href ? ` data-href="${c.href}"` : ''}${c.draft ? ' data-draft="1"' : ''}>${c.more} <i class="ic ic-arrow-up-right"></i></button>
      ${c.draft ? `<p class="cat__draft" hidden>${c.draft}</p>` : ''}
    </article>`).join('');
}

/* ===================================================================== */
/* Icons injection                                                       */
/* ===================================================================== */
function injectIcons(root) {
  const map = window.ICONS || {};
  (root || document).querySelectorAll('i.ic:not([data-iced])').forEach(el => {
    const cls = [...el.classList].find(c => c.startsWith('ic-'));
    if (!cls) return;
    const name = cls.slice(3);
    if (map[name]) { el.innerHTML = '<svg viewBox="0 0 256 256" aria-hidden="true">' + map[name] + '</svg>'; el.setAttribute('data-iced','1'); }
  });
}

/* ===================================================================== */
/* Stat count-up                                                         */
/* ===================================================================== */
function animateCount(el) {
  const target = parseFloat(el.dataset.target);
  const dec = parseInt(el.dataset.dec, 10) || 0;
  const small = el.querySelector('small');
  const unit = small ? small.outerHTML : '';
  const dur = 1100; const start = performance.now();
  function tick(now) {
    const t = Math.min(1, (now - start) / dur);
    const eased = 1 - Math.pow(1 - t, 3);
    const val = (target * eased).toFixed(dec);
    el.innerHTML = Number(val).toLocaleString('ko-KR', {minimumFractionDigits:dec, maximumFractionDigits:dec}) + unit;
    if (t < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}
function initCounts() {
  const nums = document.querySelectorAll('.hstat__num');
  if (!nums.length) return;
  if (!('IntersectionObserver' in window)) { nums.forEach(animateCount); return; }
  const io = new IntersectionObserver((ents) => {
    ents.forEach(e => { if (e.isIntersecting) { animateCount(e.target); io.unobserve(e.target); } });
  }, { threshold: 0.4 });
  nums.forEach(n => io.observe(n));
}

/* ===================================================================== */
/* Achievements toggle                                                   */
/* ===================================================================== */
function initToggle() {
  const btn = document.getElementById('achv-toggle');
  const list = document.getElementById('achv-list');
  if (!btn || !list) return;
  btn.addEventListener('click', () => {
    const open = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!open));
    list.hidden = open;
    btn.querySelector('.label').textContent = open ? '검증된 성과 32건 전체 보기' : '접기';
  });
}

/* ===================================================================== */
/* Pledge accordion                                                      */
/* ===================================================================== */
function initPledges() {
  document.querySelectorAll('.pledge__head').forEach(head => {
    head.addEventListener('click', () => {
      const open = head.getAttribute('aria-expanded') === 'true';
      head.setAttribute('aria-expanded', String(!open));
      head.closest('.pledge').classList.toggle('open', !open);
    });
  });
}

/* ===================================================================== */
/* Lightbox                                                              */
/* ===================================================================== */
let lbList = GALLERY.map((_, i) => i);
let lbPos = 0;
function lbOpen(list, start) {
  lbList = (list && list.length) ? list : GALLERY.map((_, i) => i);
  lbPos = start || 0;
  const lb = document.getElementById('lightbox');
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
  lbRender();
}
function lbClose() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}
function lbGo(d) { lbPos = (lbPos + d + lbList.length) % lbList.length; lbRender(); }
function lbRender() {
  const g = GALLERY[lbList[lbPos]];
  document.getElementById('lb-img').src = g.src;
  document.getElementById('lb-cap').textContent = g.no + ' · ' + g.title;
  document.getElementById('lb-cur').textContent = lbPos + 1;
  document.getElementById('lb-total').textContent = lbList.length;
}
function initLightbox() {
  // 카테고리 [자세히 보기] → 해당 인포그래픽 라이트박스 / IT는 준비중 노트 토글
  document.querySelectorAll('.cat__more').forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.dataset.href) { window.location.href = btn.dataset.href; return; }
      const raw = btn.dataset.images || '';
      const idxs = raw.split(',').filter(s => s !== '').map(Number);
      if (idxs.length) { lbOpen(idxs, 0); }
      else if (btn.dataset.draft) {
        const n = btn.parentElement.querySelector('.cat__draft');
        if (n) n.hidden = !n.hidden;
      }
    });
  });
  const lb = document.getElementById('lightbox');
  if (!lb) return;
  lb.querySelector('.lb__close').addEventListener('click', lbClose);
  lb.querySelector('.lb__prev').addEventListener('click', () => lbGo(-1));
  lb.querySelector('.lb__next').addEventListener('click', () => lbGo(1));
  lb.addEventListener('click', e => { if (e.target === lb || e.target.classList.contains('lb__stage')) lbClose(); });
  document.addEventListener('keydown', e => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') lbClose();
    if (e.key === 'ArrowRight') lbGo(1);
    if (e.key === 'ArrowLeft') lbGo(-1);
  });
  // swipe
  let sx = 0;
  const stage = lb.querySelector('.lb__stage');
  stage.addEventListener('touchstart', e => { sx = e.touches[0].clientX; }, {passive:true});
  stage.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - sx;
    if (Math.abs(dx) > 45) lbGo(dx < 0 ? 1 : -1);
  });
}

/* ===================================================================== */
/* Bottom nav: page-based navigation                                     */
/* ===================================================================== */
const PAGE_MAP = {
  home:       'index.html',
  start:      'page-start.html',
  record:     'page-record.html',
  succession: 'page-succession.html',
  pledges:    'page-pledges.html',
};

function initNav() {
  // Set active tab based on current filename
  const file = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.bnav__btn').forEach(btn => {
    const href = btn.getAttribute('href') || '';
    btn.classList.toggle('active', href === file || (!file && href === 'index.html'));
  });
  // navcard / data-goto → navigate to page
  document.querySelectorAll('[data-goto]').forEach(el => {
    el.addEventListener('click', () => {
      const p = PAGE_MAP[el.dataset.goto];
      if (p) location.href = p;
    });
  });
}

/* ===================================================================== */
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window) || !els.length) { els.forEach(e=>e.classList.add('in')); return; }
  const io = new IntersectionObserver((ents) => {
    ents.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.1 });
  els.forEach(e => io.observe(e));
}

document.addEventListener('DOMContentLoaded', () => {
  renderHubStats();
  renderHighlights();
  renderAchievements();
  renderCategories();
  injectIcons();
  initCounts();
  initToggle();
  initLightbox();
  initNav();
  initReveal();
});

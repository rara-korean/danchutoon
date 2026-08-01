// 점수 로직 검증용 임시 스크립트 (node test.js)
const fs = require("fs");
const path = require("path");

const read = f => fs.readFileSync(path.join(__dirname, f), "utf8");

// index.html 안의 마지막 <script> 블록(로직)을 추출
const html = read("index.html");
const blocks = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)];
const logic = blocks[blocks.length - 1][1].replace('"use strict";', "");
global.document = { querySelectorAll: () => [], getElementById: () => ({ style: {}, classList: { add(){}, remove(){}, toggle(){} } }) };
global.window = { scrollTo: () => {} };
// 데이터 + 로직을 한 스코프에서 실행 (const 공유를 위해 단일 eval)
eval(read("q1-data.js") + "\n" + read("data.js") + "\n" + logic +
  "\n;globalThis.__ctx = { Q1_DATA, Q2_DATA, Q1_TO_Q2, NEEDS, NEED_ORDER, STRATEGIES, STRATEGY_ORDER, SITUATION_LIST, SECURE_RESULT, state, q1ScenarioById };");
// 함수 선언(computeDesires 등)은 비엄격 eval에서 이 스코프로 새어 나오므로 그대로 사용 가능
const { Q1_DATA, Q2_DATA, Q1_TO_Q2, NEEDS, NEED_ORDER, STRATEGIES, STRATEGY_ORDER, SITUATION_LIST, SECURE_RESULT,
        state, q1ScenarioById } = globalThis.__ctx;

let fails = 0;
function check(name, cond, detail) {
  if (cond) console.log("PASS  " + name);
  else { fails++; console.log("FAIL  " + name + (detail ? " -> " + detail : "")); }
}

// ---- 1. 데이터 정합성 ----
check("Q1 시나리오 12개", Q1_DATA.scenarios.length === 12);
check("Q2 시나리오 12개", Object.keys(Q2_DATA).length === 12);
check("매핑 12개, 전부 존재", Object.keys(Q1_TO_Q2).length === 12 &&
  Object.values(Q1_TO_Q2).every(k => Q2_DATA[k]));
check("매핑 값 중복 없음", new Set(Object.values(Q1_TO_Q2)).size === 12);

let dataOk = true, msg = "";
for (const [k, q2] of Object.entries(Q2_DATA)) {
  if (q2.thoughtOptions.length !== 5) { dataOk = false; msg = k + " thought != 5"; }
  if (q2.behaviorOptions.length !== 5) { dataOk = false; msg = k + " behavior != 5"; }
  q2.thoughtOptions.forEach((o, i) => {
    if (o.reappraisal) {
      if (i < 3) { dataOk = false; msg = k + " opt" + (i + 1) + " 재해석 위치 오류"; }
    } else {
      if (!NEEDS[o.main]) { dataOk = false; msg = k + " opt" + (i + 1) + " main=" + o.main; }
      if (o.sub && !NEEDS[o.sub]) { dataOk = false; msg = k + " opt" + (i + 1) + " sub=" + o.sub; }
    }
  });
}
check("Q2 데이터 구조/욕구 코드 정합", dataOk, msg);

// 유형별 단추 이름·궁합 문구·이미지 파일 존재 확인
check("NEEDS 전부 button/match 보유", NEED_ORDER.every(n => NEEDS[n].button && NEEDS[n].match));
check("단추 이미지 파일 7개 존재", NEED_ORDER.every(n =>
  fs.existsSync(path.join(__dirname, `단추이미지_${NEEDS[n].button}.png`))),
  NEED_ORDER.filter(n => !fs.existsSync(path.join(__dirname, `단추이미지_${NEEDS[n].button}.png`)))
    .map(n => NEEDS[n].button).join(", "));

// '결과지.txt' 원문과 data.js 내용 대조 (제목/한 줄 공식/해설/궁합)
{
  const src = read("결과지.txt");
  const labelToCode = {};
  NEED_ORDER.forEach(n => { labelToCode[NEEDS[n].label] = n; });
  let sheetOk = true, sheetMsg = "";
  src.split(/^#/m).map(s => s.trim()).filter(Boolean).forEach(block => {
    const label = block.split(/\r?\n/)[0].trim();
    const code = labelToCode[label];
    if (!code) { sheetOk = false; sheetMsg = "알 수 없는 유형: " + label; return; }
    const get = key => {
      const m = block.match(new RegExp("- " + key + "\\s*:\\s*(.+)"));
      return m ? m[1].trim() : "";
    };
    const title = get("제목");
    const hook = get("한 줄 공식").replace(/^["“]|["”]\s*$/g, "").trim();
    const explain = get("해설");
    const match = get("어떤 단추와 잘 맞을까\\?");
    if (NEEDS[code].button !== title) { sheetOk = false; sheetMsg = label + " 제목 불일치"; }
    if (NEEDS[code].hook !== hook) { sheetOk = false; sheetMsg = label + " 공식 불일치: '" + NEEDS[code].hook + "' vs '" + hook + "'"; }
    if (NEEDS[code].explain !== explain) { sheetOk = false; sheetMsg = label + " 해설 불일치"; }
    if (NEEDS[code].match !== match) { sheetOk = false; sheetMsg = label + " 궁합 불일치"; }
  });
  check("결과지.txt와 data.js 내용 일치", sheetOk, sheetMsg);
}

// Q1 선택지 욕구 코드가 NEEDS에 모두 존재하는지
let q1Ok = true;
Q1_DATA.scenarios.forEach(s => {
  s.primaryQuestion.options.forEach(o => { if (!NEEDS[o.primaryDesire]) q1Ok = false; });
  s.followUpQuestions.forEach(f => f.options.forEach(o => { if (!NEEDS[o.primaryDesire]) q1Ok = false; }));
});
check("Q1 욕구 코드 전부 NEEDS에 존재", q1Ok);

// ---- 2. 시뮬레이션: S01/S02/S10, 알려진 답으로 계산 검증 ----
function setAnswers(sel, picks) {
  state.selected = sel;
  state.answers = {};
  sel.forEach((sid, i) => {
    const sc = q1ScenarioById[sid];
    const p = picks[i];
    const prim = sc.primaryQuestion.options[p.q1];
    const fq = sc.followUpQuestions.find(f => f.id === prim.nextQuestionId);
    state.answers[sid] = {
      q1Primary: prim,
      q1Follow: fq.options[p.q1f],
      thoughtIdx: p.t,
      behaviorIdx: p.b
    };
  });
}

// S01: 1차 A(safety,1점) → 2차 A의 4번(safety,2점) / 생각 2번(safety4+specialness1) / 행동 2번(확인·감시)
// S02: 1차 D(specialness,1점) → 2차 D의 2번(specialness... 확인 필요) → 대신 인덱스로 지정하고 기대값은 데이터에서 계산
setAnswers(["S01", "S02", "S10"], [
  { q1: 0, q1f: 3, t: 1, b: 1 },
  { q1: 3, q1f: 1, t: 0, b: 4 },
  { q1: 1, q1f: 0, t: 4, b: 4 }
]);

const d = computeDesires();
// 기대 총점 직접 계산
const expTotal = {};
NEED_ORDER.forEach(n => expTotal[n] = 0);
state.selected.forEach(sid => {
  const a = state.answers[sid];
  expTotal[a.q1Primary.primaryDesire] += 1;
  expTotal[a.q1Follow.primaryDesire] += 2;
});
check("욕구 총점 = 1점+2점 합산", NEED_ORDER.every(n => d.total[n] === expTotal[n]),
  JSON.stringify(d.total) + " vs " + JSON.stringify(expTotal));
check("욕구 총점 합계 9점", NEED_ORDER.reduce((s, n) => s + d.total[n], 0) === 9);
check("백분율 합계 ~100", Math.abs(NEED_ORDER.reduce((s, n) => s + d.percent[n], 0) - 100) < 1);

const t = computeThreat();
// S01→Q2_S04 생각2번: safety4+specialness1 / S02→Q2_S02 생각1번: specialness4+safety1 / S10→Q2_S10 생각5번: 재해석4
check("위협 원점수 safety=5, specialness=5", t.raw.safety === 5 && t.raw.specialness === 5,
  JSON.stringify(t.raw));
check("위협 활성화 2회, secure 아님", t.activation === 2 && !t.secure);
// 동적 최대: Q2_S04 safety max4, Q2_S02 safety max4, Q2_S10 safety max0 → 8 / specialness: 4+4+0=8
check("정규화 = 5/8", Math.abs(t.norm.safety - 62.5) < 0.01 && Math.abs(t.norm.specialness - 62.5) < 0.01,
  JSON.stringify(t.norm));
// 동점 → NEED_ORDER 우선(safety)
check("동점 시 표시 순서 우선(safety)", t.top === "safety", t.top);

const s = computeStrategy();
check("전략 집계: 확인·감시1, 직접표현2 → top=직접표현", s.count.reassurance_monitoring === 1 &&
  s.count.direct_communication === 2 && s.top === "direct_communication", JSON.stringify(s.count));

// ---- 3. SECURE 케이스 ----
setAnswers(["S03", "S07", "S12"], [
  { q1: 0, q1f: 0, t: 3, b: 4 },
  { q1: 1, q1f: 1, t: 4, b: 4 },
  { q1: 2, q1f: 2, t: 3, b: 4 }
]);
const t2 = computeThreat();
check("전부 재해석 선택 시 SECURE", t2.secure === true && t2.activation === 0);
check("재해석 비율 = (3+4+3)/12", t2.reapRatio === Math.round(10 / 12 * 100), t2.reapRatio);

// ---- 4. 전체 경로 스모크: 모든 상황/1차/2차 분기 접근 가능 ----
let branchOk = true;
Q1_DATA.scenarios.forEach(sc => {
  sc.primaryQuestion.options.forEach(o => {
    const fq = sc.followUpQuestions.find(f => f.id === o.nextQuestionId);
    if (!fq || fq.options.length !== 4) branchOk = false;
  });
});
check("모든 1차 선택지의 2차 분기 존재(4지선다)", branchOk);

// 결과 HTML 생성 스모크 (secure / 일반 / growth / direct)
try {
  strategyHTML(t2, computeStrategy());                     // SECURE
  setAnswers(["S01", "S02", "S10"], [
    { q1: 0, q1f: 3, t: 1, b: 0 }, { q1: 3, q1f: 1, t: 0, b: 0 }, { q1: 1, q1f: 0, t: 0, b: 2 }
  ]);
  strategyHTML(computeThreat(), computeStrategy());        // 일반 단점
  setAnswers(["S10", "S01", "S02"], [
    { q1: 1, q1f: 0, t: 0, b: 4 }, { q1: 0, q1f: 3, t: 4, b: 4 }, { q1: 3, q1f: 1, t: 3, b: 4 }
  ]);
  const t3 = computeThreat();
  const h3 = strategyHTML(t3, computeStrategy());          // growth top + direct
  check("growth 위협 시 탐색적 주의문 포함", t3.top === "growth" && h3.includes("탐색적"), t3.top);
  const dz = computeDesires();
  check("ranked = 총점 내림차순", dz.ranked.every((n, i) =>
    i === 0 || dz.total[dz.ranked[i - 1]] >= dz.total[n]));
  const donut = donutChart(dz);
  check("도넛 그래프 생성(svg + 범례)", donut.includes("<svg") && donut.includes("legend"));
  const top3 = dz.ranked.slice(0, 3).filter(n => dz.total[n] > 0);
  check("범례에 top3 라벨 포함", top3.every(n => donut.includes(NEEDS[n].label)));
} catch (e) {
  check("결과 HTML 생성 무오류", false, e.message);
}

// 조사(이/가, 을/를) 확인
check("조사 이/가", josa("안전성", "이", "가") === "안전성이" && josa("보호자", "이", "가") === "보호자가" &&
  josa("성장·발전형", "이", "가") === "성장·발전형이");
check("조사 을/를 (자음 끝=을)", josa("안전성", "을", "를") === "안전성을" &&
  josa("소속감", "을", "를") === "소속감을" && josa("특별함", "을", "를") === "특별함을" &&
  josa("보호자", "을", "를") === "보호자를" && josa("독립심", "을", "를") === "독립심을" &&
  josa("유능함", "을", "를") === "유능함을" && josa("성장·발전형", "을", "를") === "성장·발전형을");

console.log(fails === 0 ? "\n모든 테스트 통과" : `\n실패 ${fails}건`);
process.exit(fails ? 1 : 0);

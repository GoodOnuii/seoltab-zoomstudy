// 줌 회의 URL을 여기서 변경하세요
const ZOOM_MEETING_URL = "https://us05web.zoom.us/j/87191811106?pwd=GmzH8hBaekESRy3Uxo8iDhj9e4nltN.1";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* ── Hero ── */}
      <section className="bg-gradient-to-b from-blue-600 to-blue-800 text-white px-5 pt-14 pb-10 text-center">
        <div className="inline-flex items-center gap-2 bg-white/20 border border-white/30 rounded-full px-4 py-1.5 text-sm mb-6">
          📚 설탭 온라인 스터디룸
        </div>
        <h1 className="text-4xl font-black leading-tight tracking-tight mb-3">
          함께 집중하면<br />더 잘 되니까 ✨
        </h1>
        <p className="text-blue-100 text-base mb-1">2026년 6월 22일 ~ 7월 3일 · 총 2주</p>

        <div className="flex flex-col gap-2 mt-4 mb-8">
          <div className="bg-white/15 rounded-xl px-4 py-3 text-sm">
            <span className="font-bold text-white">📅 평일 (월~금)</span>
            <span className="text-blue-100 ml-2">오후 6:00 ~ 11:00</span>
          </div>
          <div className="bg-white/15 rounded-xl px-4 py-3 text-sm">
            <span className="font-bold text-white">🗓️ 주말 (토~일)</span>
            <span className="text-blue-100 ml-2">오전 9:00 ~ 오후 10:00</span>
          </div>
        </div>

        <a
          href={ZOOM_MEETING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 bg-white text-blue-700 font-black text-xl w-full py-5 rounded-2xl shadow-lg active:scale-95 transition-transform"
        >
          💻 줌 스터디 참여하기!
        </a>
        <a
          href="https://aitutor.seoltab.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-white/20 border border-white/40 text-white font-bold text-base w-full py-4 rounded-2xl mt-3 active:scale-95 transition-transform"
        >
          🤖 AI 튜터 이용하기
        </a>
      </section>

      <div className="px-4 py-8 space-y-10 max-w-lg mx-auto">

        {/* ── 운영 시간 요약 ── */}
        <section className="bg-blue-50 border border-blue-200 rounded-2xl p-5">
          <p className="text-blue-800 font-black text-base mb-3">⏰ 운영 시간</p>
          <div className="space-y-2.5">
            <div className="flex justify-between items-center">
              <span className="text-slate-700 font-medium text-base">월요일 ~ 금요일</span>
              <span className="text-blue-700 font-bold text-base">오후 6:00 ~ 11:00</span>
            </div>
            <div className="h-px bg-blue-200" />
            <div className="flex justify-between items-center">
              <span className="text-slate-700 font-medium text-base">토요일 ~ 일요일</span>
              <span className="text-blue-700 font-bold text-base">오전 9:00 ~ 오후 10:00</span>
            </div>
          </div>
          <p className="mt-3 text-blue-600 text-sm text-center">💡 편한 시간에 자유롭게 참여하세요!</p>
        </section>

        {/* ── 기본 규칙 ── */}
        <section>
          <h2 className="text-xl font-black text-slate-800 mb-4">📌 기본 스터디 규칙</h2>
          <div className="space-y-3">
            <RuleCard
              emoji="📷"
              title="카메라 ON"
              badge="필수"
              badgeColor="bg-red-100 text-red-700"
              desc="공부하는 '손'이 보이도록 카메라를 켜주세요."
            />
            <RuleCard
              emoji="🔇"
              title="음소거"
              badge="필수"
              badgeColor="bg-red-100 text-red-700"
              desc="다른 참여자의 몰입을 위해 항상 음소거를 유지합니다."
            />
          </div>
        </section>

        {/* ── 참여 방법 ── */}
        <section>
          <h2 className="text-xl font-black text-slate-800 mb-4">💻 참여 방법</h2>
          <div className="space-y-3">
            <StepCard
              step={1}
              title="Zoom 접속"
              desc="평일 오후 6~11시, 주말 오전 9시~밤 10시 중 편한 시간에 자유롭게 접속해요."
              tip="아래 '줌 스터디 참여하기!' 버튼을 누르면 바로 연결돼요!"
            />
            <StepCard
              step={2}
              title="'손' 인증"
              desc="카메라를 켜고 공부하는 손과 교재(노트)가 보이도록 각도를 조절해요."
              tip="핸드폰을 가로로 세워두면 손이 더 잘 찍혀요! 얼굴은 안 나와도 돼요 😊"
            />
            <StepCard
              step={3}
              title="몰입 시작! 🔥"
              desc="음소거 유지하면서 나만의 집중 시간을 시작해요."
            />
          </div>

          <a
            href={ZOOM_MEETING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-blue-600 text-white font-black text-xl w-full py-5 rounded-2xl shadow-md mt-6 active:scale-95 transition-transform"
          >
            💻 줌 스터디 참여하기!
          </a>
        </section>

        {/* ── Zoom 설치 가이드 ── */}
        <section>
          <h2 className="text-xl font-black text-slate-800 mb-1">🔧 Zoom 세팅 가이드</h2>
          <p className="text-slate-500 text-sm mb-4">처음이라도 5분이면 OK! 따라해보세요 👇</p>
          <div className="space-y-3">
            <SetupStep
              step="01"
              title="Zoom 앱 설치"
              items={[
                "App Store(아이폰) 또는 Play 스토어(안드로이드)에서 'Zoom' 검색",
                "'ZOOM Cloud Meetings' 앱 설치 후 실행",
              ]}
            />
            <SetupStep
              step="02"
              title="스터디룸 입장"
              items={[
                "페이지 위 또는 아래의 '줌 스터디 참여하기!' 버튼 클릭",
                "앱이 자동으로 열리면 이름 입력 후 '참가' 버튼 터치",
              ]}
            />
            <SetupStep
              step="03"
              title="카메라 세팅 — 손 인증"
              items={[
                "입장 후 화면 하단 📹 카메라 아이콘을 눌러 카메라 켜기",
                "핸드폰을 가로로 돌려서 공부하는 손 + 교재가 보이게 세팅",
                "얼굴이 나오지 않아도 OK! 손과 책상만 보이면 돼요",
              ]}
            />
            <SetupStep
              step="04"
              title="음소거 확인"
              items={[
                "입장 직후 화면 왼쪽 아래 🎤 마이크 아이콘 터치",
                "마이크에 빨간 X 표시 → 음소거 완료!",
                "스터디 내내 음소거 유지해 주세요 🙏",
              ]}
            />
          </div>
        </section>

        {/* ── 하단 CTA ── */}
        <section className="bg-gradient-to-b from-blue-600 to-blue-800 rounded-3xl p-7 text-white text-center">
          <p className="text-2xl font-black mb-1">지금 바로 시작해요! 🚀</p>
          <p className="text-blue-200 text-sm mb-6">오늘도 함께 집중하는 설탭 스터디룸에서 만나요</p>
          <a
            href={ZOOM_MEETING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-white text-blue-700 font-black text-xl w-full py-5 rounded-2xl shadow-lg active:scale-95 transition-transform"
          >
            💻 줌 스터디 참여하기!
          </a>
        </section>

        <footer className="text-center text-slate-400 text-sm pb-4">
          © 2026 설탭 줌스터디
        </footer>
      </div>

      {/* ── 하단 고정 버튼 (항상 보임) ── */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-t border-slate-200 px-4 py-3 z-50">
        <a
          href={ZOOM_MEETING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-blue-600 text-white font-black text-lg w-full py-4 rounded-xl shadow active:scale-95 transition-transform"
        >
          💻 줌 스터디 참여하기!
        </a>
      </div>
      {/* 하단 고정 버튼 높이만큼 여백 */}
      <div className="h-20" />

    </main>
  );
}

/* ── 재사용 컴포넌트 ── */

function RuleCard({
  emoji, title, badge, badgeColor, desc,
}: {
  emoji: string; title: string; badge: string; badgeColor: string; desc: string;
}) {
  return (
    <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm flex gap-4 items-start">
      <span className="text-3xl mt-0.5">{emoji}</span>
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1.5">
          <p className="font-black text-slate-800 text-base">{title}</p>
          <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${badgeColor}`}>{badge}</span>
        </div>
        <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function StepCard({
  step, title, desc, tip,
}: {
  step: number; title: string; desc: string; tip?: string;
}) {
  return (
    <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm flex gap-4">
      <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-black text-base flex items-center justify-center flex-shrink-0 mt-0.5">
        {step}
      </div>
      <div className="flex-1">
        <p className="font-black text-slate-800 text-base mb-1.5">{title}</p>
        <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
        {tip && (
          <p className="mt-2.5 text-blue-700 text-sm bg-blue-50 rounded-xl px-4 py-2.5 leading-relaxed">
            💡 {tip}
          </p>
        )}
      </div>
    </div>
  );
}

function SetupStep({
  step, title, items,
}: {
  step: string; title: string; items: string[];
}) {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
      <div className="bg-slate-800 text-white px-5 py-3.5 flex items-center gap-3">
        <span className="text-xs font-bold text-slate-400">STEP</span>
        <span className="text-lg font-black">{step}</span>
        <span className="font-bold text-sm">{title}</span>
      </div>
      <ul className="px-5 py-4 space-y-2.5">
        {items.map((item, i) => (
          <li key={i} className="flex gap-3 text-sm text-slate-700 leading-relaxed">
            <span className="text-blue-500 font-black flex-shrink-0 mt-0.5">›</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

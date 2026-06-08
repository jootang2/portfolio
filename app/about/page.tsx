export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-14">
      <h1 className="text-2xl font-bold mb-1" style={{ color: 'var(--foreground)' }}>About</h1>
      <p className="text-sm mb-10" style={{ color: 'var(--muted)' }}>송주환 · Juhwan Song</p>

      <div className="space-y-6">
        <section
          className="rounded-xl p-7"
          style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
        >
          <h2
            className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: 'var(--muted)' }}
          >
            소개
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--foreground)' }}>
            AI 도구를 활용해 반복 업무를 자동화하고, 사람이 더 중요한 일에 집중할 수 있는 환경을
            만드는 데 관심이 있습니다. 비개발자 배경에서 출발해 Claude Code 기반의 멀티에이전트
            시스템 <strong style={{ color: 'var(--accent)' }}>Fivemonkeys</strong>를 직접 설계·운영하고 있습니다.
          </p>
        </section>

        <section
          className="rounded-xl p-7"
          style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
        >
          <h2
            className="text-xs font-semibold uppercase tracking-widest mb-5"
            style={{ color: 'var(--muted)' }}
          >
            역량
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: 'AI 에이전트 설계', desc: '멀티에이전트 구조 설계 및 역할 분리' },
              { label: '업무 자동화', desc: '반복 업무 식별 → 파이프라인 구축' },
              { label: 'MCP 통합', desc: 'Model Context Protocol 기반 외부 서비스 연동 (PlayMCP 등)' },
              { label: 'Next.js 웹 개발', desc: 'App Router 기반 풀스택 개발' },
              { label: '데이터 수집·분석', desc: '크롤링, CSV 정리, 트렌드 리서치' },
              { label: 'SNS 자동화', desc: '멀티플랫폼 콘텐츠 생성·게시 파이프라인' },
              { label: '시스템 운영', desc: '에이전트 오케스트레이션 및 결과 검증' },
            ].map((item) => (
              <div
                key={item.label}
                className="p-4 rounded-lg"
                style={{ background: 'rgba(148,163,184,0.06)', border: '1px solid var(--border)' }}
              >
                <p className="font-medium text-sm mb-0.5" style={{ color: 'var(--foreground)' }}>
                  {item.label}
                </p>
                <p className="text-xs" style={{ color: 'var(--muted)' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          className="rounded-xl p-7"
          style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
        >
          <h2
            className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: 'var(--muted)' }}
          >
            기술 스택
          </h2>
          <div className="flex flex-wrap gap-2">
            {['Claude Code', 'MCP (Model Context Protocol)', 'Next.js 15', 'TypeScript', 'Tailwind CSS', 'Python', 'Node.js', 'Vercel'].map(
              (tech) => (
                <span
                  key={tech}
                  className="text-xs px-3 py-1.5 rounded-full"
                  style={{
                    color: 'var(--muted)',
                    background: 'rgba(148,163,184,0.08)',
                    border: '1px solid var(--border)',
                  }}
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </section>
      </div>
    </div>
  )
}

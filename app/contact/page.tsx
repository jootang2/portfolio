export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-14">
      <h1 className="text-2xl font-bold mb-1" style={{ color: 'var(--foreground)' }}>Contact</h1>
      <p className="text-sm mb-10" style={{ color: 'var(--muted)' }}>함께할 일이 있다면 편하게 연락 주세요.</p>

      <div
        className="rounded-xl p-7 space-y-6"
        style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
      >
        <div>
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-2"
            style={{ color: 'var(--muted)' }}
          >
            Email
          </p>
          <a
            href="mailto:joohwan.song15b@gmail.com"
            className="text-base font-medium transition-colors hover:opacity-80"
            style={{ color: 'var(--accent)' }}
          >
            joohwan.song15b@gmail.com
          </a>
        </div>
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.5rem' }}>
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-2"
            style={{ color: 'var(--muted)' }}
          >
            Phone
          </p>
          <a
            href="tel:01023726804"
            className="text-base font-medium transition-colors hover:opacity-80"
            style={{ color: 'var(--accent)' }}
          >
            010-2372-6804
          </a>
        </div>
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.5rem' }}>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
            AI 자동화 시스템 구축, 업무 프로세스 개선, 협업 제안 등 어떤 주제든 환영합니다.
          </p>
        </div>
      </div>
    </div>
  )
}

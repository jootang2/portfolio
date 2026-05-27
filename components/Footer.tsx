export default function Footer() {
  return (
    <footer className="mt-auto" style={{ borderTop: '1px solid var(--border)', background: 'var(--card)' }}>
      <div className="max-w-5xl mx-auto px-6 py-6 flex items-center justify-between text-sm" style={{ color: 'var(--muted)' }}>
        <span>© 2025 Juhwan Song</span>
        <a
          href="mailto:joohwan.song15b@gmail.com"
          className="transition-colors hover:text-white"
          style={{ color: 'var(--muted)' }}
        >
          joohwan.song15b@gmail.com
        </a>
      </div>
    </footer>
  )
}

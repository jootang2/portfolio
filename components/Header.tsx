import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-50" style={{ background: 'var(--card)', borderBottom: '1px solid var(--border)' }}>
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight text-sm" style={{ color: 'var(--foreground)' }}>
          Juhwan Song
        </Link>
        <nav className="flex items-center gap-5 text-sm" style={{ color: 'var(--muted)' }}>
          <Link href="/#projects" className="transition-colors hover:text-white" style={{ color: 'var(--muted)' }}>
            Projects
          </Link>
          <Link href="/about" className="transition-colors hover:text-white" style={{ color: 'var(--muted)' }}>
            About
          </Link>
          <Link
            href="/contact"
            className="px-4 py-1.5 rounded-full text-sm font-medium transition-colors"
            style={{ background: 'var(--accent)', color: '#0f172a' }}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}

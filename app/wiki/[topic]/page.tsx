import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getWikiTopic, wikiTopics } from '@/lib/wiki'

export function generateStaticParams() {
  return wikiTopics.map((t) => ({ topic: t.slug }))
}

export default async function WikiTopicPage({ params }: { params: Promise<{ topic: string }> }) {
  const { topic } = await params
  const data = getWikiTopic(topic)
  if (!data) notFound()

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <Link
        href="/#wiki"
        className="text-sm mb-8 inline-block"
        style={{ color: 'var(--muted)' }}
      >
        ← Knowledge Base
      </Link>

      <div className="mb-10">
        <div className="text-4xl mb-4">{data.icon}</div>
        <h1 className="text-3xl font-bold mb-3" style={{ color: 'var(--foreground)' }}>
          {data.title}
        </h1>
        <p className="text-base mb-5" style={{ color: 'var(--muted)' }}>
          {data.tagline}
        </p>
        <div className="flex flex-wrap gap-2">
          {data.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-full"
              style={{
                background: 'var(--card)',
                border: '1px solid var(--border)',
                color: 'var(--muted)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div
        className="mb-10 p-5 rounded-xl"
        style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
      >
        <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
          {data.overview}
        </p>
      </div>

      <div className="space-y-10">
        {data.sections.map((section, i) => {
          if (section.type === 'text') {
            return (
              <div key={i}>
                <h2
                  className="text-xs font-semibold uppercase tracking-widest mb-4"
                  style={{ color: 'var(--accent)' }}
                >
                  {section.heading}
                </h2>
                <p
                  className="text-sm leading-relaxed whitespace-pre-line"
                  style={{ color: 'var(--muted)' }}
                >
                  {section.body}
                </p>
              </div>
            )
          }

          if (section.type === 'items') {
            return (
              <div key={i}>
                <h2
                  className="text-xs font-semibold uppercase tracking-widest mb-4"
                  style={{ color: 'var(--accent)' }}
                >
                  {section.heading}
                </h2>
                <div className="space-y-0">
                  {section.items.map((item) => (
                    <div
                      key={item.label}
                      className="flex gap-4 py-3"
                      style={{ borderBottom: '1px solid var(--border)' }}
                    >
                      <span
                        className="text-sm font-mono font-semibold shrink-0"
                        style={{ color: 'var(--foreground)', minWidth: '160px' }}
                      >
                        {item.label}
                      </span>
                      <span className="text-sm" style={{ color: 'var(--muted)' }}>
                        {item.description}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )
          }

          if (section.type === 'timeline') {
            return (
              <div key={i}>
                <h2
                  className="text-xs font-semibold uppercase tracking-widest mb-4"
                  style={{ color: 'var(--accent)' }}
                >
                  {section.heading}
                </h2>
                <div className="space-y-3">
                  {section.entries.map((entry, j) => (
                    <div
                      key={j}
                      className="p-4 rounded-xl"
                      style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-mono" style={{ color: 'var(--muted)' }}>
                          {entry.date}
                        </span>
                        <span
                          className="text-xs px-2 py-0.5 rounded-full font-medium"
                          style={{ background: 'var(--accent)', color: '#0f172a' }}
                        >
                          {entry.status}
                        </span>
                      </div>
                      <p className="text-sm leading-relaxed mb-2" style={{ color: 'var(--foreground)' }}>
                        {entry.summary}
                      </p>
                      {entry.evidence && (
                        <p className="text-xs font-mono" style={{ color: 'var(--muted)' }}>
                          📎 {entry.evidence}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )
          }

          if (section.type === 'rules') {
            return (
              <div key={i}>
                <h2
                  className="text-xs font-semibold uppercase tracking-widest mb-4"
                  style={{ color: 'var(--accent)' }}
                >
                  {section.heading}
                </h2>
                <div className="space-y-0">
                  {section.rules.map((rule, j) => (
                    <div
                      key={j}
                      className="flex gap-4 py-3 items-start"
                      style={{ borderBottom: '1px solid var(--border)' }}
                    >
                      <span
                        className="text-xs font-bold shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
                        style={{ background: 'var(--accent)', color: '#0f172a' }}
                      >
                        {j + 1}
                      </span>
                      <span className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                        {rule}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )
          }

          return null
        })}
      </div>
    </div>
  )
}

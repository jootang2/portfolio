import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getProject, projects } from '@/lib/projects'
import ScreenshotGallery from '@/components/ScreenshotGallery'

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  return (
    <div className="max-w-3xl mx-auto px-6 py-14">
      <Link
        href="/"
        className="text-xs font-medium mb-8 inline-block transition-colors hover:opacity-80"
        style={{ color: 'var(--accent)' }}
      >
        ← 전체 프로젝트
      </Link>

      <div className="flex items-center gap-2.5 mb-4">
        <span
          className="text-xs font-medium px-2.5 py-1 rounded-full"
          style={{ color: 'var(--accent)', background: 'rgba(96,165,250,0.1)' }}
        >
          {project.agent}
        </span>
        {project.status === 'in-progress' && (
          <span
            className="text-xs font-medium px-2.5 py-1 rounded-full"
            style={{
              color: '#f59e0b',
              background: 'rgba(245,158,11,0.1)',
              border: '1px solid rgba(245,158,11,0.3)',
            }}
          >
            작업 진행중
          </span>
        )}
      </div>

      <h1 className="text-2xl font-bold mb-2" style={{ color: 'var(--foreground)' }}>
        {project.title}
      </h1>
      <p className="text-sm mb-8 leading-relaxed" style={{ color: 'var(--muted)' }}>
        {project.tagline}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-10">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-0.5 rounded-full"
            style={{
              color: 'var(--muted)',
              background: 'rgba(148,163,184,0.08)',
              border: '1px solid var(--border)',
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="space-y-6">
        {/* 스크린샷 */}
        <section>
          {project.screenshots && project.screenshots.length > 0 ? (
            <ScreenshotGallery
              screenshots={project.screenshots}
              projectTitle={project.title}
            />
          ) : (
            <div
              className="w-full h-48 rounded-xl flex items-center justify-center"
              style={{
                border: '1.5px dashed var(--border)',
                background: 'var(--card)',
              }}
            >
              <span className="text-sm" style={{ color: 'var(--muted)' }}>
                스크린샷 준비 중
              </span>
            </div>
          )}
        </section>

        {/* 문제 */}
        <section>
          <h2
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: 'var(--muted)' }}
          >
            Problem
          </h2>
          <div
            className="rounded-xl p-6"
            style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
          >
            <p className="text-sm leading-relaxed" style={{ color: 'var(--foreground)' }}>
              {project.problem}
            </p>
          </div>
        </section>

        {/* 과정 */}
        <section>
          <h2
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: 'var(--muted)' }}
          >
            Process
          </h2>
          <div
            className="rounded-xl overflow-hidden"
            style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
          >
            {project.process.map((step, i) => (
              <div
                key={i}
                className="p-5 flex gap-4"
                style={i > 0 ? { borderTop: '1px solid var(--border)' } : undefined}
              >
                <span
                  className="flex-shrink-0 w-6 h-6 rounded-full text-xs font-semibold flex items-center justify-center"
                  style={{ background: 'rgba(96,165,250,0.15)', color: 'var(--accent)' }}
                >
                  {i + 1}
                </span>
                <div>
                  <p className="font-medium text-sm mb-1" style={{ color: 'var(--foreground)' }}>
                    {step.label}
                  </p>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--muted)' }}>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 챌린지 */}
        {project.challenges && project.challenges.length > 0 && (
          <section>
            <h2
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--muted)' }}
            >
              Challenges
            </h2>
            <div className="space-y-3">
              {project.challenges.map((challenge, i) => (
                <div
                  key={i}
                  className="rounded-xl overflow-hidden"
                  style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
                >
                  <div
                    className="px-5 py-4"
                    style={{ borderBottom: '1px solid var(--border)' }}
                  >
                    <p
                      className="text-xs font-semibold uppercase tracking-widest mb-2"
                      style={{ color: 'var(--muted)' }}
                    >
                      어려웠던 점
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--foreground)' }}>
                      {challenge.problem}
                    </p>
                  </div>
                  <div className="px-5 py-4">
                    <p
                      className="text-xs font-semibold uppercase tracking-widest mb-2"
                      style={{ color: 'var(--accent)' }}
                    >
                      해결
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--foreground)' }}>
                      {challenge.solution}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 결과 */}
        <section>
          <h2
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: 'var(--muted)' }}
          >
            Result
          </h2>
          <div
            className="rounded-xl p-6"
            style={{
              background: 'rgba(96,165,250,0.05)',
              border: '1px solid rgba(96,165,250,0.2)',
            }}
          >
            <p className="text-sm leading-relaxed" style={{ color: 'var(--foreground)' }}>
              {project.result}
            </p>
          </div>
        </section>

        {/* 관련 게시글 */}
        {project.links && project.links.length > 0 && (
          <section>
            <h2
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--muted)' }}
            >
              Related Posts
            </h2>
            <div
              className="rounded-xl overflow-hidden"
              style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
            >
              {project.links.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-5 py-4 transition-opacity hover:opacity-70"
                  style={i > 0 ? { borderTop: '1px solid var(--border)' } : undefined}
                >
                  <span className="text-sm" style={{ color: 'var(--foreground)' }}>
                    {link.label}
                  </span>
                  <span className="text-xs ml-4 flex-shrink-0" style={{ color: 'var(--accent)' }}>
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}

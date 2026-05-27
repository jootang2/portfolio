import Image from 'next/image'
import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/lib/projects'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section style={{ borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-5xl mx-auto px-6 py-32">
          <div className="flex flex-col-reverse sm:flex-row items-center gap-10 sm:gap-16">
            {/* Text */}
            <div className="flex-1">
              <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'var(--accent)' }}>
                AI Automation Engineer
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-5" style={{ color: 'var(--foreground)' }}>
                안녕하세요.<br />송주환입니다.
              </h1>
              <p className="text-base leading-relaxed max-w-xl" style={{ color: 'var(--muted)' }}>
                반복 업무를 AI 에이전트 팀에 위임하는 자동화 시스템을 설계하고 운영합니다.
                5인 AI 팀{' '}
                <strong style={{ color: 'var(--foreground)' }}>Fivemonkeys</strong>를 직접 구축해
                포스팅, 채용 리서치, 사이트 운영, 강의 관리를 자동화하고 있습니다.
              </p>
              <div className="flex gap-3 mt-7">
                <a
                  href="#projects"
                  className="px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
                  style={{ background: 'var(--accent)', color: '#0f172a' }}
                >
                  프로젝트 보기
                </a>
                <a
                  href="/about"
                  className="px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
                  style={{ border: '1px solid var(--border)', color: 'var(--muted)' }}
                >
                  소개
                </a>
              </div>
            </div>
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <div className="relative w-44 h-44 sm:w-56 sm:h-56 rounded-full overflow-hidden ring-2" style={{ ringColor: 'var(--border)' }}>
                <Image
                  src="/images/Juhwan.jpg"
                  alt="송주환 프로필 사진"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-xl font-bold mb-1" style={{ color: 'var(--foreground)' }}>
          Projects
        </h2>
        <p className="text-sm mb-8" style={{ color: 'var(--muted)' }}>
          Fivemonkeys AI 팀의 역할별 자동화 케이스
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </>
  )
}

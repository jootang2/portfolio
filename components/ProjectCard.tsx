'use client'

import Link from 'next/link'
import { Project } from '@/lib/projects'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block rounded-xl transition-all p-5"
      style={{
        background: 'var(--card)',
        border: '1px solid var(--border)',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent)'
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'
      }}
    >
      <div className="flex items-start justify-between mb-3">
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
      <h3
        className="text-base font-semibold mb-2 transition-colors group-hover:text-blue-400"
        style={{ color: 'var(--foreground)' }}
      >
        {project.title}
      </h3>
      <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--muted)' }}>
        {project.tagline}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-0.5 rounded-full"
            style={{ color: 'var(--muted)', background: 'rgba(148,163,184,0.1)', border: '1px solid var(--border)' }}
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  )
}

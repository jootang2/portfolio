'use client'

import { useState, useEffect, useCallback } from 'react'

interface ScreenshotGalleryProps {
  screenshots: string[]
  projectTitle: string
}

export default function ScreenshotGallery({ screenshots, projectTitle }: ScreenshotGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const closeLightbox = useCallback(() => setActiveIndex(null), [])

  const goPrev = useCallback(() => {
    setActiveIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : prev))
  }, [])

  const goNext = useCallback(() => {
    setActiveIndex((prev) => (prev !== null && prev < screenshots.length - 1 ? prev + 1 : prev))
  }, [screenshots.length])

  useEffect(() => {
    if (activeIndex === null) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') goPrev()
      if (e.key === 'ArrowRight') goNext()
    }

    document.addEventListener('keydown', handleKeyDown)
    // 스크롤 잠금
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [activeIndex, closeLightbox, goPrev, goNext])

  return (
    <>
      {/* 썸네일 그리드 */}
      <div className={`grid gap-3 ${screenshots.length > 1 ? 'grid-cols-2' : 'grid-cols-1'}`}>
        {screenshots.map((src, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={i}
            src={src}
            alt={`${projectTitle} 스크린샷 ${i + 1}`}
            className="w-full h-48 object-cover rounded-xl cursor-zoom-in transition-opacity hover:opacity-80"
            style={{ border: '1px solid var(--border)' }}
            onClick={() => setActiveIndex(i)}
          />
        ))}
      </div>

      {/* 라이트박스 오버레이 */}
      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(0, 0, 0, 0.85)' }}
          onClick={closeLightbox}
        >
          {/* 이미지 컨테이너 — 클릭 이벤트 버블링 차단 */}
          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 닫기 버튼 */}
            <button
              onClick={closeLightbox}
              className="absolute -top-10 right-0 flex items-center gap-1.5 text-xs font-medium transition-opacity hover:opacity-70"
              style={{ color: 'rgba(148,163,184,0.9)' }}
              aria-label="라이트박스 닫기"
            >
              <span>ESC</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>

            {/* 확대 이미지 + 좌우 화살표 래퍼 */}
            <div className="flex items-center gap-3">
              {/* 좌 화살표 */}
              {screenshots.length > 1 && (
                <button
                  onClick={(e) => { e.stopPropagation(); goPrev() }}
                  disabled={activeIndex === 0}
                  className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full transition-opacity"
                  style={{
                    background: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    color: activeIndex === 0 ? 'rgba(148,163,184,0.25)' : 'rgba(148,163,184,0.9)',
                    cursor: activeIndex === 0 ? 'not-allowed' : 'pointer',
                  }}
                  aria-label="이전 이미지"
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                    <path d="M11 4l-5 5 5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              )}

              {/* 확대 이미지 */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={screenshots[activeIndex]}
                alt={`${projectTitle} 스크린샷 ${activeIndex + 1}`}
                className="flex-1 w-full h-auto rounded-xl"
                style={{
                  border: '1px solid var(--border)',
                  maxHeight: '85vh',
                  objectFit: 'contain',
                  minWidth: 0,
                }}
              />

              {/* 우 화살표 */}
              {screenshots.length > 1 && (
                <button
                  onClick={(e) => { e.stopPropagation(); goNext() }}
                  disabled={activeIndex === screenshots.length - 1}
                  className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full transition-opacity"
                  style={{
                    background: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    color: activeIndex === screenshots.length - 1 ? 'rgba(148,163,184,0.25)' : 'rgba(148,163,184,0.9)',
                    cursor: activeIndex === screenshots.length - 1 ? 'not-allowed' : 'pointer',
                  }}
                  aria-label="다음 이미지"
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                    <path d="M7 4l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              )}
            </div>

            {/* 이미지 카운터 (복수 이미지일 때만 표시) */}
            {screenshots.length > 1 && (
              <p
                className="text-center text-xs mt-3"
                style={{ color: 'rgba(148,163,184,0.6)' }}
              >
                {activeIndex + 1} / {screenshots.length}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  )
}

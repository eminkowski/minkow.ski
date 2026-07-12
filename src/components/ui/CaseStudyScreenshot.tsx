import { useEffect, useId, useState } from 'react'
import { createPortal } from 'react-dom'
import { cn } from '../../lib/cn'
import { textClass } from '../../lib/styles'

/** Native export size for phone screenshots. */
const PHONE_SCREENSHOT_WIDTH = 720
const PHONE_SCREENSHOT_HEIGHT = 1565

interface CaseStudyScreenshotProps {
  src: string
  alt: string
  caption: string
  /** Phone screenshots stay compact; web screenshots stay full-width. */
  variant?: 'web' | 'phone'
}

export function CaseStudyScreenshot({
  src,
  alt,
  caption,
  variant = 'web',
}: CaseStudyScreenshotProps) {
  const [open, setOpen] = useState(false)
  const titleId = useId()
  const isPhone = variant === 'phone'

  useEffect(() => {
    if (!open) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <>
      <figure className={cn('flex w-full flex-col gap-2', isPhone && 'max-w-[220px]')}>
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label={`Expand screenshot: ${alt}`}
          className={cn(
            'group relative block overflow-hidden rounded-lg border border-white/[0.08] bg-white/[0.02] text-left transition-colors hover:border-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40',
            isPhone && 'mx-auto shadow-[0_12px_40px_rgba(0,0,0,0.35)]',
          )}
        >
          <img
            src={src}
            alt={alt}
            loading="lazy"
            width={isPhone ? PHONE_SCREENSHOT_WIDTH : undefined}
            height={isPhone ? PHONE_SCREENSHOT_HEIGHT : undefined}
            className={cn(
              'block bg-black/20',
              isPhone ? 'h-auto w-full object-contain' : 'h-auto w-full',
            )}
          />
          <span
            className={`pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-3 py-2 text-[11px] font-medium tracking-wide text-white/90 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100`}
          >
            Click to expand
          </span>
        </button>
        <figcaption className={`text-xs ${textClass.muted} leading-relaxed`}>{caption}</figcaption>
      </figure>

      {open
        ? createPortal(
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby={titleId}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-6 sm:p-10 lg:p-12"
              onClick={() => setOpen(false)}
            >
              <button
                type="button"
                onClick={() => setOpen(false)}
                className={`absolute top-6 right-6 sm:top-8 sm:right-8 rounded-md border border-white/15 bg-black/40 px-3 py-1.5 text-sm ${textClass.secondary} hover:bg-black/60`}
              >
                Close
              </button>
              <figure
                className={cn(
                  'flex max-h-full max-w-full flex-col gap-3',
                  isPhone ? 'w-full max-w-[390px]' : 'w-full max-w-5xl',
                )}
                onClick={event => event.stopPropagation()}
              >
                <div className="rounded-lg border border-white/10 bg-black p-4 sm:p-6">
                  <img
                    src={src}
                    alt={alt}
                    width={isPhone ? PHONE_SCREENSHOT_WIDTH : undefined}
                    height={isPhone ? PHONE_SCREENSHOT_HEIGHT : undefined}
                    className="max-h-[min(78dvh,860px)] w-full object-contain"
                  />
                </div>
                <figcaption id={titleId} className={`text-sm ${textClass.muted} leading-relaxed`}>
                  {caption}
                </figcaption>
              </figure>
            </div>,
            document.body,
          )
        : null}
    </>
  )
}

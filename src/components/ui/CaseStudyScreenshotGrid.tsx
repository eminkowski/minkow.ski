import { CaseStudyScreenshot } from './CaseStudyScreenshot'

interface Screenshot {
  src: string
  alt: string
  caption: string
}

interface CaseStudyScreenshotGridProps {
  screenshots: readonly Screenshot[]
  variant?: 'web' | 'phone'
}

export function CaseStudyScreenshotGrid({
  screenshots,
  variant = 'web',
}: CaseStudyScreenshotGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 justify-items-center sm:justify-items-start">
      {screenshots.map(shot => (
        <CaseStudyScreenshot key={shot.src} variant={variant} {...shot} />
      ))}
    </div>
  )
}

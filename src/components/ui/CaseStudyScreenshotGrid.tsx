import { CaseStudyScreenshot } from './CaseStudyScreenshot'

interface Screenshot {
  src: string
  alt: string
  caption: string
}

interface CaseStudyScreenshotGridProps {
  screenshots: readonly Screenshot[]
  variant?: 'web' | 'phone'
  /** Hero + paired follow-ups (support desk lifecycle). Default: equal columns. */
  layout?: 'equal' | 'heroSequence'
}

export function CaseStudyScreenshotGrid({
  screenshots,
  variant = 'web',
  layout = 'equal',
}: CaseStudyScreenshotGridProps) {
  if (layout === 'heroSequence' && screenshots.length >= 3) {
    const [hero, ...rest] = screenshots
    const pair = rest.slice(0, 2)

    return (
      <div className="flex w-full flex-col gap-6">
        <CaseStudyScreenshot key={hero.src} variant={variant} {...hero} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {pair.map(shot => (
            <CaseStudyScreenshot key={shot.src} variant={variant} {...shot} />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 justify-items-center sm:justify-items-start">
      {screenshots.map(shot => (
        <CaseStudyScreenshot key={shot.src} variant={variant} {...shot} />
      ))}
    </div>
  )
}

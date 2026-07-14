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

function chunkPairs<T>(items: readonly T[]): T[][] {
  const pairs: T[][] = []
  for (let i = 0; i < items.length; i += 2) {
    pairs.push(items.slice(i, i + 2))
  }
  return pairs
}

export function CaseStudyScreenshotGrid({
  screenshots,
  variant = 'web',
  layout = 'equal',
}: CaseStudyScreenshotGridProps) {
  if (layout === 'heroSequence' && screenshots.length >= 3) {
    const [hero, ...rest] = screenshots

    return (
      <div className="flex w-full flex-col gap-6">
        <CaseStudyScreenshot key={hero.src} variant={variant} {...hero} />
        {chunkPairs(rest).map(pair => (
          <div
            key={pair.map(shot => shot.src).join('|')}
            className={
              pair.length === 1
                ? 'grid grid-cols-1 gap-6 sm:max-w-[calc(50%-0.75rem)]'
                : 'grid grid-cols-1 sm:grid-cols-2 gap-6'
            }
          >
            {pair.map(shot => (
              <CaseStudyScreenshot key={shot.src} variant={variant} {...shot} />
            ))}
          </div>
        ))}
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

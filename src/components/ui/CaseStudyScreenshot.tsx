import { textClass } from '../../lib/styles'

interface CaseStudyScreenshotProps {
  src: string
  alt: string
  caption: string
}

export function CaseStudyScreenshot({ src, alt, caption }: CaseStudyScreenshotProps) {
  return (
    <figure className="flex flex-col gap-2">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full rounded-lg border border-white/[0.08] bg-white/[0.02]"
      />
      <figcaption className={`text-xs ${textClass.muted} leading-relaxed`}>{caption}</figcaption>
    </figure>
  )
}

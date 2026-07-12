import { textClass } from '../lib/styles'

interface CaseStudyIntroProps {
  plainEnglish: string
  technicalSummary: string
}

export function CaseStudyIntro({ plainEnglish, technicalSummary }: CaseStudyIntroProps) {
  return (
    <div className="flex flex-col gap-3">
      <p className={`text-sm ${textClass.secondary} leading-relaxed`}>{plainEnglish}</p>
      <div className="flex flex-col gap-1.5">
        <p className={`text-sm ${textClass.link} font-medium`}>Technical summary</p>
        <p className={`text-sm ${textClass.muted} leading-relaxed`}>{technicalSummary}</p>
      </div>
    </div>
  )
}

import { Card, CaseStudyScreenshotGrid, Section } from '../components/ui'
import { CaseStudyPage } from '../components/CaseStudyPage'
import { SupportDeskDiagram } from '../components/SupportDeskDiagram'
import { SUPPORT_DESK_CASE_STUDY } from '../data/support-desk-case-study'

export function ProjectsSupportDesk() {
  const study = SUPPORT_DESK_CASE_STUDY

  return (
    <CaseStudyPage
      study={study}
      diagram={<SupportDeskDiagram />}
      prepend={
        <Card>
          <Section title="Screenshots">
            <CaseStudyScreenshotGrid screenshots={study.screenshots} />
          </Section>
        </Card>
      }
    />
  )
}

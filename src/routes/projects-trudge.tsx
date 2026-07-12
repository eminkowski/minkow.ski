import { Card, CaseStudyScreenshotGrid, Section } from '../components/ui'
import { ArchitectureDiagram } from '../components/ArchitectureDiagram'
import { CaseStudyPage } from '../components/CaseStudyPage'
import { TRUDGE_CASE_STUDY } from '../data/trudge-case-study'

export function ProjectsTrudge() {
  const study = TRUDGE_CASE_STUDY

  return (
    <CaseStudyPage
      study={study}
      diagram={<ArchitectureDiagram />}
      prepend={
        <Card>
          <Section title="Screenshots">
            <CaseStudyScreenshotGrid screenshots={study.screenshots} variant="phone" />
          </Section>
        </Card>
      }
    />
  )
}

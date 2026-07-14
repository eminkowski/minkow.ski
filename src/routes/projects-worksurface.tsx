import { Card, CaseStudyScreenshotGrid, Section } from '../components/ui'
import { CaseStudyPage } from '../components/CaseStudyPage'
import { WorksurfaceDiagram } from '../components/WorksurfaceDiagram'
import { WORKSURFACE_CASE_STUDY } from '../data/worksurface-case-study'

export function ProjectsWorksurface() {
  const study = WORKSURFACE_CASE_STUDY

  return (
    <CaseStudyPage
      study={study}
      diagram={<WorksurfaceDiagram />}
      prepend={
        <Card>
          <Section title="Screenshots">
            <CaseStudyScreenshotGrid
              screenshots={study.screenshots}
              layout="heroSequence"
            />
          </Section>
        </Card>
      }
    />
  )
}

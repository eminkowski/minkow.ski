import { CaseStudyPage } from '../components/CaseStudyPage'
import { TemporalCaseflowDiagram } from '../components/TemporalCaseflowDiagram'
import { TemporalCaseflowPrepend } from '../components/TemporalCaseflowPrepend'
import { TEMPORAL_CASEFLOW_CASE_STUDY } from '../data/temporal-caseflow-case-study'

export function ProjectsTemporalCaseflow() {
  return (
    <CaseStudyPage
      study={TEMPORAL_CASEFLOW_CASE_STUDY}
      diagram={<TemporalCaseflowDiagram />}
      prepend={<TemporalCaseflowPrepend />}
    />
  )
}

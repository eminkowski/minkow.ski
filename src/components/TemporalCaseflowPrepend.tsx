import { BodyText, Card, Section } from './ui'
import { TEMPORAL_CASEFLOW_CASE_STUDY } from '../data/temporal-caseflow-case-study'

const failureStory = TEMPORAL_CASEFLOW_CASE_STUDY.summary[1]

export function TemporalCaseflowPrepend() {
  return (
    <Card>
      <Section title="Why durability matters here">
        <BodyText>{failureStory}</BodyText>
      </Section>
    </Card>
  )
}

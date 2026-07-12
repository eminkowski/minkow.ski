import { AgentEvalGuardDiagram } from './AgentEvalGuardDiagram'
import { BodyText, Card, Section } from './ui'
import { AGENT_EVAL_HARNESS_CASE_STUDY } from '../data/agent-eval-harness-case-study'
import { textClass } from '../lib/styles'

const { prepend, exampleOutput } = AGENT_EVAL_HARNESS_CASE_STUDY

export function AgentEvalPrepend() {
  return (
    <>
      <Card>
        <Section title={prepend.guardSection.title}>
          <AgentEvalGuardDiagram />
          <BodyText>{prepend.guardSection.body}</BodyText>
        </Section>
      </Card>

      <Card>
        <Section title={prepend.exampleSection.title}>
          <pre
            className={`text-xs sm:text-sm font-mono ${textClass.secondary} leading-relaxed p-4 rounded-lg border border-white/[0.06] bg-black/30 overflow-x-auto`}
          >
            {exampleOutput}
          </pre>
          <BodyText>{prepend.exampleSection.body}</BodyText>
        </Section>
      </Card>
    </>
  )
}

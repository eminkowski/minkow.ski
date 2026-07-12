import { AgentEvalHarnessDiagram } from '../components/AgentEvalHarnessDiagram'
import { AgentEvalPrepend } from '../components/AgentEvalPrepend'
import { CaseStudyPage } from '../components/CaseStudyPage'
import { AGENT_EVAL_HARNESS_CASE_STUDY } from '../data/agent-eval-harness-case-study'

export function ProjectsAgentEvalHarness() {
  return (
    <CaseStudyPage
      study={AGENT_EVAL_HARNESS_CASE_STUDY}
      diagram={<AgentEvalHarnessDiagram />}
      prepend={<AgentEvalPrepend />}
    />
  )
}

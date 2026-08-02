import { DiagramConnector, DiagramNode, diagramShellClass } from './ui/DiagramFlow'

export function TemporalCaseflowDiagram() {
  return (
    <div className={diagramShellClass}>
      <div className="flex flex-col gap-2 sm:hidden">
        <DiagramNode title="Fastify API" subtitle="start · signal · query" />
        <DiagramConnector label="workflow commands" />
        <DiagramNode title="Temporal" subtitle="durable history" />
        <DiagramConnector label="task queue" />
        <DiagramNode title="Worker" subtitle="workflows + activities" />
        <DiagramConnector label="HTTP side effects" />
        <DiagramNode title="Case store" subtitle="in-memory stand-in" />
      </div>

      <div className="hidden sm:flex sm:flex-col gap-2">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          <DiagramNode title="Fastify API" subtitle="start · signal · query" />
          <DiagramNode title="Temporal Server" subtitle="history · timers · UI" />
          <DiagramNode title="Worker" subtitle="caseflow task queue" />
        </div>
        <DiagramConnector label="triage → wait for approve/reject or SLA → resolve / close / escalate" />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          <DiagramNode title="Retries" subtitle="flaky triage activity" />
          <DiagramNode title="Signals" subtitle="human decision" />
          <DiagramNode title="Query" subtitle="live case status" />
        </div>
      </div>
    </div>
  )
}

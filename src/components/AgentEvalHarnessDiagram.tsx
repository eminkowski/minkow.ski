import { LinkArrow } from './ui/LinkArrow'
import { DiagramConnector, DiagramNode, diagramShellClass } from './ui/DiagramFlow'
import { textClass } from '../lib/styles'

export function AgentEvalHarnessDiagram() {
  return (
    <div className={diagramShellClass}>
      <div className="flex flex-col gap-2 sm:hidden">
        <DiagramNode title="Support Desk MCP" subtitle="tools + audit log" />
        <DiagramConnector label="import-audit or record" />
        <DiagramNode title="trace JSON" subtitle="ordered tool steps" />
        <DiagramConnector label="eval + replay" />
        <DiagramNode title="CI gate" subtitle="structural assertions" />
      </div>

      <div className="hidden sm:flex sm:flex-col gap-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <DiagramNode title="Support Desk MCP" subtitle="audit log · MCP HTTP" />
          <DiagramNode title="ATE CLI" subtitle="import · record · eval · replay" />
        </div>
        <DiagramConnector label="normalize to trace JSON · check structure · fixture replay" />
        <div className="flex sm:flex-row sm:items-center gap-2 lg:gap-3">
          <div className="flex-1 min-w-0">
            <DiagramNode title="eval cases" subtitle="tool order · write guards · negative tests" />
          </div>
          <p className={`text-[10px] ${textClass.muted} text-center shrink-0 py-0.5`}>
            <LinkArrow kind="forward" />
          </p>
          <div className="flex-1 min-w-0">
            <DiagramNode title="CI" subtitle="offline · deterministic" />
          </div>
        </div>
      </div>
    </div>
  )
}

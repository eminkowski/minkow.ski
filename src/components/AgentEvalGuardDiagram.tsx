import { LinkArrow } from './ui/LinkArrow'
import { DiagramConnector, DiagramNode, diagramShellClass } from './ui/DiagramFlow'
import { textClass } from '../lib/styles'

export function AgentEvalGuardDiagram() {
  return (
    <div className={diagramShellClass}>
      <DiagramNode title="AI agent tries a write action" subtitle="e.g. add an internal comment" />
      <DiagramConnector label="eval checks" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <DiagramNode title="Confirmed?" subtitle="required safety step present" />
        <DiagramNode title="Wrong tool or order?" subtitle="structural assertions" />
      </div>
      <div className="flex sm:flex-row sm:items-center gap-2 lg:gap-3">
        <div className="flex-1 min-w-0">
          <DiagramNode title="PASS" subtitle="safe to ship" />
        </div>
        <p className={`text-[10px] ${textClass.muted} text-center shrink-0 py-0.5`}>
          <LinkArrow kind="forward" />
        </p>
        <div className="flex-1 min-w-0">
          <DiagramNode title="FAIL" subtitle="caught before production" />
        </div>
      </div>
    </div>
  )
}

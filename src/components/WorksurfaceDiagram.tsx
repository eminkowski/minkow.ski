import { DiagramConnector, DiagramNode, diagramShellClass } from './ui/DiagramFlow'
import { textClass } from '../lib/styles'

export function WorksurfaceDiagram() {
  return (
    <div className={diagramShellClass}>
      <div className="flex flex-col gap-2 sm:hidden">
        <DiagramNode title="Support Desk MCP" subtitle="product prototype" />
        <DiagramConnector label="extracts" />
        <DiagramNode title="Worksurface UI" subtitle="tokens · primitives · ActionReview" />
        <DiagramConnector label="composed as" />
        <DiagramNode title="Relay Operations" subtitle="docs reference product" />
        <p className={`font-mono text-[10px] ${textClass.muted} text-center pt-1`}>
          Consuming apps own routes, domain, and workspace composition
        </p>
      </div>

      <div className="hidden sm:flex sm:flex-col gap-3">
        <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-2">
          <DiagramNode title="Support Desk MCP" subtitle="working ops product" />
          <p className={`font-mono text-[10px] ${textClass.muted} text-center px-1`}>→</p>
          <DiagramNode title="Worksurface UI" subtitle="reusable package surface" />
          <p className={`font-mono text-[10px] ${textClass.muted} text-center px-1`}>→</p>
          <DiagramNode title="Relay Operations" subtitle="docs composition only" />
        </div>
        <p className={`font-mono text-[10px] ${textClass.muted} text-center`}>
          Library: tokens, primitives, Aria overlays, ActionReview + defineAction
        </p>
        <p className={`font-mono text-[10px] ${textClass.muted} text-center`}>
          Product: routes, fetching, auth, domain schemas, product-local panels
        </p>
      </div>
    </div>
  )
}

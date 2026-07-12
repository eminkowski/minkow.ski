import { LinkArrow } from './ui/LinkArrow'
import { DiagramConnector, DiagramNode, diagramShellClass } from './ui/DiagramFlow'
import { textClass } from '../lib/styles'

export function ArchitectureDiagram() {
  return (
    <div className={diagramShellClass}>
      <div className="flex flex-col gap-2 sm:hidden">
        <DiagramNode title="Mobile app" subtitle="local DB, encryption" />
        <DiagramConnector label="HTTPS · no personal plaintext" />
        <DiagramNode title="Thin API" subtitle="public data + opaque blobs" />
        <DiagramConnector label="to" />
        <DiagramNode title="PostgreSQL" />
      </div>

      <div className="hidden sm:flex sm:flex-row sm:items-center gap-2 lg:gap-3">
        <div className="flex-1 min-w-0">
          <DiagramNode title="Mobile app" subtitle="local DB, encryption" />
        </div>
        <DiagramConnector label="HTTPS · no personal plaintext" />
        <div className="flex-1 min-w-0">
          <DiagramNode title="Thin API" subtitle="public data + opaque blobs" />
        </div>
        <p className={`text-[10px] ${textClass.muted} text-center shrink-0 py-0.5`}>
          <LinkArrow kind="forward" />
        </p>
        <div className="flex-1 min-w-0">
          <DiagramNode title="PostgreSQL" />
        </div>
      </div>
    </div>
  )
}

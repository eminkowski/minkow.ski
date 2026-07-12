import { LinkArrow } from './ui/LinkArrow'
import { DiagramConnector, DiagramNode, diagramShellClass } from './ui/DiagramFlow'
import { textClass } from '../lib/styles'

export function SupportDeskDiagram() {
  return (
    <div className={diagramShellClass}>
      <div className="flex flex-col gap-2 sm:hidden">
        <DiagramNode title="Web UI" subtitle="REST /api/*" />
        <DiagramConnector label="and" />
        <DiagramNode title="MCP server" subtitle="stdio or HTTP :3002" />
        <DiagramConnector label="both call" />
        <DiagramNode title="REST API" subtitle="Fastify + Prisma" />
        <DiagramConnector label="to" />
        <DiagramNode title="PostgreSQL" />
      </div>

      <div className="hidden sm:flex sm:flex-col gap-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <DiagramNode title="Web UI" subtitle="REST /api/*" />
          <DiagramNode title="MCP client" subtitle="via MCP server" />
        </div>
        <DiagramConnector label="shared tool schemas (Zod) · one audit log" />
        <div className="flex sm:flex-row sm:items-center gap-2 lg:gap-3">
          <div className="flex-1 min-w-0">
            <DiagramNode title="REST API" subtitle="Fastify + Prisma" />
          </div>
          <p className={`text-[10px] ${textClass.muted} text-center shrink-0 py-0.5`}>
            <LinkArrow kind="forward" />
          </p>
          <div className="flex-1 min-w-0">
            <DiagramNode title="PostgreSQL" />
          </div>
        </div>
      </div>
    </div>
  )
}

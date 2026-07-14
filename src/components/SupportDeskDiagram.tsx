import { DiagramConnector, DiagramNode, diagramShellClass } from './ui/DiagramFlow'
import { textClass } from '../lib/styles'

export function SupportDeskDiagram() {
  return (
    <div className={diagramShellClass}>
      <div className="flex flex-col gap-2 sm:hidden">
        <DiagramNode title="React web UI" subtitle="REST /api/*" />
        <DiagramConnector label="and" />
        <DiagramNode title="MCP client" subtitle="via MCP server → REST" />
        <DiagramConnector label="both reach" />
        <DiagramNode title="Fastify API" subtitle="Prisma · shared Zod rules" />
        <DiagramConnector label="to" />
        <DiagramNode title="PostgreSQL" />
        <p className={`font-mono text-[10px] ${textClass.muted} text-center pt-1`}>
          One audit log for browser and MCP activity
        </p>
      </div>

      <div className="hidden sm:flex sm:flex-col gap-3">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2">
          <DiagramNode title="React web UI" subtitle="REST /api/*" />
          <p className={`font-mono text-[10px] ${textClass.muted} text-center px-1`}>and</p>
          <DiagramNode title="MCP client" subtitle="MCP server → REST /api/*" />
        </div>
        <DiagramConnector label="converge on the same API" />
        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2">
          <DiagramNode title="Fastify API" subtitle="Prisma · write guards · audit" />
          <p className={`font-mono text-[10px] ${textClass.muted} text-center`}>→</p>
          <DiagramNode title="PostgreSQL" />
        </div>
        <p className={`font-mono text-[10px] ${textClass.muted} text-center`}>
          Shared Zod schemas, business rules, and unified audit logging
        </p>
        <p className={`font-mono text-[10px] ${textClass.muted} text-center`}>
          MCP server calls REST; it does not access Postgres directly
        </p>
      </div>
    </div>
  )
}

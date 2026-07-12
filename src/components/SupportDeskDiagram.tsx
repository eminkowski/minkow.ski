import { LinkArrow } from './ui/LinkArrow'
import { textClass } from '../lib/styles'

function DiagramNode({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="w-full px-4 py-3 rounded-lg border border-white/[0.08] text-center">
      <p className={`font-mono text-xs ${textClass.link}`}>{title}</p>
      {subtitle && (
        <p className={`font-mono text-[10px] ${textClass.muted} mt-1`}>{subtitle}</p>
      )}
    </div>
  )
}

function DiagramConnector({ label }: { label: string }) {
  return (
    <p className={`font-mono text-[10px] ${textClass.muted} text-center shrink-0 py-0.5`}>
      {label}
    </p>
  )
}

export function SupportDeskDiagram() {
  return (
    <div className="flex flex-col gap-3 p-3 sm:p-4 rounded-lg border border-white/[0.06] bg-white/[0.02]">
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

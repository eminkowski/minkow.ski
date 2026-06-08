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

export function ArchitectureDiagram() {
  return (
    <div className="flex flex-col gap-3 p-3 sm:p-4 rounded-lg border border-white/[0.06] bg-white/[0.02]">
      {/* Mobile: vertical stack */}
      <div className="flex flex-col gap-2 sm:hidden">
        <DiagramNode title="Mobile app" subtitle="local DB, encryption" />
        <DiagramConnector label="HTTPS · no personal plaintext" />
        <DiagramNode title="Thin API" subtitle="public data + opaque blobs" />
        <DiagramConnector label="to" />
        <DiagramNode title="PostgreSQL" />
      </div>

      {/* Tablet / desktop: horizontal flow */}
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

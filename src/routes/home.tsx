import { ScrambleText } from '../components/ScrambleText'
import { Card, LinkCard, LinkArrow, PageGrid, TagList } from '../components/ui'
import { CAPABILITIES, HOME_LINKS, METRICS, homeTileClass } from '../data/home'
import { label, linkText, linkTextMuted, linkTitle, textClass } from '../lib/styles'
import { SITE } from '../lib/site'
import { cn } from '../lib/cn'

export function Home() {
  return (
    <PageGrid cols={3}>
      <Card className={cn('gap-4', homeTileClass('hero'))}>
        <div className="flex flex-col gap-2">
          <p className={label}>Portfolio</p>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white leading-none">
            <ScrambleText text={SITE.name} duration={1800} />
          </h1>
          <p className={`font-mono text-sm ${textClass.secondary}`}>
            {SITE.title}<span className="animate-pulse">_</span>
          </p>
        </div>
      </Card>

      <Card className={cn('justify-between', homeTileClass('status'))}>
        <p className={label}>Status</p>
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-sm text-emerald-400/90">Available for roles</span>
        </div>
      </Card>

      <LinkCard href={HOME_LINKS.github} className={homeTileClass('github')}>
        <p className={label}>GitHub</p>
        <p className={linkText}>
          {HOME_LINKS.socialHandle} <LinkArrow />
        </p>
      </LinkCard>

      <LinkCard to={HOME_LINKS.featuredRoute} className={homeTileClass('featured')}>
        <p className={label}>Featured</p>
        <p className={linkTitle}>Trudge</p>
        <p className={`text-sm ${textClass.muted} leading-relaxed`}>
          Local-first, encrypted mobile product with 950+ tests.
        </p>
        <p className={linkTextMuted}>
          Read case study <LinkArrow kind="forward" />
        </p>
      </LinkCard>

      <LinkCard to={HOME_LINKS.projectsRoute} className={homeTileClass('projects')}>
        <p className={label}>Projects</p>
        <p className={linkText}>
          View all <LinkArrow kind="forward" />
        </p>
      </LinkCard>

      <LinkCard href={HOME_LINKS.studio} className={homeTileClass('studio')}>
        <p className={label}>Studio</p>
        <p className={linkText}>
          {HOME_LINKS.studioName} <LinkArrow />
        </p>
      </LinkCard>

      <Card className={homeTileClass('capabilities')}>
        <p className={label}>Capabilities</p>
        <TagList tags={CAPABILITIES} />
      </Card>

      <Card className={homeTileClass('numbers')}>
        <p className={label}>By the numbers</p>
        <div className="flex flex-wrap gap-4 sm:gap-6">
          {METRICS.map(m => (
            <div key={m.label} className="flex flex-col gap-0.5">
              <span
                className="font-mono text-2xl font-black text-white"
                style={{ filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.2))' }}
              >
                {m.value}
              </span>
              <span className={`font-mono text-[10px] ${textClass.muted} uppercase tracking-widest`}>
                {m.label}
              </span>
            </div>
          ))}
        </div>
      </Card>

      <LinkCard href={HOME_LINKS.resume} className={homeTileClass('resume')}>
        <p className={label}>Resume</p>
        <p className={linkText}>
          View PDF <LinkArrow />
        </p>
      </LinkCard>

      <LinkCard href={HOME_LINKS.linkedin} className={homeTileClass('linkedin')}>
        <p className={label}>LinkedIn</p>
        <p className={linkText}>
          {HOME_LINKS.socialHandle} <LinkArrow />
        </p>
      </LinkCard>

      <LinkCard href={`mailto:${HOME_LINKS.email}`} className={homeTileClass('email')}>
        <p className={label}>Email</p>
        <p className={cn(linkText, 'break-all sm:break-normal')}>
          {HOME_LINKS.email} <LinkArrow />
        </p>
      </LinkCard>
    </PageGrid>
  )
}

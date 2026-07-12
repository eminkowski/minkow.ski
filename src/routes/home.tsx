import { ScrambleText } from '../components/ScrambleText'
import { Card, EmailIcon, GitHubIcon, LinkedInIcon, LinkCard, LinkArrow, PageGrid, SocialTileLabel, TagList } from '../components/ui'
import {
  HOME_AGENT_TOOLING_BLURB,
  HOME_AGENT_TOOLING_TITLE,
  HOME_CTA,
  HOME_FEATURED_TITLE,
  HOME_FOCUS,
  HOME_GITHUB_SUBTITLE,
  HOME_INTRO,
  HOME_LABELS,
  HOME_LINKS,
  HOME_METRICS_LABEL,
  HOME_STATUS,
  METRICS,
  TRUDGE_BLURB,
  homeTileClass,
} from '../data/home'
import { label, linkText, linkTextMuted, linkTitle, textClass } from '../lib/styles'
import { SITE } from '../lib/site'
import { cn } from '../lib/cn'

export function Home() {
  return (
    <PageGrid cols={3}>
      <Card className={cn('gap-4', homeTileClass('hero'))}>
        <div className="flex flex-col gap-3">
          <p className={label}>{HOME_LABELS.portfolio}</p>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white leading-none">
            <ScrambleText text={SITE.name} duration={1800} />
          </h1>
          <p className={`font-mono text-sm ${textClass.secondary}`}>
            {SITE.title}<span className="animate-pulse">_</span>
          </p>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-sm text-emerald-400/90">{HOME_STATUS}</span>
          </div>
          <p className={`text-sm ${textClass.secondary} leading-relaxed`}>{HOME_INTRO}</p>
        </div>
      </Card>

      <LinkCard to={HOME_LINKS.aboutRoute} className={homeTileClass('about')}>
        <p className={label}>{HOME_LABELS.about}</p>
        <p className={linkText}>
          {HOME_CTA.background} <LinkArrow kind="forward" />
        </p>
      </LinkCard>

      <LinkCard href={HOME_LINKS.github} className={homeTileClass('github')}>
        <SocialTileLabel icon={<GitHubIcon className="text-white/50 group-hover:text-white" />}>
          {HOME_LABELS.github}
        </SocialTileLabel>
        <p className={linkText}>
          {HOME_LINKS.socialHandle} <LinkArrow />
        </p>
        <p className={`text-sm ${textClass.muted} leading-relaxed`}>{HOME_GITHUB_SUBTITLE}</p>
      </LinkCard>

      <LinkCard to={HOME_LINKS.featuredRoute} className={homeTileClass('featured')}>
        <p className={label}>{HOME_LABELS.featured}</p>
        <p className={linkTitle}>{HOME_FEATURED_TITLE}</p>
        <p className={`text-sm ${textClass.secondary} leading-relaxed`}>{TRUDGE_BLURB}</p>
        <p className={linkTextMuted}>
          {HOME_CTA.readCaseStudy} <LinkArrow kind="forward" />
        </p>
      </LinkCard>

      <LinkCard to={HOME_LINKS.agentToolingRoute} className={homeTileClass('agentTooling')}>
        <p className={label}>{HOME_LABELS.publicCode}</p>
        <p className={linkTitle}>{HOME_AGENT_TOOLING_TITLE}</p>
        <p className={`text-sm ${textClass.secondary} leading-relaxed`}>{HOME_AGENT_TOOLING_BLURB}</p>
        <p className={linkTextMuted}>
          {HOME_CTA.readCaseStudy} <LinkArrow kind="forward" />
        </p>
      </LinkCard>

      <LinkCard to={HOME_LINKS.projectsRoute} className={homeTileClass('projects')}>
        <p className={label}>{HOME_LABELS.projects}</p>
        <p className={linkText}>
          {HOME_CTA.viewAll} <LinkArrow kind="forward" />
        </p>
      </LinkCard>

      <LinkCard href={HOME_LINKS.studio} className={homeTileClass('studio')}>
        <p className={label}>{HOME_LABELS.studio}</p>
        <p className={linkText}>
          {HOME_LINKS.studioName} <LinkArrow />
        </p>
      </LinkCard>

      <Card className={homeTileClass('focus')}>
        <p className={label}>{HOME_LABELS.focus}</p>
        <TagList tags={HOME_FOCUS} />
      </Card>

      <Card className={homeTileClass('numbers')}>
        <p className={label}>{HOME_METRICS_LABEL}</p>
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
        <p className={label}>{HOME_LABELS.resume}</p>
        <p className={linkText}>
          {HOME_CTA.viewPdf} <LinkArrow />
        </p>
      </LinkCard>

      <LinkCard href={HOME_LINKS.linkedin} className={homeTileClass('linkedin')}>
        <SocialTileLabel icon={<LinkedInIcon className="text-white/50 group-hover:text-white" />}>
          {HOME_LABELS.linkedin}
        </SocialTileLabel>
        <p className={linkText}>
          {HOME_LINKS.socialHandle} <LinkArrow />
        </p>
      </LinkCard>

      <LinkCard href={`mailto:${HOME_LINKS.email}`} className={homeTileClass('email')}>
        <SocialTileLabel icon={<EmailIcon className="text-white/50 group-hover:text-white" />}>
          {HOME_LABELS.email}
        </SocialTileLabel>
        <p className={cn(linkText, 'break-all sm:break-normal')}>
          {HOME_LINKS.email} <LinkArrow />
        </p>
      </LinkCard>
    </PageGrid>
  )
}

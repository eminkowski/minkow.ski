import { PROJECTS_GITHUB_CARD, PROJECTS_INTRO, projects } from '../data/projects'
import { ProjectCard } from '../components/ProjectCard'
import { Card, LinkArrow, LinkCard, PageGrid } from '../components/ui'
import { label, linkTextMuted, linkTitle, textClass } from '../lib/styles'

export function Projects() {
  return (
    <PageGrid>
      <Card className="sm:col-span-2">
        <p className={label}>Projects</p>
        <p className={`text-sm ${textClass.secondary} leading-relaxed`}>{PROJECTS_INTRO}</p>
      </Card>

      {projects.map(project => (
        <ProjectCard key={project.name} project={project} />
      ))}

      <LinkCard href={PROJECTS_GITHUB_CARD.href} className="h-full">
        <p className={label}>{PROJECTS_GITHUB_CARD.label}</p>
        <p className={linkTitle}>{PROJECTS_GITHUB_CARD.title}</p>
        <p className={`text-sm ${textClass.secondary} leading-relaxed`}>
          {PROJECTS_GITHUB_CARD.description}
        </p>
        <p className={`${linkTextMuted} mt-auto`}>
          {PROJECTS_GITHUB_CARD.cta} <LinkArrow />
        </p>
      </LinkCard>
    </PageGrid>
  )
}

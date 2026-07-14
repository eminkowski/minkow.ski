import { Link } from '@tanstack/react-router'
import type { Project } from '../data/projects'
import { UI_LABELS } from '../data/ui-labels'
import { label, metaLink, textClass } from '../lib/styles'
import { Card, ExternalLink, LinkArrow, TagList } from './ui'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="h-full">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
        <p className={label}>{UI_LABELS.project}</p>
        <div className="flex flex-wrap gap-x-3 gap-y-1">
          {project.url && (
            <ExternalLink href={project.url} variant="meta">
              {UI_LABELS.live} <LinkArrow />
            </ExternalLink>
          )}
          {project.repo && (
            <ExternalLink href={project.repo} variant="meta">
              {UI_LABELS.code} <LinkArrow />
            </ExternalLink>
          )}
          {project.caseStudy && (
            <Link to={project.caseStudy} className={metaLink}>
              {UI_LABELS.caseStudy} <LinkArrow kind="forward" />
            </Link>
          )}
        </div>
      </div>
      <p className="text-white font-medium">{project.name}</p>
      <p className={`text-sm ${textClass.secondary} leading-relaxed`}>{project.description}</p>
      <div className="mt-auto pt-1">
        <TagList tags={project.tags} />
      </div>
    </Card>
  )
}

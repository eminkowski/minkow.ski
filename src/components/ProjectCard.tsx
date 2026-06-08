import { Link } from '@tanstack/react-router'
import type { Project } from '../data/projects'
import { label, metaLink, textClass } from '../lib/styles'
import { Card, ExternalLink, LinkArrow, TagList } from './ui'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card>
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
        <p className={label}>Project</p>
        <div className="flex flex-wrap gap-x-3 gap-y-1">
          {project.url && (
            <ExternalLink href={project.url} variant="meta">
              live <LinkArrow />
            </ExternalLink>
          )}
          {project.repo && (
            <ExternalLink href={project.repo} variant="meta">
              code <LinkArrow />
            </ExternalLink>
          )}
          {project.caseStudy && (
            <Link to={project.caseStudy} className={metaLink}>
              case study <LinkArrow kind="forward" />
            </Link>
          )}
        </div>
      </div>
      <p className="text-white font-medium">{project.name}</p>
      <p className={`text-sm ${textClass.muted} leading-relaxed`}>{project.description}</p>
      <TagList tags={project.tags} />
    </Card>
  )
}

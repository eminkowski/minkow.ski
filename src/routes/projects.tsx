import { projects } from '../data/projects'
import { ProjectCard } from '../components/ProjectCard'
import { Card, PageGrid } from '../components/ui'
import { label, textClass } from '../lib/styles'

export function Projects() {
  return (
    <PageGrid>
      <Card className="sm:col-span-2">
        <p className={label}>Projects</p>
        <p className={`text-sm ${textClass.muted} leading-relaxed`}>
          Selected work with live demos and engineering write-ups where the codebase is public.
        </p>
      </Card>

      {projects.map(project => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </PageGrid>
  )
}

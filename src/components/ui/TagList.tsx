import { chip } from '../../lib/styles'

interface TagListProps {
  tags: readonly string[]
}

export function TagList({ tags }: TagListProps) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {tags.map(tag => (
        <span key={tag} className={chip}>
          {tag}
        </span>
      ))}
    </div>
  )
}

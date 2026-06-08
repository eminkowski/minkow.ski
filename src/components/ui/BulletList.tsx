import { textClass } from '../../lib/styles'

interface BulletListProps {
  items: readonly string[]
}

export function BulletList({ items }: BulletListProps) {
  return (
    <ul className="flex flex-col gap-2">
      {items.map(item => (
        <li key={item} className={`text-sm ${textClass.muted} leading-relaxed flex gap-2`}>
          <span className={`${textClass.muted} shrink-0`} aria-hidden>
            ·
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

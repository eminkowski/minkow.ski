import { Link } from '@tanstack/react-router'
import { ROUTES } from '../lib/routes'
import { navLink } from '../lib/styles'

const NAV_ITEMS = [
  { to: ROUTES.home, label: 'home', exact: true },
  { to: ROUTES.projects, label: 'projects', exact: false },
  { to: ROUTES.about, label: 'about', exact: false },
] as const

export function Nav() {
  return (
    <nav
      className="fixed z-50 flex gap-3 sm:gap-5 top-[max(1rem,env(safe-area-inset-top))] right-[max(1rem,env(safe-area-inset-right))] sm:top-5 sm:right-6"
      aria-label="Primary"
    >
      {NAV_ITEMS.map(({ to, label, exact }) => (
        <Link
          key={to}
          to={to}
          className={navLink}
          activeProps={{ className: 'font-mono text-xs text-white py-2 -my-2 px-1 -mx-1' }}
          activeOptions={{ exact }}
        >
          {label}
        </Link>
      ))}
    </nav>
  )
}

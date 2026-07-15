import { Outlet } from '@tanstack/react-router'
import { Nav } from '../components/Nav'
import { PageTitle } from '../components/PageTitle'
import { NOISE_SVG } from '../lib/constants'
import { PAGE_PADDING_X } from '../lib/layout'

export function Root() {
  return (
    <div className="relative flex flex-1 flex-col min-h-0 overflow-hidden">

      <div className="fixed inset-0 z-0 bg-[#020202]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,#1e1e3f,transparent_70%)] opacity-80" />
      </div>

      <div
        className="fixed inset-0 z-[5] pointer-events-none"
        style={{ backgroundImage: NOISE_SVG, backgroundSize: '300px 300px', opacity: 0.02 }}
      />

      <PageTitle />
      <Nav />

      <main
        className={[
          'relative z-10 flex-1 min-h-0 w-full',
          PAGE_PADDING_X,
          'pt-[calc(4.5rem+env(safe-area-inset-top))] sm:pt-20',
          'pb-[max(2rem,env(safe-area-inset-bottom))] sm:pb-12',
          // safe center: keep short pages centered without clipping tall pages
          'flex items-start justify-center lg:[align-items:safe_center]',
          'scroll-pane',
        ].join(' ')}
      >
        <Outlet />
      </main>
    </div>
  )
}

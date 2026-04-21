import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Footer } from './Footer'
import { Header } from './Header'
import { UrgencyBanner } from './UrgencyBanner'

function ScrollManager() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
      return
    }

    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [location.hash, location.pathname])

  return null
}

export function Layout() {
  return (
    <div className="min-h-screen bg-[var(--color-cream)] text-[var(--color-ink)]">
      <a
        href="#contenu"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[var(--color-deep-blue)]"
      >
        Aller au contenu
      </a>
      <ScrollManager />
      <UrgencyBanner />
      <Header />
      <main id="contenu">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

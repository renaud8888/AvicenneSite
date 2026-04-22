import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import type { MouseEvent } from 'react'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { navigationItems, siteConfig } from '../../data/site'
import { Button } from '../ui/Button'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navHref = (href: string) => (location.pathname === '/' ? href : `/${href}`)

  const handleMobileNavClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (location.pathname === '/') {
      event.preventDefault()
      setIsOpen(false)

      // Laisser le temps a l'animation de fermeture (250ms) avant de scroller.
      window.setTimeout(() => {
        const id = href.replace('#', '')
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 280)
      return
    }

    setIsOpen(false)
  }

  return (
    <header
      className={`sticky top-0 z-50 border-b transition duration-300 ${
        isScrolled
          ? 'border-[color-mix(in_srgb,var(--color-deep-blue)_10%,white)] bg-white/95 shadow-[0_20px_45px_-36px_rgba(27,58,92,0.55)] backdrop-blur-md'
          : 'border-transparent bg-white/75 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link className="shrink-0" to="/" aria-label="Retour à l'accueil Avicenne Dental" onClick={() => setIsOpen(false)}>
          <div className="rounded-xl bg-[#2f5d89] px-3 py-2 shadow-[0_12px_30px_-24px_rgba(27,58,92,0.55)]">
            <img
              src={siteConfig.logo}
              alt="Logo Avicenne Dental"
              className="h-9 w-auto sm:h-10"
              loading="eager"
            />
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Navigation principale">
          {navigationItems.map((item) => (
            <Link
              key={item.label}
              to={navHref(item.href)}
              className="text-sm font-medium text-[var(--color-ink)] transition hover:text-[var(--color-deep-blue)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href={siteConfig.bookingUrl} target="_blank" rel="noopener noreferrer" variant="cta">
            Prendre rendez-vous
          </Button>
        </div>

        <button
          type="button"
          aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={isOpen}
          className="inline-flex rounded-full border border-[color-mix(in_srgb,var(--color-deep-blue)_10%,white)] p-3 text-[var(--color-deep-blue)] lg:hidden"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="overflow-hidden border-t border-[color-mix(in_srgb,var(--color-deep-blue)_8%,white)] bg-white lg:hidden"
            aria-label="Navigation mobile"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 sm:px-6">
              {navigationItems.map((item) => (
                <Link
                  key={item.label}
                  to={navHref(item.href)}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-[var(--color-ink)] transition hover:bg-[var(--color-cream)]"
                  onClick={(event) => handleMobileNavClick(event, item.href)}
                >
                  {item.label}
                </Link>
              ))}
              <Button
                href={siteConfig.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="cta"
                className="mt-3"
                onClick={() => setIsOpen(false)}
              >
                Prendre rendez-vous
              </Button>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  )
}

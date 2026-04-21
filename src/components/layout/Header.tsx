import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
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
          <img
            src={siteConfig.logo}
            alt="Logo Avicenne Dental Clinique"
            className="h-10 w-auto sm:h-12"
            loading="eager"
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Navigation principale">
          {navigationItems.map((item) => (
            <a
              key={item.label}
              href={navHref(item.href)}
              className="text-sm font-medium text-[var(--color-ink)] transition hover:text-[var(--color-deep-blue)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href={siteConfig.bookingUrl} target="_blank" rel="noopener noreferrer">
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
            <a
              key={item.label}
              href={navHref(item.href)}
              className="rounded-2xl px-4 py-3 text-sm font-medium text-[var(--color-ink)] transition hover:bg-[var(--color-cream)]"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
              ))}
              <Button
                href={siteConfig.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
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

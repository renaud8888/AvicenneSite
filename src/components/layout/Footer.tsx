import { Facebook, Instagram, Linkedin } from 'lucide-react'
import { Link } from 'react-router-dom'
import { navigationItems, siteConfig } from '../../data/site'
import { Button } from '../ui/Button'
import { BrandMark } from '../ui/BrandMark'

const socialIcons = {
  Facebook,
  Instagram,
  LinkedIn: Linkedin,
} as const

export function Footer() {
  const socialLinks = siteConfig.socialLinks.filter((link) => !link.href.startsWith('['))

  return (
    <footer className="border-t border-[color-mix(in_srgb,var(--color-deep-blue)_8%,white)] bg-[var(--color-deep-blue)] text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="space-y-4">
            <BrandMark className="items-center" textClassName="[&>p:first-child]:text-white [&>p:last-child]:text-[color-mix(in_srgb,var(--color-gold)_78%,white)]" />
            <p className="max-w-xl text-sm leading-7 text-white/75">
              Cabinet dentaire conventionné à Schaerbeek, orienté vers des soins précis, humains et confortables.
            </p>
          </div>
          <Button
            href={siteConfig.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border-[var(--color-gold)] bg-[var(--color-gold)] text-[var(--color-deep-blue)] hover:bg-[color-mix(in_srgb,var(--color-gold)_88%,white)]"
          >
            Prendre rendez-vous
          </Button>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm" aria-label="Liens de pied de page">
          {navigationItems.map((item) => (
            <Link key={item.label} to={`/${item.href}`} className="text-white/80 transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        {socialLinks.length ? (
          <div className="flex flex-wrap items-center gap-4" aria-label="Réseaux sociaux">
            {socialLinks.map((link) => {
              const Icon = socialIcons[link.platform]
              return (
                <a
                  key={link.platform}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.platform}
                  className="inline-flex rounded-full border border-white/15 p-3 text-white/80 transition hover:border-white/35 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              )
            })}
          </div>
        ) : null}

        <p className="text-sm text-white/65">© 2026 Avicenne Dental Clinique</p>
      </div>
    </footer>
  )
}

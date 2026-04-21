import { motion } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'
import { siteConfig } from '../../data/site'
import { Button } from '../ui/Button'

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-24 lg:pt-16">
      <div className="absolute inset-x-0 top-0 -z-10 h-[32rem] bg-[radial-gradient(circle_at_top_left,_rgba(201,168,76,0.18),_transparent_36%),radial-gradient(circle_at_top_right,_rgba(124,154,130,0.16),_transparent_28%)]" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="space-y-8"
        >
          <span className="inline-flex rounded-full border border-[color-mix(in_srgb,var(--color-gold)_35%,white)] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-deep-blue)]">
            Cabinet conventionné – Tiers payant
          </span>
          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[var(--color-sage)]">
              Bruxelles • Schaerbeek
            </p>
            <h1 className="max-w-2xl font-[var(--font-display)] text-5xl leading-[1.05] text-[var(--color-deep-blue)] sm:text-6xl">
              AVICENNE DENTAL CLINIQUE
            </h1>
            <p className="max-w-xl text-lg leading-8 text-[var(--color-muted)] sm:text-xl">
              Nous prenons soin de votre sourire
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button href={siteConfig.bookingUrl} target="_blank" rel="noopener noreferrer">
              Rendez-vous en ligne <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button href={siteConfig.phones[0].href} variant="secondary">
              <Phone className="mr-2 h-4 w-4" /> Appelez-nous 02 240 43 93
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
          className="relative"
        >
          <div className="absolute -left-6 top-10 hidden h-28 w-28 rounded-full bg-[color-mix(in_srgb,var(--color-gold)_18%,white)] blur-3xl lg:block" />
          <div className="absolute -bottom-6 right-8 hidden h-40 w-40 rounded-full bg-[color-mix(in_srgb,var(--color-sage)_18%,white)] blur-3xl lg:block" />
          <div className="rounded-[2rem] border border-white/70 bg-white/70 p-3 shadow-[0_40px_80px_-48px_rgba(27,58,92,0.55)] backdrop-blur-sm">
            <img
              src={siteConfig.heroImage}
              alt="Cabinet Avicenne Dental avec fauteuil et équipements dentaires modernes"
              className="aspect-[5/4] w-full rounded-[1.5rem] object-cover"
              loading="eager"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

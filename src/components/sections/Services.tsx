import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { services } from '../../data/services'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { Card } from '../ui/Card'

export function Services() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>()

  return (
    <section id="services" ref={ref} className="bg-[linear-gradient(180deg,rgba(226,238,250,0.4)_0%,rgba(255,255,255,0.88)_42%,rgba(238,245,252,0.65)_100%)] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-10">
        <div className="max-w-2xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[color-mix(in_srgb,var(--color-deep-blue)_72%,var(--color-sage))]">Donnez vie à votre sourire</p>
          <h2 className="font-[var(--font-display)] text-4xl text-[var(--color-deep-blue)] sm:text-5xl">NOS SERVICES</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 24 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.35, ease: 'easeOut', delay: index * 0.04 }}
              >
                <Card className="flex h-full flex-col overflow-hidden border-[color-mix(in_srgb,var(--color-deep-blue)_12%,white)] p-0">
                  <div className="bg-[linear-gradient(135deg,var(--color-deep-blue)_0%,#2f6ca3_100%)] px-6 py-5 text-white">
                    <div className="flex items-center gap-4">
                      <div className="inline-flex rounded-2xl bg-white/12 p-3 text-white ring-1 ring-white/20">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="flex-1 text-sm leading-7 text-[var(--color-muted)]">{service.excerpt}</p>
                    <Link
                      to={`/services/${service.slug}`}
                      className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-[#2f6ca3] bg-[#2f6ca3] px-4 py-2 text-sm font-semibold !text-white transition hover:-translate-y-0.5 hover:bg-[color-mix(in_srgb,#2f6ca3_88%,white)]"
                      aria-label={`En savoir plus sur ${service.title}`}
                    >
                      En savoir plus <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

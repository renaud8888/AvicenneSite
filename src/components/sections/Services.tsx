import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { services } from '../../data/services'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { Card } from '../ui/Card'

export function Services() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>()

  return (
    <section id="services" ref={ref} className="bg-white/60 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-10">
        <div className="max-w-2xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-sage)]">Donnez vie à votre sourire</p>
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
                <Card className="flex h-full flex-col p-6">
                  <div className="mb-5 inline-flex rounded-2xl bg-[var(--color-cream)] p-3 text-[var(--color-deep-blue)]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="flex flex-1 flex-col">
                    <h3 className="text-xl font-semibold text-[var(--color-deep-blue)]">{service.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-7 text-[var(--color-muted)]">{service.excerpt}</p>
                    <Link
                      to={`/services/${service.slug}`}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-deep-blue)]"
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

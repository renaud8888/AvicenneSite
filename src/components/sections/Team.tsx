import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { teamMembers } from '../../data/team'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { Card } from '../ui/Card'
import { Image } from '../ui/Image'

export function Team() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>()

  return (
    <section id="equipe" ref={ref} className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-10">
        <div className="max-w-2xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-sage)]">Notre fierté est dans votre sourire</p>
          <h2 className="font-[var(--font-display)] text-4xl text-[var(--color-deep-blue)] sm:text-5xl">NOTRE ÉQUIPE</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.35, ease: 'easeOut', delay: index * 0.04 }}
            >
              <Card className="group h-full overflow-hidden">
                <div className="overflow-hidden">
                  <Image
                    src={member.image}
                    alt={`${member.name}, ${member.role}`}
                    className="aspect-[4/4.3] w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-2 p-5">
                  <h3 className="text-lg font-semibold text-[var(--color-deep-blue)]">{member.name}</h3>
                  <p className="text-sm text-[var(--color-muted)]">{member.role}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
        <Link
          to="/conseils"
          className="inline-flex text-sm font-semibold text-[var(--color-deep-blue)] underline decoration-[color-mix(in_srgb,var(--color-gold)_65%,white)] underline-offset-4"
        >
          Quelques conseils de notre part
        </Link>
      </div>
    </section>
  )
}

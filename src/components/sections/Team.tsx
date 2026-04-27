import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { teamMembers } from '../../data/team'
import { useScrollReveal } from '../../hooks/useScrollReveal'
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
        <div className="grid justify-items-center gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.35, ease: 'easeOut', delay: index * 0.04 }}
              className="group w-full max-w-[18.5rem] sm:max-w-none"
            >
              <figure className="relative isolate overflow-hidden rounded-[1.25rem] shadow-[0_24px_52px_-42px_rgba(27,58,92,0.45)]">
                <Image
                  src={member.image}
                  alt={`${member.name}, ${member.role}`}
                  className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105"
                  width={500}
                  height={500}
                  loading={index < 4 ? 'eager' : 'lazy'}
                  decoding="async"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,rgba(27,58,92,0)_0%,rgba(27,58,92,0.86)_72%)] px-5 pb-5 pt-14 text-white opacity-100 transition duration-300 sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-within:opacity-100">
                  <h3 className="text-lg font-semibold leading-tight">{member.name}</h3>
                  <p className="mt-1 text-sm text-white/82">{member.role}</p>
                </figcaption>
              </figure>
            </motion.div>
          ))}
        </div>
        <Link
          to="/conseils"
          className="group block rounded-[1.75rem] border border-[color-mix(in_srgb,var(--color-deep-blue)_10%,white)] bg-[linear-gradient(135deg,rgba(255,255,255,0.96)_0%,rgba(231,240,249,0.92)_100%)] p-6 shadow-[0_28px_60px_-46px_rgba(27,58,92,0.45)] transition duration-300 hover:-translate-y-1"
        >
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#2f6ca3]">Conseils pratiques</p>
            <h3 className="font-[var(--font-display)] text-3xl text-[var(--color-deep-blue)]">Quelques conseils de notre part</h3>
            <p className="max-w-2xl text-sm leading-7 text-[var(--color-muted)]">
              Retrouve nos recommandations simples pour les dents sensibles, les prothèses, les gencives, les enfants et le blanchiment.
            </p>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#2f6ca3] transition group-hover:translate-x-1">
              Lire les conseils
            </span>
          </div>
        </Link>
      </div>
    </section>
  )
}

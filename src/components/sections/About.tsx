import { motion } from 'framer-motion'
import { asset } from '../../data/site'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { Image } from '../ui/Image'

const gallery = [
  asset('/images/about/accueil.jpg'),
  asset('/images/about/salle-soin-1.jpg'),
  asset('/images/about/salle-soin-2.jpg'),
  asset('/images/about/salle-soin-3.jpg'),
]

export function About() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>()

  return (
    <section id="apropos" ref={ref} className="px-4 py-16 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr]"
      >
        <div className="space-y-5">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-sage)]">
            A PROPOS D&apos;AVICENNE DENTAL
          </p>
          <h2 className="font-[var(--font-display)] text-4xl text-[var(--color-deep-blue)] sm:text-5xl">
            Nous créons des sourires beaux et plus brillants
          </h2>
          <p className="text-base leading-8 text-[var(--color-muted)]">
            Notre cabinet, fort de son équipe en constante formation et de son plateau technique moderne et sûr, privilégie une prise en charge globale de votre santé bucco-dentaire. Nous faisons tout pour avoir du matériel moderne et efficace, qui permettra de faire vos soins dans les meilleures conditions. En cas d&apos;urgence, nous mettons tout en œuvre pour vous recevoir dans la journée ou le lendemain en cas d&apos;appel tardif (dans la mesure des places disponibles). Chez Avicenne Dental, nous prenons soins de vos dents et de votre sourire.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {gallery.map((image, index) => (
            <div
              key={image}
              className={`overflow-hidden rounded-[1.5rem] border border-white/70 bg-white/70 p-2 shadow-[0_30px_60px_-44px_rgba(27,58,92,0.55)] ${index === 0 ? 'col-span-2 md:col-span-1 md:row-span-2' : ''}`}
            >
              <Image
                src={image}
                alt={`Vue du cabinet Avicenne Dental ${index + 1}`}
                className={`w-full rounded-[1.1rem] object-cover ${index === 0 ? 'h-full min-h-[20rem]' : 'aspect-[4/3]'}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

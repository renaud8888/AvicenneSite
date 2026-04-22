import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { useEffect, useState } from 'react'
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
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  useEffect(() => {
    if (!selectedImage) {
      return
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedImage(null)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [selectedImage])

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
        <div className="space-y-4">
          <button
            type="button"
            className="group block w-full overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/70 p-2 text-left shadow-[0_30px_60px_-44px_rgba(27,58,92,0.55)]"
            onClick={() => setSelectedImage(gallery[0])}
          >
            <Image
              src={gallery[0]}
              alt="Vue principale du cabinet Avicenne Dental"
              className="aspect-[16/10] w-full rounded-[1.3rem] object-cover transition duration-500 group-hover:scale-[1.02]"
              loading="lazy"
            />
          </button>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {gallery.slice(1).map((image, index) => (
              <button
                key={image}
                type="button"
                className="group overflow-hidden rounded-[1.35rem] border border-white/70 bg-white/80 p-2 shadow-[0_25px_45px_-38px_rgba(27,58,92,0.5)]"
                onClick={() => setSelectedImage(image)}
                aria-label={`Agrandir la photo du cabinet ${index + 1}`}
              >
                <Image
                  src={image}
                  alt={`Vue du cabinet Avicenne Dental ${index + 2}`}
                  className="aspect-[4/3] w-full rounded-[1rem] object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {selectedImage ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-[rgba(10,20,34,0.82)] px-4 py-8"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="relative w-full max-w-5xl rounded-[2rem] bg-white p-3 shadow-[0_40px_90px_-36px_rgba(0,0,0,0.6)]"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                aria-label="Fermer la photo"
                className="absolute right-5 top-5 z-10 inline-flex rounded-full bg-white/90 p-2 text-[var(--color-deep-blue)] shadow-md transition hover:bg-white"
                onClick={() => setSelectedImage(null)}
              >
                <X className="h-5 w-5" />
              </button>
              <Image src={selectedImage} alt="Photo agrandie du cabinet Avicenne Dental" className="max-h-[80vh] w-full rounded-[1.5rem] object-cover" loading="eager" />
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  )
}

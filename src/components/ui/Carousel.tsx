import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { useEffect, useState } from 'react'
import type { Testimonial } from '../../data/testimonials'
import { Card } from './Card'

type CarouselProps = {
  items: Testimonial[]
}

export function Carousel({ items }: CarouselProps) {
  const [index, setIndex] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setIndex((current) => (current + 1) % items.length)
    }, 7200)

    return () => window.clearInterval(interval)
  }, [items.length])

  const goTo = (value: number) => setIndex((value + items.length) % items.length)

  return (
    <div aria-roledescription="carrousel" className="space-y-6">
      <Card className="overflow-hidden p-6 md:p-10">
        <div className="flex items-center justify-between gap-4">
          <button
            type="button"
            aria-label="Témoignage précédent"
            className="hidden rounded-full border border-[color-mix(in_srgb,var(--color-deep-blue)_10%,white)] p-3 text-[var(--color-deep-blue)] transition hover:bg-[var(--color-cream)] md:inline-flex"
            onClick={() => goTo(index - 1)}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div
            className="min-h-[18rem] flex-1"
            onTouchStart={(event) => setTouchStart(event.touches[0]?.clientX ?? null)}
            onTouchEnd={(event) => {
              if (touchStart === null) {
                return
              }

              const delta = touchStart - (event.changedTouches[0]?.clientX ?? touchStart)
              if (Math.abs(delta) > 50) {
                goTo(delta > 0 ? index + 1 : index - 1)
              }

              setTouchStart(null)
            }}
          >
            <AnimatePresence mode="wait">
              <motion.article
                key={items[index].name}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="space-y-6"
              >
                <div className="flex flex-wrap items-center gap-4">
                  <div className="inline-flex rounded-full bg-[color-mix(in_srgb,var(--color-gold)_18%,white)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[color-mix(in_srgb,var(--color-deep-blue)_78%,#2f6ca3)]">
                    {items[index].name}
                  </div>
                  <div className="flex items-center gap-1 text-[#f4c542]" aria-label="Avis 5 étoiles">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star key={starIndex} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-lg leading-8 text-[var(--color-ink)] md:text-[1.4rem]">
                  “{items[index].quote}”
                </p>
                <div className="space-y-1">
                  {items[index].role ? (
                    <p className="text-sm text-[var(--color-muted)]">{items[index].role}</p>
                  ) : null}
                  {items[index].link ? (
                    <a
                      className="inline-flex w-fit rounded-full bg-[color-mix(in_srgb,var(--color-gold)_18%,white)] px-3 py-1.5 text-sm font-semibold underline decoration-transparent underline-offset-4 transition hover:bg-[color-mix(in_srgb,var(--color-gold)_28%,white)] hover:decoration-current"
                      style={{ color: '#1b3a5c' }}
                      href={items[index].link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Voir l'avis Google Maps
                    </a>
                  ) : null}
                </div>
              </motion.article>
            </AnimatePresence>
          </div>
          <button
            type="button"
            aria-label="Témoignage suivant"
            className="hidden rounded-full border border-[color-mix(in_srgb,var(--color-deep-blue)_10%,white)] p-3 text-[var(--color-deep-blue)] transition hover:bg-[var(--color-cream)] md:inline-flex"
            onClick={() => goTo(index + 1)}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </Card>
      <div className="flex items-center justify-center gap-2">
        {items.map((item, dotIndex) => (
          <button
            key={item.name}
            type="button"
            aria-label={`Afficher le témoignage ${dotIndex + 1}`}
            aria-current={dotIndex === index}
            className={`h-2.5 rounded-full transition ${dotIndex === index ? 'w-10 bg-[var(--color-gold)]' : 'w-2.5 bg-[color-mix(in_srgb,var(--color-deep-blue)_20%,white)]'}`}
            onClick={() => setIndex(dotIndex)}
          />
        ))}
      </div>
    </div>
  )
}

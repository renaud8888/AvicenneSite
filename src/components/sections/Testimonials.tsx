import { Carousel } from '../ui/Carousel'
import { googleReviewsUrl, testimonials } from '../../data/testimonials'

export function Testimonials() {
  return (
    <section id="temoignages" className="bg-[linear-gradient(180deg,#173556_0%,#214b73_100%)] px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-10">
        <div className="max-w-2xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[color-mix(in_srgb,var(--color-gold)_75%,white)]">
            TÉMOIGNAGES
          </p>
          <h2 className="font-[var(--font-display)] text-4xl sm:text-5xl">Parce que votre avis compte</h2>
        </div>
        <Carousel items={testimonials} />
        <a
          href={googleReviewsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex text-sm font-semibold text-[color-mix(in_srgb,var(--color-gold)_85%,white)] underline decoration-transparent underline-offset-4 transition hover:decoration-current"
        >
          Voir tous nos avis sur Google
        </a>
      </div>
    </section>
  )
}

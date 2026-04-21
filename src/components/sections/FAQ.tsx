import { faqItems } from '../../data/faq'
import { Accordion } from '../ui/Accordion'

export function FAQ() {
  return (
    <section id="faq" className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl space-y-10">
        <div className="max-w-2xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-sage)]">Les questions le plus souvent posées</p>
          <h2 className="font-[var(--font-display)] text-4xl text-[var(--color-deep-blue)] sm:text-5xl">FAQ</h2>
        </div>
        <Accordion items={faqItems} />
      </div>
    </section>
  )
}

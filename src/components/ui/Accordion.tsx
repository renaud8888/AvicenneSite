import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useId, useState } from 'react'
import type { FAQItem } from '../../data/faq'

type AccordionProps = {
  items: FAQItem[]
}

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number>(0)
  const id = useId()

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        const panelId = `${id}-panel-${index}`
        const buttonId = `${id}-button-${index}`

        return (
          <div
            key={item.question}
            className="overflow-hidden rounded-[1.25rem] border border-[color-mix(in_srgb,var(--color-deep-blue)_10%,white)] bg-white"
          >
            <button
              id={buttonId}
              aria-controls={panelId}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-base font-semibold text-[var(--color-ink)] transition hover:bg-[var(--color-cream)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-gold)]"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
            >
              <span>{item.question}</span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-[var(--color-deep-blue)] transition ${isOpen ? 'rotate-180' : ''}`}
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  key={panelId}
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: 'easeOut' }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-6 text-sm leading-7 text-[var(--color-muted)]">{item.answer}</p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}

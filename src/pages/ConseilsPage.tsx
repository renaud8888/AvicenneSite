import { Link } from 'react-router-dom'
import { Card } from '../components/ui/Card'
import { conseils } from '../data/conseils'
import { SEO } from '../lib/seo'

export default function ConseilsPage() {
  return (
    <>
      <SEO
        title="Conseils | Avicenne Dental Clinique"
        description="Conseils pratiques d'Avicenne Dental pour dents sensibles, prothèses, gencives, enfants et blanchiment."
        path="/conseils"
      />
      <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-6xl space-y-10">
          <nav aria-label="Fil d'Ariane" className="text-sm text-[var(--color-muted)]">
            <Link to="/" className="hover:text-[var(--color-deep-blue)]">
              Accueil
            </Link>{' '}
            / <span>Conseils</span>
          </nav>
          <div className="max-w-3xl space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-sage)]">Conseils</p>
            <h1 className="font-[var(--font-display)] text-4xl text-[var(--color-deep-blue)] sm:text-5xl">
              Quelques conseils de notre part
            </h1>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {conseils.map((conseil) => {
              const Icon = conseil.icon
              return (
                <Card key={conseil.title} className="h-full p-6">
                  <div className="space-y-5">
                    <div className="inline-flex rounded-2xl bg-[var(--color-cream)] p-3 text-[var(--color-deep-blue)]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="space-y-3">
                      <h2 className="text-xl font-semibold text-[var(--color-deep-blue)]">{conseil.title}</h2>
                      {conseil.content.map((paragraph) => (
                        <p key={paragraph} className="text-sm leading-7 text-[var(--color-muted)]">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

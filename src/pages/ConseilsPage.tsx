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
          <div className="space-y-6">
            {conseils
              .filter((conseil) => conseil.title.includes('prothèses'))
              .map((conseil) => {
                const Icon = conseil.icon
                return (
                  <Card key={conseil.title} className="overflow-hidden border-[color-mix(in_srgb,var(--color-deep-blue)_12%,white)]">
                    <div className="bg-[linear-gradient(135deg,var(--color-deep-blue)_0%,#2f6ca3_100%)] px-6 py-5 text-white">
                      <div className="inline-flex rounded-2xl bg-white/12 p-3 text-white ring-1 ring-white/20">
                        <Icon className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="space-y-5 p-6">
                      <h2 className="text-2xl font-semibold text-[var(--color-deep-blue)]">{conseil.title}</h2>
                      {conseil.content.map((paragraph) => (
                        <p key={paragraph} className="text-sm leading-7 text-[var(--color-muted)]">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </Card>
                )
              })}
            <div className="grid gap-6 md:grid-cols-2">
              {conseils
                .filter((conseil) => !conseil.title.includes('prothèses'))
                .map((conseil) => {
              const Icon = conseil.icon
              return (
                <Card key={conseil.title} className="h-full overflow-hidden border-[color-mix(in_srgb,var(--color-deep-blue)_10%,white)]">
                  <div className="bg-[linear-gradient(135deg,rgba(47,108,163,0.12)_0%,rgba(201,168,76,0.12)_100%)] px-6 py-5">
                    <div className="inline-flex rounded-2xl bg-white p-3 text-[#2f6ca3] shadow-sm">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="space-y-5">
                    <div className="space-y-3 p-6">
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
        </div>
      </section>
    </>
  )
}

import { Clock3, Mail, Phone } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { openingHours, siteConfig } from '../data/site'
import { servicesBySlug } from '../data/services'
import { SEO } from '../lib/seo'

export default function ServicePage() {
  const { slug } = useParams()
  const service = slug ? servicesBySlug[slug as keyof typeof servicesBySlug] : undefined

  if (!service) {
    return <Navigate to="/" replace />
  }

  const gallery = service.images ?? [service.image]

  return (
    <>
      <SEO
        title={`${service.title} | Avicenne Dental Clinique`}
        description={service.metaDescription}
        path={`/services/${service.slug}`}
        image={service.image}
      />
      <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl space-y-10">
          <nav aria-label="Fil d'Ariane" className="text-sm text-[var(--color-muted)]">
            <Link to="/" className="hover:text-[var(--color-deep-blue)]">
              Accueil
            </Link>{' '}
            / <span>{service.title}</span>
          </nav>

          <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-start">
            <article className="space-y-8">
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-sage)]">Nos services</p>
                <h1 className="font-[var(--font-display)] text-4xl text-[var(--color-deep-blue)] sm:text-5xl">
                  {service.title}
                </h1>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {gallery.map((image, index) => (
                  <div key={image} className={index === 0 && gallery.length === 1 ? 'md:col-span-2' : ''}>
                    <img
                      src={image}
                      alt={`${service.title} illustration ${index + 1}`}
                      className="aspect-[16/10] w-full rounded-[1.5rem] object-cover shadow-[0_28px_60px_-48px_rgba(27,58,92,0.65)]"
                      loading={index === 0 ? 'eager' : 'lazy'}
                    />
                  </div>
                ))}
              </div>

              <div className="space-y-5 text-base leading-8 text-[var(--color-muted)]">
                {service.content.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              {service.sections?.length ? (
                <div className="grid gap-5 md:grid-cols-3">
                  {service.sections.map((section) => (
                    <Card key={section.title} className="overflow-hidden">
                      {section.image ? (
                        <img
                          src={section.image}
                          alt={`${section.title} pour ${service.title}`}
                          className="aspect-[4/3] w-full object-cover"
                          loading="lazy"
                        />
                      ) : null}
                      <div className="p-5">
                        <h2 className="text-lg font-semibold text-[var(--color-deep-blue)]">{section.title}</h2>
                      </div>
                    </Card>
                  ))}
                </div>
              ) : null}
            </article>

            <aside className="space-y-6 lg:sticky lg:top-28">
              <Card className="p-6">
                <div className="space-y-5">
                  <h2 className="text-xl font-semibold text-[var(--color-deep-blue)]">Prendre rendez-vous</h2>
                  <p className="text-sm leading-7 text-[var(--color-muted)]">
                    Notre équipe vous accompagne pour un plan de traitement clair, transparent et adapté.
                  </p>
                  <Button href={siteConfig.bookingUrl} target="_blank" rel="noopener noreferrer" className="w-full">
                    Prendre rendez-vous
                  </Button>
                </div>
              </Card>

              <Card className="p-6">
                <div className="space-y-5">
                  <h2 className="text-xl font-semibold text-[var(--color-deep-blue)]">Horaires & contact</h2>
                  <div className="space-y-3 text-sm">
                    {openingHours.map((item) => (
                      <div key={item.day} className="flex items-center justify-between gap-4">
                        <span className="inline-flex items-center gap-2 text-[var(--color-ink)]">
                          <Clock3 className="h-4 w-4 text-[var(--color-sage)]" />
                          {item.day}
                        </span>
                        <span className="text-[var(--color-muted)]">{item.hours}</span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-3 text-sm">
                    {siteConfig.phones.map((phone) => (
                      <a key={phone.href} href={phone.href} className="flex items-center gap-2 text-[var(--color-ink)]">
                        <Phone className="h-4 w-4 text-[var(--color-sage)]" />
                        {phone.label}
                      </a>
                    ))}
                    <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 text-[var(--color-ink)]">
                      <Mail className="h-4 w-4 text-[var(--color-sage)]" />
                      {siteConfig.email}
                    </a>
                  </div>
                </div>
              </Card>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}

import { Mail, Phone } from 'lucide-react'
import { FormEvent, useState } from 'react'
import { openingHours, siteConfig } from '../../data/site'
import { Button } from '../ui/Button'
import { Card } from '../ui/Card'

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <section id="contact" className="bg-white/60 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-10">
        <div className="max-w-2xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-sage)]">CONTACTEZ-NOUS</p>
          <h2 className="font-[var(--font-display)] text-4xl text-[var(--color-deep-blue)] sm:text-5xl">
            Donnez vie à votre sourire
          </h2>
        </div>

        <div className="grid gap-6 xl:grid-cols-[0.9fr_0.9fr_1.2fr]">
          <Card className="p-6">
            <div className="space-y-5">
              <div>
                <h3 className="text-lg font-semibold text-[var(--color-deep-blue)]">Coordonnées</h3>
                <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">
                  Boulevard Lambermont 79, 1030 Schaerbeek
                </p>
              </div>
              <div className="space-y-3 text-sm">
                {siteConfig.phones.map((phone) => (
                  <a key={phone.href} href={phone.href} className="flex items-center gap-3 text-[var(--color-ink)] hover:text-[var(--color-deep-blue)]">
                    <Phone className="h-4 w-4 text-[var(--color-sage)]" />
                    <span>{phone.label}</span>
                  </a>
                ))}
                <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 text-[var(--color-ink)] hover:text-[var(--color-deep-blue)]">
                  <Mail className="h-4 w-4 text-[var(--color-sage)]" />
                  <span>{siteConfig.email}</span>
                </a>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="space-y-5">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-sage)]">NOS HORAIRES</p>
                <h3 className="mt-3 text-xl font-semibold text-[var(--color-deep-blue)]">La qualité prend du temps</h3>
              </div>
              <div className="space-y-3 text-sm">
                {openingHours.map((item) => (
                  <div key={item.day} className="flex items-center justify-between gap-4 border-b border-[color-mix(in_srgb,var(--color-deep-blue)_8%,white)] pb-3 last:border-b-0 last:pb-0">
                    <span className="font-medium text-[var(--color-ink)]">{item.day}</span>
                    <span className="text-[var(--color-muted)]">{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          <Card className="overflow-hidden p-0">
            <iframe
              title="Carte du cabinet Avicenne Dental"
              src={siteConfig.mapEmbedUrl}
              className="h-72 w-full border-0 md:h-full md:min-h-[26rem]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Card>
        </div>

        <Card className="p-6 md:p-8">
          <form className="grid gap-5 md:grid-cols-2" onSubmit={onSubmit}>
            <label className="space-y-2 text-sm font-medium text-[var(--color-ink)]">
              <span>Nom</span>
              <input
                required
                name="name"
                className="w-full rounded-2xl border border-[color-mix(in_srgb,var(--color-deep-blue)_12%,white)] bg-white px-4 py-3 outline-none transition focus:border-[var(--color-deep-blue)]"
              />
            </label>
            <label className="space-y-2 text-sm font-medium text-[var(--color-ink)]">
              <span>Email</span>
              <input
                required
                type="email"
                name="email"
                className="w-full rounded-2xl border border-[color-mix(in_srgb,var(--color-deep-blue)_12%,white)] bg-white px-4 py-3 outline-none transition focus:border-[var(--color-deep-blue)]"
              />
            </label>
            <label className="space-y-2 text-sm font-medium text-[var(--color-ink)]">
              <span>Téléphone</span>
              <input
                required
                type="tel"
                name="phone"
                className="w-full rounded-2xl border border-[color-mix(in_srgb,var(--color-deep-blue)_12%,white)] bg-white px-4 py-3 outline-none transition focus:border-[var(--color-deep-blue)]"
              />
            </label>
            <div className="hidden md:block" />
            <label className="space-y-2 text-sm font-medium text-[var(--color-ink)] md:col-span-2">
              <span>Message</span>
              <textarea
                required
                name="message"
                rows={6}
                className="w-full rounded-[1.25rem] border border-[color-mix(in_srgb,var(--color-deep-blue)_12%,white)] bg-white px-4 py-3 outline-none transition focus:border-[var(--color-deep-blue)]"
              />
            </label>
            <div className="flex flex-col gap-3 md:col-span-2 md:flex-row md:items-center md:justify-between">
              <Button type="submit">Envoyer</Button>
              {isSubmitted ? (
                <p className="text-sm text-[var(--color-sage)]">
                  Merci, votre message a bien été préparé côté interface.
                </p>
              ) : (
                <p className="text-sm text-[var(--color-muted)]">
                  Formulaire front-end uniquement, sans envoi serveur.
                </p>
              )}
            </div>
          </form>
        </Card>
      </div>
    </section>
  )
}

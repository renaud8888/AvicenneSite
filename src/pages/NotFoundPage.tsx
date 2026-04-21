import { Button } from '../components/ui/Button'
import { SEO } from '../lib/seo'

export default function NotFoundPage() {
  return (
    <>
      <SEO
        title="Page introuvable | Avicenne Dental Clinique"
        description="La page que vous cherchez n'existe pas."
        path="/404"
      />
      <section className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-16 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-sage)]">Erreur 404</p>
        <h1 className="mt-4 font-[var(--font-display)] text-5xl text-[var(--color-deep-blue)]">
          Page introuvable
        </h1>
        <p className="mt-4 max-w-md text-base leading-8 text-[var(--color-muted)]">
          La page que vous cherchez n'existe pas ou a été déplacée.
        </p>
        <div className="mt-8">
          <Button href="/">Retour à l'accueil</Button>
        </div>
      </section>
    </>
  )
}

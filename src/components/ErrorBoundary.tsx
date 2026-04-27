import { Component, type ErrorInfo, type ReactNode } from 'react'
import { siteConfig } from '../data/site'
import { Button } from './ui/Button'

type ErrorBoundaryProps = {
  children: ReactNode
  resetKey: string
}

type ErrorBoundaryState = {
  hasError: boolean
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Erreur React non capturee', error, errorInfo)
  }

  componentDidUpdate(previousProps: ErrorBoundaryProps) {
    if (previousProps.resetKey !== this.props.resetKey && this.state.hasError) {
      this.setState({ hasError: false })
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-[var(--color-cream)] px-4 py-12 text-center text-[var(--color-ink)]">
          <section className="max-w-xl space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-sage)]">Incident technique</p>
            <h1 className="font-[var(--font-display)] text-4xl text-[var(--color-deep-blue)] sm:text-5xl">
              Une erreur est survenue
            </h1>
            <p className="text-base leading-8 text-[var(--color-muted)]">
              La page n'a pas pu s'afficher correctement. Vous pouvez revenir a l'accueil ou contacter directement le cabinet.
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <Button href="/">Retour a l'accueil</Button>
              <Button href={siteConfig.phones[0].href} variant="secondary">
                Appeler le cabinet
              </Button>
            </div>
          </section>
        </div>
      )
    }

    return this.props.children
  }
}

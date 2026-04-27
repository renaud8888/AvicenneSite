import { lazy, Suspense } from 'react'
import { BrowserRouter, MemoryRouter, Route, Routes, useLocation } from 'react-router-dom'
import { ErrorBoundary } from './components/ErrorBoundary'
import { Layout } from './components/layout/Layout'

const HomePage = lazy(() => import('./pages/HomePage'))
const ServicePage = lazy(() => import('./pages/ServicePage'))
const ConseilsPage = lazy(() => import('./pages/ConseilsPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))

type AppRouterProps = {
  initialEntries?: string[]
}

function RouterShell() {
  const location = useLocation()

  return (
    <ErrorBoundary resetKey={`${location.pathname}${location.search}${location.hash}`}>
      <Suspense
        fallback={
          <div className="flex min-h-screen items-center justify-center bg-[var(--color-cream)] text-[var(--color-deep-blue)]">
            Chargement…
          </div>
        }
      >
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/services/:slug" element={<ServicePage />} />
            <Route path="/conseils" element={<ConseilsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </ErrorBoundary>
  )
}

export function AppRouter({ initialEntries }: AppRouterProps) {
  if (initialEntries) {
    return (
      <MemoryRouter initialEntries={initialEntries}>
        <RouterShell />
      </MemoryRouter>
    )
  }

  return (
    <BrowserRouter>
      <RouterShell />
    </BrowserRouter>
  )
}

export default function App() {
  return <AppRouter />
}

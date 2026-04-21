import { lazy, Suspense } from 'react'
import { BrowserRouter, MemoryRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/layout/Layout'

const HomePage = lazy(() => import('./pages/HomePage'))
const ServicePage = lazy(() => import('./pages/ServicePage'))
const ConseilsPage = lazy(() => import('./pages/ConseilsPage'))

type AppRouterProps = {
  initialEntries?: string[]
}

function RouterShell() {
  return (
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
        </Route>
      </Routes>
    </Suspense>
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

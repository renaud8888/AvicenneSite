import '@testing-library/jest-dom/vitest'
import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { AppRouter } from '../App'
import { faqItems } from '../data/faq'
import { services } from '../data/services'
import { teamMembers } from '../data/team'

describe('Avicenne Dental smoke tests', () => {
  it("la page d'accueil se rend sans crash", async () => {
    render(<AppRouter initialEntries={['/']} />)
    expect(await screen.findByRole('heading', { name: /avicenne dental clinique/i })).toBeInTheDocument()
  })

  it('le header contient les 7 liens de navigation', async () => {
    render(<AppRouter initialEntries={['/']} />)
    const nav = await screen.findByRole('navigation', { name: /navigation principale/i })
    for (const label of ['Accueil', 'Notre équipe', 'Nos services', 'Qui est Avicenne?', 'Témoignages', 'FAQ', 'Contact']) {
      expect(within(nav).getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('le CTA prendre rendez-vous pointe vers doctoranytime', async () => {
    render(<AppRouter initialEntries={['/']} />)
    const ctas = await screen.findAllByRole('link', { name: /prendre rendez-vous/i })
    expect(ctas[0]).toHaveAttribute('href', 'https://www.doctoranytime.be/h/avicenne-dental')
  })

  it("les 11 praticiens sont affichés dans la section équipe", async () => {
    render(<AppRouter initialEntries={['/']} />)
    await screen.findByRole('heading', { name: /notre équipe/i })
    for (const member of teamMembers) {
      expect(screen.getByText(member.name)).toBeInTheDocument()
    }
    expect(screen.getAllByText(/dentiste associé/i)).toHaveLength(2)
  })

  it('les 9 services sont affichés avec leurs liens', async () => {
    render(<AppRouter initialEntries={['/']} />)
    await screen.findByRole('heading', { name: /nos services/i })
    const links = screen.getAllByRole('link', { name: /en savoir plus/i })
    const hrefs = links.map((link) => link.getAttribute('href'))
    for (const service of services) {
      expect(screen.getByText(service.title)).toBeInTheDocument()
      expect(hrefs).toContain(`/services/${service.slug}`)
    }
    expect(links).toHaveLength(9)
  })

  it('les 11 questions FAQ sont présentes', async () => {
    render(<AppRouter initialEntries={['/']} />)
    await screen.findByRole('heading', { name: /faq/i })
    for (const item of faqItems) {
      expect(screen.getByRole('button', { name: item.question })).toBeInTheDocument()
    }
  })

  it('les témoignages sont affichés', async () => {
    render(<AppRouter initialEntries={['/']} />)
    expect(await screen.findByText(/cannizzaro\.concetta cetty/i)).toBeInTheDocument()
  })

  it('les numéros de téléphone ont les bons href tel:', async () => {
    render(<AppRouter initialEntries={['/']} />)
    expect(await screen.findByRole('link', { name: /\+32 2 240 43 93/i })).toHaveAttribute('href', 'tel:+3222404393')
    expect(screen.getByRole('link', { name: /\+32 491 52 33 90/i })).toHaveAttribute('href', 'tel:+32491523390')
  })

  it("l'email a le bon href mailto:", async () => {
    render(<AppRouter initialEntries={['/']} />)
    expect(await screen.findByRole('link', { name: /avicennedental@hotmail\.com/i })).toHaveAttribute(
      'href',
      'mailto:avicennedental@hotmail.com',
    )
  })

  it.each(services.map((service) => service.slug))('chaque page service se rend correctement: %s', async (slug) => {
    render(<AppRouter initialEntries={[`/services/${slug}`]} />)
    expect(await screen.findByLabelText(/fil d'ariane/i)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
  })

  it('la page conseils se rend avec les 5 sections de conseils', async () => {
    render(<AppRouter initialEntries={['/conseils']} />)
    expect(await screen.findByRole('heading', { name: /quelques conseils de notre part/i })).toBeInTheDocument()
    expect(screen.getAllByRole('heading', { level: 2 })).toHaveLength(5)
  })

  it('le breadcrumb est présent sur les pages intérieures', async () => {
    render(<AppRouter initialEntries={['/conseils']} />)
    expect(await screen.findByLabelText(/fil d'ariane/i)).toBeInTheDocument()
  })

  it("aucune image n'a un alt vide", async () => {
    render(<AppRouter initialEntries={['/']} />)
    const images = await screen.findAllByRole('img')
    images.forEach((image) => {
      expect(image).toHaveAttribute('alt')
      expect(image.getAttribute('alt')).not.toBe('')
    })
  })
})

import { About } from '../components/sections/About'
import { Avicenna } from '../components/sections/Avicenna'
import { Contact } from '../components/sections/Contact'
import { FAQ } from '../components/sections/FAQ'
import { Hero } from '../components/sections/Hero'
import { Highlights } from '../components/sections/Highlights'
import { Services } from '../components/sections/Services'
import { Team } from '../components/sections/Team'
import { Testimonials } from '../components/sections/Testimonials'
import { siteConfig } from '../data/site'
import { SEO } from '../lib/seo'

export default function HomePage() {
  return (
    <>
      <SEO
        title="Avicenne Dental Clinique | Dentiste à Schaerbeek"
        description="Cabinet dentaire conventionné à Schaerbeek : soins adultes et enfants, urgences, orthodontie, implants et accompagnement humain."
        path="/"
        image={siteConfig.heroImage}
      />
      <Hero />
      <Highlights />
      <About />
      <Team />
      <Services />
      <Avicenna />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  )
}

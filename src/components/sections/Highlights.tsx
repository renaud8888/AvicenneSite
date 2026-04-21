import { Ambulance, Microscope, ShieldCheck } from 'lucide-react'
import { Card } from '../ui/Card'

const highlights = [
  {
    title: 'Urgences Dentaires',
    text: 'Veuillez nous appeler entre 9h00 et 15h00 pour planifier de vous recevoir en urgence.',
    icon: Ambulance,
  },
  {
    title: 'Equipe Professionnelle',
    text: "Notre équipe est constituée d'experts passionnés, formés aux dernières technologies pour des soins dentaires d'excellence.",
    icon: ShieldCheck,
  },
  {
    title: 'Equipements',
    text: 'Profitez de nos radiographies numériques, scanners 3D et équipements modernes pour des diagnostics précis et des traitements confortables.',
    icon: Microscope,
  },
]

export function Highlights() {
  return (
    <section className="px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
        {highlights.map((item) => {
          const Icon = item.icon
          return (
            <Card key={item.title} className="p-6 transition duration-300 hover:-translate-y-1">
              <div className="space-y-4">
                <div className="inline-flex rounded-2xl bg-[var(--color-cream)] p-3 text-[var(--color-deep-blue)]">
                  <Icon className="h-6 w-6" />
                </div>
                <h2 className="text-xl font-semibold text-[var(--color-deep-blue)]">{item.title}</h2>
                <p className="text-sm leading-7 text-[var(--color-muted)]">{item.text}</p>
              </div>
            </Card>
          )
        })}
      </div>
    </section>
  )
}

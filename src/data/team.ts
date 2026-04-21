import { asset } from './site'

export type TeamMember = {
  name: string
  role: string
  image: string
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Maryam Parvin',
    role: 'Dentiste - Gérante',
    image: asset('/images/team/maryam-parvin.jpg'),
  },
  {
    name: 'Jules Romain Diepton',
    role: 'Dentiste - Gérant',
    image: asset('/images/team/jules-romain-diepton.jpg'),
  },
  {
    name: 'Henri Darimont',
    role: 'Dentiste associé',
    image: asset('/images/team/henri-darimont.jpg'),
  },
  {
    name: 'Kamran Darimont',
    role: 'Dentiste associé',
    image: asset('/images/team/kamran-darimont.jpg'),
  },
  {
    name: 'Hatem Ben Amor',
    role: 'Dentiste collaborateur',
    image: asset('/images/team/hatem-ben-amor.jpg'),
  },
  {
    name: 'Naouech Wouroud',
    role: 'Dentiste collaborateur',
    image: asset('/images/team/naouech-wouroud.jpg'),
  },
  {
    name: 'Sarah Ben Miled',
    role: 'Orthodontiste',
    image: asset('/images/team/sarah-ben-miled.jpg'),
  },
  {
    name: 'Ahmed Alaa Bouderbala',
    role: 'Dentiste collaborateur',
    image: asset('/images/team/ahmed-bouderbala.webp'),
  },
  {
    name: 'Ouiam Ziti',
    role: 'Dentiste collaborateur',
    image: asset('/images/team/ouiam-ziti.jpeg'),
  },
  {
    name: 'Dounia El Jilali',
    role: 'Dentiste collaborateur',
    image: asset('/images/team/dounia-el-jilali.jpeg'),
  },
  {
    name: 'Firmin Nana',
    role: 'Endodontiste',
    image: asset('/images/team/firmin-nana.jpg'),
  },
]

export const siteConfig = {
  name: 'Avicenne Dental Clinique',
  shortName: 'Avicenne Dental',
  siteUrl: 'https://avicennedental.be',
  bookingUrl: 'https://www.doctoranytime.be/h/avicenne-dental',
  email: 'avicennedental@hotmail.com',
  phones: [
    { label: '+32 2 240 43 93', href: 'tel:+3222404393' },
    { label: '+32 491 52 33 90', href: 'tel:+32491523390' },
  ],
  address: {
    streetAddress: 'Boulevard Lambermont 79',
    postalCode: '1030',
    addressLocality: 'Schaerbeek',
    addressRegion: 'Bruxelles-Capitale',
    addressCountry: 'BE',
  },
  geo: {
    latitude: 50.8699,
    longitude: 4.3838,
  },
  mapEmbedUrl:
    'https://www.google.com/maps?q=Boulevard%20Lambermont%2079%2C%201030%20Schaerbeek&z=15&output=embed',
  emergencyMessage:
    "Pour toute urgence, merci d'appeler avant de vous rendre sur place. Nous vous accueillerons dans les meilleurs délais.",
  heroImage:
    'https://avicennedental.be/wp-content/uploads/2023/02/Avicenne-Dental_Web-25-1-3.jpg',
  logo: 'https://avicennedental.be/wp-content/uploads/2023/01/logo_site_Plan-de-travail-1-300x75-1.png',
  avicennaImage:
    'https://avicennedental.be/wp-content/uploads/2023/01/Avicenna-miniatur.jpg',
} as const

export const openingHours = [
  { day: 'Lundi', hours: '9h00 – 18h30', opens: '09:00', closes: '18:30' },
  { day: 'Mardi', hours: '9h00 – 18h30', opens: '09:00', closes: '18:30' },
  { day: 'Mercredi', hours: '9h00 – 18h30', opens: '09:00', closes: '18:30' },
  { day: 'Jeudi', hours: '9h00 – 18h30', opens: '09:00', closes: '18:30' },
  { day: 'Vendredi', hours: '9h00 – 18h30', opens: '09:00', closes: '18:30' },
  { day: 'Samedi', hours: '10h00 – 18h00', opens: '10:00', closes: '18:00' },
] as const

export const navigationItems = [
  { label: 'Accueil', href: '#hero' },
  { label: 'Notre équipe', href: '#equipe' },
  { label: 'Nos services', href: '#services' },
  { label: 'Qui est Avicenne?', href: '#avicenne' },
  { label: 'Témoignages', href: '#temoignages' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
] as const

export type Testimonial = {
  name: string
  role?: string
  quote: string
  link?: string
}

export const googleReviewsUrl = 'https://search.google.com/local/reviews?placeid=ChIJjc971BPDw0cRWE71y3-HlEU'

export const testimonials: Testimonial[] = [
  {
    name: 'Cannizzaro.concetta Cetty',
    role: 'Patient',
    quote:
      "Je suis très satisfait et très contente des assistantes et des dentistes. Je conseille à tout le monde d'aller chez eux ils sont très gentils, ils vous expliquent très bien les soins qu'ils vont faire. Je suis très heureuse d'être soignée la bas",
    link: googleReviewsUrl,
  },
  {
    name: 'Eula Hunter',
    quote:
      "Clinique super aceulle chaleureux dentiste manigfique je le conseille vraiment à tous le monde j'ai été suivi par docteur darimont kamran pour des soins dentaires exatrection des dents pour une prothèse je vous garanti il et manigfique de le début jusqu'à la fin de mais dents franchement un grand merci à toute l'équipe",
    link: googleReviewsUrl,
  },
  {
    name: 'Amine Erguig',
    role: 'Patient',
    quote:
      "Le dentiste Darimont Kamran est très compétent, à l'écoute de ses clients et toujours souriant. J'ai apprécié sa façon de travailler, il vous explique chaque étape pour vous rassurer. Il est vraiment doué et soucieux du moindre détail. Un vrai artiste !",
    link: googleReviewsUrl,
  },
  {
    name: 'Stephanie Cloots',
    role: 'Patient',
    quote:
      "Super experience pour le dentiste. Dr darimont est top+++. Super doux, si il y a des soins à faire en plus il vous le propose mais vous oblige pas. Il vous renseigne direct à combien ca vous reviendra. J'adore leur système de tiers payant. Pas de stress pour courir a la mutuelle pour le remboursement, cela se fait automatiquement au besoin.",
    link: googleReviewsUrl,
  },
  {
    name: 'Christian Sillani',
    role: 'Patient',
    quote: "Merci à Mr Darimont de m'avoir pris en urgence malgrés votre emplois du temps chargé, la douleur était insuportable",
    link: googleReviewsUrl,
  },
  {
    name: 'Corentin',
    role: 'Patient',
    quote:
      "J'y viens depuis plusieurs années, et je peux témoigner qu'il est possible d'aller chez les dentistes sans en avoir peur. Les soins sont prodigués avec douceur, sans douleur et l'accueil est toujours chaleureux !",
    link: googleReviewsUrl,
  },
  {
    name: 'Chantal Godfrinne',
    role: 'Patient',
    quote:
      'Je suis très contente, que ce soit les dentistes ou le personnel. Ils sont très professionnels et vraiment très gentils. Je les recommande',
    link: googleReviewsUrl,
  },
  {
    name: 'Alex Raphoz',
    role: 'Patient',
    quote:
      "J'ai eu mal aux dents le 24 décembre, un médecin a gentiment accepté de me prendre en urgence le 25 au matin alors qu'ils étaient censés être fermés ! ils ont sauvé mon dîner de Noël ! Merci à eux, vraiment professionnels et si gentils recommandent à 100% !",
    link: googleReviewsUrl,
  },
  {
    name: 'Coralie Tesseur',
    role: 'Patient',
    quote:
      "Si vous cherchez un excellent dentiste à Bruxelles, n'hésitez surtout pas ! Très bon cabinet et le dentiste Kamran Darimont effectue de très bons soins tout en donnant des explications toujours utiles, encore merci !",
    link: 'https://maps.app.goo.gl/yM5KghbhEcAuqmv59',
  },
]

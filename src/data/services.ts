import {
  Baby,
  BrushCleaning,
  Crown,
  HeartPulse,
  ScanSearch,
  ShieldCheck,
  Sparkles,
  Syringe,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type Service = {
  slug:
    | 'dentisterie-pediatrique'
    | 'caries-dentaires'
    | 'detartrage-dentaire'
    | 'endodontie'
    | 'protheses-amovibles'
    | 'blanchiment-dentaire'
    | 'orthodontie'
    | 'protheses-fixes'
    | 'implant-dentaire'
  title: string
  excerpt: string
  image: string
  images?: string[]
  content: string[]
  sections?: { title: string; image?: string }[]
  icon: LucideIcon
  metaDescription: string
}

export const services: Service[] = [
  {
    slug: 'dentisterie-pediatrique',
    title: 'Dentisterie Pédiatrique',
    excerpt:
      "La pédodontie est la dentisterie pédiatrique, c'est-à-dire la prise en charge des enfants qui nécessitent des soins dentaires...",
    image: '/images/services/pedodontie.jpg',
    content: [
      "La pédodontie est la dentisterie pédiatrique, c'est-à-dire la prise en charge des enfants qui nécessitent des soins dentaires. L'accueil et la communication sont très importants en pédodontie, afin de rassurer l'enfant et de le mettre en confiance vis-à-vis des soins qui vont lui être dispensés. Si un enfant vit bien ses premiers traitements dentaires, il prendra plus facilement en charge sa santé buccodentaire tout au long de sa vie.",
      "Les principales pathologies de l'enfant sont :",
      '• La carie dentaire est la plus fréquente. Elle se développe plus vite chez l’enfant que chez l’adulte. Chez les tout petits, la « carie du biberon » détériore les premières dents des enfants qui boivent du lait ou du jus de fruits au coucher ou pendant la nuit.',
      "• Les abcès de gencives, qui peuvent venir lors de la pousse d'une dent de lait.",
      "Actuellement les soins pour les enfants et adolescents avant 18 ans sont intégralement remboursés par la mutualité. Parfois suite à un examen dentaire une visite chez l'orthodontiste s'avère nécessaire, votre dentiste pourra vous adresser chez notre orthodontiste pour un examen plus avancé.",
    ],
    icon: Baby,
    metaDescription: "Dentisterie pédiatrique à Schaerbeek : soins dentaires pour enfants, accompagnement rassurant et suivi préventif.",
  },
  {
    slug: 'caries-dentaires',
    title: 'Caries Dentaires',
    excerpt:
      "On détecte les premiers symptômes de la carie dentaire à la formation de petites tâches blanches crayeuses sur la dent...",
    image: '/images/services/carie.jpg',
    content: [
      "On détecte les premiers symptômes de la carie dentaire à la formation de petites taches blanches crayeuses sur la dent. Une sensibilité accrue aux pressions sur une dent, au froid, aux aliment sucrés, sont également des signes annonciateurs d'une carie en train de se former. Peu à peu, une cavité se forme à la surface de l'émail de la dent. Cette cavité, si elle n'est pas traitée rapidement par un dentiste, continue de se creuser jusqu'à atteindre les nerfs de la dent. Les caries dentaires peuvent avoir des conséquences importantes sur la santé car il s'agit d'infections qui peuvent se propager rapidement.",
      "Traitements caries dentaires : Pour une carie n'ayant atteint que l'émail de la dent, le dentiste l'élimine et comble le trou avec un « plombage » à base d'alliage dentaire ou de composites en résine. Les avantages de ces produits sont leur durée de séchage, très rapide et, dans le cas du « ciment composite dentaire » sa couleur proche de celle de la dent. Si la carie a atteint le nerf, la dent doit être dévitalisée. La dent cariée est nettoyée et vidée, tout en préservant l'enveloppe de la racine. Le dentiste reconstitue ensuite la forme de la dent, pour que vous puissiez retrouver son usage.",
    ],
    icon: ShieldCheck,
    metaDescription: 'Traitement des caries dentaires à Avicenne Dental : diagnostic précoce, restauration et soins conservateurs.',
  },
  {
    slug: 'detartrage-dentaire',
    title: 'Détartrage Dentaire',
    excerpt:
      'Le tartre dentaire est le résultat du durcissement de la plaque dentaire, qui se dépose sur la surface de la dent. Constituée de bactéries...',
    image: '/images/services/detartrage.jpg',
    content: [
      "Le tartre dentaire est le résultat du durcissement de la plaque dentaire, qui se dépose sur la surface de la dent. Essentiellement constituée de bactéries, la plaque dentaire non éliminée se transforme en tartre, sépare la gencive de la racine des dents et crée un nid de bactéries favorables aux caries. Faire un détartrage régulier des dents chez son dentiste évite l'accumulation du tartre qui peut se transformer en gingivite ou même parodontale, et provoquer un déchaussement de la dent.",
      "Les traitements chez le dentiste sont indolores et débarrassent l'intégralité du dépôt de tartre sur les dents, et leur rend, par la même occasion, leur couleur d'origine. Suite au détartrage des dents, le dentiste réalise un polissage de la dent. L'apparition du tartre sur les dents concerne les adultes comme les plus jeunes, c'est pourquoi il est recommandé de bien se brosser les dents 2 fois par jour. Les personnes les plus à même de faire un détartrage dentaire fréquent sont celles qui consomment des boissons comme le thé ou le café, ainsi que les fumeurs. Même s'il est recommandé de faire un détartrage au moins une fois par an, cela peut varier d'une personne à une autre. Suivez les conseils de votre dentiste qui, après un examen bucco-dentaire, sera le mieux placé pour vous dire quoi faire.",
    ],
    icon: BrushCleaning,
    metaDescription: 'Détartrage dentaire professionnel à Schaerbeek pour prévenir tartre, gingivite et inconfort gingival.',
  },
  {
    slug: 'endodontie',
    title: 'Endodontie',
    excerpt:
      "L'endodontie consiste à dévitaliser la dent. Lorsqu'une carie est trop profonde et que le nerf est touché, il est impératif de nettoyer les racines de la dent.",
    image: '/images/services/endodontie.jpeg',
    content: [
      "L'endodontie consiste à dévitaliser la dent. Lorsqu'une carie est trop profonde et que le nerf est touché, il est impératif de nettoyer les racines de la dent, il faut alors la dévitaliser pour éviter une infection dentaire. Une fois le nerf retiré, la dent est reconstruite. Il est possible de couronner la dent par la suite.",
    ],
    icon: HeartPulse,
    metaDescription: 'Endodontie et dévitalisation à Avicenne Dental pour traiter une infection profonde et préserver la dent.',
  },
  {
    slug: 'protheses-amovibles',
    title: 'Prothèses Dentaires Amovibles',
    excerpt:
      "La prothèse dentaire amovible, couramment appelée dentier, peut remplacer une ou plusieurs dents et se retirer en fonction des besoins du patient...",
    image: '/images/services/prothese-amovible.jpg',
    images: [
      '/images/services/prothese-amovible.jpg',
      '/images/services/prothese-amovible-complete.jpg',
      '/images/services/implant-amovible-partiel.jpg',
    ],
    content: [
      "La prothèse dentaire amovible, couramment appelée dentier, peut remplacer une ou plusieurs dents et peut se placer ou se retirer en fonction des besoins du patient. On en distingue deux types : les prothèses dentaires amovibles partielles et les prothèses dentaires amovibles complètes.",
      "Ces prothèses amovibles doivent être retirées et nettoyées à la fin de chaque repas. Ce type de prothèse est amovible et encombrante, mais elle a cependant l'avantage d'être économique et rapide à réaliser. Cette prothèse est facilement réparable et évolutive comme dans le cas d'une perte supplémentaire d'une dent, la dentition peut être complétée par adjonction sur le même appareil. Elles sont parfois utilisées comme prothèses provisoires pour pallier l'absence de dents en attendant la conception d'une prothèse fixe comme un bridge dentaire. En fonction des cas, votre dentiste vous conseillera de manière adaptée.",
    ],
    sections: [{ title: 'PROTHÈSE AMOVIBLE PARTIELLE', image: '/images/services/prothese-amovible-complete.jpg' }],
    icon: Crown,
    metaDescription: 'Prothèses dentaires amovibles partielles ou complètes pour remplacer une ou plusieurs dents avec confort.',
  },
  {
    slug: 'blanchiment-dentaire',
    title: 'Blanchiment Dentaire',
    excerpt:
      "Ces techniques sont réservées à des cas particuliers, et ne doivent surtout pas servir de prétexte à une mauvaise hygiène bucco-dentaire...",
    image: '/images/services/blanchiment.jpg',
    content: [
      "Le blanchiment dentaire permet d'éclaircir la teinte des dents. La coloration des dents est influencée par différents éléments :",
      "• l'hérédité",
      '• la prise de certains médicaments pendant la période de formation de la dent.',
      '• le mode de vie : consommation de café, thé, tabac, vin…',
      "Avant de commencer un traitement de blanchiment dentaire, le praticien établira un bilan buccodentaire. Ainsi, l'on vérifiera qu'il n'y a pas de contre-indications au traitement : caries, maladies, parodontales…",
      "Gouttières ambulatoires : Le praticien prend une empreinte de la bouche, confectionne des gouttières, qui seront appliquées toutes les nuits durant environ deux semaines. Le patient insère le gel blanchissant dans la gouttière, et la porte pendant un temps défini par le praticien.",
    ],
    icon: Sparkles,
    metaDescription: 'Blanchiment dentaire encadré par votre dentiste pour éclaircir la teinte des dents en toute sécurité.',
  },
  {
    slug: 'orthodontie',
    title: 'Orthodontie',
    excerpt:
      "L'orthodontie consiste à corriger les malpositions et encombrements dentaires. Au delà de l'aspect esthétique, la phonation...",
    image: '/images/services/orthodontie.jpg',
    content: [
      "L'orthodontie consiste à corriger les malpositions et encombrements dentaires. Au-delà de l'aspect esthétique, d'autres fonctions comme la phonation, la mastication et respiration peuvent être rétablies. Pour les jeunes comme pour les adultes il est parfois difficile d'accepter un traitement en orthodontie. Les dispositifs « multi attaches » traditionnellement en acier, peuvent se faire en céramique et sont donc plus discret.",
      "La technique invisible par gouttière Invisalign est aussi en plein essor et est très appréciée par les patients avec une forte demande esthétique. Renseignez-vous auprès de notre orthodontiste qui vous conseillera le traitement le plus adapté à votre cas. De manière général c'est souvent votre dentiste qui vous orientera vers l'orthodontiste. Pour les jeunes patients le traitement doit être démarré avant l'âge de 15 ans pour bénéficier du remboursement partiel de la mutualité. Certains appareils doivent être placés avant l'âge de 8 ans pour avoir un remboursement partiel (ex : les disjoncteurs).",
    ],
    icon: ScanSearch,
    metaDescription: 'Orthodontie pour enfants et adultes, appareils classiques, céramiques ou solutions plus discrètes.',
  },
  {
    slug: 'protheses-fixes',
    title: 'Prothèses Dentaires Fixes',
    excerpt:
      'Les prothèses dentaires fixes remplacent soit une partie de dent, soit une ou plusieurs dents, de façon permanente...',
    image: '/images/services/couronne.jpg',
    images: [
      '/images/services/couronne.jpg',
      '/images/services/bridge.jpg',
      '/images/services/inlay-onlay.jpg',
    ],
    content: [
      "Les prothèses dentaires fixes remplacent soit une partie de dent, soit une ou plusieurs dents, de façon permanente. Elles permettent de retrouver l'esthétisme d'un sourire naturel et les fonctions masticatoires sans avoir à les retirer pour l'entretien. Il n'existe donc aucun inconvénient en termes d'hygiène.",
      'Il existe plusieurs types de prothèses dentaires :',
      '• Les couronnes pour remplacer l’ensemble de la partie visible de la dent en la recouvrant et la solidifiant.',
      '• Les bridges pour remplacer une ou plusieurs dents manquantes.',
      '• Les onlays/inlays qui consistent en une couronne partielle de la dent.',
      "Les onglets ci-dessous détaillent ces différents types de prothèses dentaires fixes pour que vous soyez informés le mieux possible. N'hésitez pas à prendre rendez-vous avec un de nos spécialistes dentaires qui, après une consultation, pourra évaluer vos besoins. Vous aurez ainsi au préalable un devis transparent avec le prix de la prothèse dentaire fixe qui vous est adaptée.",
    ],
    sections: [
      { title: 'COURONNE', image: '/images/services/couronne.jpg' },
      { title: 'BRIDGE', image: '/images/services/bridge.jpg' },
      { title: 'INLAY-ONLAY', image: '/images/services/inlay-onlay.jpg' },
    ],
    icon: Crown,
    metaDescription: 'Couronnes, bridges et inlays-onlays pour restaurer durablement les dents avec une solution fixe.',
  },
  {
    slug: 'implant-dentaire',
    title: 'Implant Dentaire',
    excerpt:
      "La pose d'un implant dentaire est un acte médical simple, réalisé sous anesthésie locale, pour remplacer une ou plusieurs dents manquantes...",
    image: '/images/services/implant.jpg',
    content: [
      "La pose d'un implant dentaire est un acte médical simple, réalisé sous anesthésie locale, pour remplacer une ou plusieurs dents manquantes, tout en préservant les dents saines à proximité. Le principe repose sur une racine artificielle qui permettra à la couronne dentaire ou la prothèse de se fixer. La pose se déroule en deux temps. Lors de la première opération, le chirurgien-dentiste incise la gencive à l'endroit où sera placé l'implant. Ce dernier est vissé au niveau de la racine de la dent. Après quelques mois de cicatrisation, une seconde opération consiste à mettre en place la dent artificielle, une couronne, un bridge ou une prothèse. Les implants dentaires ont démontré leur efficacité, leur innocuité vis-à-vis des autres dents, leur durée de vie et la qualité du résultat esthétique. Le prix d'une chirurgie dentaire par implant varie en fonction du nombre de dents à remplacer. Un devis transparent vous sera réalisé avant le traitement.",
    ],
    icon: Syringe,
    metaDescription: 'Implant dentaire à Schaerbeek pour remplacer une ou plusieurs dents avec stabilité et esthétique durable.',
  },
]

export const servicesBySlug = Object.fromEntries(
  services.map((service) => [service.slug, service]),
) as Record<Service['slug'], Service>

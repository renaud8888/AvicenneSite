export type FAQItem = {
  question: string
  answer: string
}

export const faqItems: FAQItem[] = [
  {
    question: 'Dois-je payer mes soins ?',
    answer:
      'Notre centre dentaire est conventionné et applique le tier payant. Ce qui signifie que les tarifs minimums sont appliqués. En fonction de votre statut mutuel, vous devez payer ou pas le ticket modérateur de vos soins (= la partie non remboursée par votre mutuelle).',
  },
  {
    question: 'Comment connaitre mon statut mutuel ?',
    answer:
      "Vous pouvez connaitre votre statut mutuel (Omnio, normal ou malade chronique) soit en contactant votre mutualité, soit en demandant à votre dentiste (si votre carte d'identité est enregistrée dans votre dossier).",
  },
  {
    question: "Je n'ai pas été chez le dentiste l'année précédente, cela change t'il le remboursement ?",
    answer:
      'Oui, vous devez au moins faire une visite par an pour garder le remboursement maximum auquel vous avez droit.',
  },
  {
    question: 'Suis-je remboursé pour tous les soins ?',
    answer:
      "Non, certains soins ne sont pas pris en charge par la mutualité. C'est le cas par exemple des extractions et des prothèses qui ne sont remboursés qu'à partir de 50 ans. D'autres soins comme les couronnes, bridges et implants ne sont pas du tout remboursés. Certains soins plus importants, comme les soins parodontaux, peuvent également nécessiter un supplément d'honoraires non pris en charge par la mutualité.",
  },
  {
    question: 'Tous les dentifrices sont-ils pareils ?',
    answer:
      "La majorité des dentifrices ont la même composition. Le choix de la marque importe peu, mais nous vous conseillions d'utiliser un dentifrice contenant du fluor.",
  },
  {
    question: 'Les blanchiments dentaires sont-ils dangereux ?',
    answer:
      'Non, lorsque que cela est contrôlé et surveillé par votre dentiste vous ne risquez rien. Ce dernier vérifiera au préalable que toutes les conditions soient réunies pour un blanchiment sans danger.',
  },
  {
    question: 'La brosse à dent électrique est-elle plus efficace ?',
    answer:
      "Oui, cela a été démontrée scientifiquement. Nous ne pouvons que vous conseiller d'utiliser une brosse à dent électriques. La brosse à dent classique reste une bonne option mais attention d'avoir une très bonne technique de brossage.",
  },
  {
    question: 'Mes gencives saignent, que faire ?',
    answer:
      "Si vos gencives saignent ponctuellement, nous vous recommandons un dentifrice pour inflammation gingivale. Si le saignement persiste, il faut consulter votre dentiste.",
  },
  {
    question: 'Quelle est la différence entre gingivite et parodontite ?',
    answer:
      'La gingivite est une inflammation passagère de vos gencives pouvant créer un léger saignement. La parodontite est une maladie chronique de votre parodonte nécessitant une prise en charge.',
  },
  {
    question: 'Combien de détartrage faut-il faire par an ?',
    answer:
      "Vous n'êtes remboursé que pour un seul détartrage par an et dans la majorité des cas cela est suffisant. S'il est nécessaire pour vous d'en faire plus régulièrement, votre dentiste vous le communiquera.",
  },
  {
    question: 'Les soins orthodontiques sont-ils remboursés ?',
    answer:
      "Ces soins sont partiellement remboursés jusque 15 ans, certains traitements ne le sont que jusque 8 ans (comme les disjoncteurs). Passé 15 ans, il n'y a plus aucun remboursement pour l'orthodontie",
  },
]

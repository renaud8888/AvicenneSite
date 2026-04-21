import { Baby, Droplets, ShieldPlus, Sparkles, Stethoscope } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type Conseil = {
  title: string
  content: string[]
  icon: LucideIcon
}

export const conseils: Conseil[] = [
  {
    title: 'Notre conseil pour les dents sensibles',
    icon: ShieldPlus,
    content: [
      "Vous pouvez commencer par utiliser un dentifrice pour dents sensibles et le bain de bouche associés. Si les sensibilités persistent dans le temps, il faut consulter votre dentiste.",
    ],
  },
  {
    title: "Nos conseils pour l'entretien de vos prothèses",
    icon: Stethoscope,
    content: [
      "Les premiers jours : Essayez de garder votre prothèse le plus possible pour qu'elle s'adapte rapidement. L'appareil vous semble encombrant, vous avez des nausées, votre salive est plus abondante, vous avez du mal à parler. Tous ces petits soucis sont passagers et disparaissent avec le temps.",
      "Les repas : Au début, privilégiez une alimentation facile à mâcher et peu à peu votre efficacité masticatoire s'améliorera. Après chaque repas, retirez votre prothèse et brossez-la avec une brosse spécifique et un produit adapté. Aucun dépôt ne doit subsister. Brossez également les dents restantes et les surfaces muqueuses sur lesquelles s'appuie la prothèse.",
      "Pose et dépose : Appareil complet : Les deux appareils doivent se porter en même temps, ils se stabilisent mutuellement. Appareil partiel : L'appareil doit être inséré à fond avec les deux mains sans forcer. Au début, nous vous conseillons de vous entraîner devant un miroir. Dans certains cas il peut être nécessaire d'engager un côté avant l'autre.",
      "Nettoyage : Nettoyer vos prothèses matin et soir avec une brosse à dent prévue pour vos prothèses et du savon de Marseille (pas de dentifrices pour les prothèses) après les avoir enlevés de la bouche. En cas de prothèses dentaire partielle, un brossage régulier des dents (sans les prothèses en bouche), est primordiale afin d'éviter les caries au niveau des dents restantes.",
      'Fracture : En cas de fracture, conservez tous les morceaux et consultez rapidement. Votre praticien est à même de faire une réparation solide et invisible.',
    ],
  },
  {
    title: 'Notre conseil pour des gencives qui saignent',
    icon: Droplets,
    content: [
      "Si vos gencives saignent de temps en temps, nous vous recommandons d'utiliser un dentifrice spécial pour les inflammations gingivales (que vous trouverez en pharmacie). Si vous constater un saignement anormal, un saignement qui persiste dans le temps, un déchaussement ou des douleurs, il faut faire examiner vos gencives par un dentiste pour vérifier que vous n'ayez pas une parodontite (qui est une maladie chronique des gencives).",
    ],
  },
  {
    title: 'Nos conseils pour les tout petits',
    icon: Baby,
    content: [
      "La première visite chez le dentiste peut se faire dès l'âge de 3 ans. Qui dit première dent dit première brosse à dent ! Il est important de commencer à brosser les dents dès leur apparition. Nous vous conseillons également de ne pas donner le biberon juste avant d'aller dormir car tout le sucre reste en bouche et cela crée des caries appelées les caries du nourrisson. Nous vous conseillons également d'arrêter la tétine le plus rapidement possible car cela créer une déformation de l'occlusion appelée béance. Jusqu'à 18 ans, il est important de faire un contrôle tous les 6 mois afin de pouvoir intervenir rapidement en cas de carie. Chez les enfants, la carie se propage plus rapidement.",
    ],
  },
  {
    title: 'Nos conseils pour un blanchiment dentaire réussi',
    icon: Sparkles,
    content: [
      "Avant de placer vos gouttières, il faut qu'elles soient propres et sèches et que vos dents aient été brossées. Après le temps de pose, il faut rebrosser les dents pour éliminer tout le produit.",
      "Nous vous conseillons d'éviter tout aliments colorés pour un résultats optimal. Évitez le thé, café, épice, tomates, vin rouge, chocolat noir, etc. Et cela durant toute la durée du traitement et 2 semaines après la fin du traitement.",
      "Il est également fortement déconseillé de fumer durant le traitement. L'apparition de sensibilité est normale, si ces dernières créent des douleurs intenses, il faut consulter votre dentiste.",
    ],
  },
]

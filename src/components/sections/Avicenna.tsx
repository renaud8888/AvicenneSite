import { siteConfig } from '../../data/site'

export function Avicenna() {
  return (
    <section id="avicenne" className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
        <div className="overflow-hidden rounded-[2rem] border border-white/70 bg-white/70 p-3 shadow-[0_40px_70px_-48px_rgba(27,58,92,0.55)]">
          <img
            src={siteConfig.avicennaImage}
            alt="Miniature représentant Avicenne"
            className="aspect-[4/5] w-full rounded-[1.5rem] object-cover"
            loading="lazy"
          />
        </div>
        <div className="space-y-5">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-sage)]">QUI EST AVICENNE?</p>
          <h2 className="font-[var(--font-display)] text-4xl text-[var(--color-deep-blue)] sm:text-5xl">
            Une figure fondatrice de la médecine
          </h2>
          <div className="space-y-4 text-base leading-8 text-[var(--color-muted)]">
            <p>
              Ibn Sina, connu en Occident sous le nom d&apos;Avicenne, est un philosophe et médecin perse, né le 7 août 980 près de Boukhara, dans l&apos;actuel Ouzbékistan et mort en juin 1037 à Hamadan (Iran). Il est l&apos;auteur d&apos;ouvrages de référence en médecine et en philosophie, ainsi que de sciences voisines, comme l&apos;astronomie, l&apos;alchimie, et la psychologie rédigés en arabe classique.
            </p>
            <p>
              Ses œuvres principales sont l&apos;encyclopédie médicale Qanûn (Canon de la médecine) et ses deux encyclopédies scientifiques le Livre de la guérison (de l&apos;âme) et Danesh-e Nâma (Livre de science).
            </p>
            <p>
              Dans son Qanûn, il opère une vaste synthèse médico-philosophique avec la logique d&apos;Aristote, combinée avec le néo-platonisme, élevant la dignité de la médecine comme discipline intellectuelle, compatible avec le monothéisme. Son influence sera prédominante dans l&apos;Occident médiéval latin jusqu&apos;au xvie siècle.
            </p>
            <p>
              Les textes d&apos;Avicenne ont eu une grande influence et ont été les textes par défaut utilisés dans les cours de médecine européens jusqu&apos;aux années 1600. Le premier ouvrage à identifier des maladies contagieuses telles que la tuberculose, à émettre l&apos;hypothèse que le sol et l&apos;eau répandent la maladie et à exposer les bases de l&apos;anatomie, de la pédiatrie et de la gynécologie, le « Canon » est maintenant crédité comme formant la base de la médecine occidentale.
            </p>
            <p>
              Avicenne consacra de nombreuses pages à la dentisterie en insistant sur l&apos;hygiène et la prophylaxie, et donna beaucoup de détails sur les traitements des douleurs dentaires.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

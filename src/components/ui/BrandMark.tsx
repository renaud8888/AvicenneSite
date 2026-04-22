import { siteConfig } from '../../data/site'

type BrandMarkProps = {
  compact?: boolean
  className?: string
  textClassName?: string
}

export function BrandMark({ compact = false, className, textClassName }: BrandMarkProps) {
  return (
    <div className={['flex items-center gap-3', className].filter(Boolean).join(' ')}>
      <img
        src={siteConfig.logo}
        alt="Logo Avicenne Dental"
        className={compact ? 'h-10 w-auto sm:h-11' : 'h-12 w-auto sm:h-14'}
        loading="eager"
      />
      <div className={['space-y-0.5', textClassName].filter(Boolean).join(' ')}>
        <p className="font-[var(--font-display)] text-xl leading-none text-[var(--color-deep-blue)] sm:text-2xl">
          Avicenne Dental
        </p>
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-[var(--color-sage)] sm:text-[0.72rem]">
          Cabinet dentaire
        </p>
      </div>
    </div>
  )
}

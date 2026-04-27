import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

type SharedProps = {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost' | 'cta'
  className?: string
}

type AnchorProps = SharedProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string
  }

type NativeButtonProps = SharedProps & ButtonHTMLAttributes<HTMLButtonElement>

const classes = {
  base: 'inline-flex items-center justify-center rounded-full border px-5 py-3 text-sm font-semibold transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-gold)]',
  primary:
    'border-[var(--color-deep-blue)] bg-[var(--color-deep-blue)] text-white shadow-[0_18px_40px_-24px_rgba(27,58,92,0.7)] hover:-translate-y-0.5 hover:bg-[color-mix(in_srgb,var(--color-deep-blue)_92%,white)]',
  cta:
    'border-[var(--color-gold)] bg-[var(--color-gold)] text-[var(--color-deep-blue)] font-bold shadow-[0_18px_40px_-24px_rgba(201,168,76,0.6)] hover:-translate-y-0.5 hover:bg-[color-mix(in_srgb,var(--color-gold)_85%,white)]',
  secondary:
    'border-[color-mix(in_srgb,var(--color-deep-blue)_15%,white)] bg-white/90 text-[var(--color-deep-blue)] hover:-translate-y-0.5 hover:border-[var(--color-deep-blue)]',
  ghost: 'border-transparent bg-transparent text-[var(--color-deep-blue)] hover:bg-white/70',
} as const

const buildClassName = (variant: SharedProps['variant'], className?: string) =>
  [classes.base, classes[variant ?? 'primary'], className].filter(Boolean).join(' ')

export function Button(props: AnchorProps | NativeButtonProps) {
  const { children, variant = 'primary', className, ...rest } = props

  if ('href' in rest) {
    const { href, ...anchorProps } = rest
    return (
      <a className={buildClassName(variant, className)} href={href} {...anchorProps}>
        {children}
      </a>
    )
  }

  return (
    <button className={buildClassName(variant, className)} {...rest}>
      {children}
    </button>
  )
}

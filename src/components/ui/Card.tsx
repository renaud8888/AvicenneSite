import type { HTMLAttributes, ReactNode } from 'react'

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
}

export function Card({ children, className, ...props }: CardProps) {
  return (
    <div
      className={[
        'rounded-[1.25rem] border border-[color-mix(in_srgb,var(--color-deep-blue)_8%,white)] bg-white/90 shadow-[0_30px_60px_-42px_rgba(27,58,92,0.45)] backdrop-blur-sm',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {children}
    </div>
  )
}

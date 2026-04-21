import type { ImgHTMLAttributes } from 'react'
import { useState } from 'react'

type ImageProps = ImgHTMLAttributes<HTMLImageElement>

export function Image({ alt, className, ...props }: ImageProps) {
  const [hasError, setHasError] = useState(false)

  if (hasError) {
    return (
      <div
        className={`flex items-center justify-center bg-[var(--color-cream)] text-sm text-[var(--color-muted)] ${className ?? ''}`}
      >
        Image non disponible
      </div>
    )
  }

  return <img alt={alt} className={className} onError={() => setHasError(true)} {...props} />
}

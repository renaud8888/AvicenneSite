import { PhoneCall } from 'lucide-react'
import { siteConfig } from '../../data/site'

export function UrgencyBanner() {
  return (
    <div className="bg-[var(--color-deep-blue)] px-4 py-3 text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 text-center text-xs font-medium leading-5 sm:text-sm">
        <PhoneCall className="h-4 w-4 shrink-0" aria-hidden="true" />
        <p>{siteConfig.emergencyMessage}</p>
      </div>
    </div>
  )
}

import { useEffect } from 'react'
import { openingHours, siteConfig } from '../data/site'

type SEOProps = {
  title: string
  description: string
  path: string
  image?: string
}

const META_SELECTORS = {
  description: 'meta[name="description"]',
  ogTitle: 'meta[property="og:title"]',
  ogDescription: 'meta[property="og:description"]',
  ogImage: 'meta[property="og:image"]',
  ogUrl: 'meta[property="og:url"]',
} as const

const ensureMetaTag = (selector: string, attribute: 'name' | 'property', value: string) => {
  let tag = document.head.querySelector<HTMLMetaElement>(selector)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(attribute, value)
    document.head.appendChild(tag)
  }
  return tag
}

const toAbsoluteUrl = (url: string) => {
  if (/^https?:\/\//i.test(url)) {
    return url
  }

  return `${siteConfig.siteUrl}${url.startsWith('/') ? url : `/${url}`}`
}

export function SEO({ title, description, path, image = siteConfig.heroImage }: SEOProps) {
  useEffect(() => {
    const absoluteImage = toAbsoluteUrl(image)
    const absoluteUrl = toAbsoluteUrl(path)

    document.title = title

    ensureMetaTag(META_SELECTORS.description, 'name', 'description').content = description
    ensureMetaTag(META_SELECTORS.ogTitle, 'property', 'og:title').content = title
    ensureMetaTag(META_SELECTORS.ogDescription, 'property', 'og:description').content = description
    ensureMetaTag(META_SELECTORS.ogImage, 'property', 'og:image').content = absoluteImage
    ensureMetaTag(META_SELECTORS.ogUrl, 'property', 'og:url').content = absoluteUrl

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = absoluteUrl

    let script = document.getElementById('ld-dentist')
    if (!script) {
      script = document.createElement('script')
      script.id = 'ld-dentist'
      script.setAttribute('type', 'application/ld+json')
      document.head.appendChild(script)
    }

    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Dentist',
      name: siteConfig.name,
      image: absoluteImage,
      url: siteConfig.siteUrl,
      telephone: siteConfig.phones[0].label,
      email: siteConfig.email,
      address: {
        '@type': 'PostalAddress',
        ...siteConfig.address,
      },
      geo: {
        '@type': 'GeoCoordinates',
        ...siteConfig.geo,
      },
      openingHoursSpecification: openingHours
        .filter((item) => item.opens && item.closes)
        .map((item) => ({
          '@type': 'OpeningHoursSpecification',
          dayOfWeek:
            item.day === 'Lundi'
              ? 'Monday'
              : item.day === 'Mardi'
                ? 'Tuesday'
                : item.day === 'Mercredi'
                  ? 'Wednesday'
                  : item.day === 'Jeudi'
                    ? 'Thursday'
                    : item.day === 'Vendredi'
                      ? 'Friday'
                      : 'Saturday',
          opens: item.opens,
          closes: item.closes,
        })),
      sameAs: [siteConfig.bookingUrl, ...siteConfig.socialLinks.map((link) => link.href).filter((href) => !href.startsWith('['))],
      hasMap: siteConfig.mapEmbedUrl,
      priceRange: '€€',
    })
  }, [description, image, path, title])

  return null
}

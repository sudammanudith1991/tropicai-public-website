import { renderToString } from 'react-dom/server'
import App from './App.jsx'
import { PRODUCTS, PEANUTS, DRINKS, SOCIAL, GOOD_MARKET_URL, WHATSAPP_NUMBER } from './data.js'

const SITE = 'https://tropicai.net'
const abs = (p) => SITE + '/' + p.replace(/^\.\//, '')

export function render() {
  return renderToString(<App />)
}

// Schema.org data so Google understands the brand, the store and every product with prices.
export function structuredData() {
  const org = {
    '@type': ['Organization', 'Store'],
    '@id': SITE + '/#tropicai',
    name: 'Tropicai',
    alternateName: ['Tropicai Sri Lanka', 'Tropicai Purely Sourced'],
    url: SITE + '/',
    logo: SITE + '/media/logo-full.png',
    image: SITE + '/media/og-image.jpg',
    description: 'Farm direct Sri Lankan natural foods: kithul jaggery and treacle from Lakshapana, beli mal, ranawara, olu haal, meneri, kurakkan and legumes from Thanamalwila, flavoured peanuts and ginger bug sodas.',
    slogan: "Nature's purest, delivered to your doorstep.",
    telephone: '+' + WHATSAPP_NUMBER,
    areaServed: { '@type': 'Country', name: 'Sri Lanka' },
    address: { '@type': 'PostalAddress', addressCountry: 'LK' },
    currenciesAccepted: 'LKR',
    sameAs: [SOCIAL.instagram.url, SOCIAL.tiktok.url, SOCIAL.facebook.url, GOOD_MARKET_URL],
  }
  const products = [...PRODUCTS, ...PEANUTS, ...DRINKS].map((p) => {
    const prices = p.variants.map((v) => v.price).filter((x) => x != null)
    const item = {
      '@type': 'Product',
      name: `Tropicai ${p.name}`,
      alternateName: p.sinhala || undefined,
      image: abs(p.image),
      description: p.blurb,
      brand: { '@type': 'Brand', name: 'Tropicai' },
      countryOfOrigin: 'LK',
    }
    if (prices.length) {
      item.offers = {
        '@type': 'AggregateOffer', priceCurrency: 'LKR',
        lowPrice: Math.min(...prices), highPrice: Math.max(...prices), offerCount: prices.length,
        availability: 'https://schema.org/InStock', seller: { '@id': SITE + '/#tropicai' },
      }
    }
    return item
  })
  return {
    '@context': 'https://schema.org',
    '@graph': [
      org,
      { '@type': 'WebSite', '@id': SITE + '/#website', url: SITE + '/', name: 'Tropicai', publisher: { '@id': SITE + '/#tropicai' }, inLanguage: 'en' },
      { '@type': 'ItemList', name: 'Tropicai products', itemListElement: products.map((p, i) => ({ '@type': 'ListItem', position: i + 1, item: p })) },
    ],
  }
}

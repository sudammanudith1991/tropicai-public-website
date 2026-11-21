// Edit prices here. Each product has one or more size variants.
// Set a variant's price to null to show "Price on request".
export const WHATSAPP_NUMBER = '94711583293'
export const WHATSAPP_DISPLAY = '+94 71 158 3293'

const m = (f) => `./media/${f}`

export const CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'kithul', label: 'Kithul' },
  { id: 'grains', label: 'Rice & Grains' },
  { id: 'herbal', label: 'Herbal Teas' },
  { id: 'nuts', label: 'Nuts & Legumes' },
]

export const PRODUCTS = [
  {
    id: 'kithul-treacle', name: 'Kithul Treacle', sinhala: 'කිතුල් පැණි', variants: [{ label: '450g jar', price: 1850 }, { label: '250g jar', price: 1000 }],
    category: 'kithul', origin: 'Lakshapana', image: m('kithul-treacle.jpg'),
    blurb: 'Golden sap from the kithul palm, slow boiled over wood fire into a rich, smoky treacle. Pour it over curd, pancakes or into your tea.',
    tags: ['Wood fire boiled', 'No additives'],
  },
  {
    id: 'kithul-jaggery', name: 'Kithul Jaggery', sinhala: 'කිතුල් හකුරු', variants: [{ label: '2 slabs', price: 1850 }],
    category: 'kithul', origin: 'Lakshapana', image: m('kithul-jaggery.jpg'),
    blurb: 'Traditional kithul jaggery set in slabs, with deep caramel notes. A natural sweetener for kiribath, sweets and a bite with plain tea.',
    tags: ['Handmade', 'Unrefined'],
  },
  {
    id: 'kithul-flour', name: 'Kithul Flour', sinhala: 'කිතුල් පිටි', variants: [{ label: '500g', price: 1000 }, { label: '250g', price: 550 }],
    category: 'kithul', origin: 'Lakshapana', image: null,
    blurb: 'Starch drawn from the pith of the kithul palm and sun dried. Use it for kithul thalapa, porridge and traditional sweets.',
    tags: ['Traditional', 'Sun dried'],
  },
  {
    id: 'water-lily-rice', name: 'Water Lily Rice', sinhala: 'ඕලු හාල්', variants: [{ label: '1kg', price: 2200 }, { label: '500g', price: 1200 }, { label: '250g', price: 700 }],
    category: 'grains', origin: 'Thanamalwila', image: m('water-lily-rice.jpg'),
    blurb: 'Olu haal, the rare seed of the water lily, gathered from village tanks. A heritage grain prized for its nutty bite in kanda and sweets.',
    tags: ['Rare heritage grain', 'Tank harvested'],
  },
  {
    id: 'meneri-rice', name: 'Meneri Rice', sinhala: 'මෙනේරි', variants: [{ label: '1kg', price: 2350 }, { label: '500g', price: 1350 }, { label: '250g', price: 750 }],
    category: 'grains', origin: 'Thanamalwila', image: m('meneri-rice.jpg'),
    blurb: 'Foxtail millet grown in the dry zone. Light, fluffy and naturally gluten free. Cook it like rice or as a warm porridge.',
    tags: ['Gluten free', 'Dry zone millet'],
  },
  {
    id: 'peanuts', name: 'Peanuts', sinhala: 'රට කජු', variants: [{ label: null, price: null }],
    category: 'nuts', origin: 'Thanamalwila', image: m('peanuts.jpg'),
    blurb: 'Red skinned peanuts straight from Thanamalwila farms. Roast them, boil them, or blend into your own peanut butter.',
    tags: ['Farm fresh', 'Raw'],
  },
  {
    id: 'beli-pieces', name: 'Beli Pieces', sinhala: 'බෙලි පෙති', variants: [{ label: null, price: null }],
    category: 'herbal', origin: 'Thanamalwila', image: m('beli.jpg'), focus: '22% 60%',
    blurb: 'Sun dried slices of bael fruit. Simmer for a soothing, naturally sweet beli tea, a Sri Lankan favourite for the stomach.',
    tags: ['Sun dried', 'Caffeine free'],
  },
  {
    id: 'bael-flower', name: 'Beli Mal', sinhala: 'බෙලි මල්', variants: [{ label: '100g', price: 800 }, { label: '200g', price: 1500 }],
    category: 'herbal', origin: 'Thanamalwila', image: m('beli.jpg'), focus: '68% 55%',
    blurb: 'Dried bael flowers from the beli tree. Brew a fragrant, calming golden tea, hot or iced.',
    tags: ['Hand picked', 'Caffeine free'],
  },
  {
    id: 'ranawara', name: 'Ranawara', sinhala: 'රණවරා', variants: [{ label: '50g', price: 400 }, { label: '100g', price: 750 }],
    category: 'herbal', origin: 'Thanamalwila', image: m('ranawara.jpg'),
    blurb: 'Golden avaram flowers, dried whole. Ranawara tea is a traditional village brew with a gentle, earthy sweetness.',
    tags: ['Whole flowers', 'Caffeine free'],
  },
]

// Products without photos yet; customers can add them as enquiries.
export const MORE_PRODUCTS = [
  { id: 'arabica-coffee', name: 'Arabica Coffee', sinhala: 'කෝපි', category: 'grains', origin: 'Thanamalwila' },
  { id: 'finger-millet', name: 'Finger Millet (Kurakkan)', sinhala: 'කුරක්කන්', category: 'grains', origin: 'Thanamalwila' },
  { id: 'heirloom-rice', name: 'Heirloom Rice Varieties', sinhala: 'පාරම්පරික සහල්', category: 'grains', origin: 'Thanamalwila' },
  { id: 'horse-gram', name: 'Horse Gram', sinhala: 'කොල්ලු', category: 'nuts', origin: 'Thanamalwila' },
  { id: 'mung-beans', name: 'Mung Beans', sinhala: 'මුං ඇට', category: 'nuts', origin: 'Thanamalwila' },
  { id: 'cowpea', name: 'Cowpea', sinhala: 'කවුපි', category: 'nuts', origin: 'Thanamalwila' },
  { id: 'peanut-cups', name: 'Flavoured Peanut Cups', sinhala: 'රට කජු කෝප්ප', category: 'nuts', origin: 'Made by Tropicai' },
].map((p) => ({ ...p, variants: [{ label: null, price: null }] }))

export const ALL_ITEMS = [...PRODUCTS, ...MORE_PRODUCTS]

export const fmt = (n) => 'Rs ' + n.toLocaleString('en-LK')
export const fmtPrice = (n) => (n == null ? 'Price on request' : fmt(n))

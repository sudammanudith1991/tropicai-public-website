// Edit prices here. Each product has one or more size variants.
// Set a variant's price to null to show "Price on request".
export const WHATSAPP_NUMBER = '94711583293'
export const WHATSAPP_DISPLAY = '+94 71 158 3293'

export const SOCIAL = {
  instagram: { url: 'https://www.instagram.com/tropicai_sl/', handle: '@tropicai_sl' },
  tiktok: { url: 'https://www.tiktok.com/@tropicai5', handle: '@tropicai5' },
  facebook: { url: 'https://www.facebook.com/people/Tropicai-Purely-Sourced/61586343067315/', handle: 'Tropicai Purely Sourced' },
}
export const GOOD_MARKET_URL = 'https://www.goodmarket.global/tropicai'

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
    id: 'kithul-flour', name: 'Kithul Flour', sinhala: 'කිතුල් පිටි', variants: [{ label: '500g', price: 1000 }, { label: '250g', price: 500 }],
    category: 'kithul', origin: 'Lakshapana', image: m('kithul-flour.jpg'),
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
    blurb: 'Little millet grown in the dry zone. Light, fluffy and naturally gluten free. Cook it like rice or as a warm porridge.',
    tags: ['Gluten free', 'Dry zone millet'],
  },
  {
    id: 'peanuts', name: 'Peanuts', sinhala: 'රට කජු', variants: [{ label: '500g', price: 800 }, { label: '250g', price: 400 }],
    category: 'nuts', origin: 'Thanamalwila', image: m('peanuts.jpg'),
    blurb: 'Red skinned peanuts straight from Thanamalwila farms. Roast them, boil them, or blend into your own peanut butter.',
    tags: ['Farm fresh', 'Raw'],
  },
  {
    id: 'beli-pieces', name: 'Beli Pieces', sinhala: 'බෙලි පෙති', variants: [{ label: '100g', price: 350 }],
    category: 'herbal', origin: 'Thanamalwila', image: m('beli-pieces.jpg'),
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
  {
    id: 'finger-millet', name: 'Kurakkan', sinhala: 'කුරක්කන්', variants: [{ label: '500g', price: 500 }],
    category: 'grains', origin: 'Thanamalwila', image: m('finger-millet.jpg'),
    blurb: 'Finger millet from the dry zone. A wholesome favourite for kurakkan roti, pittu and warm porridge.',
    tags: ['Finger millet', 'Dry zone grown'],
  },
  {
    id: 'mung-beans', name: 'Mung Beans', sinhala: 'මුං ඇට', variants: [{ label: '1kg', price: 1000 }, { label: '500g', price: 500 }, { label: '250g', price: 250 }],
    category: 'nuts', origin: 'Thanamalwila', image: m('mung-beans.jpg'),
    blurb: 'Green mung beans for mung ata kiribath, curries, sprouts and sweet mung kevum.',
    tags: ['Legume', 'Farm fresh'],
  },
  {
    id: 'horse-gram', name: 'Horse Gram', sinhala: 'කොල්ලු', variants: [{ label: '500g', price: 700 }, { label: '250g', price: 400 }],
    category: 'nuts', origin: 'Thanamalwila', image: m('horse-gram.jpg'),
    blurb: 'Kollu, a hardy village legume. Lovely in kollu kanda, soups and spicy tempered dishes.',
    tags: ['Legume', 'Village staple'],
  },
]

// Products without photos yet; customers can add them as enquiries.
export const MORE_PRODUCTS = []

// Fizzy Corner: naturally sparkling ginger bug sodas.
// Prices not set yet (null shows "Price on request").
const f = (x) => `./media/fizzy/${x}`
export const DRINKS = [
  {
    id: 'soda-pineapple', name: 'Pineapple Soda', short: 'Pineapple', accent: '#f6a21e',
    variants: [{ label: '375ml', price: 750 }, { label: '200ml', price: 490 }],
    image: f('bottle-pineapple.jpg'), fruit: f('fruit-pineapple.jpg'), category: 'fizzy', origin: 'Ginger bug soda',
    blurb: 'Ripe pineapple and fresh ginger, slowly fermented into a bright, tangy sparkle. Tropical sunshine in a bottle.',
    tags: ['Naturally sparkling', 'Sweetened with bee honey'],
  },
  {
    id: 'soda-mango', name: 'Mango Soda', short: 'Mango', accent: '#f2862a',
    variants: [{ label: '375ml', price: 650 }],
    image: f('bottle-mango.jpg'), fruit: f('fruit-mango.jpg'), category: 'fizzy', origin: 'Ginger bug soda',
    blurb: 'Juicy ripe mango meets a gentle ginger fizz. Smooth, golden and lightly tangy.',
    tags: ['Naturally sparkling', 'Sweetened with bee honey'],
  },
  {
    id: 'soda-pomegranate', name: 'Pomegranate Soda', short: 'Pomegranate', accent: '#e8336f',
    variants: [{ label: '200ml', price: 600 }],
    image: f('bottle-pomegranate.jpg'), fruit: f('fruit-pomegranate.jpg'), category: 'fizzy', origin: 'Ginger bug soda',
    blurb: 'Ruby pomegranate with a crisp ginger finish. Tart, elegant and beautifully pink.',
    tags: ['Naturally sparkling', 'Sweetened with bee honey'],
  },
  {
    id: 'soda-sweet-orange', name: 'Sweet Orange Soda', short: 'Sweet Orange', accent: '#f4b632',
    variants: [{ label: '375ml', price: 700 }],
    image: f('bottle-sweet-orange.jpg'), fruit: f('fruit-sweet-orange.jpg'), category: 'fizzy', origin: 'Ginger bug soda',
    blurb: 'Green skinned Sri Lankan sweet orange, zesty and refreshing, with a lively ginger kick.',
    tags: ['Naturally sparkling', 'Sweetened with bee honey'],
  },
  {
    id: 'soda-watermelon', name: 'Watermelon Soda', short: 'Watermelon', accent: '#f0608f',
    variants: [{ label: '375ml', price: 650 }],
    image: f('bottle-watermelon.jpg'), fruit: f('fruit-watermelon.jpg'), category: 'fizzy', origin: 'Ginger bug soda',
    blurb: 'Fresh watermelon, light and thirst quenching, with a soft natural fizz. A hot day essential.',
    tags: ['Naturally sparkling', 'Sweetened with bee honey'],
  },
]

// Assorted flavoured peanuts, 50g packs.
const pn = (x) => `./media/peanuts/${x}`
export const PEANUTS = [
  {
    id: 'peanuts-chocolate', name: 'Chocolate Peanuts', short: 'Chocolate', emoji: '🍫', taste: 'Sweet',
    variants: [{ label: '50g', price: 300 }], image: pn('chocolate.jpg'), category: 'peanuts', origin: 'Thanamalwila',
    blurb: 'Roasted Thanamalwila peanuts coated in rich chocolate. A sweet treat for kids and grown ups alike.',
    tags: ['Sweet', 'Roasted peanuts'],
  },
  {
    id: 'peanuts-kithul', name: 'Kithul Peanuts', short: 'Kithul', emoji: '🍯', taste: 'Sweet',
    variants: [{ label: '50g', price: 300 }], image: pn('kithul.jpg'), category: 'peanuts', origin: 'Thanamalwila',
    blurb: 'Glazed with our own Lakshapana kithul treacle for a smoky, caramel crunch.',
    tags: ['Sweet', 'Kithul glazed'],
  },
  {
    id: 'peanuts-salted', name: 'Classic Salted Peanuts', short: 'Classic Salted', emoji: '🧂', taste: 'Savoury',
    variants: [{ label: '50g', price: 300 }], image: pn('salted.jpg'), category: 'peanuts', origin: 'Thanamalwila',
    blurb: 'Simply roasted and lightly salted. The timeless crunchy snack.',
    tags: ['Savoury', 'Roasted peanuts'],
  },
  {
    id: 'peanuts-spicy', name: 'Spicy Peanuts', short: 'Spicy', sinhala: 'දැවෙන', emoji: '🌶️', taste: 'Savoury',
    variants: [{ label: '50g', price: 300 }], image: pn('spicy.jpg'), category: 'peanuts', origin: 'Thanamalwila',
    blurb: 'Tossed in Sri Lankan chilli spices. Hot, crunchy and seriously addictive.',
    tags: ['Savoury', 'Chilli spiced'],
  },
]

export const ALL_ITEMS = [...PRODUCTS, ...MORE_PRODUCTS, ...PEANUTS, ...DRINKS]

export const fmt = (n) => 'Rs ' + n.toLocaleString('en-LK')
export const fmtPrice = (n) => (n == null ? 'Price on request' : fmt(n))

// Health benefits shown in the product popup. Keyed by product id.
const b = (title, points) => ({ title, points })
export const BENEFITS = {
  'meneri-rice': {
    subtitle: 'Little millet, a traditional Sri Lankan superfood',
    infographic: m('benefits/meneri.jpg'),
    items: [
      b('Steady energy', ['Lower glycemic index than white rice', 'Releases energy slowly', 'A popular swap for white rice']),
      b('Naturally nutritious', ['A source of iron and other minerals', 'Whole grain goodness']),
      b('Digestive wellness', ['High in dietary fibre', 'Fibre supports healthy digestion']),
      b('Heart friendly choice', ['Fibre rich whole grain', 'Fits well in a balanced, heart friendly diet']),
      b('Keeps you satisfied', ['Fibre and plant protein', 'A filling, light meal base']),
      b('Gluten free', ['Naturally gluten free, as a millet']),
      b('Whole grain goodness', ['Minimally processed', 'Sun dried and husked the traditional way']),
    ],
  },
  'bael-flower': {
    subtitle: 'Bael flower tea, a traditional Sri Lankan herbal infusion',
    infographic: m('benefits/beli-mal.jpg'),
    items: [
      b('After meal tea', ['Traditionally enjoyed after meals', 'Gentle and soothing']),
      b('Cooling drink', ["Considered a 'cooling' drink in Sri Lankan tradition", 'Refreshing iced on hot days']),
      b('Traditional cleanser', ['Traditionally taken as a gentle cleansing tea', 'A long time village favourite']),
      b('Calming cup', ['A soothing, relaxing brew', 'Lovely to wind down with']),
      b('Naturally caffeine free', ['Enjoy any time of day', 'Hot or iced']),
      b('Comforting warmth', ['A warm cup traditionally enjoyed during the cool, rainy months']),
    ],
  },
  ranawara: {
    subtitle: 'Cassia auriculata, a traditional Sri Lankan herbal tea',
    infographic: m('benefits/ranawara.jpg'),
    items: [
      b('Traditional wellness tea', ['A time honoured village herbal brew', 'Naturally caffeine free']),
      b('Known for beauty', ["Traditionally called a 'beauty herb' in Sri Lanka", 'Part of village beauty rituals for generations']),
      b('Hydrating brew', ['A refreshing way to drink more fluids', 'Traditionally enjoyed as a light, cleansing tea']),
      b('Cooling drink', ["Considered a 'cooling' drink in Sri Lankan tradition", 'Refreshing on hot days']),
      b('Rich golden colour', ['Whole dried flowers brew a bright golden tea']),
      b('Gentle everyday tea', ['Mild, earthy and naturally sweet']),
    ],
  },
  'water-lily-rice': {
    subtitle: 'Olu haal, a traditional Sri Lankan superfood',
    infographic: m('benefits/water-lily.jpg'),
    items: [
      b('A wholesome rice swap', ['A traditional alternative to white rice', 'Light yet filling']),
      b('Traditional food', ['A treasured dry zone food for generations']),
      b('Village heritage', ['Gathered by hand from ancient village tanks', 'A rare, treasured dry zone food']),
      b('Light on the stomach', ['Light yet filling', 'Easy to cook']),
      b('Easy to enjoy', ['Cook like rice or add to salads', 'A nutty, satisfying bite']),
      b('Nourishing', ['Plant protein and fibre', 'Naturally gluten free']),
    ],
  },
  'kithul-treacle': {
    subtitle: 'Caryota urens syrup, an authentic Sri Lankan artisanal product',
    infographic: m('benefits/kithul-treacle.jpg'),
    items: [
      b('Natural sweetness', ['An unrefined alternative to white sugar', 'Rich, smoky caramel flavour']),
      b('Naturally contains minerals', ['Unrefined, so it keeps more of the palm sap\'s natural minerals than white sugar']),
      b('Traditional favourite', ['A Sri Lankan staple with curd and sweets for generations']),
      b('Natural energy', ['A natural source of energy for your day']),
      b('Handmade', ['Wood fire boiled the traditional way', 'No additives']),
      b('Cooling nature', ["Considered a 'cooling' food in Sri Lankan tradition"]),
    ],
    uses: [
      b('With curd', ['The most traditional Sri Lankan dessert or breakfast, a perfect flavour combination.']),
      b('Natural sweetener', ['A direct substitute for refined sugar, honey or maple syrup in tea, coffee and juices.']),
      b('Baking and desserts', ['Adds deep caramel flavour to cakes, pancakes, waffles and traditional sweets like kavum and watalappan.']),
      b('With herbal drinks', ['Traditionally stirred into herbal drinks to sweeten them.']),
      b('Porridge', ['Drizzled into traditional grain or herbal porridges for flavour and a quick energy boost.']),
    ],
  },
}

// Back labels shown in the product popup. Keyed by product id.
export const LABELS = {
  'water-lily-rice': m('labels/olu-haal.jpg'),
  'meneri-rice': m('labels/meneri.jpg'),
  'bael-flower': m('labels/beli-mal.jpg'),
  'kithul-flour': m('labels/kithul-flour.jpg'),
}

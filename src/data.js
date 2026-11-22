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
      b('Blood sugar management', ['Low glycemic index', 'Helps prevent blood sugar spikes', 'Ideal for diabetics']),
      b('Rich in minerals and vitamins', ['High in iron (combats anaemia)', 'Packed with essential nutrients']),
      b('Digestive wellness', ['High dietary fibre', 'Promotes regular bowel movements', 'Prevents constipation']),
      b('Heart health', ["Lowers LDL 'bad' cholesterol", 'Reduces arterial inflammation', 'Supports cardiovascular function']),
      b('Weight management', ['High fibre and protein content', 'Increases satiety (feeling full)', 'Curbs overeating']),
      b('Gluten free', ['Naturally gluten free', 'Safe for coeliac and gluten sensitivity']),
      b('Antioxidant properties', ['Reduces oxidative stress', 'Fights free radicals', 'Boosts overall health']),
    ],
  },
  'bael-flower': {
    subtitle: 'Bael flower tea, a traditional Sri Lankan herbal infusion',
    infographic: m('benefits/beli-mal.jpg'),
    items: [
      b('Digestive wellness', ['Soothes indigestion', 'Relieves bloating and constipation', 'Supports gut health']),
      b('Body cooling', ['Reduces internal body heat', 'Alleviates acidity', 'Refreshing tonic for hot weather']),
      b('Detoxification', ['Purifies blood', 'Supports liver health', 'Helps flush out toxins']),
      b('Stress relief', ['Promotes relaxation', 'Reduces anxiety', 'Calms the nervous system']),
      b('Anti inflammatory', ['Reduces inflammation throughout the body', 'Eases joint and muscle pain']),
      b('Respiratory support', ['Clears airways', 'Supports lung function', 'Traditionally used for catarrh and asthma']),
    ],
  },
  ranawara: {
    subtitle: 'Cassia auriculata, a traditional Sri Lankan herbal tonic',
    infographic: m('benefits/ranawara.jpg'),
    items: [
      b('Blood sugar management', ['Helps regulate blood glucose levels', 'Supports insulin sensitivity', 'Ideal for diabetes management']),
      b('Skin health and complexion', ["Known as a 'beauty herb'", 'Improves skin complexion', 'Reduces acne and blemishes', 'Promotes healthy, glowing skin']),
      b('Urinary and kidney support', ['Supports urinary tract health', 'Acts as a mild diuretic', 'Helps flush out toxins', 'Reduces infection risk']),
      b('Body cooling', ['Balances internal body heat', 'Relieves excessive thirst', 'Prevents overheating in hot weather']),
      b('Antioxidant and anti inflammatory', ['Fights oxidative stress', 'Reduces inflammation in the body', 'Protects against chronic ailments', 'Rich in phytochemicals']),
      b('Digestive wellness', ['Soothes the digestive tract', 'Relieves indigestion and discomfort', 'Promotes healthy gut function']),
    ],
  },
  'water-lily-rice': {
    subtitle: 'Olu haal, a traditional Sri Lankan superfood',
    infographic: m('benefits/water-lily.jpg'),
    items: [
      b('Blood sugar management', ['Helps regulate blood sugar levels', 'Beneficial for diabetes', 'Low glycemic alternative']),
      b('Liver health support', ['Traditionally used to support liver function', 'Aids detoxification']),
      b('Kidney support', ['Promotes kidney function', 'Helps manage kidney stones', 'Traditional remedy']),
      b('Digestive wellness', ['Improves digestion', 'Stimulates stomach enzymes', 'Easier to digest']),
      b('Heart and circulatory health', ['Supports heart health', 'Enhances blood circulation', 'Promotes healthy clotting']),
      b('Nutrient rich profile', ['Rich in plant based protein and fibre', 'Good source of essential minerals such as magnesium and potassium', 'Naturally gluten free']),
    ],
  },
  'kithul-treacle': {
    subtitle: 'Caryota urens syrup, an authentic Sri Lankan artisanal product',
    infographic: m('benefits/kithul-treacle.jpg'),
    items: [
      b('Low glycemic index', ['Healthier alternative to refined sugar', 'Slow release of energy', 'Prevents sharp blood sugar spikes']),
      b('Rich in minerals', ['Essential minerals for strong bones, oxygen transport and muscle function']),
      b('Digestive support', ['Aids digestion', 'Acts as a mild laxative', 'Helps maintain bowel regularity']),
      b('Energy booster', ['Sustained release of energy', 'Helps combat fatigue and lethargy']),
      b('Antioxidant properties', ['Contains phenolic compounds that fight oxidative stress and inflammation']),
      b('Cooling nature', ["Categorised as a 'cooling' food in traditional medicine", 'Balances internal body heat']),
    ],
    uses: [
      b('With curd', ['The most traditional Sri Lankan dessert or breakfast, a perfect flavour combination.']),
      b('Natural sweetener', ['A direct substitute for refined sugar, honey or maple syrup in tea, coffee and juices.']),
      b('Baking and desserts', ['Adds deep caramel flavour to cakes, pancakes, waffles and traditional sweets like kavum and watalappan.']),
      b('Medicinal tonics', ['Taken with herbal preparations to improve palatability and absorption.']),
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

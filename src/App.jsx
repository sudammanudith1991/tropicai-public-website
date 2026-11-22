import { useEffect, useMemo, useState } from 'react'
import { CATEGORIES, PRODUCTS, MORE_PRODUCTS, ALL_ITEMS, WHATSAPP_NUMBER, WHATSAPP_DISPLAY, BENEFITS, LABELS, DRINKS, PEANUTS, SOCIAL, GOOD_MARKET_URL, fmt, fmtPrice } from './data.js'

const CART_KEY = 'tropicai_cart_v2'
const keyOf = (id, vi) => `${id}::${vi}`
const parseKey = (k) => { const [id, vi] = k.split('::'); return { id, vi: Number(vi) || 0 } }
const qtyOf = (cart, id) => Object.entries(cart).reduce((s, [k, q]) => (parseKey(k).id === id ? s + q : s), 0)

function ProductImage({ p, className }) {
  if (!p.image) return <div className={`img-ph ${className || ''}`}><Logo size={72} /><span>{p.name}</span></div>
  return <img className={className} src={p.image} alt={`Tropicai ${p.name}`} style={{ objectPosition: p.focus || 'center' }} loading="lazy" />
}

function SizePicker({ p, vi, setVi }) {
  if (p.variants.length < 2) return <p className="size">{p.variants[0].label || '\u00a0'}</p>
  return (
    <div className="sizes">
      {p.variants.map((v, i) => (
        <button key={i} className={i === vi ? 'size-pill on' : 'size-pill'} onClick={() => setVi(i)}>{v.label}</button>
      ))}
    </div>
  )
}
const loadCart = () => {
  try { return JSON.parse(localStorage.getItem(CART_KEY)) || {} } catch { return {} }
}

function Logo({ size = 40 }) {
  return <img src="./media/logo-mark.png" width={size} height={size} alt="" aria-hidden="true" style={{ objectFit: 'contain' }} />
}

const WaIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.9 11.9 0 0 0 4.6 4c1.7.7 2.4.8 3.2.7.5-.1 1.5-.6 1.8-1.2.2-.6.2-1.1.1-1.2l-.4-.2Z" />
  </svg>
)

const Icon = {
  instagram: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4.2" /><circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" /></svg>
  ),
  tiktok: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16.6 3c.3 2.3 1.7 3.9 4 4.1v3.1a7.3 7.3 0 0 1-4-1.2v6.2a5.8 5.8 0 1 1-5.8-5.8c.3 0 .6 0 .9.1v3.2a2.7 2.7 0 1 0 1.9 2.6V3h3Z" /></svg>
  ),
  facebook: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.5 21v-7.6h2.6l.4-3h-3V8.5c0-.9.3-1.5 1.5-1.5h1.6V4.3a21 21 0 0 0-2.3-.1c-2.3 0-3.9 1.4-3.9 4v2.2H7.8v3h2.6V21h3.1Z" /></svg>
  ),
}

function SocialLinks({ className = '' }) {
  return (
    <div className={`social ${className}`}>
      {[['instagram', 'Instagram'], ['tiktok', 'TikTok'], ['facebook', 'Facebook']].map(([k, name]) => (
        <a key={k} href={SOCIAL[k].url} target="_blank" rel="noopener noreferrer" aria-label={`Tropicai on ${name}`} title={`${name} · ${SOCIAL[k].handle}`}>
          {Icon[k]}<span>{name}</span>
        </a>
      ))}
    </div>
  )
}

function Header({ count, onCart }) {
  return (
    <header className="header">
      <a href="#top" className="brand">
        <Logo size={42} />
        <img className="wordmark-img" src="./media/logo-wordmark.png" alt="Tropicai" />
      </a>
      <nav className="nav">
        <a href="#shop">Shop</a>
        <a href="#peanuts">Peanuts</a>
        <a href="#hampers">Hampers</a>
        <a href="#story">Our Story</a>
        <a href="#process">Process</a>
        <a href="#contact">Contact</a>
      </nav>
      <button className="cart-btn" onClick={onCart} aria-label="Open cart">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M6 7h12l-1 13H7L6 7Z" /><path d="M9 7a3 3 0 0 1 6 0" /></svg>
        <span>Cart</span>
        {count > 0 && <b className="badge">{count}</b>}
      </button>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-text">
        <p className="eyebrow">Farm direct from Sri Lanka</p>
        <h1>Nature's purest,<br /><em>delivered to your doorstep.</em></h1>
        <p className="lead">
          Kithul treacle and jaggery from the forests of Lakshapana. Heritage grains, herbal flowers and peanuts
          from the dry zone farms of Thanamalwila. Grown slowly, made by hand, packed with care.
        </p>
        <div className="hero-cta">
          <a href="#shop" className="btn primary">Shop the harvest</a>
          <a href="#process" className="btn ghost">Watch how it's made</a>
        </div>
        <a href="#fizzy" className="fizzy-promo">
          <Droplets count={14} seed={7} />
          <img src="./media/fizzy/bottle-mango.jpg" alt="" />
          <span className="fp-text">
            <small>New · The Fizzy Corner</small>
            <strong>Naturally sparkling ginger bug sodas</strong>
            <em>No sugar added · Sweetened with bee honey</em>
          </span>
          <span className="fp-arrow">→</span>
        </a>
        <ul className="trust">
          <li><strong>100%</strong> natural</li>
          <li><strong>2</strong> sourcing regions</li>
          <li><a href="#good-market" className="trust-link"><strong>Good Market</strong> approved vendor ✓</a></li>
        </ul>
      </div>
      <div className="hero-art">
        <img className="hero-main" src="./media/beli.jpg" alt="Tropicai Beli Pieces and Bael Flower packs with a cup of beli tea" />
        <img className="hero-float a" src="./media/kithul-treacle.jpg" alt="Tropicai Kithul Treacle jar" />
        <img className="hero-float b" src="./media/ranawara.jpg" alt="Tropicai Ranawara pack" />
      </div>
    </section>
  )
}

function ProductCard({ p, qty, onAdd, onOpen }) {
  const [vi, setVi] = useState(0)
  const v = p.variants[vi]
  return (
    <article className="card">
      <div className="card-media">
        <button className="card-img" onClick={() => onOpen(p)} aria-label={`View ${p.name}`}>
          <ProductImage p={p} />
        </button>
        <span className="origin-pill">{p.origin}</span>
        {(BENEFITS[p.id] || LABELS[p.id]) && (
          <div className="media-chips">
            {BENEFITS[p.id] && <button className="chip-link benefits-chip" onClick={() => onOpen(p, 'benefits')}>♥ Health benefits</button>}
            {LABELS[p.id] && <button className="chip-link origin-chip" onClick={() => onOpen(p, 'origin')}>🌿 Origin & how to enjoy</button>}
          </div>
        )}
      </div>
      <div className="card-body">
        <div className="card-head">
          <h3>{p.name}</h3>
          <span className="si">{p.sinhala}</span>
        </div>
        <SizePicker p={p} vi={vi} setVi={setVi} />
        <p className="blurb">{p.blurb}</p>
        {BENEFITS[p.id] && <button className="benefit-link" onClick={() => onOpen(p, 'benefits')}>See health benefits →</button>}
        <div className="card-foot">
          <span className={v.price == null ? 'price req' : 'price'}>{fmtPrice(v.price)}</span>
          <button className="btn small primary" onClick={() => onAdd(p.id, vi)}>
            {v.price == null ? (qty ? `Asked (${qty}) +` : 'Ask +') : qty ? `Added (${qty}) +` : 'Add to cart'}
          </button>
        </div>
      </div>
    </article>
  )
}

function Shop({ cart, add, open }) {
  const [cat, setCat] = useState('all')
  const list = PRODUCTS.filter((p) => cat === 'all' || p.category === cat)
  const more = MORE_PRODUCTS.filter((p) => cat === 'all' || p.category === cat)
  return (
    <section className="shop" id="shop">
      <div className="section-head">
        <p className="eyebrow">The harvest</p>
        <h2>Shop Tropicai</h2>
        <p>Add what you love to your cart, then send the order straight to us on WhatsApp. We confirm delivery and payment with you directly.</p>
      </div>
      <div className="filters" role="tablist">
        {CATEGORIES.map((c) => (
          <button key={c.id} className={cat === c.id ? 'chip on' : 'chip'} onClick={() => setCat(c.id)}>{c.label}</button>
        ))}
      </div>
      <div className="grid">
        {list.map((p) => <ProductCard key={p.id} p={p} qty={qtyOf(cart, p.id)} onAdd={add} onOpen={open} />)}
      </div>
      {more.length > 0 && (
        <div className="more">
          <h3>Also from our farms</h3>
          <p>Seasonal and limited items. Add them to your order and we'll confirm price and availability on WhatsApp.</p>
          <div className="more-list">
            {more.map((p) => (
              <button key={p.id} className={qtyOf(cart, p.id) ? 'more-item on' : 'more-item'} onClick={() => add(p.id, 0)}>
                <Logo size={22} />
                <span>
                  <strong>{p.name}</strong>
                  <small>{p.sinhala} · {p.origin}</small>
                </span>
                <em>{qtyOf(cart, p.id) ? `In cart (${qtyOf(cart, p.id)})` : 'Ask +'}</em>
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}

function rand(seed) {
  let x = seed
  return () => { x = (x * 9301 + 49297) % 233280; return x / 233280 }
}

function Droplets({ count = 40, seed = 1 }) {
  const drops = useMemo(() => {
    const r = rand(seed)
    return Array.from({ length: count }, () => {
      const size = 3 + Math.pow(r(), 3) * 24
      return { left: r() * 100, top: r() * 100, size, stretch: 1 + r() * 0.35, o: 0.45 + r() * 0.5 }
    })
  }, [count, seed])
  return (
    <div className="droplets" aria-hidden="true">
      {drops.map((d, i) => (
        <span key={i} style={{ left: `${d.left}%`, top: `${d.top}%`, width: d.size, height: d.size * d.stretch, opacity: d.o }} />
      ))}
    </div>
  )
}

function Bubbles({ count = 26 }) {
  const items = useMemo(() => {
    const r = rand(42)
    return Array.from({ length: count }, () => ({ left: r() * 100, size: 3 + r() * 9, dur: 7 + r() * 10, delay: -r() * 17 }))
  }, [count])
  return (
    <div className="bubbles" aria-hidden="true">
      {items.map((b, i) => (
        <span key={i} style={{ left: `${b.left}%`, width: b.size, height: b.size, animationDuration: `${b.dur}s`, animationDelay: `${b.delay}s` }} />
      ))}
    </div>
  )
}

function PeanutCard({ p, qty, onAdd, onOpen }) {
  const v = p.variants[0]
  return (
    <article className="pn-card">
      <button className="pn-img" onClick={() => onOpen(p)} aria-label={`View ${p.name}`}>
        <img src={p.image} alt={p.name} loading="lazy" />
        <span className={`pn-taste ${p.taste.toLowerCase()}`}>{p.taste}</span>
      </button>
      <div className="pn-body">
        <h3><span aria-hidden="true">{p.emoji}</span> {p.short} {p.sinhala && <span className="si">{p.sinhala}</span>}</h3>
        <p className="pn-blurb">{p.blurb}</p>
        <div className="card-foot">
          <span className="price">{fmt(v.price)} <small>/ {v.label}</small></span>
          <button className="btn small primary" onClick={() => onAdd(p.id, 0)}>{qty ? `Added (${qty}) +` : 'Add to cart'}</button>
        </div>
      </div>
    </article>
  )
}

function Peanuts({ cart, add, open }) {
  return (
    <section className="peanuts" id="peanuts">
      <div className="pn-inner">
        <div className="section-head">
          <p className="eyebrow">Snack time</p>
          <h2>Assorted flavoured peanuts</h2>
          <p>Real Thanamalwila peanuts, roasted and tossed in your favourite flavour. Every flavour comes in a 50g pack for {fmt(300)}.</p>
        </div>
        <div className="pn-grid">
          {PEANUTS.map((p) => <PeanutCard key={p.id} p={p} qty={qtyOf(cart, p.id)} onAdd={add} onOpen={open} />)}
        </div>
        <p className="pn-note">🥜 Mix and match: pick a few flavours and we'll pack them together for your order.</p>
      </div>
    </section>
  )
}

function Hampers() {
  const msg = encodeURIComponent("Hello Tropicai! Please let me know when the Create your own hamper option is available.")
  return (
    <section className="hampers" id="hampers">
      <div className="hm-inner">
        <div className="hm-art" aria-hidden="true">
          <img src="./media/kithul-treacle.jpg" alt="" />
          <img src="./media/water-lily-rice.jpg" alt="" />
          <img src="./media/peanuts/kithul.jpg" alt="" />
          <img src="./media/ranawara.jpg" alt="" />
          <span className="hm-ribbon">Coming soon</span>
        </div>
        <div className="hm-text">
          <p className="eyebrow">Gifting</p>
          <h2>Create your own hamper</h2>
          <p>
            Hand pick your favourites, from kithul treacle and heritage rice to herbal teas, flavoured peanuts and ginger bug sodas,
            and we'll pack them into a beautiful Tropicai gift hamper. Perfect for festivals, birthdays and thank yous.
          </p>
          <ul className="hm-points">
            <li>Choose exactly what goes in</li>
            <li>Mix our pantry, peanuts and sodas</li>
            <li>Gift ready for any occasion</li>
          </ul>
          <a className="btn primary" href={`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`} target="_blank" rel="noopener noreferrer">
            <WaIcon /> Notify me on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

function FizzyCard({ p, qty, onAdd, onOpen }) {
  const [vi, setVi] = useState(0)
  const v = p.variants[vi]
  return (
    <article className="fz-card" style={{ '--accent': p.accent }}>
      <button className="fz-img" onClick={() => onOpen(p)} aria-label={`View ${p.name}`}>
        <img className="fz-fruit" src={p.fruit} alt={p.short} loading="lazy" />
        <img className="fz-bottle" src={p.image} alt={`Tropicai ${p.name} bottle`} loading="lazy" />
      </button>
      <div className="fz-body">
        <p className="fz-kicker">Ginger bug soda</p>
        <h3>{p.short}</h3>
        <SizePicker p={p} vi={vi} setVi={setVi} />
        <p className="fz-blurb">{p.blurb}</p>
        <div className="card-foot">
          <span className={v.price == null ? 'price req' : 'price'}>{fmtPrice(v.price)}</span>
          <button className="btn small fz-btn" onClick={() => onAdd(p.id, vi)}>
            {v.price == null ? (qty ? `Asked (${qty}) +` : 'Ask +') : qty ? `Added (${qty}) +` : 'Add to cart'}
          </button>
        </div>
      </div>
    </article>
  )
}

function FizzyCorner({ cart, add, open }) {
  return (
    <section className="fizzy" id="fizzy">
      <Droplets count={160} seed={3} />
      <Bubbles />
      <div className="fizzy-inner">
        <div className="fizzy-head">
          <p className="fz-eyebrow">✦ The Fizzy Corner ✦</p>
          <h2>Naturally sparkling<br /><em>ginger bug sodas</em></h2>
          <p className="fizzy-lead">
            Real fruit and fresh ginger, fermented the old way with a living ginger bug culture.
            The fizz comes from the fermentation itself: no carbonation machines, no artificial flavours, no colours.
          </p>
          <ul className="fz-badges">
            <li>No sugar added</li>
            <li>Sweetened with bee honey</li>
            <li>Only natural ingredients</li>
            <li>Naturally fermented fizz</li>
          </ul>
        </div>
        <div className="fz-grid">
          {DRINKS.map((p) => <FizzyCard key={p.id} p={p} qty={qtyOf(cart, p.id)} onAdd={add} onOpen={open} />)}
        </div>
        <div className="fz-process">
          <div><b>01</b><h4>The ginger bug</h4><p>Fresh grated ginger is fed and left to ferment until it becomes a lively, bubbling starter culture.</p></div>
          <div><b>02</b><h4>Real fruit</h4><p>Pineapple, mango, pomegranate, sweet orange and watermelon, pressed fresh and sweetened only with bee honey.</p></div>
          <div><b>03</b><h4>Natural fizz</h4><p>The bug ferments the fruit in the bottle, creating its own gentle sparkle. Best served chilled.</p></div>
        </div>
      </div>
    </section>
  )
}

function GoodMarket({ onView }) {
  return (
    <section className="gm" id="good-market">
      <div className="gm-inner">
        <img className="gm-seal" src="./media/good-market-seal.png" alt="Good Market Approved seal" />
        <div className="gm-text">
          <p className="eyebrow">Certified</p>
          <h2>Good Market approved since May 2026</h2>
          <p>
            Tropicai has been a Good Market approved vendor since 25 May 2026. Good Market is a digital commons for
            people creating a better world: good for people, good for the planet.
          </p>
          <div className="gm-actions">
            <a className="btn primary" href={GOOD_MARKET_URL} target="_blank" rel="noopener noreferrer">See us on Good Market ↗</a>
            <button className="btn ghost" onClick={onView}>View certificate</button>
          </div>
        </div>
        <button className="gm-cert" onClick={onView} aria-label="View Good Market certificate">
          <img src="./media/good-market-certificate.jpg" alt="Tropicai Good Market approval certificate" loading="lazy" />
        </button>
      </div>
    </section>
  )
}

function Story() {
  return (
    <section className="story" id="story">
      <div className="story-img">
        <img src="./media/water-lily-rice-2.jpg" alt="Tropicai Water Lily Rice pack with a lotus bud" />
      </div>
      <div className="story-text">
        <p className="eyebrow">Our story</p>
        <h2>Two regions. One promise.</h2>
        <p>
          Tropicai is a small family brand that works directly with the farmers and tappers who grow our food.
          No middlemen, no blending, no preservatives. Just honest produce from the places it grows best.
        </p>
        <div className="regions">
          <div>
            <h4>Lakshapana</h4>
            <p>Misty hill forests where tappers climb kithul palms at dawn to collect sap, then boil it down over wood fire into treacle, jaggery and flour.</p>
          </div>
          <div>
            <h4>Thanamalwila</h4>
            <p>Sunny dry zone farmland and village tanks, home to our peanuts, millets, water lily rice, legumes, Arabica coffee and herbal flowers.</p>
          </div>
        </div>
        <ul className="values">
          <li>Farm direct sourcing</li>
          <li>Grains cleaned and protected without chemical preservatives</li>
          <li>Kraft packs, filled in small batches</li>
          <li>Find us at Good Market and selected cafés</li>
        </ul>
      </div>
    </section>
  )
}

function Process() {
  return (
    <section className="process" id="process">
      <div className="section-head light">
        <p className="eyebrow">From palm to jar</p>
        <h2>How our kithul is made</h2>
        <p>Every jar of treacle and block of jaggery starts with a tapper, a tall kithul palm and a slow wood fire.</p>
      </div>
      <div className="video-wrap">
        <video src="./media/process.mp4" poster="./media/poster.jpg" controls playsInline preload="metadata" />
      </div>
      <ol className="steps">
        <li><b>01</b><h4>Tapping</h4><p>The flower stalk of the kithul palm is tapped daily for its sweet sap.</p></li>
        <li><b>02</b><h4>Boiling</h4><p>Fresh sap is boiled for hours over a wood fire until it thickens.</p></li>
        <li><b>03</b><h4>Treacle</h4><p>Poured off at the right moment, it becomes golden kithul treacle.</p></li>
        <li><b>04</b><h4>Jaggery</h4><p>Cooked further and set in moulds, it becomes kithul jaggery.</p></li>
      </ol>
    </section>
  )
}

function Gallery() {
  const shots = ['meneri-rice.jpg', 'peanuts.jpg', 'kithul-jaggery.jpg', 'water-lily-rice.jpg']
  return (
    <section className="gallery">
      {shots.map((s) => <img key={s} src={`./media/${s}`} alt="" loading="lazy" />)}
    </section>
  )
}

function Contact() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-brand">
        <img className="footer-logo" src="./media/logo-full.png" alt="Tropicai. Nature's purest, delivered to your doorstep." />
      </div>
      <div className="footer-cols">
        <div>
          <h4>Order on WhatsApp</h4>
          <a className="wa-link" href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer"><WaIcon /> {WHATSAPP_DISPLAY}</a>
        </div>
        <div>
          <h4>Sourced from</h4>
          <p>Lakshapana and Thanamalwila, Sri Lanka</p>
        </div>
        <div>
          <h4>Find us</h4>
          <p>Good Market pop up stalls, selected cafés, and wholesale on request.</p>
          <a className="gm-foot" href={GOOD_MARKET_URL} target="_blank" rel="noopener noreferrer">
            <img src="./media/good-market-seal.png" alt="" /> Good Market approved ↗
          </a>
        </div>
        <div>
          <h4>Follow us</h4>
          <SocialLinks className="social-foot" />
        </div>
      </div>
      <p className="copy">© {new Date().getFullYear()} Tropicai. Made with care in Sri Lanka.</p>
    </footer>
  )
}

function BenefitList({ items }) {
  return (
    <div className="benefits">
      {items.map((it, i) => (
        <div className="benefit" key={it.title}>
          <span className="benefit-no">{String(i + 1).padStart(2, '0')}</span>
          <div>
            <h5>{it.title}</h5>
            <ul>{it.points.map((pt) => <li key={pt}>{pt}</li>)}</ul>
          </div>
        </div>
      ))}
    </div>
  )
}

function Benefits({ data, onZoom }) {
  return (
    <section className="benefits-wrap">
      <p className="eyebrow">Health benefits</p>
      <p className="benefits-sub">{data.subtitle}</p>
      <button className="infographic" onClick={() => onZoom(data.infographic)} aria-label="Enlarge infographic">
        <img src={data.infographic} alt="Health benefits infographic" />
        <span>⤢ Tap to view full size</span>
      </button>
      <BenefitList items={data.items} />
      {data.uses && (
        <>
          <p className="eyebrow" style={{ marginTop: 24 }}>How to enjoy it</p>
          <BenefitList items={data.uses} />
        </>
      )}
      <p className="disclaimer">Based on traditional Sri Lankan use. Not a substitute for medical advice; consult a health professional for personalised guidance.</p>
    </section>
  )
}

function Modal({ p, section, onClose, onAdd, qty }) {
  const [vi, setVi] = useState(0)
  const [zoom, setZoom] = useState(null)
  useEffect(() => { setVi(0); setZoom(null) }, [p])
  useEffect(() => {
    if (!p || !section) return
    const id = section === 'benefits' ? 'benefits-anchor' : 'label-anchor'
    const t = setTimeout(() => document.getElementById(id)?.scrollIntoView({ block: 'start' }), 60)
    return () => clearTimeout(t)
  }, [p, section])
  if (!p) return null
  const ben = BENEFITS[p.id]
  const label = LABELS[p.id]
  const v = p.variants[vi] || p.variants[0]
  return (
    <div className="overlay" onClick={onClose}>
      <div className={`${ben || label ? 'modal wide' : 'modal'}${p.category === 'fizzy' ? ' fz-modal' : ''}`} onClick={(e) => e.stopPropagation()}>
        <button className="x" onClick={onClose} aria-label="Close">×</button>
        <div className="modal-top">
        <ProductImage p={p} className="modal-img" />
        <div className="modal-body">
          <p className="eyebrow">{p.origin}</p>
          <h3>{p.name} <span className="si">{p.sinhala}</span></h3>
          <SizePicker p={p} vi={vi} setVi={setVi} />
          <p>{p.blurb}</p>
          <div className="tags">{p.tags.map((t) => <span key={t}>{t}</span>)}</div>
          <div className="card-foot">
            <span className={v.price == null ? 'price req' : 'price'}>{fmtPrice(v.price)}</span>
            <button className="btn primary" onClick={() => onAdd(p.id, vi)}>{v.price == null ? 'Ask about this' : qty ? `Add another (${qty})` : 'Add to cart'}</button>
          </div>
          {(ben || label) && (
            <div className="jump">
              {ben && <a href="#benefits-anchor" onClick={(e) => { e.preventDefault(); document.getElementById('benefits-anchor')?.scrollIntoView({ behavior: 'smooth' }) }}>↓ Health benefits</a>}
              {label && <a href="#label-anchor" onClick={(e) => { e.preventDefault(); document.getElementById('label-anchor')?.scrollIntoView({ behavior: 'smooth' }) }}>↓ Origin & how to enjoy</a>}
            </div>
          )}
        </div>
        </div>
        {(ben || label) && (
        <div className="modal-extra">
          {ben && <div id="benefits-anchor"><Benefits data={ben} onZoom={setZoom} /></div>}
          {label && (
            <section className="label-wrap" id="label-anchor">
              <button className="label-thumb" onClick={() => setZoom(label)} aria-label="Enlarge origin and preparation details">
                <img src={label} alt={`${p.name} origin and preparation`} />
              </button>
              <div>
                <p className="eyebrow">Origin & how to enjoy</p>
                <h4>From our farm to your kitchen</h4>
                <p>Where our {p.name} comes from, how it's made, and the best ways to prepare and enjoy it.</p>
                <button className="btn small ghost" onClick={() => setZoom(label)}>View full details</button>
              </div>
            </section>
          )}
        </div>
        )}
      </div>
      {zoom && (
        <div className="zoom" onClick={(e) => { e.stopPropagation(); setZoom(null) }}>
          <div className="zoom-scroll" onClick={(e) => e.stopPropagation()}>
            <img src={zoom} alt="Enlarged view" />
          </div>
          <p className="zoom-hint">Scroll or pinch to explore · tap outside or × to close</p>
          <button className="x" aria-label="Close" onClick={(e) => { e.stopPropagation(); setZoom(null) }}>×</button>
        </div>
      )}
    </div>
  )
}

function buildMessage(lines, subtotal, hasRequest, form) {
  const out = ["Hello Tropicai! I'd like to place an order:", '']
  lines.forEach((l, i) => {
    const size = l.v.label ? ` (${l.v.label})` : ''
    const price = l.v.price != null ? ` = ${fmt(l.v.price * l.qty)}` : ' = price on request'
    out.push(`${i + 1}. ${l.item.name}${size} x ${l.qty}${price}`)
  })
  out.push('', subtotal === 0 && hasRequest ? 'Subtotal: prices on request' : `Subtotal: ${fmt(subtotal)}${hasRequest ? ' + items on request' : ''}`)
  out.push('', `Name: ${form.name || ''}`)
  if (form.phone) out.push(`Phone: ${form.phone}`)
  out.push(`Delivery: ${form.method === 'pickup' ? 'Pick up at stall' : 'Home delivery'}`)
  if (form.method !== 'pickup' && form.address) out.push(`Address: ${form.address}`)
  if (form.notes) out.push(`Notes: ${form.notes}`)
  out.push('', 'Please confirm availability, delivery charge and payment details. Thank you!')
  return out.join('\n')
}

function CartDrawer({ open, onClose, cart, setQty, clear }) {
  const [form, setForm] = useState({ name: '', phone: '', method: 'delivery', address: '', notes: '' })
  const lines = Object.entries(cart)
    .map(([key, qty]) => {
      const { id, vi } = parseKey(key)
      const item = ALL_ITEMS.find((p) => p.id === id)
      return { key, item, v: item && item.variants[vi], qty }
    })
    .filter((l) => l.item && l.v && l.qty > 0)
  const subtotal = lines.reduce((s, l) => s + (l.v.price || 0) * l.qty, 0)
  const hasRequest = lines.some((l) => l.v.price == null)
  const message = buildMessage(lines, subtotal, hasRequest, form)
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
  const ready = lines.length > 0 && form.name.trim() && (form.method === 'pickup' || form.address.trim())
  const [copied, setCopied] = useState(false)
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value })
  const copy = async () => {
    try { await navigator.clipboard.writeText(message); setCopied(true); setTimeout(() => setCopied(false), 1800) } catch { /* ignore */ }
  }

  return (
    <>
      <div className={open ? 'scrim show' : 'scrim'} onClick={onClose} />
      <aside className={open ? 'drawer open' : 'drawer'} aria-hidden={!open}>
        <div className="drawer-head">
          <h3>Your cart</h3>
          <button className="x" onClick={onClose} aria-label="Close cart">×</button>
        </div>
        {lines.length === 0 ? (
          <div className="empty">
            <Logo size={64} />
            <p>Your cart is empty.</p>
            <a href="#shop" className="btn primary" onClick={onClose}>Browse products</a>
          </div>
        ) : (
          <div className="drawer-body">
            <ul className="lines">
              {lines.map(({ key, item, v, qty }) => (
                <li key={key}>
                  {item.image ? <img src={item.image} alt="" style={{ objectPosition: item.focus || 'center' }} /> : <span className="ph"><Logo size={28} /></span>}
                  <div className="line-info">
                    <strong>{item.name}</strong>
                    <small>{v.label || 'Size and price on request'}</small>
                    <div className="qty">
                      <button onClick={() => setQty(key, qty - 1)} aria-label="Decrease">−</button>
                      <span>{qty}</span>
                      <button onClick={() => setQty(key, qty + 1)} aria-label="Increase">+</button>
                      <button className="rm" onClick={() => setQty(key, 0)}>Remove</button>
                    </div>
                  </div>
                  <span className="line-price">{v.price != null ? fmt(v.price * qty) : 'On request'}</span>
                </li>
              ))}
            </ul>
            <div className="sub">
              <span>Subtotal</span>
              <strong>{subtotal === 0 && hasRequest ? <small>Prices on request</small> : <>{fmt(subtotal)}{hasRequest && <small> + items on request</small>}</>}</strong>
            </div>
            <p className="note">Delivery charges are confirmed on WhatsApp.</p>

            <div className="form">
              <label>Your name *<input value={form.name} onChange={set('name')} placeholder="e.g. Nimali Perera" /></label>
              <label>Phone<input value={form.phone} onChange={set('phone')} placeholder="07X XXX XXXX" inputMode="tel" /></label>
              <div className="seg">
                <button className={form.method === 'delivery' ? 'on' : ''} onClick={() => setForm({ ...form, method: 'delivery' })}>Home delivery</button>
                <button className={form.method === 'pickup' ? 'on' : ''} onClick={() => setForm({ ...form, method: 'pickup' })}>Pick up at stall</button>
              </div>
              {form.method === 'delivery' && (
                <label>Delivery address *<textarea rows="2" value={form.address} onChange={set('address')} placeholder="House no, street, city" /></label>
              )}
              <label>Notes<textarea rows="2" value={form.notes} onChange={set('notes')} placeholder="Preferred delivery time, gift note..." /></label>
            </div>

            <details className="preview">
              <summary>Preview WhatsApp message</summary>
              <pre>{message}</pre>
              <button className="btn small ghost" onClick={copy}>{copied ? 'Copied' : 'Copy message'}</button>
            </details>

            <a
              className={ready ? 'btn wa' : 'btn wa disabled'}
              href={ready ? waUrl : undefined}
              target="_blank"
              rel="noreferrer"
              aria-disabled={!ready}
            >
              <WaIcon /> Send order on WhatsApp
            </a>
            {!ready && <p className="hint">Add your name{form.method === 'delivery' ? ' and address' : ''} to send the order.</p>}
            <p className="hint">Opens WhatsApp to {WHATSAPP_DISPLAY} with your order filled in. Just tap send.</p>
            <button className="clear" onClick={clear}>Clear cart</button>
          </div>
        )}
      </aside>
    </>
  )
}

export default function App() {
  const [cart, setCart] = useState(loadCart)
  const [cartOpen, setCartOpen] = useState(false)
  const [modal, setModal] = useState(null)
  const [section, setSection] = useState(null)
  const [certOpen, setCertOpen] = useState(false)
  const openModal = (p, sec = null) => { setSection(sec); setModal(p) }
  const [toast, setToast] = useState('')

  useEffect(() => { try { localStorage.setItem(CART_KEY, JSON.stringify(cart)) } catch { /* ignore */ } }, [cart])
  useEffect(() => {
    document.body.style.overflow = cartOpen || modal || certOpen ? 'hidden' : ''
  }, [cartOpen, modal, certOpen])

  const count = useMemo(() => Object.values(cart).reduce((a, b) => a + b, 0), [cart])
  const add = (id, vi = 0) => {
    const k = keyOf(id, vi)
    setCart((c) => ({ ...c, [k]: (c[k] || 0) + 1 }))
    const item = ALL_ITEMS.find((p) => p.id === id)
    const label = item.variants[vi] && item.variants[vi].label
    setToast(`${item.name}${label ? ` (${label})` : ''} added to cart`)
    clearTimeout(window.__t); window.__t = setTimeout(() => setToast(''), 1800)
  }
  const setQty = (id, q) => setCart((c) => {
    const n = { ...c }
    if (q <= 0) delete n[id]; else n[id] = q
    return n
  })

  return (
    <>
      <div className="announce">Fresh harvest from Lakshapana and Thanamalwila · <a href="#fizzy">New: Fizzy Corner sodas</a> · Order on WhatsApp {WHATSAPP_DISPLAY}</div>
      <Header count={count} onCart={() => setCartOpen(true)} />
      <main>
        <Hero />
        <Shop cart={cart} add={add} open={openModal} />
        <Peanuts cart={cart} add={add} open={openModal} />
        <FizzyCorner cart={cart} add={add} open={openModal} />
        <Hampers />
        <Story />
        <GoodMarket onView={() => setCertOpen(true)} />
        <Process />
        <Gallery />
      </main>
      <Contact />
      {certOpen && (
        <div className="zoom" onClick={() => setCertOpen(false)}>
          <div className="zoom-scroll cert-scroll" onClick={(e) => e.stopPropagation()}>
            <img src="./media/good-market-certificate.jpg" alt="Tropicai Good Market approval certificate" />
          </div>
          <p className="zoom-hint"><a href={GOOD_MARKET_URL} target="_blank" rel="noopener noreferrer">Verify on goodmarket.global ↗</a> · tap outside or × to close</p>
          <button className="x" aria-label="Close" onClick={() => setCertOpen(false)}>×</button>
        </div>
      )}
      <Modal p={modal} section={section} qty={modal && qtyOf(cart, modal.id)} onClose={() => setModal(null)} onAdd={add} />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} cart={cart} setQty={setQty} clear={() => setCart({})} />
      {count > 0 && !cartOpen && (
        <button className="fab" onClick={() => setCartOpen(true)}>
          <WaIcon /> View cart · {count} {count === 1 ? 'item' : 'items'}
        </button>
      )}
      <div className={toast ? 'toast show' : 'toast'}>{toast}</div>
    </>
  )
}

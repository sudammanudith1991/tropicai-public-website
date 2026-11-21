import { useEffect, useMemo, useState } from 'react'
import { CATEGORIES, PRODUCTS, MORE_PRODUCTS, ALL_ITEMS, WHATSAPP_NUMBER, WHATSAPP_DISPLAY, fmt } from './data.js'

const CART_KEY = 'tropicai_cart_v1'
const loadCart = () => {
  try { return JSON.parse(localStorage.getItem(CART_KEY)) || {} } catch { return {} }
}

function Logo({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      <circle cx="32" cy="32" r="30" fill="none" stroke="currentColor" strokeWidth="2" />
      <g stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none">
        <path d="M20 50 L44 14" />
        {[0, 1, 2, 3, 4, 5, 6].map((i) => {
          const t = 0.15 + i * 0.11
          const x = 20 + 24 * t, y = 50 - 36 * t, l = 13 - i * 1.2
          return (
            <g key={i}>
              <path d={`M${x} ${y} q ${-l * 0.6} ${-l * 0.1} ${-l} ${-l * 0.7}`} />
              <path d={`M${x} ${y} q ${l * 0.35} ${l * 0.35} ${l} ${l * 0.3}`} />
            </g>
          )
        })}
      </g>
    </svg>
  )
}

const WaIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.9 11.9 0 0 0 4.6 4c1.7.7 2.4.8 3.2.7.5-.1 1.5-.6 1.8-1.2.2-.6.2-1.1.1-1.2l-.4-.2Z" />
  </svg>
)

function Header({ count, onCart }) {
  return (
    <header className="header">
      <a href="#top" className="brand">
        <Logo size={38} />
        <span className="wordmark">TROPICAI</span>
      </a>
      <nav className="nav">
        <a href="#shop">Shop</a>
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
        <ul className="trust">
          <li><strong>100%</strong> natural</li>
          <li><strong>2</strong> sourcing regions</li>
          <li><strong>Good Market</strong> approved vendor</li>
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
  return (
    <article className="card">
      <button className="card-img" onClick={() => onOpen(p)} aria-label={`View ${p.name}`}>
        <img src={p.image} alt={`Tropicai ${p.name}`} style={{ objectPosition: p.focus || 'center' }} loading="lazy" />
        <span className="origin-pill">{p.origin}</span>
      </button>
      <div className="card-body">
        <div className="card-head">
          <h3>{p.name}</h3>
          <span className="si">{p.sinhala}</span>
        </div>
        <p className="size">{p.size}</p>
        <p className="blurb">{p.blurb}</p>
        <div className="card-foot">
          <span className="price">{fmt(p.price)}</span>
          <button className="btn small primary" onClick={() => onAdd(p.id)}>
            {qty ? `Added (${qty}) +` : 'Add to cart'}
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
        {list.map((p) => <ProductCard key={p.id} p={p} qty={cart[p.id]} onAdd={add} onOpen={open} />)}
      </div>
      {more.length > 0 && (
        <div className="more">
          <h3>Also from our farms</h3>
          <p>Seasonal and limited items. Add them to your order and we'll confirm price and availability on WhatsApp.</p>
          <div className="more-list">
            {more.map((p) => (
              <button key={p.id} className={cart[p.id] ? 'more-item on' : 'more-item'} onClick={() => add(p.id)}>
                <Logo size={22} />
                <span>
                  <strong>{p.name}</strong>
                  <small>{p.sinhala} · {p.origin}</small>
                </span>
                <em>{cart[p.id] ? `In cart (${cart[p.id]})` : 'Ask +'}</em>
              </button>
            ))}
          </div>
        </div>
      )}
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
        <Logo size={56} />
        <div>
          <p className="wordmark big">TROPICAI</p>
          <p className="tag">Nature's purest, delivered to your doorstep.</p>
        </div>
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
        </div>
      </div>
      <p className="copy">© {new Date().getFullYear()} Tropicai. Made with care in Sri Lanka.</p>
    </footer>
  )
}

function Modal({ p, onClose, onAdd, qty }) {
  if (!p) return null
  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="x" onClick={onClose} aria-label="Close">×</button>
        <img src={p.image} alt={`Tropicai ${p.name}`} style={{ objectPosition: p.focus || 'center' }} />
        <div className="modal-body">
          <p className="eyebrow">{p.origin}</p>
          <h3>{p.name} <span className="si">{p.sinhala}</span></h3>
          <p className="size">{p.size}</p>
          <p>{p.blurb}</p>
          <div className="tags">{p.tags.map((t) => <span key={t}>{t}</span>)}</div>
          <div className="card-foot">
            <span className="price">{fmt(p.price)}</span>
            <button className="btn primary" onClick={() => onAdd(p.id)}>{qty ? `Add another (${qty})` : 'Add to cart'}</button>
          </div>
        </div>
      </div>
    </div>
  )
}

function buildMessage(lines, subtotal, hasRequest, form) {
  const out = ["Hello Tropicai! I'd like to place an order:", '']
  lines.forEach((l, i) => {
    const size = l.item.size ? ` (${l.item.size})` : ''
    const price = l.item.price != null ? ` = ${fmt(l.item.price * l.qty)}` : ' = price on request'
    out.push(`${i + 1}. ${l.item.name}${size} x ${l.qty}${price}`)
  })
  out.push('', `Subtotal: ${fmt(subtotal)}${hasRequest ? ' + items on request' : ''}`)
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
    .map(([id, qty]) => ({ item: ALL_ITEMS.find((p) => p.id === id), qty }))
    .filter((l) => l.item && l.qty > 0)
  const subtotal = lines.reduce((s, l) => s + (l.item.price || 0) * l.qty, 0)
  const hasRequest = lines.some((l) => l.item.price == null)
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
              {lines.map(({ item, qty }) => (
                <li key={item.id}>
                  {item.image ? <img src={item.image} alt="" style={{ objectPosition: item.focus || 'center' }} /> : <span className="ph"><Logo size={28} /></span>}
                  <div className="line-info">
                    <strong>{item.name}</strong>
                    <small>{item.size || 'Price on request'}</small>
                    <div className="qty">
                      <button onClick={() => setQty(item.id, qty - 1)} aria-label="Decrease">−</button>
                      <span>{qty}</span>
                      <button onClick={() => setQty(item.id, qty + 1)} aria-label="Increase">+</button>
                      <button className="rm" onClick={() => setQty(item.id, 0)}>Remove</button>
                    </div>
                  </div>
                  <span className="line-price">{item.price != null ? fmt(item.price * qty) : 'On request'}</span>
                </li>
              ))}
            </ul>
            <div className="sub">
              <span>Subtotal</span>
              <strong>{fmt(subtotal)}{hasRequest && <small> + items on request</small>}</strong>
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
  const [toast, setToast] = useState('')

  useEffect(() => { try { localStorage.setItem(CART_KEY, JSON.stringify(cart)) } catch { /* ignore */ } }, [cart])
  useEffect(() => {
    document.body.style.overflow = cartOpen || modal ? 'hidden' : ''
  }, [cartOpen, modal])

  const count = useMemo(() => Object.values(cart).reduce((a, b) => a + b, 0), [cart])
  const add = (id) => {
    setCart((c) => ({ ...c, [id]: (c[id] || 0) + 1 }))
    const item = ALL_ITEMS.find((p) => p.id === id)
    setToast(`${item.name} added to cart`)
    clearTimeout(window.__t); window.__t = setTimeout(() => setToast(''), 1800)
  }
  const setQty = (id, q) => setCart((c) => {
    const n = { ...c }
    if (q <= 0) delete n[id]; else n[id] = q
    return n
  })

  return (
    <>
      <div className="announce">Fresh harvest from Lakshapana and Thanamalwila · Order on WhatsApp {WHATSAPP_DISPLAY}</div>
      <Header count={count} onCart={() => setCartOpen(true)} />
      <main>
        <Hero />
        <Shop cart={cart} add={add} open={setModal} />
        <Story />
        <Process />
        <Gallery />
      </main>
      <Contact />
      <Modal p={modal} qty={modal && cart[modal.id]} onClose={() => setModal(null)} onAdd={add} />
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

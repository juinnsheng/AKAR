import { useState } from 'react'
import { products } from '../data.js'

export default function ProductMarketplace() {
  const [cart, setCart] = useState({})

  const addToCart = (id) => setCart((c) => ({ ...c, [id]: (c[id] || 0) + 1 }))
  const itemCount = Object.values(cart).reduce((a, b) => a + b, 0)
  const total = products.reduce((sum, p) => sum + (cart[p.id] || 0) * p.price, 0)

  return (
    <section className="page">
      <div className="container">
        <div className="section-head" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 20, maxWidth: 'none' }}>
          <div>
            <h2>Product marketplace</h2>
            <p style={{ marginTop: 10, color: 'var(--ink-soft)' }}>
              Durian, forest honey, woven crafts and more — bought directly from the
              Orang Asli producer, paid straight to their digital wallet.
            </p>
          </div>
          {itemCount > 0 && (
            <div className="card" style={{ padding: '10px 18px', minWidth: 160 }}>
              <div style={{ fontSize: '0.78rem', color: 'var(--ink-soft)' }}>Cart ({itemCount})</div>
              <div style={{ fontFamily: 'Fraunces, serif', fontWeight: 700, color: 'var(--canopy)', fontSize: '1.2rem' }}>
                RM {total.toFixed(2)}
              </div>
            </div>
          )}
        </div>

        <div className="grid grid-3">
          {products.map((p) => (
            <div className="card" key={p.id}>
              <div style={{ fontSize: '2.2rem' }}>{p.emoji}</div>
              <h3 style={{ marginTop: 10 }}>{p.name}</h3>
              <p style={{ marginTop: 4, fontSize: '0.85rem', color: 'var(--ink-soft)' }}>Sold by {p.seller}</p>
              <div className="meta-row">
                <span style={{ fontWeight: 600, color: 'var(--moss)' }}>RM {p.price}</span>
                <span>{p.unit}</span>
              </div>
              <button className="card-btn" onClick={() => addToCart(p.id)}>
                {cart[p.id] ? `Add another (${cart[p.id]} in cart)` : 'Add to cart'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { useState } from 'react'
import { QRCodeCanvas } from 'qrcode.react'

const TRANSACTIONS = [
  { id: 't1', label: 'Musang King Durian order \u2014 Buyer #2291', amount: '+RM 202.50' },
  { id: 't2', label: 'Rattan basket bulk order \u2014 Titiwangsa Resorts', amount: '+RM 2,720.00' },
  { id: 't3', label: 'Jungle guiding \u2014 Horizon Eco Retreats', amount: '+RM 250.00' },
  { id: 't4', label: 'Platform fee (2.5%)', amount: '\u2212RM 43.18' },
]

export default function Wallet() {
  const [amount, setAmount] = useState('45.00')
  const payload = `asliconnect.my/pay?vendor=along-durian-coop&amount=${amount || '0'}`

  return (
    <section className="page">
      <div className="container">
        <div className="section-head">
          <h2>Digital wallet</h2>
          <p>
            Every sale and completed job pays out here directly no bank account
            required. This is a sample QR code a buyer would scan to pay a seller
            on the spot, e.g. at a durian stall or after a farm job.
          </p>
        </div>

        <div className="wallet-layout">
          <div className="wallet-card">
            <div style={{ fontSize: '0.8rem', opacity: 0.8 }}>Along Durian Climbers Co-op</div>
            <div className="wallet-balance">RM 3,129.32</div>
            <div style={{ fontSize: '0.82rem', opacity: 0.75, marginTop: 4 }}>Available balance</div>

            <ul className="txn-list">
              {TRANSACTIONS.map((t) => (
                <li key={t.id}>
                  <span>{t.label}</span>
                  <span className="txn-amt" style={{ color: t.amount.startsWith('\u2212') ? '#e2a53b' : '#8fd6a3' }}>
                    {t.amount}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card">
            <h3>Request a payment</h3>
            <p style={{ marginTop: 6, fontSize: '0.9rem', color: 'var(--ink-soft)' }}>
              Enter an amount to generate a scannable sample QR code. This is a
              front-end demo only no real payment gateway is connected.
            </p>

            <label style={{ display: 'block', marginTop: 16, fontSize: '0.85rem', fontWeight: 600 }}>
              Amount (RM)
              <input
                type="number"
                min="0"
                step="0.01"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                style={{
                  display: 'block',
                  width: '100%',
                  marginTop: 6,
                  padding: '10px 12px',
                  border: '1px solid var(--line)',
                  borderRadius: 4,
                  fontSize: '1rem',
                  fontFamily: 'inherit',
                }}
              />
            </label>

            <div className="qr-wrap">
              <QRCodeCanvas value={payload} size={180} bgColor="#fbf8f0" fgColor="#1f3d2b" level="M" />
              <p style={{ marginTop: 12, fontSize: '0.78rem', color: 'var(--ink-soft)', wordBreak: 'break-all' }}>
                {payload}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

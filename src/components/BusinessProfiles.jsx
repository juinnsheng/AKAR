import { businesses } from '../data.js'

export default function BusinessProfiles() {
  return (
    <section className="page">
      <div className="container">
        <div className="section-head">
          <h2>Verified business profiles</h2>
          <p>
            Every listing is checked by a community champion or NGO field agent
            before it goes live — so buyers know who they&apos;re dealing with, and
            sellers control exactly what they share publicly.
          </p>
        </div>

        <div className="grid grid-2">
          {businesses.map((b) => (
            <div className="card" key={b.id}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 10 }}>
                <h3>{b.name}</h3>
                {b.verified && <span className="badge">&#10003; Verified</span>}
              </div>
              <p style={{ marginTop: 4, fontSize: '0.85rem', color: 'var(--ink-soft)' }}>{b.community}</p>
              <p style={{ marginTop: 12, fontSize: '0.93rem' }}>{b.blurb}</p>
              <div className="tag-row">
                {b.tags.map((t) => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </div>
              <div className="meta-row">
                <span>{b.category}</span>
                <span>&#9733; {b.rating}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

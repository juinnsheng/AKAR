import { useState } from 'react'
import { jobs } from '../data.js'

export default function JobMarketplace() {
  const [applied, setApplied] = useState(() => new Set())

  function toggleApply(id) {
    setApplied((prev) => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  return (
    <section className="page">
      <div className="container">
        <div className="section-head">
          <h2>Job &amp; service marketplace</h2>
          <p>
            Durian farm harvesting, jungle guiding, home-based work and more —
            posted directly by employers, matched to skill and location.
          </p>
        </div>

        <div className="grid grid-2">
          {jobs.map((j) => {
            const isApplied = applied.has(j.id)
            return (
              <div className="card" key={j.id}>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10 }}>
                  <h3>{j.title}</h3>
                  {j.urgent && <span className="badge urgent">Urgent</span>}
                </div>
                <p style={{ marginTop: 4, fontSize: '0.85rem', color: 'var(--ink-soft)' }}>
                  {j.poster} &middot; {j.location}
                </p>
                <p style={{ marginTop: 12, fontSize: '0.93rem' }}>{j.description}</p>
                <div className="tag-row">
                  <span className="tag">{j.type}</span>
                  <span className="tag">{j.schedule}</span>
                </div>
                <div className="meta-row">
                  <span style={{ fontWeight: 600, color: 'var(--moss)' }}>{j.pay}</span>
                </div>
                <button
                  className={`card-btn ${isApplied ? 'done' : ''}`}
                  onClick={() => toggleApply(j.id)}
                >
                  {isApplied ? '\u2713 Application sent' : 'Apply for this job'}
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

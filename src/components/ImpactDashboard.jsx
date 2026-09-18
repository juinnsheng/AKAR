import { impactStats, sdgAlignment } from '../data.js'

export default function ImpactDashboard() {
  return (
    <section className="page">
      <div className="container">
        <div className="section-head">
          <h2>Impact &amp; SDG alignment</h2>
          <p>
            AsliConnect is built on an ethical, inclusive revenue model vulnerable
            users are never charged high fees. Revenue flows from businesses,
            institutions and CSR sponsors who benefit from accessing Orang Asli
            talent and products.
          </p>
        </div>

        <div className="stat-grid">
          {impactStats.map((s) => (
            <div className="stat-tile" key={s.label}>
              <div className="num">{s.value}</div>
              <div className="lbl">{s.label}</div>
              <div className="src">{s.source}</div>
            </div>
          ))}
        </div>

        <div className="sdg-grid">
          {sdgAlignment.map((s) => (
            <div className="sdg-tile" key={s.code}>
              <div className="code">{s.code}</div>
              <h4>{s.title}</h4>
              <p>{s.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

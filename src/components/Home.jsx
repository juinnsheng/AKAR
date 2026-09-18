const SOLUTIONS = [
  {
    title: 'Business visibility engine',
    body: 'Every Orang Asli business gets a verified digital storefront — searchable and discoverable by buyers and employers across Malaysia, not just the local village.',
  },
  {
    title: 'Smart job matching',
    body: 'Farms, tourism operators and businesses post real needs. Workers and single mothers apply and get matched by skill and location — no more word-of-mouth only.',
  },
  {
    title: 'Direct-to-wallet commerce',
    body: 'Every transaction flows straight into the seller\u2019s digital wallet. No middlemen, no delays, no bank account required.',
  },
]

const STEPS = [
  { n: '01', title: 'Register & verify', body: 'Businesses, workers and single mothers sign up and get their profile verified for trust.' },
  { n: '02', title: 'Build profile & list', body: 'Showcase skills, products or services — from durian climbing to handwoven crafts.' },
  { n: '03', title: 'Get matched', body: 'Our matching engine connects talent directly with buyers, farms and households.' },
  { n: '04', title: 'Work & get paid', body: 'Payment lands in the Orang Asli wallet the moment a job or order is complete.' },
]

export default function Home({ onNavigate }) {
  return (
    <>
      <section className="hero">
        <svg className="hero-pattern" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="weave" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 20 L20 0 L40 20 L20 40 Z" fill="none" stroke="#f6f0df" strokeWidth="1.2" />
            </pattern>
          </defs>
          <rect width="400" height="400" fill="url(#weave)" />
        </svg>
        <div className="hero-inner">
          <div>
            <div className="hero-eyebrow">Jobs &amp; e-commerce platform &middot; asliconnect.my</div>
            <h1>Connecting Malaysian rural talent to jobs, customers and income.</h1>
            <p className="lede">
              Durian climbers, jungle guides, artisans and single mothers hold skills
              that rarely reach beyond their own village. AsliConnect gives every one
              of them a verified profile, a fair marketplace, and a wallet that pays
              them directly — no middlemen.
            </p>
            <div className="hero-ctas">
              <button className="btn btn-primary" onClick={() => onNavigate('jobs')}>
                Browse job requests
              </button>
              <button className="btn btn-ghost" onClick={() => onNavigate('profiles')}>
                See business profiles
              </button>
            </div>
          </div>

          <div className="hero-card">
            <div style={{ fontSize: '0.8rem', color: 'var(--ink-soft)' }}>How money moves</div>
            <div className="flow">
              <span>Buyer</span>
              <span className="flow-arrow">&rarr;</span>
              <span>AsliConnect</span>
              <span className="flow-arrow">&rarr;</span>
              <span>Orang Asli wallet</span>
            </div>
            <div className="stat-row">
              <div>
                <div className="num">90.3%</div>
                <div className="lbl">rural households online</div>
              </div>
              <div>
                <div className="num">2.5%</div>
                <div className="lbl">ethical transaction fee</div>
              </div>
              <div>
                <div className="num">24h</div>
                <div className="lbl">payout after job completion</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page">
        <div className="container">
          <div className="section-head">
            <h2>Malaysia already has the talent. AKAR connects it to demand.</h2>
            <p>
              Three problems keep rural income unstable: invisibility beyond local
              communities, irregular access to job requests, and middlemen eating
              into fragmented payments. AsliConnect answers all three in one platform.
            </p>
          </div>
          <div className="grid grid-3">
            {SOLUTIONS.map((s) => (
              <div className="card" key={s.title}>
                <h3>{s.title}</h3>
                <p style={{ marginTop: 10, color: 'var(--ink-soft)', fontSize: '0.93rem' }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <h2>How it works</h2>
            <p>From sign-up to payout in four steps — built for low-bandwidth, mobile-first access.</p>
          </div>
          <div className="grid grid-2">
            {STEPS.map((s) => (
              <div className="card" key={s.n} style={{ display: 'flex', gap: 16 }}>
                <div style={{ fontFamily: 'Fraunces, serif', fontSize: '1.4rem', color: 'var(--durian)', fontWeight: 700 }}>
                  {s.n}
                </div>
                <div>
                  <h3>{s.title}</h3>
                  <p style={{ marginTop: 6, color: 'var(--ink-soft)', fontSize: '0.93rem' }}>{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

import { useState } from 'react'
import Home from './components/Home.jsx'
import BusinessProfiles from './components/BusinessProfiles.jsx'
import JobMarketplace from './components/JobMarketplace.jsx'
import ProductMarketplace from './components/ProductMarketplace.jsx'
import Wallet from './components/Wallet.jsx'
import ImpactDashboard from './components/ImpactDashboard.jsx'
import Footer from './components/Footer.jsx'

const TABS = [
  { id: 'home', label: 'Home' },
  { id: 'profiles', label: 'Business Profiles' },
  { id: 'jobs', label: 'Job Marketplace' },
  { id: 'products', label: 'Product Store' },
  { id: 'wallet', label: 'Digital Wallet' },
  { id: 'impact', label: 'Impact & SDGs' },
]

export default function App() {
  const [tab, setTab] = useState('home')

  return (
    <>
      <header className="topbar">
        <div className="topbar-inner">
          <div className="brand">
            <span className="brand-mark">AsliConnect</span>
            <span className="brand-tag">by AKAR Connect</span>
          </div>
          <nav className="tabs" aria-label="Main sections">
            {TABS.map((t) => (
              <button
                key={t.id}
                className={`tab-btn ${tab === t.id ? 'active' : ''}`}
                onClick={() => setTab(t.id)}
                aria-current={tab === t.id ? 'page' : undefined}
              >
                {t.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {tab === 'home' && <Home onNavigate={setTab} />}
      {tab === 'profiles' && <BusinessProfiles />}
      {tab === 'jobs' && <JobMarketplace />}
      {tab === 'products' && <ProductMarketplace />}
      {tab === 'wallet' && <Wallet />}
      {tab === 'impact' && <ImpactDashboard />}

      <Footer />
    </>
  )
}

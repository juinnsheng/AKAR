// All demo data lives here. No database, no API — this is a static
// front-end prototype. Swap this file for real API calls later.

export const businesses = [
  {
    id: 'b1',
    name: 'Along Durian Climbers Co-op',
    community: 'Kampung Sungai Ruil, Cameron Highlands',
    category: 'Durian farm labour',
    verified: true,
    rating: 4.9,
    blurb:
      'A collective of 6 experienced climbers who harvest, sort and grade durian on contract during peak season (Jun–Aug, Nov–Jan).',
    tags: ['Durian climbing', 'Harvest sorting', 'Grading'],
  },
  {
    id: 'b2',
    name: 'Mak Ijah Anyaman Rotan',
    community: 'Kampung Orang Asli Pos Betau, Pahang',
    category: 'Traditional crafts',
    verified: true,
    rating: 5.0,
    blurb:
      'Handwoven rattan baskets, mats and bags using techniques passed down four generations. Custom orders welcome.',
    tags: ['Rattan weaving', 'Handicraft', 'Custom orders'],
  },
  {
    id: 'b3',
    name: 'Bah Tijah Jungle Trails',
    community: 'Kampung Sg Berua, Perak',
    category: 'Eco-tourism guiding',
    verified: true,
    rating: 4.8,
    blurb:
      'Licensed jungle-trekking guide with 15 years of forest knowledge — medicinal plants, wildlife tracking, river crossings.',
    tags: ['Jungle guiding', 'Eco-tourism', 'Forest knowledge'],
  },
  {
    id: 'b4',
    name: 'Kak Minah Home Kitchen',
    community: 'Kampung Sri Relau, Kelantan',
    category: 'Single mother — home-based',
    verified: true,
    rating: 4.7,
    blurb:
      'Halal home-cooked traditional meals and kuih for events, made between school hours. Delivery within 10km.',
    tags: ['Home-based', 'Flexible hours', 'Catering'],
  },
]

export const jobs = [
  {
    id: 'j1',
    title: 'Durian Climbers Needed — Musang King Block',
    poster: 'Ladang Gemilang Durian Sdn Bhd',
    location: 'Raub, Pahang',
    type: 'Farm labour',
    pay: 'RM 180/day + harvest bonus',
    schedule: 'Peak season, 3 weeks',
    urgent: true,
    description:
      'Need 4 experienced climbers for Musang King harvest. Safety gear provided. Immediate start.',
  },
  {
    id: 'j2',
    title: 'Jungle Guide for Corporate Team-Building',
    poster: 'Horizon Eco Retreats',
    location: 'Gopeng, Perak',
    type: 'Eco-tourism',
    pay: 'RM 250/day',
    schedule: '2 days, this weekend',
    urgent: false,
    description:
      'Guide a 20-pax corporate group on a half-day forest trail with river tubing stop.',
  },
  {
    id: 'j3',
    title: 'Home-Based Kuih Order — 500 Packs',
    poster: 'Anjung Raya Catering',
    location: 'Gua Musang, Kelantan',
    type: 'Single mother — flexible',
    pay: 'RM 1,200 total',
    schedule: 'Deliver within 5 days',
    urgent: false,
    description:
      'Bulk order for a community event. Can be split across 2–3 home producers.',
  },
  {
    id: 'j4',
    title: 'Rattan Basket Bulk Order for Hotel Gift Shop',
    poster: 'Titiwangsa Resorts Group',
    location: 'Cameron Highlands',
    type: 'Craft production',
    pay: 'RM 40/basket (60 units)',
    schedule: 'Ongoing, monthly restock',
    urgent: false,
    description:
      'Recurring order for a hotel gift shop wanting authentic, verified Orang Asli handicraft.',
  },
]

export const products = [
  {
    id: 'p1',
    name: 'Musang King Durian (whole fruit)',
    seller: 'Along Durian Climbers Co-op',
    price: 45,
    unit: 'per kg',
    emoji: '🥭',
  },
  {
    id: 'p2',
    name: 'Handwoven Rattan Basket (medium)',
    seller: 'Mak Ijah Anyaman Rotan',
    price: 68,
    unit: 'each',
    emoji: '🧺',
  },
  {
    id: 'p3',
    name: 'Forest Honey (tualang)',
    seller: 'Bah Tijah Jungle Trails',
    price: 55,
    unit: '350ml jar',
    emoji: '🍯',
  },
  {
    id: 'p4',
    name: 'Traditional Kuih Bundle (12pcs)',
    seller: 'Kak Minah Home Kitchen',
    price: 28,
    unit: 'per box',
    emoji: '🍡',
  },
  {
    id: 'p5',
    name: 'Woven Pandan Mat',
    seller: 'Mak Ijah Anyaman Rotan',
    price: 95,
    unit: 'each',
    emoji: '🪡',
  },
  {
    id: 'p6',
    name: 'Wild Jungle Ginger (halia hutan)',
    seller: 'Bah Tijah Jungle Trails',
    price: 18,
    unit: 'per kg',
    emoji: '🌿',
  },
]

export const impactStats = [
  { label: 'Rural households with internet access', value: '90.3%', source: 'DOSM ICT Survey 2025' },
  { label: 'Rural individual mobile phone usage', value: '98.9%', source: 'DOSM ICT Survey 2025' },
  { label: 'Target communities onboarded, Year 1', value: '25+', source: 'AKAR Connect roadmap' },
  { label: 'Transaction fee (ethical, capped)', value: '2.5%', source: 'AKAR Connect business model' },
]

export const sdgAlignment = [
  { code: 'SDG 1', title: 'No Poverty', note: 'Stable income streams for Orang Asli households and single mothers.' },
  { code: 'SDG 5', title: 'Gender Equality', note: 'Dedicated, flexible job listings designed around single mothers.' },
  { code: 'SDG 8', title: 'Decent Work & Economic Growth', note: 'Formal, transparent job matching replaces informal word-of-mouth hiring.' },
  { code: 'SDG 10', title: 'Reduced Inequalities', note: 'Direct market access closes the gap created by middlemen.' },
  { code: 'SDG 12', title: 'Responsible Consumption', note: 'Fair-trade sourcing straight from the community that produces it.' },
  { code: 'SDG 17', title: 'Partnerships for the Goals', note: 'A shared platform for CSR partners, corporates, and communities.' },
]

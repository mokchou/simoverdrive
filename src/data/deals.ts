export interface Deal {
  id: number
  name: string
  image: string
  oldPrice: string
  newPrice: string
  badge: string
  url: string
}

export const deals: Deal[] = [
  {
    id: 1,
    name: 'Fanatec CSL DD 5Nm — Liquidation Stock QR1',
    image:
      'https://assets.fanatec.com/image/upload/c_fill,q_auto,h_300,w_400,f_auto/products/Wheel-Bases/CSL_DD/CSL_DD-01.webp',
    oldPrice: '349,95€',
    newPrice: '200€',
    badge: '-43%',
    url: 'https://www.fanatec.com/eu/en/p/wheel-bases/csl_dd_psu90_eu/csl-dd-5nm-eu',
  },
  {
    id: 2,
    name: 'Simagic Alpha Mini 15Nm',
    image: 'https://simagic.com/cdn/shop/files/Alpha_Mini_transparent_base.png?v=1766649121',
    oldPrice: '629€',
    newPrice: '459€',
    badge: '-27%',
    url: 'https://eu.sim-motion.com/produkt/simagic-alpha-mini-early-bird/?lang=en',
  },
  {
    id: 3,
    name: 'MOZA R12 V1 Wheelbase 12Nm',
    image: 'https://eu.mozaracing.com/cdn/shop/files/R12V1.webp?v=1751281057',
    oldPrice: '469€',
    newPrice: '359€',
    badge: '-23%',
    url: 'https://eu.mozaracing.com/products/r12v1-wheelbase',
  },
  {
    id: 4,
    name: 'MOZA R5 Racing Bundle 5.5Nm',
    image:
      'https://eu.mozaracing.com/cdn/shop/files/R5_a8139d29-a749-48e8-bb36-cc5f58e74b62_grande.png?v=1752746509',
    oldPrice: '479€',
    newPrice: '419€',
    badge: '-12%',
    url: 'https://eu.mozaracing.com/products/r5-racing-bundle',
  },
  {
    id: 5,
    name: 'MOZA R9 V3 Wheelbase 9Nm',
    image: 'https://eu.mozaracing.com/cdn/shop/files/R9_V3-1.webp?v=1767606165',
    oldPrice: '399€',
    newPrice: '349€',
    badge: '-13%',
    url: 'https://eu.mozaracing.com/products/r9-wheelbase',
  },
  {
    id: 6,
    name: 'Heusinkveld Sprint 3 Pédales Load Cell',
    image:
      'https://trakracer.eu/cdn/shop/files/SimPedalsSprint3-pedalset_fb5e9a69-f3e9-4471-b87b-58d52fa466d2_grande.png?v=1724415930',
    oldPrice: '719€',
    newPrice: '649€',
    badge: '-10%',
    url: 'https://trakracer.eu/products/sim-pedals-sprint-3-pedal-set',
  },
]

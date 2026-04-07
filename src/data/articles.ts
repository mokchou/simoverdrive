export interface Article {
  id: number
  category: string
  title: string
  excerpt: string
  image: string
  url: string
}

export const articles: Article[] = [
  // === GUIDES ===
  {
    id: 1,
    category: 'Guide',
    title: 'Choisir sa base Direct Drive en 2026 : le guide complet',
    excerpt:
      'Fanatec, Simagic, MOZA ou Simucube — on décrypte les différences entre bases DD pour vous aider à choisir selon votre budget et votre niveau. Couple, retour de force, compatibilité volants : tout ce qu\'il faut savoir avant d\'acheter.',
    image: 'https://simagic.com/cdn/shop/files/Alpha_Mini_transparent_base.png?v=1766649121',
    url: '#guides',
  },
  {
    id: 2,
    category: 'Guide',
    title: 'Débuter en simracing en 2026 : le guide A à Z',
    excerpt:
      'Quel simulateur choisir ? Quel matériel pour commencer ? iRacing, ACC ou Assetto Corsa 2 ? Ce guide complet répond à toutes les questions des débutants, avec des recommandations par budget de 200€ à 1000€.',
    image:
      'https://eu.mozaracing.com/cdn/shop/files/R5_a8139d29-a749-48e8-bb36-cc5f58e74b62_grande.png?v=1752746509',
    url: '#guides',
  },
  {
    id: 3,
    category: 'Guide',
    title: 'Régler son FOV en simracing : la méthode exacte',
    excerpt:
      'Un FOV mal réglé sabote vos chronos sans que vous le sachiez. Voici la méthode de calcul précise pour iRacing, ACC et Assetto Corsa 2 — avec formule, tableau de valeurs et exemples concrets selon la taille de votre écran.',
    image:
      'https://assets.fanatec.com/image/upload/c_fill,q_auto,h_400,w_600,f_auto/products/Wheel-Bases/CSL_DD_QR2L_90/CSL_DD_QR2L_90-01.webp',
    url: '#guides',
  },

  // === AVIS ===
  {
    id: 4,
    category: 'Avis',
    title: 'Fanatec CSL DD QR2 8Nm : notre avis après 6 mois sur iRacing',
    excerpt:
      'La base direct drive la plus accessible du marché vaut-elle vraiment le coup en 2026 ? Après 6 mois d\'utilisation intensive sur iRacing et ACC, voici notre verdict sans filtre : ressentis, fiabilité, rapport qualité/prix.',
    image:
      'https://assets.fanatec.com/image/upload/c_fill,q_auto,h_400,w_600,f_auto/products/Wheel-Bases/CSL_DD_QR2L_180/CSL_DD_QR2L_180-01.webp',
    url: 'https://www.fanatec.com/eu/en/p/wheel-bases/csl_dd_qr2l_8nm_eu/csl-dd-qr2-lite-8-nm-eu',
  },
  {
    id: 5,
    category: 'Avis',
    title: 'Heusinkveld Sprint : le meilleur pédalier load cell à moins de 700€ ?',
    excerpt:
      'Les pédales Sprint d\'Heusinkveld sont la référence à ce prix. Précision du freinage load cell, robustesse acier, installation et ajustabilité — on a tout testé pendant 4 mois sur GT3 et LMP2.',
    image:
      'https://trakracer.eu/cdn/shop/files/SimPedalsSprint3-pedalset_fb5e9a69-f3e9-4471-b87b-58d52fa466d2_grande.png?v=1724415930',
    url: 'https://heusinkveld.com/shop/sprint-pedals/sprint-3-pedal-set/',
  },
  {
    id: 6,
    category: 'Avis',
    title: 'Sim-Lab P1X Pro : le cockpit aluminium qui change tout',
    excerpt:
      'Construction aluminium extrudé, rigidité maximale, compatibilité universelle pédaliers et bases — le Sim-Lab P1X Pro est-il l\'investissement cockpit incontournable ou un luxe pour passionnés ? Notre test complet.',
    image: 'https://thefrenchsimracer.com/cdn/shop/files/Sim-Lab-P1X-Pro-Sim-Lab-252642938.png',
    url: 'https://thefrenchsimracer.com/en/products/sim-lab-p1x-pro-cockpit',
  },

  // === SETUP ===
  {
    id: 7,
    category: 'Setup',
    title: 'Setup simracing complet à moins de 500€ en 2026',
    excerpt:
      'Un setup complet, jouable et confortable pour 500€ : notre sélection volant entrée de gamme + pédalier + cockpit. Tout pour bien débuter sans compromis sur le plaisir de conduite, avec les produits disponibles en France.',
    image: 'https://nextlevelracing.com/wp-content/uploads/2020/02/F-GT-Lite.webp',
    url: '#guides',
  },
  {
    id: 8,
    category: 'Setup',
    title: 'Setup mid-range à 1500€ : MOZA R9 + Heusinkveld + F-GT Lite',
    excerpt:
      'À 1500€, on entre dans la zone direct drive. MOZA R9 V3 (9Nm), Heusinkveld Sprint et un cockpit solide : la combinaison qui fait des étincelles sur iRacing, GT7 et Assetto Corsa 2. Détail des prix et alternatives inclus.',
    image: 'https://eu.mozaracing.com/cdn/shop/files/R9_V3-1.webp?v=1767606165',
    url: '#guides',
  },
  {
    id: 9,
    category: 'Setup',
    title: 'Setup expert à 3000€ : Simagic Alpha U + Heusinkveld + Sim-Lab P1X Pro',
    excerpt:
      'Pour le simraceur sérieux qui veut un équipement proche du professionnel : Simagic Alpha U 23Nm, Heusinkveld Sprint 3 pédales et Sim-Lab P1X Pro. La configuration ultime, à budget maîtrisé.',
    image: 'https://simagic.com/cdn/shop/files/Alpha_U_transparent_base.png?v=1766651871',
    url: '#guides',
  },
]

export interface Article {
  id: number
  category: string
  title: string
  excerpt: string
  image: string
  url: string
}

export const articles: Article[] = [
  {
    id: 1,
    category: 'Guide',
    title: 'Choisir sa base Direct Drive en 2026',
    excerpt:
      'Comparatif complet des bases DD du marché : Fanatec, Simagic, Moza et les outsiders à surveiller.',
    image: 'https://picsum.photos/seed/guide1/600/400',
    url: '#',
  },
  {
    id: 2,
    category: 'Avis',
    title: 'Test : Simagic Alpha U',
    excerpt:
      "Après 3 mois d'utilisation intensive sur iRacing et ACC, voici notre verdict sans filtre.",
    image: 'https://picsum.photos/seed/avis1/600/400',
    url: '#',
  },
  {
    id: 3,
    category: 'Setup',
    title: 'Le cockpit parfait à moins de 1000€',
    excerpt:
      'Notre sélection pour un setup compétitif sans exploser le budget. Châssis, base et pédalier inclus.',
    image: 'https://picsum.photos/seed/setup1/600/400',
    url: '#',
  },
]

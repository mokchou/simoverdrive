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
    name: 'Fanatec CSL DD',
    image: 'https://picsum.photos/seed/csldd/400/300',
    oldPrice: '449€',
    newPrice: '349€',
    badge: 'PROMO',
    url: '#',
  },
  {
    id: 2,
    name: 'Thrustmaster T300 RS GT',
    image: 'https://picsum.photos/seed/t300rs/400/300',
    oldPrice: '399€',
    newPrice: '299€',
    badge: 'PROMO',
    url: '#',
  },
  {
    id: 3,
    name: 'Playseat Challenge X',
    image: 'https://picsum.photos/seed/playseat/400/300',
    oldPrice: '299€',
    newPrice: '229€',
    badge: 'PROMO',
    url: '#',
  },
  {
    id: 4,
    name: 'Logitech G Pro Racing Wheel',
    image: 'https://picsum.photos/seed/gpro/400/300',
    oldPrice: '999€',
    newPrice: '849€',
    badge: 'PROMO',
    url: '#',
  },
]

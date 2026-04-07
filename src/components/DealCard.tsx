import type { Deal } from '../data/deals'

export default function DealCard({ deal }: { deal: Deal }) {
  return (
    <div className="group bg-bg-card border border-border rounded-lg overflow-hidden flex-shrink-0 w-72 md:w-auto md:flex-1 hover:border-red/50 hover:scale-[1.02] transition-all duration-200">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-border">
        <img
          src={deal.image}
          alt={deal.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <span className="absolute top-3 left-3 bg-red text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
          🔥 {deal.badge}
        </span>
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="font-heading text-sm text-white mb-2">{deal.name}</h3>
        <div className="flex items-center gap-3">
          <span className="line-through text-grey text-sm">{deal.oldPrice}</span>
          <span className="text-red font-bold text-xl">{deal.newPrice}</span>
        </div>
        <a
          href={deal.url}
          className="inline-block mt-3 text-xs uppercase tracking-widest text-grey hover:text-red transition-colors"
        >
          Voir le deal →
        </a>
      </div>
    </div>
  )
}

import { deals } from '../data/deals'
import DealCard from './DealCard'

export default function DealsStrip() {
  return (
    <section id="deals" className="bg-bg-card py-16 md:py-20 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="mb-10">
          <h2 className="font-heading text-xs uppercase tracking-[0.2em] text-grey">
            Deals du moment
          </h2>
          <div className="h-px w-12 bg-red mt-3" />
        </div>

        {/* Cards - horizontal scroll on mobile, grid on desktop */}
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide md:grid md:grid-cols-4 md:overflow-visible md:pb-0">
          {deals.map((deal) => (
            <div key={deal.id} className="snap-start">
              <DealCard deal={deal} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

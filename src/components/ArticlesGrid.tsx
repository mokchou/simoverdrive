import { articles } from '../data/articles'
import ArticleCard from './ArticleCard'

export default function ArticlesGrid() {
  return (
    <section id="guides" className="py-16 md:py-24 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="mb-12">
          <h2 className="font-heading text-2xl md:text-3xl uppercase tracking-wider text-white">
            Guides & Avis
          </h2>
          <div className="h-px w-12 bg-red mt-4" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  )
}

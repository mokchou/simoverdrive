import { Link } from 'react-router-dom'
import type { Article } from '../data/articles'

export default function ArticleCard({ article }: { article: Article }) {
  const isInternal = article.slug != null
  const className =
    'group block bg-bg-card border border-border rounded-lg overflow-hidden hover:border-l-2 hover:border-l-red hover:-translate-y-1 transition-all duration-200'

  const content = (
    <>
      {/* Image */}
      <div className="aspect-[3/2] overflow-hidden bg-border">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <span className="font-heading text-[10px] uppercase tracking-[0.2em] text-red">
          {article.category}
        </span>
        <h3 className="font-heading text-base text-white mt-2 mb-2 group-hover:text-red transition-colors duration-200">
          {article.title}
        </h3>
        <p className="text-grey text-sm leading-relaxed line-clamp-2">
          {article.excerpt}
        </p>
        <span className="inline-block mt-4 text-xs text-red uppercase tracking-widest">
          Lire →
        </span>
      </div>
    </>
  )

  if (isInternal) {
    return (
      <Link to={article.url} className={className}>
        {content}
      </Link>
    )
  }

  return (
    <a href={article.url} target="_blank" rel="noopener noreferrer" className={className}>
      {content}
    </a>
  )
}

import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { articles } from '../data/articles'

export default function ArticlePage() {
  const { slug } = useParams<{ slug: string }>()
  const article = articles.find((a) => a.slug === slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-grey mb-4">Article introuvable.</p>
          <Link to="/" className="text-red hover:underline">
            ← Retour à l'accueil
          </Link>
        </div>
      </div>
    )
  }

  const paragraphs = (article.content ?? article.excerpt).split('\n')

  return (
    <div className="min-h-screen">
      {/* Hero image */}
      <div className="relative h-64 md:h-96 overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 pb-24 -mt-24 relative z-10">
        <div className="mb-8">
          <span className="font-heading text-[10px] uppercase tracking-[0.2em] text-red">
            {article.category}
          </span>
          <h1 className="font-heading text-2xl md:text-4xl text-white mt-2 leading-tight">
            {article.title}
          </h1>
        </div>

        <div className="prose-simoverdrive">
          {paragraphs.map((line, i) => {
            if (line.startsWith('## ')) {
              return (
                <h2 key={i} className="font-heading text-xl text-white mt-10 mb-4 uppercase tracking-wide">
                  {line.slice(3)}
                </h2>
              )
            }
            if (line.startsWith('### ')) {
              return (
                <h3 key={i} className="font-heading text-base text-white mt-6 mb-2">
                  {line.slice(4)}
                </h3>
              )
            }
            if (line.startsWith('```')) {
              return null
            }
            if (line.startsWith('| ')) {
              return (
                <div key={i} className="overflow-x-auto my-4">
                  <table className="w-full text-sm text-grey border-collapse">
                    <tbody>
                      <tr>
                        {line.split('|').filter(Boolean).map((cell, j) => (
                          <td key={j} className="border border-border px-3 py-2 text-left">
                            {cell.trim()}
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>
              )
            }
            if (line.startsWith('- ') || line.startsWith('* ')) {
              return (
                <li key={i} className="text-grey ml-4 mb-1 list-disc">
                  {line.slice(2)}
                </li>
              )
            }
            if (line.match(/^\d+\. /)) {
              return (
                <li key={i} className="text-grey ml-4 mb-1 list-decimal">
                  {line.replace(/^\d+\. /, '')}
                </li>
              )
            }
            if (line.startsWith('**') && line.endsWith('**') && !line.slice(2, -2).includes('**')) {
              return (
                <p key={i} className="text-white font-semibold mt-4 mb-1">
                  {line.slice(2, -2)}
                </p>
              )
            }
            if (line.trim() === '' || line === '---') {
              return <div key={i} className="h-4" />
            }
            // Replace **bold** inline
            const parts = line.split(/(\*\*[^*]+\*\*)/)
            return (
              <p key={i} className="text-grey leading-relaxed mb-3">
                {parts.map((part, j) =>
                  part.startsWith('**') && part.endsWith('**') ? (
                    <strong key={j} className="text-white font-semibold">
                      {part.slice(2, -2)}
                    </strong>
                  ) : (
                    part
                  )
                )}
              </p>
            )
          })}
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <Link to="/#guides" className="text-red hover:underline text-sm">
            ← Retour aux guides
          </Link>
        </div>
      </div>
    </div>
  )
}

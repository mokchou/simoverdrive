import { type FormEvent } from 'react'

export default function LeadMagnet() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
  }

  return (
    <section id="lead" className="bg-bg-lead py-16 md:py-24">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="font-heading text-2xl md:text-3xl text-white">
          Montez votre setup de A à Z.
        </h2>
        <p className="text-grey mt-4">
          Guide gratuit — reçu en 1 clic.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 mt-8 max-w-lg mx-auto"
        >
          <input
            type="email"
            placeholder="votre@email.com"
            className="flex-1 bg-bg border border-border rounded-lg px-4 py-3 text-white placeholder:text-grey focus:border-red focus:outline-none transition-colors"
            required
          />
          <button
            type="submit"
            className="bg-red text-white font-bold px-6 py-3 rounded-lg hover:bg-red/90 transition-colors text-sm uppercase tracking-wider whitespace-nowrap"
          >
            Je veux le guide
          </button>
        </form>
      </div>
    </section>
  )
}

import { useState, type FormEvent } from 'react'

export default function LeadMagnet() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    const formspreeId = import.meta.env.VITE_FORMSPREE_ID as string | undefined

    if (formspreeId) {
      try {
        const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email }),
        })
        setStatus(res.ok ? 'success' : 'error')
        if (res.ok) setEmail('')
      } catch {
        setStatus('error')
      }
    } else {
      // No email service configured yet — show success UI
      setStatus('success')
      setEmail('')
    }
  }

  return (
    <section id="lead" className="bg-bg-lead py-16 md:py-24 scroll-mt-20">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="font-heading text-2xl md:text-3xl text-white">
          Montez votre setup de A à Z.
        </h2>
        <p className="text-grey mt-4">
          Guide gratuit — reçu en 1 clic.
        </p>

        {status === 'success' ? (
          <div className="mt-8 max-w-lg mx-auto bg-bg border border-red/40 rounded-lg px-6 py-5">
            <p className="text-white font-semibold">Guide envoyé !</p>
            <p className="text-grey text-sm mt-1">Vérifiez votre boîte mail (et vos spams).</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 mt-8 max-w-lg mx-auto"
          >
            <input
              type="email"
              placeholder="votre@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-bg border border-border rounded-lg px-4 py-3 text-white placeholder:text-grey focus:border-red focus:outline-none transition-colors"
              required
              disabled={status === 'loading'}
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="bg-red text-white font-bold px-6 py-3 rounded-lg hover:bg-red/90 transition-colors text-sm uppercase tracking-wider whitespace-nowrap disabled:opacity-60"
            >
              {status === 'loading' ? '...' : 'Je veux le guide'}
            </button>
          </form>
        )}

        {status === 'error' && (
          <p className="text-red text-sm mt-3">
            Une erreur est survenue. Réessayez ou contactez-nous.
          </p>
        )}
      </div>
    </section>
  )
}

export default function AboutStrip() {
  return (
    <section id="about" className="bg-bg-card py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="border-l-2 border-red pl-6">
            <span className="font-heading text-[10px] uppercase tracking-[0.2em] text-red">
              À propos
            </span>
            <h2 className="font-heading text-2xl md:text-3xl text-white mt-3 mb-6">
              Piloté par un expert,
              <br />
              pas un algorithme.
            </h2>
            <div className="h-px w-8 bg-red/30 mb-6" />
            <p className="text-grey leading-relaxed mb-4">
              Je suis Seb, passionné de simracing depuis plus de 10 ans. Ancien
              responsable de centres de simulation professionnels, j'ai testé
              des centaines de setups — des volants d'entrée de gamme aux bases
              Direct Drive haut de gamme.
            </p>
            <p className="text-grey leading-relaxed">
              SimOverDrive, c'est mon retour d'expérience condensé : des guides
              honnêtes, des avis sans concession et les meilleurs deals pour
              construire le cockpit qui vous correspond vraiment.
            </p>
          </div>

          {/* Image placeholder */}
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-border">
            <img
              src="https://picsum.photos/seed/simsetup/800/600"
              alt="Setup simracing"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg/60 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background race car image — animated slow zoom + pan */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/10807493/pexels-photo-10807493.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt=""
          className="w-full h-full object-cover animate-slow-zoom"
        />
      </div>

      {/* Dark overlay — strong enough for text readability */}
      <div className="absolute inset-0 bg-bg/60" />

      {/* Gradient vignette — dark edges, car subtly visible in center */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_10%,_#0A0A0B_70%)]" />

      {/* Top/bottom fade to black */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg via-transparent to-bg" />

      {/* Texture + effects */}
      <div className="absolute inset-0 carbon-texture" />
      <div className="absolute inset-0 speed-lines" />

      {/* Radial red glow on center */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(232,0,28,0.1)_0%,_transparent_50%)]" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight animate-fade-up">
          La référence simracing
          <br />
          <span className="text-red">francophone.</span>
        </h1>

        <p className="font-body text-lg md:text-xl text-grey mt-6 max-w-2xl mx-auto animate-fade-up delay-1">
          Guides, avis et deals pour piloter sans compromis.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 animate-fade-up delay-2">
          <a
            href="#guides"
            className="bg-red text-white font-semibold px-8 py-3 text-sm uppercase tracking-wider hover:bg-red/90 transition-colors duration-200"
          >
            Découvrir les guides
          </a>
          <a
            href="#deals"
            className="cta-fill border border-red text-red px-8 py-3 text-sm uppercase tracking-wider hover:text-white transition-colors duration-200"
          >
            Deals du moment
          </a>
        </div>
      </div>

      {/* Animated red line sweep */}
      <div className="absolute bottom-0 left-0 right-0 h-px overflow-hidden">
        <div className="h-full w-1/3 bg-gradient-to-r from-transparent via-red to-transparent animate-line-sweep" />
      </div>
    </section>
  )
}

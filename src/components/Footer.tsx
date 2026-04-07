export default function Footer() {
  return (
    <footer className="bg-bg border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top: Logo + Tagline */}
        <div className="mb-12">
          <a href="#" className="font-heading text-lg tracking-widest uppercase">
            <span className="text-white">SIM OVER </span>
            <span className="text-red">DRIVE</span>
          </a>
          <p className="text-grey text-sm mt-2">
            La référence simracing francophone.
          </p>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h4 className="font-heading text-xs uppercase tracking-widest text-white mb-4">
              Site
            </h4>
            <ul className="space-y-2">
              {['Guides', 'Avis', 'Deals', 'Setup'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-grey hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-xs uppercase tracking-widest text-white mb-4">
              Ressources
            </h4>
            <ul className="space-y-2">
              {['Guide gratuit', 'Newsletter', 'FAQ'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-grey hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-xs uppercase tracking-widest text-white mb-4">
              Légal
            </h4>
            <ul className="space-y-2">
              {['Mentions légales', 'Confidentialité', 'CGU'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-grey hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-grey">
            © 2026 SimOverDrive. Tous droits réservés.
          </p>
          <p className="text-xs text-grey text-center md:text-right">
            Liens affiliés — nous touchons une commission sans surcoût pour
            vous.
          </p>
        </div>
      </div>
    </footer>
  )
}

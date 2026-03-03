const socialLinks = [
  { name: 'Instagram', href: '#' },
  { name: 'TikTok', href: '#' },
  { name: 'YouTube', href: '#' },
  { name: 'X / Twitter', href: '#' },
]

export default function Footer() {
  return (
    <footer
      className="py-12 border-t-4"
      style={{
        background: '#0d0d0d',
        borderColor: '#E91E63',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <span
                className="font-bebas text-3xl tracking-wider"
                style={{ color: '#FFD600' }}
              >
                JEAN HENRIQUE
              </span>
              <span
                className="font-bebas text-2xl px-2 py-0.5"
                style={{ background: '#E91E63', color: '#FAFAFA' }}
              >
                PSOL
              </span>
            </div>
            <p
              className="font-bebas text-lg tracking-widest"
              style={{ color: '#FAFAFA', opacity: 0.7 }}
            >
              CHEGOU A NOSSA VEZ
            </p>
            <p
              className="text-sm mt-2"
              style={{ color: '#FAFAFA', opacity: 0.5 }}
            >
              Jean Henrique — da periferia de Curitiba para a Assembleia.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p
              className="font-bebas text-sm tracking-[0.3em] mb-4"
              style={{ color: '#FFD600' }}
            >
              NAVEGAÇÃO
            </p>
            <nav className="space-y-2">
              {[
                { href: '#inicio', label: 'Início' },
                { href: '#quem-sou', label: 'Quem Sou' },
                { href: '#bandeiras', label: 'Bandeiras' },
                { href: '#galeria', label: 'Galeria' },
                { href: '#trajetoria', label: 'Trajetória' },
                { href: '#apoie', label: 'Apoie' },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-sm transition-colors duration-200 hover:text-yellow-400"
                  style={{ color: '#FAFAFA', opacity: 0.6 }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social + Party */}
          <div>
            <p
              className="font-bebas text-sm tracking-[0.3em] mb-4"
              style={{ color: '#FFD600' }}
            >
              REDES SOCIAIS
            </p>
            <div className="space-y-2 mb-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-sm transition-colors duration-200 hover:text-yellow-400"
                  style={{ color: '#FAFAFA', opacity: 0.6 }}
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div
              className="inline-block px-4 py-2"
              style={{
                background: '#E91E63',
              }}
            >
              <p className="font-bebas text-xl tracking-wider" style={{ color: '#FFD600' }}>
                PSOL 50
              </p>
              <p
                className="text-xs"
                style={{ color: '#FAFAFA', opacity: 0.8 }}
              >
                Partido Socialismo e Liberdade
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderColor: '#424242' }}
        >
          <p
            className="text-xs text-center"
            style={{ color: '#FAFAFA', opacity: 0.4 }}
          >
            © 2026 · Material de divulgação · Todos os dados são fictícios · Site mock para apresentação
          </p>
          <p
            className="font-bebas text-lg tracking-widest"
            style={{ color: '#E91E63' }}
          >
            CHEGOU A NOSSA VEZ ✊
          </p>
        </div>
      </div>
    </footer>
  )
}

import ScrollReveal from './ScrollReveal'

const causes = [
  {
    icon: '📚',
    title: 'Educação Pública de Qualidade',
    description:
      'Escolas bem estruturadas, professores valorizados e salário digno. A educação pública é a base da transformação social.',
    color: '#E91E63',
  },
  {
    icon: '🏠',
    title: 'Moradia Digna',
    description:
      'Regularização fundiária, combate a despejos e habitação popular. Morar bem é direito, não privilégio.',
    color: '#FFD600',
  },
  {
    icon: '🎨',
    title: 'Cultura Periférica',
    description:
      'Valorização e financiamento da cultura que nasce nas quebradas: sarau, hip hop, grafite, teatro de rua.',
    color: '#E91E63',
  },
  {
    icon: '🏥',
    title: 'Saúde na Periferia',
    description:
      'UBSs equipadas, postos de saúde 24h e medicina preventiva perto de casa. A saúde não pode ser privilégio de quem mora no centro.',
    color: '#FFD600',
  },
  {
    icon: '🚌',
    title: 'Transporte Público',
    description:
      'Tarifa zero, integração de linhas e ônibus com horário. Quem acorda às 4h pra pegar ônibus sabe o que precisa mudar.',
    color: '#E91E63',
  },
  {
    icon: '👥',
    title: 'Movimentos Sociais',
    description:
      'Apoio e fortalecimento dos movimentos de base: sem-teto, juventude periférica, movimento negro e feminismo popular.',
    color: '#FFD600',
  },
]

export default function Causes() {
  return (
    <section
      id="bandeiras"
      className="py-20"
      style={{ background: '#1A1A1A' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal>
          <div className="mb-12 text-center">
            <span
              className="inline-block font-bebas text-sm tracking-[0.3em] px-3 py-1 mb-4"
              style={{ background: '#FFD600', color: '#1A1A1A' }}
            >
              NOSSAS PAUTAS
            </span>
            <h2
              className="font-bebas uppercase leading-none"
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                color: '#FAFAFA',
                textShadow: '3px 3px 0px rgba(0,0,0,0.5)',
              }}
            >
              AS NOSSAS{' '}
              <span style={{ color: '#FFD600' }}>BANDEIRAS</span>
            </h2>
            <p
              className="mt-4 max-w-2xl mx-auto text-lg"
              style={{ color: '#FAFAFA', opacity: 0.7 }}
            >
              Cada bandeira é uma luta real. Cada pauta é a vida de milhares de pessoas
              que moram e trabalham na periferia.
            </p>
            <div className="divider-yellow mt-4 w-32 mx-auto" />
          </div>
        </ScrollReveal>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {causes.map((cause, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div
                className="group p-6 h-full transition-transform duration-200 hover:-translate-y-1 cursor-default"
                style={{
                  background: '#242424',
                  border: `2px solid ${cause.color}`,
                  clipPath:
                    'polygon(12px 0%, calc(100% - 12px) 0%, 100% 12px, 100% calc(100% - 12px), calc(100% - 12px) 100%, 12px 100%, 0% calc(100% - 12px), 0% 12px)',
                }}
              >
                <div className="text-5xl mb-4">{cause.icon}</div>
                <h3
                  className="font-bebas text-2xl tracking-wider mb-3 uppercase"
                  style={{ color: cause.color }}
                >
                  {cause.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: '#FAFAFA', opacity: 0.8 }}
                >
                  {cause.description}
                </p>
                <div
                  className="mt-4 h-1 w-0 group-hover:w-full transition-all duration-300"
                  style={{ background: cause.color }}
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

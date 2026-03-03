import ScrollReveal from './ScrollReveal'

const events = [
  {
    year: '2000',
    title: 'Começa a Lecionar',
    description:
      'Inicia sua carreira como professor de História na rede municipal de São Paulo, na Zona Sul.',
    highlight: false,
  },
  {
    year: '2008',
    title: 'Funda o Periferia Viva',
    description:
      'Cria o movimento que conecta educação, cultura e moradia, alcançando mais de 47 comunidades.',
    highlight: false,
  },
  {
    year: '2012',
    title: '1ª Candidatura a Vereador',
    description:
      'Primeira disputa eleitoral. Leva a pauta periférica às urnas e coloca o movimento nas manchetes.',
    highlight: false,
  },
  {
    year: '2016',
    title: '2ª Candidatura — O Mais Votado do Partido',
    description:
      'Quase eleito, torna-se o candidato mais votado do PSOL na Zona Sul. A base cresce.',
    highlight: true,
  },
  {
    year: '2020',
    title: '3ª Candidatura — Referência na Zona Sul',
    description:
      'Consolida-se como referência política da região. Mais de 18 mil votos. O povo não esquece.',
    highlight: true,
  },
  {
    year: '2026',
    title: 'Deputado Estadual — CHEGOU A NOSSA VEZ',
    description:
      'O próximo passo: levar a voz da periferia para a Assembleia Legislativa. A história está sendo escrita agora.',
    highlight: true,
    final: true,
  },
]

export default function Timeline() {
  return (
    <section
      id="trajetoria"
      className="py-20 texture-concrete"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal>
          <div className="mb-16">
            <span
              className="inline-block font-bebas text-sm tracking-[0.3em] px-3 py-1 mb-4"
              style={{ background: '#E91E63', color: '#FAFAFA' }}
            >
              TRAJETÓRIA
            </span>
            <h2
              className="font-bebas uppercase leading-none"
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                color: '#FAFAFA',
                textShadow: '3px 3px 0px rgba(0,0,0,0.5)',
              }}
            >
              UMA VIDA DE{' '}
              <span style={{ color: '#FFD600' }}>LUTA</span>
            </h2>
            <div className="divider-yellow mt-4 w-32" />
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 md:-translate-x-0.5"
            style={{ background: 'linear-gradient(to bottom, #E91E63, #FFD600)' }}
          />

          <div className="space-y-10">
            {events.map((event, i) => (
              <ScrollReveal key={i} direction={i % 2 === 0 ? 'left' : 'right'} delay={i * 80}>
                <div
                  className={`relative flex flex-col md:flex-row gap-4 md:gap-8 ${
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Year bubble */}
                  <div
                    className={`absolute left-8 md:left-1/2 md:-translate-x-1/2 w-6 h-6 rounded-none flex-shrink-0 -translate-x-3 mt-4 md:mt-6 ${
                      event.final ? 'scale-125' : ''
                    }`}
                    style={{
                      background: event.highlight ? '#FFD600' : '#424242',
                      border: `3px solid ${event.highlight ? '#FFD600' : '#E91E63'}`,
                      clipPath:
                        'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                    }}
                  />

                  {/* Spacer for desktop centering */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Card */}
                  <div
                    className={`ml-16 md:ml-0 md:w-1/2 p-5 ${
                      i % 2 === 0 ? 'md:pr-16' : 'md:pl-16'
                    }`}
                  >
                    <div
                      className="p-5"
                      style={{
                        background: event.final
                          ? 'linear-gradient(135deg, #E91E63 0%, #880E4F 100%)'
                          : event.highlight
                          ? '#242424'
                          : '#1e1e1e',
                        border: `2px solid ${
                          event.final
                            ? '#FFD600'
                            : event.highlight
                            ? '#E91E63'
                            : '#424242'
                        }`,
                        clipPath:
                          'polygon(8px 0%, calc(100% - 8px) 0%, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0% calc(100% - 8px), 0% 8px)',
                      }}
                    >
                      <div
                        className="font-bebas text-3xl mb-1"
                        style={{
                          color: '#FFD600',
                        }}
                      >
                        {event.year}
                      </div>
                      <h3
                        className="font-bebas text-xl tracking-wide mb-2 uppercase"
                        style={{
                          color: '#FAFAFA',
                        }}
                      >
                        {event.title}
                      </h3>
                      <p
                        className="text-sm leading-relaxed"
                        style={{
                          color: '#FAFAFA',
                          opacity: event.final ? 0.95 : 0.7,
                        }}
                      >
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

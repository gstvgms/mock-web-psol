import ScrollReveal from './ScrollReveal'

const stats = [
  { number: '10', label: 'Anos de Trabalho de Base', suffix: '+' },
  { number: '47', label: 'Bairros Atendidos', suffix: '' },
  { number: '3', label: 'Candidaturas a Vereador', suffix: 'x' },
  { number: '2026', label: 'Assembleia Legislativa', suffix: '' },
]

export default function About() {
  return (
    <section
      id="quem-sou"
      className="py-20 texture-grunge"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal>
          <div className="mb-12">
            <span
              className="inline-block font-bebas text-sm tracking-[0.3em] px-3 py-1 mb-4"
              style={{ background: '#E91E63', color: '#FAFAFA' }}
            >
              QUEM SOU EU
            </span>
            <h2
              className="font-bebas uppercase leading-none"
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                color: '#FAFAFA',
                textShadow: '3px 3px 0px rgba(0,0,0,0.5)',
              }}
            >
              DA PERIFERIA{' '}
              <span style={{ color: '#FFD600' }}>PRA</span>
              <br />
              <span style={{ color: '#E91E63' }}>ASSEMBLEIA</span>
            </h2>
            <div className="divider-yellow mt-4 w-32" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Bio text */}
          <ScrollReveal direction="left">
            <div className="space-y-6">
              <p
                className="text-lg leading-relaxed"
                style={{ color: '#FAFAFA', opacity: 0.9 }}
              >
                <strong style={{ color: '#FFD600' }}>Jean Henrique</strong> nasceu e cresceu no{' '}
                <strong>Sítio Cercado, Curitiba</strong>. Professor de Sociologia da rede pública,
                dedica sua vida ao trabalho de base nos bairros periféricos desta cidade.
              </p>
              <p
                className="text-lg leading-relaxed"
                style={{ color: '#FAFAFA', opacity: 0.9 }}
              >
                Há mais de 10 anos, Jean constrói pontes entre a periferia e a política.
                Fundador do movimento{' '}
                <strong style={{ color: '#E91E63' }}>&ldquo;Periferia Viva&rdquo;</strong>, que
                acredita que a periferia tem soluções, tem lideranças, tem voz.
              </p>
              <p
                className="text-lg leading-relaxed"
                style={{ color: '#FAFAFA', opacity: 0.9 }}
              >
                Três vezes candidato a vereador, sempre com a pauta periférica no centro.
                Cada campanha foi uma escola. Agora é o momento de levar essas lutas para{' '}
                <strong style={{ color: '#FFD600' }}>
                  a Assembleia Legislativa do Paraná
                </strong>
                .
              </p>

              <blockquote
                className="border-l-4 pl-6 py-2"
                style={{ borderColor: '#FFD600' }}
              >
                <p
                  className="font-bebas text-2xl tracking-wide italic"
                  style={{ color: '#FFD600' }}
                >
                  &ldquo;A periferia não quer esmola. A periferia quer direitos.&rdquo;
                </p>
                <footer
                  className="text-sm mt-2"
                  style={{ color: '#FAFAFA', opacity: 0.6 }}
                >
                  — Jean Henrique
                </footer>
              </blockquote>
            </div>
          </ScrollReveal>

          {/* Stats grid */}
          <ScrollReveal direction="right">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="p-6 text-center"
                  style={{
                    background: i % 2 === 0 ? '#E91E63' : '#1A1A1A',
                    border: `2px solid ${i % 2 === 0 ? '#E91E63' : '#FFD600'}`,
                    clipPath:
                      'polygon(8px 0%, calc(100% - 8px) 0%, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0% calc(100% - 8px), 0% 8px)',
                  }}
                >
                  <div
                    className="font-bebas leading-none mb-2"
                    style={{
                      fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                      color: i % 2 === 0 ? '#FFD600' : '#E91E63',
                    }}
                  >
                    {stat.number}
                    {stat.suffix}
                  </div>
                  <div
                    className="font-bebas text-sm tracking-widest uppercase"
                    style={{ color: '#FAFAFA', opacity: 0.9 }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Movement badge */}
            <div
              className="mt-6 p-4 flex items-center gap-4"
              style={{
                background: '#2a2a2a',
                border: '2px solid #424242',
              }}
            >
              <div
                className="w-14 h-14 flex items-center justify-center flex-shrink-0 font-bebas text-2xl"
                style={{ background: '#FFD600', color: '#1A1A1A' }}
              >
                PV
              </div>
              <div>
                <p
                  className="font-bebas text-xl tracking-wider"
                  style={{ color: '#FFD600' }}
                >
                  MOVIMENTO PERIFERIA VIVA
                </p>
                <p className="text-sm" style={{ color: '#FAFAFA', opacity: 0.7 }}>
                  Sítio Cercado · Curitiba · PR
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}


import ScrollReveal from './ScrollReveal'

const stats = [
  { number: '26', label: 'Anos Lecionando', suffix: '+' },
  { number: '3.200', label: 'Alunos Formados', suffix: '+' },
  { number: '47', label: 'Comunidades Atendidas', suffix: '' },
  { number: '18', label: 'Anos de Movimento Social', suffix: '+' },
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
                <strong style={{ color: '#FFD600' }}>Carlos Eduardo</strong>, o{' '}
                <strong style={{ color: '#E91E63' }}>Carlão</strong>, nasceu e cresceu na{' '}
                <strong>Zona Sul de São Paulo</strong>. Filho de família de trabalhadores,
                descobriu na educação seu caminho e sua arma de transformação.
              </p>
              <p
                className="text-lg leading-relaxed"
                style={{ color: '#FAFAFA', opacity: 0.9 }}
              >
                Professor de História da rede pública há mais de 26 anos, Carlão não apenas
                ensina — ele <strong style={{ color: '#FFD600' }}>transforma vidas</strong>.
                Sua sala de aula vai além das quatro paredes: ela está nas ruas, nas
                ocupações, nos movimentos.
              </p>
              <p
                className="text-lg leading-relaxed"
                style={{ color: '#FAFAFA', opacity: 0.9 }}
              >
                Fundador do{' '}
                <strong style={{ color: '#E91E63' }}>&ldquo;Periferia Viva&rdquo;</strong>, movimento
                que conecta cultura, educação e moradia em mais de 47 comunidades da Zona
                Sul, Carlão construiu sua trajetória na base: escutando, organizando e
                lutando junto com o povo.
              </p>
              <p
                className="text-lg leading-relaxed"
                style={{ color: '#FAFAFA', opacity: 0.9 }}
              >
                Três vezes candidato a vereador, cada campanha foi uma escola. Hoje, com
                mais experiência, mais força e mais apoio do que nunca, Carlão dá o próximo
                passo:{' '}
                <strong style={{ color: '#FFD600' }}>
                  levar a voz da periferia para a Assembleia Legislativa
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
                  — Prof. Carlão
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
                  Fundado em 2008 · Zona Sul · SP
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

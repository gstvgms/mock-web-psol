'use client'

import { useEffect, useRef } from 'react'

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      drawTexture()
    }

    const drawTexture = () => {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (let i = 0; i < 8000; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        const alpha = Math.random() * 0.04
        ctx.fillStyle = `rgba(255,255,255,${alpha})`
        ctx.fillRect(x, y, 1, 1)
      }
    }

    resize()
    window.addEventListener('resize', resize)
    return () => window.removeEventListener('resize', resize)
  }, [])

  const scrollToCauses = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    document.getElementById('bandeiras')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden texture-concrete"
    >
      {/* Canvas noise texture */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: 0.6 }}
      />

      {/* Background accent shapes */}
      <div
        className="absolute top-0 right-0 w-1/3 h-full opacity-10"
        style={{
          background: 'linear-gradient(135deg, #E91E63 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-1/2 h-1/2 opacity-5"
        style={{
          background: 'linear-gradient(45deg, #FFD600 0%, transparent 70%)',
        }}
      />

      {/* Party stripe */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{ background: 'linear-gradient(90deg, #E91E63, #FFD600, #E91E63)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text side */}
          <div>
            <div className="mb-4">
              <span
                className="inline-block font-bebas text-sm tracking-[0.3em] px-3 py-1 mb-4"
                style={{ background: '#E91E63', color: '#FAFAFA' }}
              >
                PSOL 50 · DEPUTADO ESTADUAL
              </span>
            </div>

            <h1
              className="font-bebas uppercase leading-none mb-6"
              style={{
                fontSize: 'clamp(3.5rem, 10vw, 7rem)',
                color: '#FFD600',
                textShadow: '4px 4px 0px rgba(0,0,0,0.7)',
                letterSpacing: '0.02em',
              }}
            >
              CHEGOU
              <br />
              <span style={{ color: '#FAFAFA' }}>A NOSSA</span>
              <br />
              <span style={{ color: '#E91E63' }}>VEZ</span>
            </h1>

            <p
              className="font-bebas text-2xl tracking-widest mb-8"
              style={{ color: '#FAFAFA' }}
            >
              PROFESSOR CARLOS EDUARDO — CARLÃO
            </p>

            <div className="flex items-center gap-4 mb-10">
              <div
                className="font-bebas text-5xl px-4 py-2"
                style={{
                  background: '#E91E63',
                  color: '#FAFAFA',
                  clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 100%, 10px 100%)',
                }}
              >
                50123
              </div>
              <div>
                <p className="text-sm font-semibold" style={{ color: '#FFD600' }}>
                  NÚMERO DO CANDIDATO
                </p>
                <p className="text-xs" style={{ color: '#FAFAFA', opacity: 0.7 }}>
                  PSOL · Partido Socialismo e Liberdade
                </p>
              </div>
            </div>

            <a
              href="#bandeiras"
              onClick={scrollToCauses}
              className="inline-block font-bebas text-xl tracking-wider px-8 py-4 transition-all duration-200 hover:scale-105 active:scale-95"
              style={{
                background: '#FFD600',
                color: '#1A1A1A',
                clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 100%, 12px 100%)',
              }}
            >
              CONHEÇA NOSSAS BANDEIRAS ▶
            </a>
          </div>

          {/* Candidate placeholder */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Outer ring */}
              <div
                className="absolute -inset-4 opacity-30"
                style={{
                  background: 'conic-gradient(from 0deg, #FFD600, #E91E63, #FFD600)',
                  borderRadius: '0',
                  clipPath:
                    'polygon(10px 0%, calc(100% - 10px) 0%, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0% calc(100% - 10px), 0% 10px)',
                }}
              />

              {/* Candidate silhouette */}
              <div
                className="relative w-64 h-80 sm:w-72 sm:h-96 flex flex-col items-center justify-center gap-4"
                style={{
                  background: 'linear-gradient(160deg, #2a2a2a 0%, #1a1a1a 100%)',
                  border: '3px solid #FFD600',
                  clipPath:
                    'polygon(10px 0%, calc(100% - 10px) 0%, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0% calc(100% - 10px), 0% 10px)',
                }}
              >
                {/* SVG silhouette */}
                <svg
                  width="140"
                  height="180"
                  viewBox="0 0 140 180"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Head */}
                  <ellipse cx="70" cy="42" rx="28" ry="32" fill="#FFD600" opacity="0.8" />
                  {/* Body */}
                  <path
                    d="M20 180 C20 120 40 110 70 108 C100 110 120 120 120 180Z"
                    fill="#E91E63"
                    opacity="0.8"
                  />
                  {/* Collar/tie */}
                  <path
                    d="M58 108 L70 130 L82 108 Z"
                    fill="#FFD600"
                    opacity="0.9"
                  />
                </svg>

                <div className="text-center">
                  <p
                    className="font-bebas text-4xl tracking-wider"
                    style={{ color: '#FFD600' }}
                  >
                    CE
                  </p>
                  <p
                    className="font-bebas text-xs tracking-widest"
                    style={{ color: '#FAFAFA', opacity: 0.7 }}
                  >
                    PROF. CARLÃO
                  </p>
                </div>
              </div>

              {/* Label tag */}
              <div
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 font-bebas text-sm px-4 py-1 whitespace-nowrap"
                style={{
                  background: '#E91E63',
                  color: '#FAFAFA',
                }}
              >
                ZONA SUL · SÃO PAULO
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
          <span className="font-bebas text-xs tracking-widest" style={{ color: '#FFD600' }}>
            ROLE PARA BAIXO
          </span>
          <div
            className="w-0.5 h-10 animate-pulse"
            style={{ background: 'linear-gradient(to bottom, #FFD600, transparent)' }}
          />
        </div>
      </div>
    </section>
  )
}

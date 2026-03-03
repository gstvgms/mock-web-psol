'use client'

import { useState } from 'react'
import ScrollReveal from './ScrollReveal'

const socialLinks = [
  {
    name: 'Instagram',
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
    href: '#',
    color: '#E91E63',
  },
  {
    name: 'TikTok',
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.79a4.85 4.85 0 01-1.01-.1z" />
      </svg>
    ),
    href: '#',
    color: '#FFD600',
  },
  {
    name: 'YouTube',
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
        <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
      </svg>
    ),
    href: '#',
    color: '#E91E63',
  },
  {
    name: 'X / Twitter',
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    href: '#',
    color: '#FFD600',
  },
]

export default function Support() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section
      id="apoie"
      className="py-20"
      style={{
        background: 'linear-gradient(160deg, #1A1A1A 0%, #2a0a14 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal>
          <div className="mb-12 text-center">
            <span
              className="inline-block font-bebas text-sm tracking-[0.3em] px-3 py-1 mb-4"
              style={{ background: '#FFD600', color: '#1A1A1A' }}
            >
              JUNTE-SE À LUTA
            </span>
            <h2
              className="font-bebas uppercase leading-none"
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                color: '#FAFAFA',
                textShadow: '3px 3px 0px rgba(0,0,0,0.5)',
              }}
            >
              APOIE{' '}
              <span style={{ color: '#FFD600' }}>CARLÃO</span>
            </h2>
            <p
              className="mt-4 max-w-2xl mx-auto text-lg"
              style={{ color: '#FAFAFA', opacity: 0.7 }}
            >
              A mudança começa quando a gente se une. Seja parte dessa história.
            </p>
            <div className="divider-yellow mt-4 w-32 mx-auto" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* CTA Buttons + Social */}
          <ScrollReveal direction="left">
            <div className="space-y-8">
              {/* CTA Buttons */}
              <div className="space-y-4">
                <a
                  href="#"
                  className="flex items-center justify-center gap-3 font-bebas text-xl tracking-wider px-8 py-5 transition-all duration-200 hover:scale-105 active:scale-95 w-full text-center"
                  style={{
                    background: '#E91E63',
                    color: '#FAFAFA',
                    clipPath:
                      'polygon(0 0, calc(100% - 12px) 0, 100% 100%, 12px 100%)',
                  }}
                >
                  <span>✊</span>
                  SEJA VOLUNTÁRIO
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center gap-3 font-bebas text-xl tracking-wider px-8 py-5 transition-all duration-200 hover:scale-105 active:scale-95 w-full text-center"
                  style={{
                    background: '#FFD600',
                    color: '#1A1A1A',
                    clipPath:
                      'polygon(12px 0, 100% 0, calc(100% - 12px) 100%, 0 100%)',
                  }}
                >
                  <span>💛</span>
                  DOE PARA A CAMPANHA
                </a>
              </div>

              {/* Social links */}
              <div>
                <p
                  className="font-bebas text-lg tracking-widest mb-4"
                  style={{ color: '#FFD600' }}
                >
                  SIGA NAS REDES SOCIAIS
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className="flex items-center gap-3 p-3 transition-all duration-200 hover:scale-105"
                      style={{
                        background: '#242424',
                        border: `2px solid ${social.color}`,
                        color: social.color,
                      }}
                    >
                      {social.icon}
                      <span className="font-bebas text-lg tracking-wider">
                        {social.name}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Lema reforçado */}
              <div
                className="p-6 text-center"
                style={{
                  background: '#E91E63',
                  clipPath:
                    'polygon(12px 0%, calc(100% - 12px) 0%, 100% 12px, 100% calc(100% - 12px), calc(100% - 12px) 100%, 12px 100%, 0% calc(100% - 12px), 0% 12px)',
                }}
              >
                <p
                  className="font-bebas uppercase leading-none"
                  style={{
                    fontSize: 'clamp(1.8rem, 4vw, 3rem)',
                    color: '#FFD600',
                    textShadow: '2px 2px 0px rgba(0,0,0,0.5)',
                  }}
                >
                  CHEGOU A NOSSA VEZ!
                </p>
                <p
                  className="font-bebas text-lg tracking-widest mt-2"
                  style={{ color: '#FAFAFA' }}
                >
                  CARLÃO 50123 · PSOL
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact form */}
          <ScrollReveal direction="right">
            <div
              className="p-6 sm:p-8"
              style={{
                background: '#242424',
                border: '2px solid #424242',
                clipPath:
                  'polygon(12px 0%, calc(100% - 12px) 0%, 100% 12px, 100% calc(100% - 12px), calc(100% - 12px) 100%, 12px 100%, 0% calc(100% - 12px), 0% 12px)',
              }}
            >
              <h3
                className="font-bebas text-2xl tracking-wider mb-6"
                style={{ color: '#FFD600' }}
              >
                ENTRE EM CONTATO
              </h3>

              {submitted ? (
                <div
                  className="p-6 text-center"
                  style={{ background: '#E91E63' }}
                >
                  <p className="font-bebas text-2xl" style={{ color: '#FFD600' }}>
                    MENSAGEM ENVIADA!
                  </p>
                  <p style={{ color: '#FAFAFA' }}>
                    Obrigado! Entraremos em contato em breve.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      className="block font-bebas text-sm tracking-widest mb-2"
                      style={{ color: '#FFD600' }}
                    >
                      SEU NOME
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Como você se chama?"
                      className="w-full p-3 font-inter text-sm outline-none transition-colors duration-200"
                      style={{
                        background: '#1A1A1A',
                        border: '2px solid #424242',
                        color: '#FAFAFA',
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#FFD600'
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#424242'
                      }}
                    />
                  </div>

                  <div>
                    <label
                      className="block font-bebas text-sm tracking-widest mb-2"
                      style={{ color: '#FFD600' }}
                    >
                      SEU EMAIL
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="seu@email.com"
                      className="w-full p-3 font-inter text-sm outline-none transition-colors duration-200"
                      style={{
                        background: '#1A1A1A',
                        border: '2px solid #424242',
                        color: '#FAFAFA',
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#FFD600'
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#424242'
                      }}
                    />
                  </div>

                  <div>
                    <label
                      className="block font-bebas text-sm tracking-widest mb-2"
                      style={{ color: '#FFD600' }}
                    >
                      MENSAGEM
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="O que você quer falar para o Carlão?"
                      className="w-full p-3 font-inter text-sm outline-none transition-colors duration-200 resize-none"
                      style={{
                        background: '#1A1A1A',
                        border: '2px solid #424242',
                        color: '#FAFAFA',
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#FFD600'
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#424242'
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full font-bebas text-xl tracking-wider py-4 transition-all duration-200 hover:scale-105 active:scale-95"
                    style={{
                      background: '#E91E63',
                      color: '#FAFAFA',
                      clipPath:
                        'polygon(0 0, calc(100% - 12px) 0, 100% 100%, 12px 100%)',
                    }}
                  >
                    ENVIAR MENSAGEM
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

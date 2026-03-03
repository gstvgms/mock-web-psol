'use client'

import { useState } from 'react'
import ScrollReveal from './ScrollReveal'

type FormTab = 'contact' | 'volunteer' | 'report'

const inputStyle = {
  background: '#1A1A1A',
  border: '2px solid #424242',
  color: '#FAFAFA',
}

function FormInput({
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  required,
}: {
  label: string
  type?: string
  value: string
  onChange: (v: string) => void
  placeholder?: string
  required?: boolean
}) {
  return (
    <div>
      <label className="block font-bebas text-sm tracking-widest mb-2" style={{ color: '#FFD600' }}>
        {label}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full p-3 text-sm outline-none transition-colors duration-200"
        style={inputStyle}
        onFocus={(e) => { e.target.style.borderColor = '#FFD600' }}
        onBlur={(e) => { e.target.style.borderColor = '#424242' }}
      />
    </div>
  )
}

export default function Support() {
  const [activeTab, setActiveTab] = useState<FormTab>('contact')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  // Contact form state
  const [contact, setContact] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  // Volunteer form state
  const [volunteer, setVolunteer] = useState({ name: '', email: '', phone: '', neighborhood: '', helpType: '' })
  // Report/problem form state
  const [report, setReport] = useState({ name: '', email: '', phone: '', neighborhood: '', message: '' })

  const sendForm = async (payload: Record<string, string>) => {
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (res.ok) {
        setStatus('success')
        setTimeout(() => setStatus('idle'), 4000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 4000)
      }
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  const handleContact = (e: React.FormEvent) => {
    e.preventDefault()
    sendForm({ type: 'contact', ...contact })
    setContact({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  const handleVolunteer = (e: React.FormEvent) => {
    e.preventDefault()
    sendForm({ type: 'volunteer', ...volunteer })
    setVolunteer({ name: '', email: '', phone: '', neighborhood: '', helpType: '' })
  }

  const handleReport = (e: React.FormEvent) => {
    e.preventDefault()
    sendForm({ type: 'report', ...report })
    setReport({ name: '', email: '', phone: '', neighborhood: '', message: '' })
  }

  const tabs: { id: FormTab; label: string }[] = [
    { id: 'contact', label: 'CONTATO' },
    { id: 'volunteer', label: 'VOLUNTÁRIO' },
    { id: 'report', label: 'DENÚNCIA' },
  ]

  return (
    <section
      id="apoie"
      className="py-20"
      style={{ background: 'linear-gradient(160deg, #1A1A1A 0%, #2a0a14 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <span style={{ color: '#FFD600' }}>JEAN</span>
              <br />
              <span style={{ color: '#E91E63' }}>HENRIQUE</span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg" style={{ color: '#FAFAFA', opacity: 0.7 }}>
              A mudança começa quando a gente se une. Seja parte dessa história.
            </p>
            <div className="divider-yellow mt-4 w-32 mx-auto" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* CTA Buttons + Social */}
          <ScrollReveal direction="left">
            <div className="space-y-8">
              <div className="space-y-4">
                <button
                  onClick={() => setActiveTab('volunteer')}
                  className="flex items-center justify-center gap-3 font-bebas text-xl tracking-wider px-8 py-5 transition-all duration-200 hover:scale-105 active:scale-95 w-full text-center"
                  style={{
                    background: '#E91E63',
                    color: '#FAFAFA',
                    clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 100%, 12px 100%)',
                  }}
                >
                  <span>✊</span>
                  SEJA VOLUNTÁRIO
                </button>
                <button
                  onClick={() => setActiveTab('report')}
                  className="flex items-center justify-center gap-3 font-bebas text-xl tracking-wider px-8 py-5 transition-all duration-200 hover:scale-105 active:scale-95 w-full text-center"
                  style={{
                    background: '#FFD600',
                    color: '#1A1A1A',
                    clipPath: 'polygon(12px 0, 100% 0, calc(100% - 12px) 100%, 0 100%)',
                  }}
                >
                  <span>📢</span>
                  REPORTE UM PROBLEMA
                </button>
              </div>

              <div>
                <p className="font-bebas text-lg tracking-widest mb-4" style={{ color: '#FFD600' }}>
                  REDES SOCIAIS EM BREVE
                </p>
                <div className="p-4" style={{ background: '#242424', border: '2px solid #424242' }}>
                  <p className="text-sm" style={{ color: '#FAFAFA', opacity: 0.6 }}>
                    Em breve você poderá nos acompanhar nas redes sociais.
                  </p>
                </div>
              </div>

              <div
                className="p-6 text-center"
                style={{
                  background: '#E91E63',
                  clipPath: 'polygon(12px 0%, calc(100% - 12px) 0%, 100% 12px, 100% calc(100% - 12px), calc(100% - 12px) 100%, 12px 100%, 0% calc(100% - 12px), 0% 12px)',
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
                <p className="font-bebas text-lg tracking-widest mt-2" style={{ color: '#FAFAFA' }}>
                  JEAN HENRIQUE · PSOL
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Forms */}
          <ScrollReveal direction="right">
            <div
              className="p-6 sm:p-8"
              style={{
                background: '#242424',
                border: '2px solid #424242',
                clipPath: 'polygon(12px 0%, calc(100% - 12px) 0%, 100% 12px, 100% calc(100% - 12px), calc(100% - 12px) 100%, 12px 100%, 0% calc(100% - 12px), 0% 12px)',
              }}
            >
              {/* Tabs */}
              <div className="flex gap-2 mb-6">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className="font-bebas text-sm tracking-wider px-3 py-2 flex-1 transition-colors duration-200"
                    style={{
                      background: activeTab === tab.id ? '#E91E63' : '#1A1A1A',
                      color: activeTab === tab.id ? '#FAFAFA' : '#FAFAFA',
                      border: `2px solid ${activeTab === tab.id ? '#E91E63' : '#424242'}`,
                      opacity: activeTab === tab.id ? 1 : 0.6,
                    }}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {status === 'success' ? (
                <div className="p-6 text-center" style={{ background: '#E91E63' }}>
                  <p className="font-bebas text-2xl" style={{ color: '#FFD600' }}>MENSAGEM ENVIADA!</p>
                  <p style={{ color: '#FAFAFA' }}>Obrigado! Entraremos em contato em breve.</p>
                </div>
              ) : status === 'error' ? (
                <div className="p-6 text-center" style={{ background: '#2a0a14', border: '2px solid #E91E63' }}>
                  <p className="font-bebas text-xl" style={{ color: '#E91E63' }}>ERRO AO ENVIAR</p>
                  <p className="text-sm mt-1" style={{ color: '#FAFAFA', opacity: 0.7 }}>Tente novamente em instantes.</p>
                </div>
              ) : activeTab === 'contact' ? (
                <form onSubmit={handleContact} className="space-y-4">
                  <h3 className="font-bebas text-2xl tracking-wider" style={{ color: '#FFD600' }}>ENTRE EM CONTATO</h3>
                  <FormInput label="SEU NOME" value={contact.name} onChange={(v) => setContact({ ...contact, name: v })} placeholder="Como você se chama?" required />
                  <FormInput label="SEU EMAIL" type="email" value={contact.email} onChange={(v) => setContact({ ...contact, email: v })} placeholder="seu@email.com" required />
                  <FormInput label="TELEFONE" value={contact.phone} onChange={(v) => setContact({ ...contact, phone: v })} placeholder="(41) 99999-9999" />
                  <FormInput label="ASSUNTO" value={contact.subject} onChange={(v) => setContact({ ...contact, subject: v })} placeholder="Qual o assunto?" />
                  <div>
                    <label className="block font-bebas text-sm tracking-widest mb-2" style={{ color: '#FFD600' }}>MENSAGEM</label>
                    <textarea
                      required
                      rows={4}
                      value={contact.message}
                      onChange={(e) => setContact({ ...contact, message: e.target.value })}
                      placeholder="O que você quer falar para o Jean?"
                      className="w-full p-3 text-sm outline-none transition-colors duration-200 resize-none"
                      style={inputStyle}
                      onFocus={(e) => { e.target.style.borderColor = '#FFD600' }}
                      onBlur={(e) => { e.target.style.borderColor = '#424242' }}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full font-bebas text-xl tracking-wider py-4 transition-all duration-200 hover:scale-105 active:scale-95 disabled:opacity-50"
                    style={{ background: '#E91E63', color: '#FAFAFA', clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 100%, 12px 100%)' }}
                  >
                    {status === 'loading' ? 'ENVIANDO...' : 'ENVIAR MENSAGEM'}
                  </button>
                </form>
              ) : activeTab === 'volunteer' ? (
                <form onSubmit={handleVolunteer} className="space-y-4">
                  <h3 className="font-bebas text-2xl tracking-wider" style={{ color: '#FFD600' }}>SEJA VOLUNTÁRIO</h3>
                  <FormInput label="SEU NOME" value={volunteer.name} onChange={(v) => setVolunteer({ ...volunteer, name: v })} placeholder="Seu nome completo" required />
                  <FormInput label="SEU EMAIL" type="email" value={volunteer.email} onChange={(v) => setVolunteer({ ...volunteer, email: v })} placeholder="seu@email.com" required />
                  <FormInput label="TELEFONE" value={volunteer.phone} onChange={(v) => setVolunteer({ ...volunteer, phone: v })} placeholder="(41) 99999-9999" required />
                  <FormInput label="BAIRRO" value={volunteer.neighborhood} onChange={(v) => setVolunteer({ ...volunteer, neighborhood: v })} placeholder="Em qual bairro você mora?" required />
                  <div>
                    <label className="block font-bebas text-sm tracking-widest mb-2" style={{ color: '#FFD600' }}>COMO QUER AJUDAR?</label>
                    <select
                      required
                      value={volunteer.helpType}
                      onChange={(e) => setVolunteer({ ...volunteer, helpType: e.target.value })}
                      className="w-full p-3 text-sm outline-none transition-colors duration-200"
                      style={inputStyle}
                    >
                      <option value="">Selecione...</option>
                      <option value="panfletagem">Panfletagem</option>
                      <option value="organizacao">Organização de eventos</option>
                      <option value="redes">Redes sociais</option>
                      <option value="transporte">Transporte</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full font-bebas text-xl tracking-wider py-4 transition-all duration-200 hover:scale-105 active:scale-95 disabled:opacity-50"
                    style={{ background: '#E91E63', color: '#FAFAFA', clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 100%, 12px 100%)' }}
                  >
                    {status === 'loading' ? 'ENVIANDO...' : 'QUERO SER VOLUNTÁRIO'}
                  </button>
                </form>
              ) : (
                <form onSubmit={handleReport} className="space-y-4">
                  <h3 className="font-bebas text-2xl tracking-wider" style={{ color: '#FFD600' }}>REPORTE UM PROBLEMA</h3>
                  <p className="text-sm" style={{ color: '#FAFAFA', opacity: 0.7 }}>Denuncie um problema no seu bairro. Jean vai levar sua voz à Assembleia.</p>
                  <FormInput label="SEU NOME" value={report.name} onChange={(v) => setReport({ ...report, name: v })} placeholder="Seu nome" required />
                  <FormInput label="SEU EMAIL" type="email" value={report.email} onChange={(v) => setReport({ ...report, email: v })} placeholder="seu@email.com" required />
                  <FormInput label="TELEFONE" value={report.phone} onChange={(v) => setReport({ ...report, phone: v })} placeholder="(41) 99999-9999" />
                  <FormInput label="BAIRRO" value={report.neighborhood} onChange={(v) => setReport({ ...report, neighborhood: v })} placeholder="Qual bairro?" required />
                  <div>
                    <label className="block font-bebas text-sm tracking-widest mb-2" style={{ color: '#FFD600' }}>DESCRIÇÃO DO PROBLEMA</label>
                    <textarea
                      required
                      rows={4}
                      value={report.message}
                      onChange={(e) => setReport({ ...report, message: e.target.value })}
                      placeholder="Descreva o problema com detalhes..."
                      className="w-full p-3 text-sm outline-none transition-colors duration-200 resize-none"
                      style={inputStyle}
                      onFocus={(e) => { e.target.style.borderColor = '#FFD600' }}
                      onBlur={(e) => { e.target.style.borderColor = '#424242' }}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full font-bebas text-xl tracking-wider py-4 transition-all duration-200 hover:scale-105 active:scale-95 disabled:opacity-50"
                    style={{ background: '#E91E63', color: '#FAFAFA', clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 100%, 12px 100%)' }}
                  >
                    {status === 'loading' ? 'ENVIANDO...' : 'ENVIAR DENÚNCIA'}
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

'use client'

import { useState, useEffect } from 'react'

interface Message {
  id: string
  type: string
  name: string
  email: string
  phone?: string
  subject?: string
  message?: string
  neighborhood?: string
  helpType?: string
  read: boolean
  createdAt: string
}

export default function MensagensPage() {
  const [messages, setMessages] = useState<Message[]>([])
  const [loading, setLoading] = useState(true)
  const [selected, setSelected] = useState<Message | null>(null)

  useEffect(() => {
    fetch('/api/admin/messages')
      .then((r) => r.json())
      .then((data) => {
        setMessages(data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  const markRead = async (id: string, read: boolean) => {
    await fetch(`/api/admin/messages/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ read }),
    })
    setMessages((prev) => prev.map((m) => (m.id === id ? { ...m, read } : m)))
    if (selected?.id === id) setSelected((s) => s ? { ...s, read } : s)
  }

  const deleteMessage = async (id: string) => {
    if (!confirm('Excluir esta mensagem?')) return
    await fetch(`/api/admin/messages/${id}`, { method: 'DELETE' })
    setMessages((prev) => prev.filter((m) => m.id !== id))
    if (selected?.id === id) setSelected(null)
  }

  const openMessage = (msg: Message) => {
    setSelected(msg)
    if (!msg.read) markRead(msg.id, true)
  }

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="font-bebas text-4xl tracking-wider" style={{ color: '#FFD600' }}>
          MENSAGENS
        </h1>
        <p className="text-sm mt-1" style={{ color: '#FAFAFA', opacity: 0.6 }}>
          {messages.filter((m) => !m.read).length} não lidas de {messages.length} total
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* List */}
        <div style={{ background: '#242424', border: '2px solid #424242' }}>
          {loading ? (
            <div className="p-8 text-center" style={{ color: '#FAFAFA', opacity: 0.4 }}>
              Carregando...
            </div>
          ) : messages.length === 0 ? (
            <div className="p-8 text-center" style={{ color: '#FAFAFA', opacity: 0.4 }}>
              Nenhuma mensagem.
            </div>
          ) : (
            <div className="divide-y divide-[#424242]">
              {messages.map((msg) => (
                <button
                  key={msg.id}
                  onClick={() => openMessage(msg)}
                  className="w-full text-left p-4 hover:opacity-80 transition-opacity"
                  style={{
                    background: selected?.id === msg.id ? '#1A1A1A' : 'transparent',
                  }}
                >
                  <div className="flex items-center gap-2 mb-1">
                    {!msg.read && (
                      <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: '#E91E63' }} />
                    )}
                    <span className="font-semibold text-sm" style={{ color: '#FAFAFA' }}>
                      {msg.name}
                    </span>
                    <span
                      className="font-bebas text-xs px-1.5 py-0.5 ml-auto"
                      style={{ background: '#424242', color: '#FFD600' }}
                    >
                      {msg.type}
                    </span>
                  </div>
                  <p className="text-xs truncate" style={{ color: '#FAFAFA', opacity: 0.5 }}>
                    {msg.email}
                  </p>
                  <p className="text-xs mt-1" style={{ color: '#FAFAFA', opacity: 0.3 }}>
                    {new Date(msg.createdAt).toLocaleString('pt-BR')}
                  </p>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Detail */}
        <div style={{ background: '#242424', border: '2px solid #424242' }}>
          {selected ? (
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="font-bebas text-2xl" style={{ color: '#FFD600' }}>
                    {selected.name}
                  </h2>
                  <p className="text-sm" style={{ color: '#FAFAFA', opacity: 0.6 }}>
                    {selected.email}
                    {selected.phone && ` · ${selected.phone}`}
                  </p>
                </div>
                <span
                  className="font-bebas text-xs px-2 py-1"
                  style={{ background: '#E91E63', color: '#FAFAFA' }}
                >
                  {selected.type}
                </span>
              </div>

              <div className="space-y-3 text-sm" style={{ color: '#FAFAFA', opacity: 0.85 }}>
                {selected.subject && (
                  <div>
                    <span className="font-bebas text-xs tracking-widest" style={{ color: '#FFD600' }}>ASSUNTO: </span>
                    {selected.subject}
                  </div>
                )}
                {selected.neighborhood && (
                  <div>
                    <span className="font-bebas text-xs tracking-widest" style={{ color: '#FFD600' }}>BAIRRO: </span>
                    {selected.neighborhood}
                  </div>
                )}
                {selected.helpType && (
                  <div>
                    <span className="font-bebas text-xs tracking-widest" style={{ color: '#FFD600' }}>FORMA DE AJUDA: </span>
                    {selected.helpType}
                  </div>
                )}
                {selected.message && (
                  <div>
                    <span className="font-bebas text-xs tracking-widest block mb-1" style={{ color: '#FFD600' }}>MENSAGEM:</span>
                    <p className="p-3" style={{ background: '#1A1A1A' }}>{selected.message}</p>
                  </div>
                )}
              </div>

              <div className="flex gap-2 mt-6">
                <button
                  onClick={() => markRead(selected.id, !selected.read)}
                  className="font-bebas text-sm tracking-wider px-4 py-2"
                  style={{ background: '#424242', color: '#FAFAFA' }}
                >
                  {selected.read ? 'MARCAR NÃO LIDA' : 'MARCAR LIDA'}
                </button>
                <button
                  onClick={() => deleteMessage(selected.id)}
                  className="font-bebas text-sm tracking-wider px-4 py-2"
                  style={{ background: '#E91E63', color: '#FAFAFA' }}
                >
                  EXCLUIR
                </button>
              </div>
            </div>
          ) : (
            <div className="p-8 text-center" style={{ color: '#FAFAFA', opacity: 0.3 }}>
              Selecione uma mensagem para ver os detalhes.
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

'use client'

import { useState, useEffect } from 'react'

interface Content {
  id: string
  key: string
  title?: string
  body: string
}

export default function ConteudoPage() {
  const [contents, setContents] = useState<Content[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState<string | null>(null)
  const [saved, setSaved] = useState<string | null>(null)

  useEffect(() => {
    fetch('/api/admin/content')
      .then((r) => r.json())
      .then((data) => {
        setContents(data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  const save = async (content: Content) => {
    setSaving(content.key)
    await fetch(`/api/admin/content/${content.key}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: content.title, body: content.body }),
    })
    setSaving(null)
    setSaved(content.key)
    setTimeout(() => setSaved(null), 2000)
  }

  const update = (key: string, field: keyof Content, value: string) => {
    setContents((prev) =>
      prev.map((c) => (c.key === key ? { ...c, [field]: value } : c))
    )
  }

  const textareaStyle = {
    background: '#1A1A1A',
    border: '2px solid #424242',
    color: '#FAFAFA',
    width: '100%',
    padding: '12px',
    fontSize: '14px',
    outline: 'none',
    resize: 'vertical' as const,
    minHeight: '100px',
  }

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="font-bebas text-4xl tracking-wider" style={{ color: '#FFD600' }}>
          CONTEÚDO
        </h1>
        <p className="text-sm mt-1" style={{ color: '#FAFAFA', opacity: 0.6 }}>
          Edite os textos do site.
        </p>
      </div>

      {loading ? (
        <div className="text-center p-8" style={{ color: '#FAFAFA', opacity: 0.4 }}>Carregando...</div>
      ) : (
        <div className="space-y-6">
          {contents.map((content) => (
            <div key={content.key} className="p-6" style={{ background: '#242424', border: '2px solid #424242' }}>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span
                    className="font-bebas text-xs tracking-widest px-2 py-0.5"
                    style={{ background: '#424242', color: '#FFD600' }}
                  >
                    {content.key}
                  </span>
                </div>
                <button
                  onClick={() => save(content)}
                  disabled={saving === content.key}
                  className="font-bebas text-sm tracking-wider px-4 py-2 disabled:opacity-50"
                  style={{
                    background: saved === content.key ? '#2a5a2a' : '#E91E63',
                    color: '#FAFAFA',
                  }}
                >
                  {saving === content.key ? 'SALVANDO...' : saved === content.key ? 'SALVO ✓' : 'SALVAR'}
                </button>
              </div>

              {content.title !== undefined && (
                <div className="mb-3">
                  <label className="block font-bebas text-xs tracking-widest mb-1" style={{ color: '#FFD600' }}>TÍTULO</label>
                  <input
                    type="text"
                    value={content.title || ''}
                    onChange={(e) => update(content.key, 'title', e.target.value)}
                    className="w-full p-3 text-sm outline-none"
                    style={{ background: '#1A1A1A', border: '2px solid #424242', color: '#FAFAFA' }}
                  />
                </div>
              )}

              <div>
                <label className="block font-bebas text-xs tracking-widest mb-1" style={{ color: '#FFD600' }}>CONTEÚDO</label>
                <textarea
                  value={content.body}
                  onChange={(e) => update(content.key, 'body', e.target.value)}
                  style={textareaStyle}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

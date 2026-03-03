'use client'

import { useState, useEffect } from 'react'

interface Photo {
  id: string
  url: string
  caption: string
  order: number
}

export default function GaleriaPage() {
  const [photos, setPhotos] = useState<Photo[]>([])
  const [loading, setLoading] = useState(true)
  const [form, setForm] = useState({ url: '', caption: '', order: '0' })
  const [adding, setAdding] = useState(false)

  useEffect(() => {
    fetch('/api/admin/photos')
      .then((r) => r.json())
      .then((data) => {
        setPhotos(data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  const addPhoto = async (e: React.FormEvent) => {
    e.preventDefault()
    setAdding(true)
    const res = await fetch('/api/admin/photos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, order: parseInt(form.order) }),
    })
    if (res.ok) {
      const photo = await res.json()
      setPhotos((prev) => [...prev, photo].sort((a, b) => a.order - b.order))
      setForm({ url: '', caption: '', order: '0' })
    }
    setAdding(false)
  }

  const deletePhoto = async (id: string) => {
    if (!confirm('Excluir esta foto?')) return
    await fetch(`/api/admin/photos/${id}`, { method: 'DELETE' })
    setPhotos((prev) => prev.filter((p) => p.id !== id))
  }

  const inputStyle = {
    background: '#1A1A1A',
    border: '2px solid #424242',
    color: '#FAFAFA',
  }

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="font-bebas text-4xl tracking-wider" style={{ color: '#FFD600' }}>
          GALERIA
        </h1>
      </div>

      {/* Add photo form */}
      <div className="mb-8 p-6" style={{ background: '#242424', border: '2px solid #424242' }}>
        <h2 className="font-bebas text-xl tracking-wider mb-4" style={{ color: '#FFD600' }}>
          ADICIONAR FOTO
        </h2>
        <form onSubmit={addPhoto} className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div className="sm:col-span-2">
            <label className="block font-bebas text-xs tracking-widest mb-1" style={{ color: '#FFD600' }}>URL DA IMAGEM</label>
            <input
              type="url"
              required
              value={form.url}
              onChange={(e) => setForm({ ...form, url: e.target.value })}
              placeholder="https://..."
              className="w-full p-2 text-sm outline-none"
              style={inputStyle}
            />
          </div>
          <div>
            <label className="block font-bebas text-xs tracking-widest mb-1" style={{ color: '#FFD600' }}>LEGENDA</label>
            <input
              type="text"
              required
              value={form.caption}
              onChange={(e) => setForm({ ...form, caption: e.target.value })}
              placeholder="Descrição da foto"
              className="w-full p-2 text-sm outline-none"
              style={inputStyle}
            />
          </div>
          <div>
            <label className="block font-bebas text-xs tracking-widest mb-1" style={{ color: '#FFD600' }}>ORDEM</label>
            <input
              type="number"
              value={form.order}
              onChange={(e) => setForm({ ...form, order: e.target.value })}
              className="w-full p-2 text-sm outline-none"
              style={inputStyle}
            />
          </div>
          <div className="sm:col-span-4">
            <button
              type="submit"
              disabled={adding}
              className="font-bebas text-lg tracking-wider px-6 py-3 disabled:opacity-50"
              style={{ background: '#E91E63', color: '#FAFAFA' }}
            >
              {adding ? 'ADICIONANDO...' : 'ADICIONAR FOTO'}
            </button>
          </div>
        </form>
      </div>

      {/* Photos grid */}
      {loading ? (
        <div className="text-center p-8" style={{ color: '#FAFAFA', opacity: 0.4 }}>Carregando...</div>
      ) : photos.length === 0 ? (
        <div className="text-center p-8" style={{ color: '#FAFAFA', opacity: 0.4 }}>Nenhuma foto cadastrada.</div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {photos.map((photo) => (
            <div key={photo.id} style={{ background: '#242424', border: '2px solid #424242' }}>
              <div className="aspect-video bg-[#1A1A1A] flex items-center justify-center overflow-hidden">
                {photo.url ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={photo.url} alt={photo.caption} className="w-full h-full object-cover" />
                ) : (
                  <span className="font-bebas text-4xl" style={{ color: '#424242' }}>JH</span>
                )}
              </div>
              <div className="p-3">
                <p className="text-sm truncate mb-2" style={{ color: '#FAFAFA', opacity: 0.8 }}>
                  {photo.caption}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs" style={{ color: '#FFD600' }}>Ordem: {photo.order}</span>
                  <button
                    onClick={() => deletePhoto(photo.id)}
                    className="font-bebas text-xs px-2 py-1"
                    style={{ background: '#E91E63', color: '#FAFAFA' }}
                  >
                    EXCLUIR
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

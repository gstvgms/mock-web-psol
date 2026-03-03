'use client'

import { useState, useEffect } from 'react'
import ScrollReveal from './ScrollReveal'

interface Photo {
  id: string
  url: string
  caption: string
  order: number
}

const placeholderPhotos = [
  { id: '1', url: '', caption: 'Reunião de base no Sítio Cercado', order: 1 },
  { id: '2', url: '', caption: 'Ato pelo transporte público', order: 2 },
  { id: '3', url: '', caption: 'Escola pública — valorização dos professores', order: 3 },
  { id: '4', url: '', caption: 'Movimento Periferia Viva', order: 4 },
  { id: '5', url: '', caption: 'Caminhada pelo bairro', order: 5 },
  { id: '6', url: '', caption: 'Cultura periférica — hip-hop', order: 6 },
]

export default function Gallery() {
  const [photos, setPhotos] = useState<Photo[]>(placeholderPhotos)
  const [lightbox, setLightbox] = useState<Photo | null>(null)

  useEffect(() => {
    fetch('/api/photos')
      .then((r) => r.json())
      .then((data: Photo[]) => {
        if (Array.isArray(data) && data.length > 0) setPhotos(data)
      })
      .catch(() => {})
  }, [])

  return (
    <section id="galeria" className="py-20 texture-concrete">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-12">
            <span
              className="inline-block font-bebas text-sm tracking-[0.3em] px-3 py-1 mb-4"
              style={{ background: '#E91E63', color: '#FAFAFA' }}
            >
              NOSSA LUTA EM IMAGENS
            </span>
            <h2
              className="font-bebas uppercase leading-none"
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                color: '#FAFAFA',
                textShadow: '3px 3px 0px rgba(0,0,0,0.5)',
              }}
            >
              GALERIA{' '}
              <span style={{ color: '#FFD600' }}>DA</span>
              <br />
              <span style={{ color: '#E91E63' }}>PERIFERIA</span>
            </h2>
            <div className="divider-yellow mt-4 w-32" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo, i) => (
            <ScrollReveal key={photo.id}>
              <button
                className="w-full text-left focus:outline-none group"
                onClick={() => setLightbox(photo)}
              >
                <div
                  className="relative overflow-hidden"
                  style={{
                    background: '#2a2a2a',
                    border: '2px solid #424242',
                    clipPath:
                      'polygon(6px 0%, calc(100% - 6px) 0%, 100% 6px, 100% calc(100% - 6px), calc(100% - 6px) 100%, 6px 100%, 0% calc(100% - 6px), 0% 6px)',
                    aspectRatio: '4/3',
                  }}
                >
                  {photo.url ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={photo.url}
                      alt={photo.caption}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div
                      className="w-full h-full flex flex-col items-center justify-center gap-3"
                      style={{
                        background: `linear-gradient(135deg, ${i % 2 === 0 ? '#E91E63' : '#1a1a1a'} 0%, #2a2a2a 100%)`,
                      }}
                    >
                      <div
                        className="font-bebas text-6xl opacity-20"
                        style={{ color: '#FFD600' }}
                      >
                        JH
                      </div>
                      <div
                        className="font-bebas text-xs tracking-widest text-center px-4 opacity-60"
                        style={{ color: '#FAFAFA' }}
                      >
                        FOTO EM BREVE
                      </div>
                    </div>
                  )}

                  {/* Overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3"
                    style={{ background: 'rgba(0,0,0,0.7)' }}
                  >
                    <p
                      className="font-bebas text-sm tracking-wide"
                      style={{ color: '#FFD600' }}
                    >
                      {photo.caption}
                    </p>
                  </div>
                </div>
              </button>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(0,0,0,0.92)' }}
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {lightbox.url ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={lightbox.url}
                alt={lightbox.caption}
                className="w-full"
              />
            ) : (
              <div
                className="w-full flex items-center justify-center"
                style={{ height: '400px', background: '#2a2a2a' }}
              >
                <span className="font-bebas text-8xl" style={{ color: '#FFD600', opacity: 0.2 }}>
                  JH
                </span>
              </div>
            )}
            <div
              className="p-4"
              style={{ background: '#1a1a1a' }}
            >
              <p className="font-bebas text-xl tracking-wide" style={{ color: '#FFD600' }}>
                {lightbox.caption}
              </p>
            </div>
            <button
              className="absolute -top-4 -right-4 w-10 h-10 flex items-center justify-center font-bebas text-xl"
              style={{ background: '#E91E63', color: '#FAFAFA' }}
              onClick={() => setLightbox(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

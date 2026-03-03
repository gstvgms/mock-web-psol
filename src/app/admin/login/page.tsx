'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const result = await signIn('credentials', {
      email,
      password,
      redirect: false,
    })

    setLoading(false)

    if (result?.error) {
      setError('Email ou senha incorretos.')
    } else {
      router.push('/admin')
    }
  }

  const inputStyle = {
    background: '#1A1A1A',
    border: '2px solid #424242',
    color: '#FAFAFA',
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ background: '#1A1A1A' }}
    >
      <div className="w-full max-w-md p-8" style={{ background: '#242424', border: '2px solid #424242' }}>
        <div className="mb-8 text-center">
          <div
            className="font-bebas text-4xl tracking-wider mb-2"
            style={{ color: '#FFD600' }}
          >
            JEAN HENRIQUE
          </div>
          <div
            className="inline-block font-bebas text-sm tracking-[0.3em] px-3 py-1 mb-2"
            style={{ background: '#E91E63', color: '#FAFAFA' }}
          >
            PAINEL ADMINISTRATIVO
          </div>
        </div>

        {error && (
          <div
            className="p-3 mb-4 text-sm font-semibold"
            style={{ background: '#2a0a14', border: '2px solid #E91E63', color: '#E91E63' }}
          >
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-bebas text-sm tracking-widest mb-2" style={{ color: '#FFD600' }}>
              EMAIL
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 text-sm outline-none"
              style={inputStyle}
              onFocus={(e) => { e.target.style.borderColor = '#FFD600' }}
              onBlur={(e) => { e.target.style.borderColor = '#424242' }}
            />
          </div>
          <div>
            <label className="block font-bebas text-sm tracking-widest mb-2" style={{ color: '#FFD600' }}>
              SENHA
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 text-sm outline-none"
              style={inputStyle}
              onFocus={(e) => { e.target.style.borderColor = '#FFD600' }}
              onBlur={(e) => { e.target.style.borderColor = '#424242' }}
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full font-bebas text-xl tracking-wider py-4 transition-all duration-200 hover:scale-105 disabled:opacity-50"
            style={{ background: '#E91E63', color: '#FAFAFA' }}
          >
            {loading ? 'ENTRANDO...' : 'ENTRAR'}
          </button>
        </form>
      </div>
    </div>
  )
}

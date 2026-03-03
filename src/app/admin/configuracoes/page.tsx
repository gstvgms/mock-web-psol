'use client'

import { useState, useEffect } from 'react'

interface Config {
  key: string
  value: string
}

export default function ConfiguracoesPage() {
  const [configs, setConfigs] = useState<Config[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  // Password change
  const [pwForm, setPwForm] = useState({ current: '', newPw: '', confirm: '' })
  const [pwStatus, setPwStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [pwError, setPwError] = useState('')

  useEffect(() => {
    fetch('/api/admin/config')
      .then((r) => r.json())
      .then((data) => {
        setConfigs(data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  const saveConfigs = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    await fetch('/api/admin/config', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(configs),
    })
    setSaving(false)
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  const changePassword = async (e: React.FormEvent) => {
    e.preventDefault()
    setPwError('')
    if (pwForm.newPw !== pwForm.confirm) {
      setPwError('As senhas não coincidem.')
      return
    }
    setPwStatus('loading')
    const res = await fetch('/api/admin/user/password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ currentPassword: pwForm.current, newPassword: pwForm.newPw }),
    })
    if (res.ok) {
      setPwStatus('success')
      setPwForm({ current: '', newPw: '', confirm: '' })
      setTimeout(() => setPwStatus('idle'), 3000)
    } else {
      const data = await res.json()
      setPwError(data.error || 'Erro ao alterar senha.')
      setPwStatus('idle')
    }
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
          CONFIGURAÇÕES
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Site configs */}
        <div className="p-6" style={{ background: '#242424', border: '2px solid #424242' }}>
          <h2 className="font-bebas text-2xl tracking-wider mb-6" style={{ color: '#FFD600' }}>
            CONFIGURAÇÕES DO SITE
          </h2>
          {loading ? (
            <div className="text-center" style={{ color: '#FAFAFA', opacity: 0.4 }}>Carregando...</div>
          ) : (
            <form onSubmit={saveConfigs} className="space-y-4">
              {configs.map((config, i) => (
                <div key={config.key}>
                  <label className="block font-bebas text-xs tracking-widest mb-1" style={{ color: '#FFD600' }}>
                    {config.key.replace(/_/g, ' ').toUpperCase()}
                  </label>
                  <input
                    type="text"
                    value={config.value}
                    onChange={(e) => {
                      const updated = [...configs]
                      updated[i] = { ...config, value: e.target.value }
                      setConfigs(updated)
                    }}
                    className="w-full p-3 text-sm outline-none"
                    style={inputStyle}
                  />
                </div>
              ))}
              <button
                type="submit"
                disabled={saving}
                className="font-bebas text-lg tracking-wider px-6 py-3 disabled:opacity-50"
                style={{ background: saved ? '#2a5a2a' : '#E91E63', color: '#FAFAFA' }}
              >
                {saving ? 'SALVANDO...' : saved ? 'SALVO ✓' : 'SALVAR CONFIGURAÇÕES'}
              </button>
            </form>
          )}
        </div>

        {/* Change password */}
        <div className="p-6" style={{ background: '#242424', border: '2px solid #424242' }}>
          <h2 className="font-bebas text-2xl tracking-wider mb-6" style={{ color: '#FFD600' }}>
            ALTERAR SENHA
          </h2>

          {pwStatus === 'success' ? (
            <div className="p-4" style={{ background: '#2a5a2a' }}>
              <p className="font-bebas text-lg" style={{ color: '#FAFAFA' }}>SENHA ALTERADA COM SUCESSO!</p>
            </div>
          ) : (
            <form onSubmit={changePassword} className="space-y-4">
              {pwError && (
                <div className="p-3 text-sm" style={{ background: '#2a0a14', border: '2px solid #E91E63', color: '#E91E63' }}>
                  {pwError}
                </div>
              )}
              <div>
                <label className="block font-bebas text-xs tracking-widest mb-1" style={{ color: '#FFD600' }}>SENHA ATUAL</label>
                <input
                  type="password"
                  required
                  value={pwForm.current}
                  onChange={(e) => setPwForm({ ...pwForm, current: e.target.value })}
                  className="w-full p-3 text-sm outline-none"
                  style={inputStyle}
                />
              </div>
              <div>
                <label className="block font-bebas text-xs tracking-widest mb-1" style={{ color: '#FFD600' }}>NOVA SENHA</label>
                <input
                  type="password"
                  required
                  value={pwForm.newPw}
                  onChange={(e) => setPwForm({ ...pwForm, newPw: e.target.value })}
                  className="w-full p-3 text-sm outline-none"
                  style={inputStyle}
                />
              </div>
              <div>
                <label className="block font-bebas text-xs tracking-widest mb-1" style={{ color: '#FFD600' }}>CONFIRMAR NOVA SENHA</label>
                <input
                  type="password"
                  required
                  value={pwForm.confirm}
                  onChange={(e) => setPwForm({ ...pwForm, confirm: e.target.value })}
                  className="w-full p-3 text-sm outline-none"
                  style={inputStyle}
                />
              </div>
              <button
                type="submit"
                disabled={pwStatus === 'loading'}
                className="font-bebas text-lg tracking-wider px-6 py-3 disabled:opacity-50"
                style={{ background: '#E91E63', color: '#FAFAFA' }}
              >
                {pwStatus === 'loading' ? 'SALVANDO...' : 'ALTERAR SENHA'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

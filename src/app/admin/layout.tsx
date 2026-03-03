'use client'

import { useSession, signOut } from 'next-auth/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { href: '/admin', label: 'Dashboard', exact: true },
  { href: '/admin/mensagens', label: 'Mensagens' },
  { href: '/admin/galeria', label: 'Galeria' },
  { href: '/admin/conteudo', label: 'Conteúdo' },
  { href: '/admin/configuracoes', label: 'Configurações' },
]

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession()
  const pathname = usePathname()

  const isActive = (href: string, exact?: boolean) =>
    exact ? pathname === href : pathname.startsWith(href)

  return (
    <div className="min-h-screen flex" style={{ background: '#1A1A1A', color: '#FAFAFA' }}>
      {/* Sidebar */}
      <aside
        className="w-64 flex-shrink-0 flex flex-col"
        style={{ background: '#0d0d0d', borderRight: '2px solid #424242' }}
      >
        <div className="p-6 border-b border-[#424242]">
          <div className="font-bebas text-2xl tracking-wider" style={{ color: '#FFD600' }}>
            JEAN HENRIQUE
          </div>
          <div
            className="inline-block font-bebas text-xs tracking-[0.2em] px-2 py-0.5 mt-1"
            style={{ background: '#E91E63', color: '#FAFAFA' }}
          >
            ADMIN
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-4 py-3 font-bebas text-lg tracking-wider transition-colors duration-200"
              style={{
                background: isActive(item.href, item.exact) ? '#E91E63' : 'transparent',
                color: isActive(item.href, item.exact) ? '#FAFAFA' : '#FAFAFA',
                opacity: isActive(item.href, item.exact) ? 1 : 0.6,
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-[#424242]">
          <p className="text-xs mb-3" style={{ color: '#FAFAFA', opacity: 0.5 }}>
            {session?.user?.email}
          </p>
          <button
            onClick={() => signOut({ callbackUrl: '/admin/login' })}
            className="w-full font-bebas text-sm tracking-wider py-2 transition-colors duration-200 hover:opacity-80"
            style={{ background: '#424242', color: '#FAFAFA' }}
          >
            SAIR
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  )
}

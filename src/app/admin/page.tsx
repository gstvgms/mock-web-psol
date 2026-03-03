import { getServerSession } from 'next-auth'
import { prisma } from '@/lib/prisma'

export default async function AdminDashboard() {
  const session = await getServerSession()

  const [messageCount, unreadCount, photoCount] = await Promise.all([
    prisma.message.count(),
    prisma.message.count({ where: { read: false } }),
    prisma.photo.count(),
  ])

  const recentMessages = await prisma.message.findMany({
    take: 5,
    orderBy: { createdAt: 'desc' },
  })

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="font-bebas text-4xl tracking-wider" style={{ color: '#FFD600' }}>
          DASHBOARD
        </h1>
        <p className="text-sm mt-1" style={{ color: '#FAFAFA', opacity: 0.6 }}>
          Bem-vindo, {session?.user?.name || session?.user?.email}
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {[
          { label: 'Total de Mensagens', value: messageCount, color: '#FFD600' },
          { label: 'Não Lidas', value: unreadCount, color: '#E91E63' },
          { label: 'Fotos na Galeria', value: photoCount, color: '#FFD600' },
        ].map((stat) => (
          <div
            key={stat.label}
            className="p-6 text-center"
            style={{ background: '#242424', border: '2px solid #424242' }}
          >
            <div
              className="font-bebas text-5xl mb-2"
              style={{ color: stat.color }}
            >
              {stat.value}
            </div>
            <div
              className="font-bebas text-sm tracking-widest uppercase"
              style={{ color: '#FAFAFA', opacity: 0.7 }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Recent messages */}
      <div style={{ background: '#242424', border: '2px solid #424242' }}>
        <div className="p-4 border-b border-[#424242]">
          <h2 className="font-bebas text-xl tracking-wider" style={{ color: '#FFD600' }}>
            MENSAGENS RECENTES
          </h2>
        </div>
        {recentMessages.length === 0 ? (
          <div className="p-8 text-center" style={{ color: '#FAFAFA', opacity: 0.4 }}>
            Nenhuma mensagem ainda.
          </div>
        ) : (
          <div className="divide-y divide-[#424242]">
            {recentMessages.map((msg) => (
              <div key={msg.id} className="p-4 flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    {!msg.read && (
                      <span
                        className="inline-block w-2 h-2 rounded-full flex-shrink-0"
                        style={{ background: '#E91E63' }}
                      />
                    )}
                    <span
                      className="font-semibold text-sm truncate"
                      style={{ color: '#FAFAFA' }}
                    >
                      {msg.name}
                    </span>
                    <span
                      className="font-bebas text-xs px-2 py-0.5 flex-shrink-0"
                      style={{ background: '#424242', color: '#FFD600' }}
                    >
                      {msg.type}
                    </span>
                  </div>
                  <p className="text-xs truncate" style={{ color: '#FAFAFA', opacity: 0.5 }}>
                    {msg.message || msg.helpType || '—'}
                  </p>
                </div>
                <span className="text-xs flex-shrink-0" style={{ color: '#FAFAFA', opacity: 0.4 }}>
                  {new Date(msg.createdAt).toLocaleDateString('pt-BR')}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

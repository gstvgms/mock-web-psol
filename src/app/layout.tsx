import type { Metadata } from 'next'
import './globals.css'
import Providers from '@/components/providers/SessionProvider'

export const metadata: Metadata = {
  title: 'Jean Henrique | Chegou a Nossa Vez',
  description: 'Jean Henrique, professor de Sociologia e candidato a Deputado Estadual pelo PSOL. Da periferia de Curitiba para a Assembleia Legislativa. Chegou a nossa vez!',
  keywords: ['PSOL', 'deputado estadual', 'Jean Henrique', 'periferia', 'Curitiba', 'educação pública'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

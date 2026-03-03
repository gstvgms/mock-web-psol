import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Carlão 50123 | Chegou a Nossa Vez',
  description: 'Professor Carlos Eduardo — Carlão, candidato a Deputado Estadual pelo PSOL. Educação, moradia, cultura periférica. Chegou a nossa vez!',
  keywords: ['PSOL', 'deputado estadual', 'Carlão', 'periferia', 'educação pública'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}

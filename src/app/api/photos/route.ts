import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const photos = await prisma.photo.findMany({
      orderBy: { order: 'asc' },
    })
    return NextResponse.json(photos)
  } catch (error) {
    console.error('Photos API error:', error)
    return NextResponse.json({ error: 'Erro interno' }, { status: 500 })
  }
}

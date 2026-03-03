import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { prisma } from '@/lib/prisma'

export async function GET() {
  const session = await getServerSession()
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const photos = await prisma.photo.findMany({ orderBy: { order: 'asc' } })
  return NextResponse.json(photos)
}

export async function POST(request: NextRequest) {
  const session = await getServerSession()
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const body = await request.json()
  const { url, caption, order } = body

  if (!url || !caption) {
    return NextResponse.json({ error: 'url e caption são obrigatórios' }, { status: 400 })
  }

  const photo = await prisma.photo.create({
    data: { url, caption, order: order ?? 0 },
  })
  return NextResponse.json(photo, { status: 201 })
}

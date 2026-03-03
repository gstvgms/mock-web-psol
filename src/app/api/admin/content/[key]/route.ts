import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { prisma } from '@/lib/prisma'

export async function PUT(
  request: NextRequest,
  { params }: { params: { key: string } }
) {
  const session = await getServerSession()
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const body = await request.json()
  const content = await prisma.content.upsert({
    where: { key: params.key },
    update: { title: body.title, body: body.body },
    create: { key: params.key, title: body.title, body: body.body },
  })
  return NextResponse.json(content)
}

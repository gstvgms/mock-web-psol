import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(
  _request: NextRequest,
  { params }: { params: { key: string } }
) {
  try {
    const content = await prisma.content.findUnique({
      where: { key: params.key },
    })
    if (!content) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 })
    }
    return NextResponse.json(content)
  } catch (error) {
    console.error('Content API error:', error)
    return NextResponse.json({ error: 'Erro interno' }, { status: 500 })
  }
}

import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { type, name, email, phone, subject, message, neighborhood, helpType } = body

    if (!type || !name || !email) {
      return NextResponse.json({ error: 'Campos obrigatórios faltando' }, { status: 400 })
    }

    const msg = await prisma.message.create({
      data: { type, name, email, phone, subject, message, neighborhood, helpType },
    })

    return NextResponse.json({ success: true, id: msg.id })
  } catch (error) {
    console.error('Contact API error:', error)
    return NextResponse.json({ error: 'Erro interno' }, { status: 500 })
  }
}

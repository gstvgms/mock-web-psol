const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcryptjs')

const prisma = new PrismaClient()

async function main() {
  const hashedPassword = await bcrypt.hash('JeanAdmin2026!', 12)

  await prisma.user.upsert({
    where: { email: 'gusta.trab.estudo@gmail.com' },
    update: {},
    create: {
      email: 'gusta.trab.estudo@gmail.com',
      password: hashedPassword,
      name: 'Admin',
      mustChangePassword: true,
    },
  })

  const contents = [
    {
      key: 'biography',
      title: 'Quem Sou',
      body: 'Nasci e cresci no Sítio Cercado, Curitiba. Sou professor de Sociologia da rede pública e há mais de 10 anos dedico minha vida ao trabalho de base nos bairros periféricos desta cidade. Fundei o movimento Periferia Viva porque acredito que a periferia tem soluções, tem lideranças, tem voz. Fui três vezes candidato a vereador, sempre com a pauta periférica no centro. Agora é a vez da periferia chegar na Assembleia Legislativa.',
    },
    {
      key: 'cause_education',
      title: 'Educação Pública de Qualidade',
      body: 'Garantir estrutura, valorização dos professores e acesso universal à educação pública de qualidade para todos os bairros periféricos.',
    },
    {
      key: 'cause_housing',
      title: 'Moradia Digna',
      body: 'Lutar pela regularização fundiária, habitação popular e contra os despejos nos bairros periféricos de Curitiba.',
    },
    {
      key: 'cause_culture',
      title: 'Cultura Periférica',
      body: 'Apoiar e financiar a arte, o hip-hop, o grafite e todas as expressões culturais que nascem da periferia.',
    },
    {
      key: 'cause_health',
      title: 'Saúde na Periferia',
      body: 'Garantir UBS bem equipadas, profissionais de saúde e atendimento de qualidade nos bairros mais distantes.',
    },
    {
      key: 'cause_transport',
      title: 'Transporte Público',
      body: 'Defender tarifas justas, mais linhas e horários para quem depende do transporte público para trabalhar.',
    },
    {
      key: 'cause_movements',
      title: 'Movimentos Sociais',
      body: 'Fortalecer os movimentos sociais, organizações comunitárias e a luta coletiva dos trabalhadores e trabalhadoras.',
    },
  ]

  for (const content of contents) {
    await prisma.content.upsert({
      where: { key: content.key },
      update: {},
      create: content,
    })
  }

  const configs = [
    { key: 'contact_email', value: 'gusta.trab.estudo@gmail.com' },
    { key: 'site_title', value: 'Jean Henrique | Chegou a Nossa Vez' },
  ]

  for (const config of configs) {
    await prisma.siteConfig.upsert({
      where: { key: config.key },
      update: {},
      create: config,
    })
  }

  console.log('Seed completed successfully!')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())

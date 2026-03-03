# Jean Henrique — Site de Campanha PSOL

Site de campanha política para **Jean Henrique**, professor de Sociologia e candidato a Deputado Estadual pelo PSOL. Nascido e criado no Sítio Cercado, Curitiba. Fundador do movimento **Periferia Viva**.

**Lema:** *"Chegou a nossa vez"*

---

## 🚀 Como Rodar

### Pré-requisitos
- Node.js 18+ instalado
- npm 9+

### Instalação

```bash
# 1. Instalar dependências
npm install

# 2. Copiar variáveis de ambiente
cp .env.example .env
# Edite o .env com suas chaves (NEXTAUTH_SECRET, RESEND_API_KEY)

# 3. Criar e migrar o banco de dados
npx prisma migrate deploy

# 4. Popular banco com dados iniciais (usuário admin + conteúdos)
node prisma/seed.js

# 5. Rodar em modo desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

### Build de Produção

```bash
npm run build
npm start
```

---

## 🔐 Painel Administrativo

Acesse `/admin` para gerenciar o site.

> **⚠️ Não há link para /admin no site público** por segurança.

### Credenciais iniciais:
| Campo  | Valor                         |
|--------|-------------------------------|
| Email  | `gusta.trab.estudo@gmail.com` |
| Senha  | `JeanAdmin2026!`              |

> **Troque a senha no primeiro acesso!** O sistema irá solicitar automaticamente.

### Páginas do Admin:
- `/admin` — Dashboard (total de mensagens, voluntários, contatos)
- `/admin/mensagens` — Lista de mensagens recebidas (filtro por tipo, marcar como lido)
- `/admin/galeria` — Upload e gerenciamento de fotos
- `/admin/conteudo` — Editar textos do site (biografia, bandeiras, trajetória)
- `/admin/configuracoes` — Trocar senha, configurar email de contato

---

## 🌐 Variáveis de Ambiente

Copie `.env.example` para `.env` e preencha:

```env
DATABASE_URL="file:./dev.db"
NEXTAUTH_SECRET="gere-um-secret-seguro-aqui"
NEXTAUTH_URL="http://localhost:3000"
RESEND_API_KEY="sua-chave-resend"        # Opcional: para envio de emails
CONTACT_EMAIL="gusta.trab.estudo@gmail.com"
```

Para gerar um `NEXTAUTH_SECRET` seguro:
```bash
openssl rand -base64 32
```

---

## 🏗️ Estrutura do Projeto

```
src/
  app/
    layout.tsx              # Layout principal com fontes e metadata
    page.tsx                # Página principal (single page)
    globals.css             # Estilos globais + texturas CSS
    api/                    # API Routes
      contact/              # POST formulários de contato
      photos/               # GET fotos públicas
      content/[key]/        # GET conteúdo público
      admin/                # Rotas protegidas do admin
    admin/                  # Painel administrativo
      login/                # Página de login
      mensagens/            # Gerenciar mensagens
      galeria/              # Gerenciar fotos
      conteudo/             # Editar conteúdo
      configuracoes/        # Configurações
  components/
    Navbar.tsx              # Navegação fixa com scroll spy e hamburger
    Hero.tsx                # Hero section com lema e placeholder "JH"
    About.tsx               # Quem Sou — biografia e estatísticas
    Causes.tsx              # Bandeiras — cards das pautas
    Gallery.tsx             # Galeria de fotos com lightbox
    Timeline.tsx            # Trajetória — timeline visual 2014-2026
    Support.tsx             # Apoie — 3 formulários funcionais
    Footer.tsx              # Rodapé
    ScrollReveal.tsx        # Wrapper de animações de scroll
  lib/
    prisma.ts               # Singleton do Prisma Client
prisma/
  schema.prisma             # Modelos do banco de dados
  seed.js                   # Script de população inicial
  migrations/               # Histórico de migrações
public/
  uploads/                  # Fotos enviadas pelo admin
```

---

## 🎨 Stack Técnica

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** para estilização mobile-first
- **NextAuth.js v4** para autenticação do admin
- **Prisma ORM + SQLite** para banco de dados
- **Resend** para envio de emails (configurável)
- **bcryptjs** para hash de senhas
- Google Fonts: **Permanent Marker** + **Bebas Neue** + **Inter**
- Design street art/grafite — tudo via CSS/SVG (sem imagens externas)

---

## 📋 Seções do Site

1. **Hero** — "Chegou a nossa vez", placeholder JH, textura de muro/concreto
2. **Quem Sou** — Biografia de Jean Henrique, 10+ anos de luta, Sítio Cercado
3. **Bandeiras** — 6 pautas: Educação, Moradia, Cultura, Saúde, Transporte, Movimentos
4. **Galeria** — Fotos das atividades (gerenciável pelo admin)
5. **Trajetória** — Timeline 2014-2026
6. **Apoie** — 3 formulários: Voluntário, Apoio/Doação, Contato Geral
7. **Footer** — Jean Henrique, PSOL, "Chegou a nossa vez"

---

## 🚀 Deploy na Vercel

1. Faça fork/push do projeto para o GitHub
2. Importe no [Vercel](https://vercel.com)
3. Configure as variáveis de ambiente no painel da Vercel:
   - `DATABASE_URL` — use Vercel Postgres ou Turso (SQLite remoto)
   - `NEXTAUTH_SECRET` — gere com `openssl rand -base64 32`
   - `NEXTAUTH_URL` — URL do seu domínio (ex: `https://jeanhenrique.vercel.app`)
   - `RESEND_API_KEY` — sua chave do Resend
   - `CONTACT_EMAIL` — email que receberá os formulários
4. No build command, adicione: `npx prisma migrate deploy && node prisma/seed.js`
5. Para storage de fotos em produção, configure **Vercel Blob** ou **Cloudinary**

---

## 📸 Fotos (Storage)

- **Desenvolvimento:** as fotos são salvas em `/public/uploads/`
- **Produção (Vercel):** configure Vercel Blob ou Cloudinary e adapte a rota `/api/admin/photos`

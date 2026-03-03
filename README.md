# Carlão 50123 — Site Mock PSOL

Mock de site de campanha política para apresentação ao candidato **Professor Carlos Eduardo — "Carlão"**, candidato a Deputado Estadual pelo PSOL (número 50123).

## 🚀 Como Rodar

### Pré-requisitos
- Node.js 18+ instalado
- npm 9+

### Instalação

```bash
# Instalar dependências
npm install

# Rodar em modo desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

### Build de Produção

```bash
npm run build
npm start
```

## 🏗️ Estrutura do Projeto

```
src/
  app/
    layout.tsx        # Layout principal com fontes e metadata
    page.tsx          # Página principal
    globals.css       # Estilos globais + texturas CSS
  components/
    Navbar.tsx        # Navegação fixa com scroll spy e menu hamburger
    Hero.tsx          # Seção hero com lema e placeholder do candidato
    About.tsx         # Quem sou — biografia e estatísticas
    Causes.tsx        # Bandeiras — cards das pautas
    Timeline.tsx      # Trajetória — timeline visual
    Support.tsx       # Apoie — CTAs, redes sociais e formulário
    Footer.tsx        # Rodapé
    ScrollReveal.tsx  # Wrapper de animações de scroll
```

## 🎨 Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** para estilização
- Google Fonts: **Bebas Neue** + **Inter**
- Design mobile-first, totalmente responsivo
- Sem imagens externas — tudo via CSS/SVG

## 📋 Seções do Site

1. **Hero** — Lema "Chegou a nossa vez", placeholder do candidato, número 50123
2. **Quem Sou** — Biografia, estatísticas de impacto, movimento Periferia Viva
3. **Bandeiras** — 6 pautas com cards visuais
4. **Trajetória** — Timeline de 2000 a 2026
5. **Apoie** — Botões CTA, redes sociais e formulário de contato
6. **Footer** — Informações do partido, navegação, créditos

---

> ⚠️ Este é um MOCK para fins de apresentação. Todos os dados são fictícios.

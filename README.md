# Starlink

Esta galería de arte para proyectos de Starlink

El proyecto está construido con **Next.js**, **React**, **TypeScript**, **Tailwind CSS** y **MDX**, buscando mantener una estructura simple, rápida y fácil de mantener.

## 🚀 Getting Started

### Requisitos

- Node.js 24+
- npm, yarn, pnpm o bun

### Instalación

Clona el repositorio e instala las dependencias:

```bash
npm install
```

### Servidor de desarrollo

Ejecuta el proyecto en modo desarrollo:

```bash
npm run dev
```

También puedes utilizar:

```bash
yarn dev
# o
pnpm dev
# o
bun dev
```

Abre http://localhost:3000 en tu navegador.

## 🛠️ Tech Stack

- **Next.js** - Framework principal
- **React** - Construcción de interfaces
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Estilos y diseño
- **MDX** - Contenido y documentación
- **Node.js 24** - Runtime
- **Vercel** - Deployment

## 📁 Estructura del proyecto

```text
.
├── app/
│   ├── components/
│   ├── ...
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── layout/
│   ├── ui/
│   └── ...
│
├── content/
│   └── ...
│
├── constants/
│   └── ...
│
├── public/
│   └── ...
│
├── next.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

## 📚 Contenido

La documentación utiliza **MDX**, lo que permite combinar Markdown con componentes de React.

Esto permite crear páginas como:

```mdx
# JavaScript

Una guía sobre JavaScript.

# Esto es un título
```

## 🎨 Design System

Este proyecto utiliza componentes reutilizables para mantener una interfaz consistente.

Entre ellos:

- `H1`
- `H2`
- `P`
- `Divider`
- Componentes de navegación y layout

Los componentes de UI pueden reutilizarse tanto dentro de la aplicación como en el contenido MDX.

## 📜 Scripts

```bash
npm run dev
```

Inicia el servidor de desarrollo.

```bash
npm run build
```

Genera una build de producción.

```bash
npm run start
```

Inicia la aplicación en modo producción.

```bash
npm run lint
```

Ejecuta las validaciones de ESLint.

## 🌐 Deployment

El proyecto está preparado para desplegarse en **Vercel**.

Para generar una build de producción:

```bash
npm run build
```

Después puede iniciarse con:

```bash
npm run start
```

## 📖 Documentation

- [Next.js](https://nextjs.org/docs)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [MDX](https://mdxjs.com/)

## 📄 License

Este proyecto utiliza la licencia definida en el repositorio.

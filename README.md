# Orketech Landing Page

Landing page moderna para Orketech, empresa de automatización de procesos con IA para PYMEs chilenas.

## 🚀 Tecnologías

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS 3
- **Icons**: Lucide React
- **Deployment**: Bolt.new

## 📦 Dependencias principales

- `@supabase/supabase-js` - Base de datos y autenticación
- `resend` - Servicio de email
- `react` + `react-dom` - Framework UI
- `tailwindcss` - Framework CSS
- `typescript` - Tipado estático

## 🎨 Estructura del proyecto

```
src/
├── components/     # Componentes reutilizables
│   ├── Navbar.tsx
│   └── Footer.tsx
├── sections/       # Secciones de la landing
│   ├── Hero.tsx
│   ├── Problema.tsx
│   ├── ComoFunciona.tsx
│   ├── PorQueYo.tsx
│   ├── Servicios.tsx
│   ├── CasosUso.tsx
│   ├── Proyectos.tsx
│   ├── ComoTrabajo.tsx
│   ├── QuienSoy.tsx
│   └── Contacto.tsx
├── hooks/          # Custom hooks
│   └── useInView.ts
├── App.tsx         # Componente principal
├── main.tsx        # Punto de entrada
└── index.css       # Estilos globales
```

## 🛠️ Comandos disponibles

```bash
npm run dev        # Desarrollo local
npm run build      # Build para producción
npm run preview    # Preview del build
npm run lint       # Linting del código
npm run typecheck  # Verificación de tipos TypeScript
```

## 🎯 Propósito

Landing page diseñada para:
- Presentar servicios de automatización con IA
- Capturar leads interesados
- Mostrar casos de uso y proyectos
- Establecer credibilidad profesional

## 🌐 Metadatos SEO

- Título: "Orketech — Automatización de Procesos con IA | Chile"
- Descripción: "Automatizo procesos de negocio con IA para PYMEs chilenas. Elimino trabajo manual repetitivo en ventas, operaciones y finanzas."
- Open Graph optimizado para redes sociales

## 📱 Responsive Design

Diseño completamente responsive con:
- Breakpoints para mobile, tablet y desktop
- Tipografía escalable (Inter + Space Grotesk)
- Animaciones suaves con hooks de intersection observer

## 🔗 Enlaces

- [Abrir en Bolt](https://bolt.new/~/sb1-tntj16d7)
- Production: https://www.orketech.com
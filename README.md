# Selene Pestañas — web

Landing de Selene Pestañas (extensiones de pestañas y laminado de cejas en Valencia), construida con [Astro](https://astro.build) a partir del diseño en `design/Selene Pestañas.html`.

## Comandos

| Comando           | Qué hace                                         |
| ----------------- | ------------------------------------------------ |
| `npm install`     | Instala dependencias                             |
| `npm run dev`     | Servidor de desarrollo en `http://localhost:4321` |
| `npm run build`   | Chequeo de tipos + build estático en `dist/`     |
| `npm run preview` | Sirve el build localmente                        |

## Estructura

```
src/
├─ config/site.ts        Datos de negocio: teléfono, dirección, horario, redes, menú, enlace de reserva
├─ content/*.json        Servicios, opiniones, preguntas frecuentes y galería (validados en content.config.ts)
├─ assets/images/        Fotos (se optimizan automáticamente a AVIF/WebP)
├─ styles/tokens.css     Design tokens: colores, tipografía, espaciado, movimiento
├─ components/
│  ├─ ui/                Primitivas genéricas: Button, Heading, Eyebrow, Section, SectionHeader, Card, Media…
│  ├─ layout/            Header, MobileMenu, Footer, MobileBookingBar
│  ├─ blocks/            Piezas de dominio: ServiceCard, BookingCard, TestimonialCard, FaqItem, Lightbox…
│  └─ sections/          Secciones de la landing (Hero, Services, Gallery, About, Testimonials, Faq, Contact)
├─ layouts/              BaseLayout (SEO, JSON-LD, header/footer) y LegalLayout
├─ scripts/              JS mínimo: header/menú, reveal on scroll, lightbox
└─ pages/                index, páginas legales y 404
```

Las capas solo dependen hacia abajo: `pages → sections → blocks → ui`. Los componentes de `ui/` no conocen el negocio, así que se pueden reutilizar en cualquier página nueva.

## Tareas habituales

**Cambiar teléfono, dirección, horario o redes** → `src/config/site.ts`. Se actualiza en todo el sitio (incluido el SEO).

**Activar un calendario de reservas** → cambia `booking.href` en `src/config/site.ts`; todos los botones "Reservar cita" apuntan ahí.

**Cambiar precios o textos de servicios** → `src/content/services.json`.

**Añadir fotos** → guarda la imagen en `src/assets/images/` y añade el campo en el JSON correspondiente, con la ruta relativa al JSON:

```json
{ "id": "clasicas", "image": "../assets/images/clasicas.jpg", ... }
```

Mientras no haya foto, se muestra un hueco con el color del diseño y la descripción. Los campos de imagen son `image` (servicios y galería) y `avatar` (opiniones). La foto de "Sobre mí" se pasa como prop `portrait` a `<About />` en `src/pages/index.astro`.

**Añadir una sección nueva** → crea `src/components/sections/MiSeccion.astro` usando `Section` + `SectionHeader` y añádela en `src/pages/index.astro`.

## Pendiente

- Fotos reales de servicios, galería, retrato y opiniones.
- Texto de las páginas legales (`src/pages/aviso-legal.astro`, `privacidad.astro`, `cookies.astro`). Mientras tanto llevan `noindex` y están fuera del sitemap (`astro.config.mjs`).

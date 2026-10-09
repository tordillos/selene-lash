/**
 * Datos de negocio — única fuente de verdad.
 * Cambiar aquí teléfono, dirección, horario o enlace de reserva
 * actualiza header, footer, contacto, barra móvil y SEO a la vez.
 */

const phoneDigits = '34652341788';

export const site = {
  name: 'Selene Pestañas',
  tagline: 'Extensiones & laminado',
  url: 'https://selenepestanas.es',
  locale: 'es_ES',
  lang: 'es',

  seo: {
    title: 'Extensiones de pestañas y laminado de cejas en Valencia | Selene Pestañas',
    description:
      "Extensiones de pestañas en Valencia: volumen ruso, pelo a pelo, lifting, laminado de cejas y depilación con hilo en L'Eixample. Técnica premiada en el Campeonato Lash & Brow. Reserva por WhatsApp o MD.",
    ogTitle: 'Selene Pestañas — Extensiones de pestañas y laminado de cejas en Valencia',
    ogDescription:
      "Oro en Volumen Ruso · Campeonato Lash & Brow. Estudio en L'Eixample, Valencia. Una clienta a la vez.",
  },

  contact: {
    phone: '+34 652 34 17 88',
    phoneHref: `tel:+${phoneDigits}`,
    email: 'hola@selenepestanas.es',
    whatsappHref: `https://wa.me/${phoneDigits}`,
    instagramHref: 'https://instagram.com/selene_pestanas',
    googleProfileHref: 'https://maps.app.goo.gl/C5yJjUskkUGEL1bP8',
    /** Google Maps → tu ficha → Compartir → Insertar un mapa → src del iframe. */
    googleMapEmbedSrc:
      'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3047.5559476582043!2d-0.3777863697385412!3d39.46572886153277!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd604f35aca67353%3A0xb9d4b1f1c1e7217c!2sExtensiones%20de%20Pesta%C3%B1as%20%7C%20Lifting%20de%20pesta%C3%B1as%20%7C%20Laminado%20de%20Cejas%20%7C%20Valencia!5e0!3m2!1ses!2ses!4v1791553852947!5m2!1ses!2ses',
  },

  address: {
    street: 'Passatge Dr. Serra, 12',
    postalCode: '46004',
    city: 'València',
    district: "L'Eixample",
    region: 'Valencia',
    country: 'ES',
  },

  /** Horario legible + formato schema.org para el JSON-LD. */
  hours: {
    lines: ['Lunes a viernes · 10:00 – 14:00', 'y 16:00 – 20:00', 'Sábado y domingo · cerrado'],
    schema: ['Mo-Fr 10:00-14:00', 'Mo-Fr 16:00-20:00'],
  },

  /**
   * Destino de todos los CTA "Reservar cita".
   * Cuando haya calendario online, cambiar solo este href.
   */
  booking: {
    href: '#reservar',
    label: 'Reservar cita',
  },

  nav: {
    primary: [
      { label: 'Inicio', href: '#inicio' },
      { label: 'Servicios', href: '#servicios' },
      { label: 'Galería', href: '#galeria' },
      { label: 'Sobre mí', href: '#sobre-mi' },
      { label: 'Opiniones', href: '#opiniones' },
      { label: 'Contacto', href: '#contacto' },
    ],
    mobile: [
      { label: 'Servicios', href: '#servicios' },
      { label: 'Galería', href: '#galeria' },
      { label: 'Sobre mí', href: '#sobre-mi' },
      { label: 'Opiniones', href: '#opiniones' },
      { label: 'Preguntas', href: '#faq' },
      { label: 'Contacto', href: '#contacto' },
    ],
    footer: [
      { label: 'Servicios', href: '#servicios' },
      { label: 'Galería', href: '#galeria' },
      { label: 'Sobre mí', href: '#sobre-mi' },
      { label: 'Preguntas frecuentes', href: '#faq' },
    ],
    legal: [
      { label: 'Aviso legal', href: '/aviso-legal' },
      { label: 'Política de privacidad', href: '/privacidad' },
      { label: 'Cookies', href: '/cookies' },
    ],
  },
} as const;

export type NavLink = { label: string; href: string };

/** Resuelve anclas de la home para que funcionen también desde páginas internas. */
export function resolveHref(href: string, isHome: boolean): string {
  return !isHome && href.startsWith('#') ? `/${href}` : href;
}

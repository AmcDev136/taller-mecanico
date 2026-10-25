# Torque · Landing page de taller mecánico

Landing page estática para un taller mecánico, hecha con **Astro** y **Tailwind CSS**. Los clientes pueden cotizar un servicio o agendar una cita por **WhatsApp**, sin necesidad de backend ni base de datos.

> **Aviso: proyecto de demostración.** Este sitio es parte de mi portafolio. El nombre del taller, la dirección, los horarios, el teléfono y el mapa son **solo de ejemplo** y no corresponden a ningún negocio real.

## Características

- Hero con carrusel de imágenes de motores, hecho solo con CSS (fundido cruzado y zoom lento).
- Catálogo de servicios con íconos SVG y un botón de cotización por servicio.
- Sección "¿Cómo funciona?" en cuatro pasos.
- Formulario de cita que arma el mensaje y abre WhatsApp, sin backend.
- Botón flotante de WhatsApp y enlaces con mensaje prellenado.
- Sección de ubicación y horarios con mapa incrustado.
- Diseño responsive (mobile first) con menú móvil.
- SEO: meta tags, Open Graph, datos estructurados (JSON-LD), sitemap y `robots.txt`.
- Accesibilidad: contraste revisado, `prefers-reduced-motion` y navegación por teclado.
- Imágenes optimizadas en el build con `astro:assets`.
- Casi sin JavaScript en el cliente (solo el menú móvil y el formulario).

## Tecnologías

| Pieza | Herramienta |
|---|---|
| Framework | [Astro](https://astro.build) |
| Estilos | [Tailwind CSS v4](https://tailwindcss.com) |
| Íconos | [Lucide](https://lucide.dev) (`@lucide/astro`) |
| Tipografía | [Inter](https://rsms.me/inter/) autoalojada (`@fontsource-variable/inter`) |
| Sitemap | `@astrojs/sitemap` |
| Citas | Enlaces `wa.me` con mensaje prellenado |

Todo el stack usa herramientas gratuitas y de código abierto.

## Estructura del proyecto

```
taller-mecanico/
├── public/                  # favicon, imagen Open Graph y robots.txt
├── src/
│   ├── assets/hero/         # fotos del carrusel (1.jpg ... 5.jpg)
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── Services.astro
│   │   ├── ServiceCard.astro
│   │   ├── HowItWorks.astro
│   │   ├── Location.astro
│   │   ├── Contact.astro
│   │   ├── CitaForm.astro
│   │   ├── Footer.astro
│   │   └── WhatsAppFloat.astro
│   ├── data/site.ts         # textos, servicios, horarios y número de WhatsApp
│   ├── layouts/Layout.astro # head, SEO y estructura base
│   ├── pages/index.astro    # ensambla las secciones
│   └── styles/global.css    # Tailwind y paleta de colores
├── astro.config.mjs
└── package.json
```

## Cómo ejecutarlo

Requisito: [Node.js](https://nodejs.org) en una versión LTS reciente.

```bash
# 1. Clonar el repositorio
git clone https://github.com/TU-USUARIO/taller-mecanico.git
cd taller-mecanico

# 2. Instalar dependencias
npm install

# 3. Servidor de desarrollo en http://localhost:4321
npm run dev
```

### Comandos disponibles

| Comando | Acción |
|---|---|
| `npm run dev` | Inicia el servidor de desarrollo con recarga en vivo |
| `npm run build` | Genera el sitio estático en `dist/` |
| `npm run preview` | Sirve la carpeta `dist/` (ejecutar antes `npm run build`) |

## Personalización

**Datos del taller.** Casi todo el contenido vive en `src/data/site.ts`: nombre, eslogan, descripción, ciudad, dirección, horarios, servicios y pasos. No hace falta tocar los componentes para cambiarlos.

**Número de WhatsApp.** En `src/data/site.ts`, el campo `whatsapp` usa el formato internacional sin `+`, espacios ni guiones: código de país más 10 dígitos. Por ejemplo, para México: `524431234567`.

**Fotos del carrusel.** Coloca tus imágenes en `src/assets/hero/` con los nombres `1.jpg` a `5.jpg`. Se recomiendan fotos horizontales de al menos 2000 px de ancho. La primera es la que se carga con prioridad, así que conviene que sea la más ligera y oscura. El carrusel está pensado para 5 fotos; si usas otra cantidad, ajusta la duración y los porcentajes de la animación en `Hero.astro`.

**Colores.** La paleta (crema, arena, naranja, carbón) está definida en el bloque `@theme` de `src/styles/global.css`. Al cambiar los valores se actualizan todas las utilidades de Tailwind.

**Dominio y SEO.** Antes de desplegar, cambia la propiedad `site` en `astro.config.mjs` y las URLs de `public/robots.txt` por el dominio real. Reemplaza también `public/og.jpg` (1200 × 630 px) por tu propia imagen para compartir.

**Mapa.** En Google Maps usa *Compartir → Insertar un mapa* y copia el valor de `src` del iframe en el campo `mapEmbed` de `src/data/site.ts`.

## Despliegue

Al ser un sitio estático, se puede publicar gratis en Cloudflare Pages, Netlify o GitHub Pages con estos ajustes:

- **Comando de build:** `npm run build`
- **Directorio de salida:** `dist`

## Créditos

- Fotografías de motores de bancos de imágenes gratuitos (Unsplash o Pexels).
    - `1.jpg`: https://www.pexels.com/es-es/foto/coche-vehiculo-motor-bateria-8478228/
    - `2.jpg`: https://www.pexels.com/es-es/foto/blanco-y-negro-motor-monocromo-escala-de-grises-8985708/
    - `3.jpg`: https://www.pexels.com/es-es/foto/garaje-adentro-taller-reparacion-de-coches-4116201/
    - `4.jpg`: https://www.pexels.com/es-es/foto/coche-vehiculo-tienda-trabajo-4116207/
    - `5.jpg`: https://www.pexels.com/es-es/foto/hombre-de-chaqueta-negra-y-pantalones-cargo-de-pie-junto-al-coche-rojo-3807297/
- Íconos de [Lucide](https://lucide.dev), licencia ISC.

## Licencia

Proyecto personal de portafolio.
El código se distribuye bajo la licencia [MIT](LICENSE). Las fotografías pertenecen a sus autores y se usan según las licencias de Pexels.
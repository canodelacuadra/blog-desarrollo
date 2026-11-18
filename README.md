# Blog de desarrollo web con Astro

Sitio personal sobre desarrollo web construido con el starter oficial de Astro y publicado en GitHub Pages.

URL pública: https://canodelacuadra.github.io/blog-astro-2/

## Características

- Estilos mínimos y fáciles de personalizar.
- Metadatos SEO, URLs canónicas y datos Open Graph.
- Sitemap y feed RSS.
- Contenido en Markdown y MDX con esquema validado.
- Despliegue automático con GitHub Actions.

## Estructura del proyecto

```text
public/                 archivos estáticos (favicons, .nojekyll)
src/
├── assets/             imágenes y fuentes
├── components/         componentes reutilizables
├── content/blog/       artículos del blog
├── layouts/            plantillas compartidas
├── pages/              páginas y rutas
└── styles/             CSS global
astro.config.mjs        configuración de Astro
```

Astro busca archivos `.astro`, `.md` y `.mdx` en `src/pages/`. Cada archivo se convierte en una ruta según su nombre. El contenido de `src/content/blog/` se recupera con `getCollection()` y su frontmatter se valida en `src/content.config.ts`.

## Comandos

| Comando | Acción |
| :--- | :--- |
| `npm install` | Instala las dependencias. |
| `npm run dev` | Arranca el servidor de desarrollo en `localhost:4321`. |
| `npm run build` | Genera el sitio en `./dist/`. |
| `npm run preview` | Previsualiza el resultado de `build`. |
| `npm run astro ...` | Ejecuta comandos de la CLI de Astro, como `astro check`. |

## Despliegue en GitHub Pages

1. El repositorio debe tener configurado `site: 'https://canodelacuadra.github.io'` y `base: '/blog-astro-2'` en `astro.config.mjs`.
2. El workflow `.github/workflows/deploy.yml` compila y publica el sitio en cada push a `master`.
3. En GitHub, entra en **Settings → Pages** y selecciona **GitHub Actions** como origen.
4. Todos los enlaces internos se construyen con la función `withBase()` de `src/consts.ts` para que funcionen con el subdirectorio `/blog-astro-2`.

Para un dominio propio, cambia `site` por tu dominio, elimina `base` y añade un archivo `public/CNAME` con el dominio.

## Más información

- [Documentación de Astro](https://docs.astro.build)
- [Guía de despliegue en GitHub Pages](https://docs.astro.build/en/guides/deploy/github/)

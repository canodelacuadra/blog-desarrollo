---
title: 'Anatomía de un proyecto Astro'
description: 'Recorrido por las carpetas de un proyecto Astro y qué se guarda en cada una.'
pubDate: 'Nov 04 2026'
heroImage: '../../assets/blog-estructura.jpg'
---

Cuando abres por primera vez un proyecto Astro, la estructura puede parecer excesiva. En realidad cada carpeta tiene una responsabilidad muy clara. Este es el esquema básico:

```text
src/
├── assets/       imágenes y fuentes que Astro procesa
├── components/   piezas reutilizables de la interfaz
├── content/      artículos en Markdown o MDX
├── layouts/      plantillas HTML compartidas
├── pages/        rutas del sitio
└── styles/       CSS global
public/           archivos que se copian tal cual
astro.config.mjs  configuración del proyecto
```

## Páginas y rutas

Astro usa enrutamiento por archivos. `src/pages/index.astro` es la portada, `src/pages/about.astro` genera `/about` y `src/pages/blog/index.astro` genera `/blog`.

Las rutas dinámicas van entre corchetes. Por ejemplo, `src/pages/blog/[...slug].astro` captura cualquier segmento después de `/blog/`, y con `getStaticPaths()` decides qué rutas se generan:

```astro
export async function getStaticPaths() {
  const posts = await getCollection('blog');
  return posts.map((post) => ({
    params: { slug: post.id },
    props: post,
  }));
}
```

## Componentes y layouts

Un componente es un archivo `.astro` con dos partes: un frontmatter entre `---` donde va la lógica, y una plantilla HTML. Los layouts son componentes que envuelven a otros y suelen contener el `<html>`, el `<head>` y la navegación.

La diferencia importante es el `<slot />`: marca el punto donde se inserta el contenido del hijo.

## Contenido

`src/content/` guarda los artículos. En `content.config.ts` defines un esquema con Zod para que los metadatos se validen al compilar:

```ts
const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    heroImage: z.optional(image()),
  }),
});
```

Si te olvidas del título o la fecha, el build falla. Esa validación evita sorpresas desagradables al publicar.

## Public y assets

La regla es simple: lo que necesite optimización va en `src/assets/` y lo que debe copiarse sin cambios —favicons, `robots.txt`, `.nojekyll`— va en `public/`.

## Configuración

`astro.config.mjs` concentra integrations, `site` y `base`. Si publicas en GitHub Pages bajo un subdirectorio, `base` es imprescindible para que los enlaces y los recursos apunten a la ruta correcta.

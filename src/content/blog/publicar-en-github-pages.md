---
title: 'Publicar un blog Astro en GitHub Pages'
description: 'Pasos para desplegar un sitio Astro en GitHub Pages con GitHub Actions.'
pubDate: 'Oct 20 2026'
updatedDate: 'Nov 18 2026'
heroImage: '../../assets/blog-placeholder-5.jpg'
---

GitHub Pages permite publicar un sitio estático directamente desde un repositorio. Con Astro, el método recomendado es un flujo de GitHub Actions que compila el proyecto y sube el resultado.

## 1. Configura Astro

Necesitas dos valores en `astro.config.mjs`:

```js
export default defineConfig({
  site: 'https://canodelacuadra.github.io',
  base: '/blog-astro-2',
});
```

`site` es la dirección base de tu cuenta y `base` el nombre del repositorio. Si tu repo se llama `<usuario>.github.io`, publicas en la raíz y puedes omitir `base`.

## 2. Ajusta los enlaces internos

Con `base` configurado, un enlace escrito a mano como `/about` apunta a la raíz del dominio y no al blog. La solución es componerlo siempre con `import.meta.env.BASE_URL`:

```ts
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${base}${normalizedPath}` || '/';
}
```

Esto afecta a la navegación, a los favicons, al RSS, al sitemap y a cualquier enlace a artículos.

## 3. Crea el workflow

Añade `.github/workflows/deploy.yml` con dos trabajos: uno que instala y compila con `withastro/action`, y otro que publica con `actions/deploy-pages`. Acuérdate de dar permisos de `pages: write` e `id-token: write`.

El action detecta el gestor de paquetes leyendo `package-lock.json`, así que ese archivo debe estar en el repositorio.

## 4. Activa Pages

En el repositorio, entra en **Settings → Pages** y elige **GitHub Actions** como origen. A partir de ahí, cada push a la rama configurada dispara el despliegue.

## 5. No te olvides de `.nojekyll`

Astro genera los recursos en una carpeta llamada `_astro`. Jekyll ignora los directorios que empiezan por guion bajo, así que conviene añadir un archivo vacío `public/.nojekyll` para asegurarte de que se publican.

## Comprobación final

Tras el primer despliegue, revisa que la portada carga en `https://<usuario>.github.io/<repo>/`, que los enlaces del menú funcionan y que `rss.xml` y `sitemap-index.xml` aparecen con las rutas correctas.

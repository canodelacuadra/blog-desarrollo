---
title: 'Astro desde cero: qué es y cuándo usarlo'
description: 'Una introducción práctica a Astro, el generador de sitios estáticos que usa este blog.'
pubDate: 'Nov 10 2026'
updatedDate: 'Nov 18 2026'
heroImage: '../../assets/blog-placeholder-4.jpg'
---

Astro es un generador de sitios estáticos pensado para contenido. Su idea principal es sencilla: renderiza los componentes en el momento de la compilación y envía al navegador solo HTML y CSS. Si una parte de la página necesita interactividad, puedes añadir JavaScript únicamente para esa parte.

## La idea de las islas

A eso se le llama *arquitectura de islas*. Imagina una página estática con un contador interactivo: el resto del documento no cambia, solo el contador se hidrata en el cliente con una directiva como `client:load`.

```astro
<Contador client:load />
```

El resultado es una web que carga rápido porque no descarga el JavaScript de componentes que no lo necesitan.

## Cuándo encaja Astro

Astro brilla en sitios donde el contenido manda:

- Blogs y portafolios.
- Documentación.
- Webs de marketing o páginas de producto.
- Proyectos que necesitan buen SEO y tiempos de carga bajos.

Si estás construyendo una aplicación con muchas interacciones y estado compartido, quizá te convenga más un framework orientado a aplicaciones. Aun así, Astro permite usar React, Vue o Svelte dentro de sus islas, así que no es una decisión excluyente.

## Lo que necesitas para empezar

Bastan tres ideas:

1. **Páginas** en `src/pages/`: cada archivo se convierte en una ruta.
2. **Componentes** en `src/components/`: fragmentos reutilizables de interfaz.
3. **Colecciones de contenido** en `src/content/`: artículos con un esquema validado.

Con eso ya puedes publicar un sitio completo. El resto —integraciones, imágenes optimizadas, fuentes— se añade cuando lo necesitas.

## En resumen

Astro no intenta sustituir a todo lo demás. Hace una cosa muy concreta: convertir tu contenido y tus componentes en HTML rápido. Para un blog como este, es justo lo que hace falta.

# Datos del menú de inicio

## Objetivo

Definir en `home-page.ts` los datos de las diez categorías cuyas imágenes están en `public/menu`.

## Diseño

- Declarar el tipo `MenuItem` con las propiedades `img` y `title`, ambas cadenas.
- Declarar una constante `MENU_ITEMS` con las diez entradas.
- Usar rutas públicas absolutas con el formato `/menu/<archivo>.png`.
- Mantener los títulos legibles en español y respetar los nombres confirmados por el usuario.
- Exponer la constante desde `HomePage` como una referencia de solo lectura para su posterior uso en la plantilla.

## Verificación

Una prueba de `HomePage` comprobará que existen diez entradas y que cada una contiene la ruta y el título esperados.

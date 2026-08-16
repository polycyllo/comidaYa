# Arrastre horizontal del menú con mouse

## Objetivo

Permitir que, en escritorio, el usuario desplace horizontalmente las categorías del menú de `HomePage` manteniendo presionado el botón izquierdo del mouse y arrastrando. La barra de desplazamiento horizontal no será visible.

## Alcance

- Modificar únicamente el carrusel de categorías de la sección «Menú» en `HomePage`.
- Conservar el desplazamiento táctil nativo y mediante rueda o trackpad.
- No añadir inercia, botones de navegación ni convertir las tarjetas en enlaces.

## Interacción

- El contenedor mostrará el cursor `grab` cuando esté disponible para arrastrar.
- El arrastre comenzará solo con el botón principal del puntero.
- Al comenzar, se guardarán la coordenada horizontal y el `scrollLeft` actuales.
- Mientras el puntero se mueva, la diferencia horizontal actualizará el `scrollLeft` en dirección opuesta al movimiento del puntero, produciendo el efecto de agarrar el contenido.
- Durante el gesto, el cursor cambiará a `grabbing` y se evitará la selección accidental del contenido.
- El gesto terminará al soltar o cancelar el puntero. La captura de puntero mantendrá el arrastre activo aunque el cursor salga temporalmente del contenedor.
- Otros botones del mouse no iniciarán el arrastre.

## Implementación

`HomePage` manejará eventos Pointer Events desde el contenedor del carrusel. Se usará una referencia de plantilla al elemento desplazable y un estado booleano para reflejar si existe un arrastre activo. Esta solución queda localizada en el único carrusel que la necesita y evita introducir una directiva reutilizable sin un segundo consumidor.

La plantilla mantendrá `overflow-x-auto` para preservar el desplazamiento nativo. Una clase local ocultará visualmente la barra en Firefox y navegadores WebKit sin establecer `overflow: hidden` ni bloquear el desplazamiento.

## Casos de finalización y seguridad

- `pointerup` y `pointercancel` restablecerán el estado aunque el gesto no termine de forma normal.
- El código comprobará el estado activo antes de mover el contenido.
- La captura se liberará únicamente cuando pertenezca al puntero activo, evitando errores del DOM.
- No habrá comportamiento especial si el contenido no desborda; actualizar `scrollLeft` será inocuo.

## Pruebas

Una prueba de `HomePage` verificará que:

1. El botón izquierdo inicia el estado de arrastre.
2. El movimiento horizontal cambia `scrollLeft` usando la distancia recorrida.
3. Soltar o cancelar termina el estado de arrastre.
4. Un botón distinto del principal no inicia el gesto.
5. La plantilla conserva un contenedor desplazable y aplica la clase que oculta la barra.

Después se ejecutarán las pruebas de Angular y la compilación de producción para detectar regresiones de tipos, plantilla y estilos.

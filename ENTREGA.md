# MOODA — entrega

Abrir `index.html` en Chrome. Entregar la carpeta completa, incluyendo `assets`, los archivos JavaScript y `styles.css`; el HTML usa esos archivos para funcionar.

La app permite crear outfits, mover prendas y cabeza en el collage, guardar looks y favoritos, subir prendas, explorar inspiración y usar la bolsa de la tienda. Los datos se guardan en el navegador de cada persona. La tienda es una demostración, sin pagos ni pedidos reales. Los enlaces de música y fuentes requieren internet.

## Comprobaciones

Ejecutar desde la carpeta del proyecto, en macOS con Chrome y Python 3:

```sh
python3 checks/review.py
```

Las pruebas usan un perfil de Chrome separado, sin tocar los datos del navegador habitual. Revisan navegación, guardado, favoritos, filtros, prendas subidas, movimiento, compra, cierre de ventanas y presentación en tres tamaños. Las capturas quedan en `/tmp/mooda-review-*.png`. La ejecución devuelve un código de error si falla una comprobación.

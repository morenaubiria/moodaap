MOODA — app web móvil

Abrí index.html en tu navegador o con Live Server.

Estructura basada en el wireframe:
- Inicio con acceso a Crear outfit.
- Crear: ocasión (6 opciones), propuesta (2 opciones), combinador con flechas.
- Combinador: accesorios, remera, pantalón, campera y calzado.
- Armario: prendas; pantalla Agregar prenda (foto, tipo, ocasión y nombre).
- Mis outfits: combinaciones guardadas; corazón para marcar Favoritos.
- Favoritos: solo outfits marcados, sin duplicar ni borrar el original.
- Inspiración: menú Fotos/Momentos, Diseñadores, Música.
- Fotos: búsqueda y filtros por ocasión.
- Diseñadores: referentes seleccionables y enlaces a colecciones oficiales.
- Música: pestañas Todos/Artistas/Playlist; artistas, géneros y playlists por ocasión.
  Las tarjetas de playlist abren búsquedas en Spotify.

Estética y fotografías del moodboard proporcionado, guardado en assets/.
Prendas del combinador ilustradas; fotos subidas disponibles en el armario.
Los datos se guardan en el navegador (localStorage). Sin servidor ni cuentas.

Actualización de distribución según el wireframe:
- Inicio centrado: logo, subtítulo, texto, Crear outfit e imagen.
- Ocasiones 2 × 3 y dos propuestas verticales, con Continuar al pie.
- Combinador: categorías a la izquierda, prendas y flechas al centro;
  Mi ropero y corazón abajo, seguidos de Guardar outfit.
- Armario, Mis outfits y Favoritos: 3 columnas × 4 filas; paginación lateral.
- Agregar prenda: foto arriba, tipo/ocasión/nombre debajo y botón final.
- Inspiración: tres botones horizontales en el centro de la pantalla.
- Fotos: título, buscador, filtros y grilla de imágenes.
- Diseñadores: tres tarjetas horizontales apiladas y Continuar al pie.
- Música: pestañas, artistas, géneros, playlists y Continuar al pie.
- Barra inferior en las pantallas indicadas en el wireframe; oculta en
  los pasos de creación y en Diseñadores/Música.

Actualización de prendas y navegación:
- Barra inferior fija y visible en todas las pantallas, incluidos Crear,
  Diseñadores, Música y Agregar prenda.
- Colección de 40 prendas y accesorios fotográficos de las cinco imágenes
  proporcionadas; se usan en el armario, combinador y vistas de outfits.
- Los PNG originales con transparencia se conservan en assets/wardrobe/.
- Los outfits anteriores se adaptan a la nueva colección al abrir la app.

Renovación de interfaz:
- Tipografías Manrope y DM Sans (con fuentes del sistema como respaldo).
- Inicio tipográfico sin fotografía. Ocasiones con iconos.
- Opción 1: usar el armario. Opción 2: subir ropa.
- Las prendas subidas se pueden combinar y persisten en el navegador.
- Fotos de inspiración en SVG con proporción conservada, sin estiramiento.
- Máscaras vectoriales para aislar prendas de los PNG originales.
- Transiciones, estados de selección y gestos horizontales en el combinador.
- Respeta la preferencia del sistema de movimiento reducido.

Inspiración interactiva:
- Fotos: tablero de ideas, búsqueda, filtros, detalle de pin, relacionados
  y guardado persistente en moodaPins (localStorage).
- Diseñadores: perfiles de Vivienne Westwood, Jean Paul Gaultier y Anna
  Molinari con historia, imágenes del archivo y enlaces de referencia.
- Artistas: Six Sex, HELLOLOLA, Emilia, Tini, Lali y María Becerra; perfiles
  con fotos locales y galerías; las fotos de looks se abren en grande.
- Música: selecciones editoriales por mood con temas de Six Sex, HELLOLOLA,
  RIXXIA y chzter. Los enlaces reproducen videos oficiales en YouTube o
  abren una búsqueda de la canción concreta en Spotify.
- Fuentes e imágenes: assets/inspiration/sources.json; media-data.js permite
  cargar los perfiles también al abrir index.html directamente.
- Biografías contrastadas con las páginas de Vivienne Westwood, FHCM y
  Blufin; música con los canales oficiales y el catálogo de Beatport.
- Fotos de archivo/performance/editoriales: no son colecciones actuales
  ni representan colaboración o afiliación con las personas retratadas.

Actualización de fotos de artistas — 27/10/2026:
- Emilia: looks publicados el 22 y el 19 de octubre de 2026 (TN).
- Lali: look publicado el 23 de octubre de 2026 (LA NACION).
- Tini: vestuario de gira publicado el 26 de octubre de 2026 (TN).
- María Becerra: looks de ensayo publicados el 30 de septiembre de 2026 (TN).
- Six Sex: show de Portola del 26 de septiembre de 2026 (KQED), más archivo.
- HELLOLOLA: imagen de HELLO MOÑA publicada el 4 de junio de 2026, más archivo.
- Las fechas de las notas se identifican como Fuente; no se presentan
  como fecha de la foto ni como última publicación verificada en Instagram.
- Fotos principales clicables y encuadre completo para apreciar el outfit.

Identidad gráfica aplicada desde PRESENTACION MOODA (1) (1).pdf:
- Partido morfológico (p. 8): dinámico, flexible y combinable.
- Recursos del moodboard gráfico (pp. 12–13): pasteles, animal print,
  formas orgánicas, texturas y códigos Y2K.
- Inicio: menta/agua y franja orgánica de leopardo rosa.
- Crear: rosa con cebra; tarjetas menta, lila y amarillo suave.
- Armario: menta y manchas pastel con superficies despejadas para las prendas.
- Inspiración: lila/animal print; música con variantes de trama.
- Texturas vectoriales locales en assets/brand/, sin descargas externas.
- Revisión comparativa de las 40 prendas y ajuste de máscaras para quitar
  vecinos, restos de otras prendas y rellenos de fondo en accesorios.

Texturas actualizadas con las tres imágenes proporcionadas:
- animal-mint-pink.jpg: fondo menta y rosa para Inicio y Armario.
- tiger-soft-pink.jpg: rayas rosas para Crear y Música.
- leopard-pink.jpg: leopardo rosa para Inspiración, franjas y detalles.
Se conservan sus proporciones, con encuadre cover y veladuras para lectura.

MOODA PLAY — estudio collage:
- Acceso desde Inicio y desde el combinador existente.
- Prendas movibles con mouse, touch o flechas del teclado.
- Tres camas pastel, stickers y combinaciones sorpresa.
- Confirmación de guardado con ventana retro y comentarios divertidos.
- El collage y sus posiciones persisten en Mis outfits y Favoritos.
- Doble clic o Suprimir para quitar stickers. Sin dependencias nuevas.

MOODA CLUB + TIENDA Y2K:
- Personajes con cumplidos y consejos en Inicio, Crear, Armario, Inspiración y Tienda.
- Quinta pestaña Tienda y acceso desde Inicio.
- Seis diseños conceptuales originales de merch, imágenes generadas con image_gen.
- Catálogo con categorías, favoritos, detalle, talles y bolsa con cantidades.
- Favoritos y bolsa persisten en localStorage. Precios ilustrativos en ARS.
- Catálogo demo: sin pagos, pedidos, envíos ni ventas reales.
- Comprobado en Chrome: navegación, personajes, consejos, filtros, talles, favoritos, bolsa, cantidades, total y persistencia.

Armario ampliado — 05/11/2026:
- 52 prendas y accesorios: 12 recortes nuevos en PNG transparente.
- Merch MOODA usable: baby tee, hoodie, tote, mini bag y collar.
- Más Y2K: jean flare con strass, mini rosa, top menta, biker, Mary Janes, mini cargo y zapatillas chunky.
- Botón Probármelo en el detalle de la tienda; tocar una prenda del armario la lleva al collage.
- Las prendas nuevas funcionan en combinador, collage y outfits guardados.
- Se mantiene el formato y tamaño de las pantallas según la corrección de la usuaria.

Más prendas y limpieza de fondos:
- Armario ampliado a 64 prendas/accesorios con 12 piezas Y2K adicionales.
- Atlas nuevos generados con image_gen: mooda-y2k-drop-clean.png y mooda-y2k-vol2.png.
- Máscaras vectoriales individuales eliminan restos exteriores y mantienen huecos transparentes de bolsos/collar.
- Se conserva la nomenclatura de merch para outfits guardados.

import { Topic } from '@/content/types';

export const topic: Topic = {
  id: 'nav-electronica',
  title: 'Navegación electrónica, GPS, AIS, Ecosonda y RADAR',
  readingTime: 25,
  audioTime: '23:00',

  content: [
    { type: 'title', text: 'Navegación Electrónica: GPS, AIS, Ecosonda y RADAR' },
    { type: 'paragraph', text: 'La navegación moderna se apoya en un conjunto de sistemas electrónicos que proporcionan posicionamiento, información del tráfico, profundidad y detección de obstáculos. Conocer el funcionamiento y las limitaciones de cada uno es esencial para una navegación segura y eficiente.' },
    { type: 'subtitle', text: 'Sistemas GNSS (Global Navigation Satellite Systems)' },
    { type: 'paragraph', text: 'Los sistemas GNSS son constelaciones de satélites que permiten determinar la posición en cualquier punto del globo. Existen varios sistemas operativos:' },
    { type: 'list', items: [
      'NAVSTAR GPS (EE.UU.): el más utilizado, con más de 30 satélites operativos',
      'GLONASS (Rusia): sistema ruso, completamente operativo con cobertura global',
      'Galileo (Unión Europea): sistema civil europeo, alta precisión',
      'BeiDou (China): sistema chino con cobertura global completa',
      'Los receptores modernos suelen ser multiconstelación, usando señales de varios sistemas simultáneamente',
      'Mayor número de satélites visibles = mayor precisión y redundancia'
    ]},
    { type: 'subtitle', text: 'GPS: Trilateración y funcionamiento' },
    { type: 'paragraph', text: 'El GPS determina la posición mediante un proceso llamado trilateración, que consiste en medir la distancia a varios satélites:' },
    { type: 'list', items: [
      'Cada satélite transmite su posición exacta y la hora de transmisión',
      'El receptor mide el tiempo que tarda la señal en llegar (distancia = velocidad de la luz × tiempo)',
      'Con 3 satélites se obtiene la posición en 2D (latitud y longitud)',
      'Con 4 o más satélites se obtiene también la altitud y se corrige el error del reloj del receptor',
      'La precisión típica es de 3 a 10 metros para uso civil',
      'Con corrección diferencial (DGPS) la precisión puede ser inferior a 1 metro',
      'El GPS también proporciona velocidad (SOG) y rumbo (COG) sobre el fondo'
    ]},
    { type: 'subtitle', text: 'Waypoints, Rutas y Tracks' },
    { type: 'paragraph', text: 'El GPS permite planificar y seguir rutas de navegación mediante:' },
    { type: 'list', items: [
      'Waypoints (puntos de ruta): coordenadas almacenadas de puntos de interés',
      'Routes (rutas): secuencia ordenada de waypoints que definen el camino a seguir',
      'Tracks (registros): historial de posiciones recorridas por el buque',
      'El GPS muestra distancia y rumbo al siguiente waypoint (DTW y BTW)',
      'Alarma de desvío de ruta (XTE — Cross Track Error): indica cuánto se ha desviado el buque de la ruta planificada',
      'ETA (tiempo estimado de llegada) al siguiente waypoint y destino final',
      'Es esencial verificar que los waypoints introducidos sean correctos antes de navegar'
    ]},
    { type: 'subtitle', text: 'Cartas electrónicas: Ráster vs Vector' },
    { type: 'paragraph', text: 'Las cartas náuticas electrónicas se presentan en dos formatos principales:' },
    { type: 'list', items: [
      'Cartas Ráster (RNC/ARCS): son imágenes digitales de las cartas de papel tradicionales',
      'Ventajas: aspecto familiar, no se pierden datos',
      'Desventajas: no permiten alarmas, no se pueden consultar datos individualmente, zoom limitado',
      'Cartas Vectoriales (ENC/ECDIS): contienen datos estructurados (objetos individuales: boyas, faros, profundidades)',
      'Ventajas: alarmas automáticas, consulta de datos de cada objeto, visualización personalizable, rotación automática',
      'Desventajas: si falta un dato en la base, no se muestra',
      'ECDIS (Electronic Chart Display and Information System): sistema oficial reconocido por la OMI'
    ]},
    { type: 'subtitle', text: 'AIS (Automatic Identification System)' },
    { type: 'paragraph', text: 'El AIS es un sistema de identificación automática que permite a los buques intercambiar información de navegación entre sí y con estaciones costeras:' },
    { type: 'list', items: [
      'Transmite: MMSI, nombre del buque, posición, rumbo, velocidad, tipo de buque, dimensiones',
      'Se actualiza cada 2 a 10 segundos según la velocidad y maniobra del buque',
      'Clase A: obligatorio para buques de arqueo mayor y de pasaje; mayor potencia y funcionalidades',
      'Clase B: para embarcaciones menores; menor potencia y frecuencia de actualización',
      'CPA (Closest Point of Approach): la distancia mínima a la que otro buque pasará',
      'TCPA (Time to CPA): el tiempo hasta el punto de máximo acercamiento',
      'Alarmas de CPA/TCPA: alertan cuando otro buque pasa dentro de un umbral de seguridad configurado',
      'El AIS complementa pero NO reemplaza al radar ni a la vigilancia visual'
    ]},
    { type: 'subtitle', text: 'Ecosonda (Echo Sounder)' },
    { type: 'paragraph', text: 'La ecosonda mide la profundidad del agua bajo la quilla del buque mediante pulsos de sonido:' },
    { type: 'list', items: [
      'Emite un pulso de sonido (ultrasonido) hacia el fondo',
      'Mide el tiempo que tarda el eco en regresar',
      'Profundidad = (velocidad del sonido en el agua × tiempo) / 2',
      'La velocidad del sonido en el agua es aproximadamente 1.500 m/s (varía con temperatura y salinidad)',
      'Proporciona lectura continua de la profundidad',
      'Alarmas de profundidad mínima configurables',
      'Se debe considerar el calado del buque para obtener la profundidad real desde la superficie',
      'Las ecosondas modernas muestran el perfil del fondo (batimetría)'
    ]},
    { type: 'subtitle', text: 'RADAR (Radio Detection and Ranging)' },
    { type: 'paragraph', text: 'El radar es un sistema de detección por radio que permite visualizar objetos a distancia, incluso en condiciones de poca visibilidad:' },
    { type: 'list', items: [
      'Funciona emitiendo pulsos de radiofrecuencia y recibiendo los ecos reflejados por los objetos',
      'Banda S (3 GHz, ~10 cm de longitud de onda): mayor alcance, menos afectada por lluvia',
      'Banda X (9 GHz, ~3 cm de longitud de onda): mayor resolución, mejor para blancos pequeños',
      'Componentes: transmisor, receptor, antena rotatoria (scanner), pantalla/display, procesador',
      'Muestra los ecos como puntos brillantes sobre la pantalla con su distancia y marcación',
      'Permite medir distancia (VRM) y demora (EBL) a cualquier eco',
      'Funciones: guard zones, tracking de blancos (ARPA), MARPA, alarmas de colisión',
      'Instalación: la antena debe estar lo más alta posible para mayor alcance del horizonte radar',
      'El radar es esencial para la navegación en niebla y de noche',
      'Los blancos pequeños (boyas, kayaks) pueden no reflejar suficiente señal (low RCS)'
    ]},
    { type: 'paragraph', text: 'La navegación electrónica moderna integra GPS, AIS, ecosonda, radar y cartas electrónicas en un sistema unificado. Sin embargo, el navegante debe conocer las limitaciones de cada sistema y nunca depender de un solo medio de posicionamiento o detección.' }
  ],

  quiz: [
    {
      question: '¿Cuántos satélites se necesitan como mínimo para obtener una posición 3D con GPS?',
      options: ['2 satélites', '3 satélites', '4 satélites', '6 satélites'],
      correctAnswer: 2,
      explanation: 'Se necesitan al menos 4 satélites para obtener una posición tridimensional (latitud, longitud y altitud) y corregir el error del reloj del receptor. Con 3 satélites solo se obtiene posición 2D.'
    },
    {
      question: '¿Qué significan CPA y TCPA en el sistema AIS?',
      options: ['Control de posición y tiempo de control', 'Distancia mínima de acercamiento y tiempo hasta ese punto', 'Capacidad de pasaje y tonelaje', 'Coordenadas de posición actual'],
      correctAnswer: 1,
      explanation: 'CPA (Closest Point of Approach) es la distancia mínima a la que otro buque pasará, y TCPA (Time to CPA) es el tiempo hasta ese punto de máximo acercamiento. Son esenciales para evaluar riesgo de colisión.'
    },
    {
      question: '¿Cuál es la diferencia principal entre cartas ráster y vectoriales?',
      options: ['No hay diferencia', 'Las ráster son imágenes y las vectoriales contienen datos estructurados de objetos individuales', 'Las ráster son más precisas', 'Las vectoriales no muestran profundidades'],
      correctAnswer: 1,
      explanation: 'Las cartas ráster son imágenes digitales de las cartas de papel, mientras que las vectoriales (ENC) contienen datos estructurados donde cada objeto (boyas, faros, profundidades) es un elemento individual consultable y con alarmas automáticas.'
    },
    {
      question: '¿Qué banda de radar ofrece mayor resolución pero es más afectada por la lluvia?',
      options: ['Banda S', 'Banda X', 'Banda C', 'Banda L'],
      correctAnswer: 1,
      explanation: 'La banda X (9 GHz, ~3 cm) ofrece mayor resolución y mejor detección de blancos pequeños, pero es más afectada por la lluvia y las condiciones meteorológicas adversas. La banda S (3 GHz) tiene menor resolución pero mejor rendimiento con lluvia.'
    }
  ]
};

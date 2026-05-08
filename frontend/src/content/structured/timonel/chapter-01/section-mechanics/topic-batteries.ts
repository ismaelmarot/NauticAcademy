import { Topic } from '@/content/types';

export const topic: Topic = {
  id: 'batteries',
  title: 'Las Baterías',
  readingTime: 20,
  audioTime: '18:30',

  content: [
    { type: 'title', text: 'Introducción' },
    { type: 'paragraph', text: 'En las embarcaciones deportivas y recreativas, las baterías son el corazón del sistema eléctrico de a bordo. Alimentan equipos de navegación, luces, bombas, comunicaciones y motores eléctricos. Su correcto dimensionamiento, elección y mantenimiento son fundamentales para garantizar autonomía, seguridad y confort.' },
    { type: 'paragraph', text: 'La batería eléctrica fue inventada por Alessandro Volta en 1800. Su "pila voltaica" consistía en discos alternados de zinc y cobre separados por paños empapados en solución salina, generando corriente continua. De ahí nace el término "voltio" (volt).' },

    { type: 'subtitle', text: 'Cómo Funciona una Batería' },
    { type: 'paragraph', text: 'Una batería es un dispositivo electroquímico que almacena energía eléctrica en forma de energía química y la libera cuando se necesita. Está compuesta por celdas con dos electrodos (ánodo negativo y cátodo positivo) sumergidos en un electrolito.' },
    { type: 'paragraph', text: 'Al conectar un circuito, los electrones fluyen desde el ánodo hacia el cátodo, generando corriente. Durante la carga, el proceso se invierte: una fuente externa fuerza a los electrones a regresar al ánodo.' },

    { type: 'subtitle', text: 'Componentes de una Batería' },
    { type: 'paragraph', text: 'Electrodos: Son los componentes activos donde ocurren las reacciones de oxidación y reducción. El ánodo se oxida y libera electrones; el cátodo los recibe. Están fabricados con plomo, dióxido de plomo, níquel o litio según el tipo.' },
    { type: 'paragraph', text: 'Electrolito: Permite el movimiento de iones entre electrodos, cerrando el circuito interno. En baterías de plomo-ácido es ácido sulfúrico y agua; en AGM es absorbido en fibra de vidrio; en litio es una mezcla de sales en solventes orgánicos.' },
    { type: 'paragraph', text: 'Separador: Lámina porosa aislante entre electrodos que evita el cortocircuito interno pero permite el paso de iones. En baterías marinas modernas está fabricado con polietileno o microfibra de vidrio.' },
    { type: 'paragraph', text: 'Carcasa: Recipiente exterior que protege los componentes. En náutica se fabrica con polipropileno o ABS reforzado, resistente a ambientes húmedos y salinos, con tapas selladas y válvulas de seguridad.' },

    { type: 'subtitle', text: 'Corriente Continua vs Alterna' },
    { type: 'paragraph', text: 'Las baterías generan electricidad continua o directa (DC), donde los electrones fluyen siempre en la misma dirección (de negativo a positivo). La corriente alterna (AC) de la red doméstica cambia de dirección periódicamente (50 Hz en Argentina).' },
    { type: 'paragraph', text: 'Todos los circuitos alimentados por baterías en un barco funcionan con corriente continua a 12V. Para equipos de 220V (horno, pava) se necesita un inversor que convierta de continua a alterna.' },

    { type: 'subtitle', text: 'Tipos de Baterías según Régimen de Descarga' },
    { type: 'paragraph', text: 'Baterías de Encendido: Diseñadas para entregar corriente muy alta en lapsos cortos (segundos) para el motor de arranque. Compuestas por placas delgadas, se descargan 10-15% y se recargan rápido.' },
    { type: 'paragraph', text: 'Baterías de Descarga Normal: Uso general, entregan corrientes moderadas durante períodos más largos. Placas algo más gruesas, pueden descargarse hasta 50% sin dañarse.' },
    { type: 'paragraph', text: 'Baterías de Descarga Profunda: Diseñadas para entrega sostenida durante varias horas. Placas gruesas y robustas, resisten descargas hasta 80%.' },

    { type: 'subtitle', text: 'Tipos de Baterías en Náutica Recreativa' },
    { type: 'paragraph', text: 'Baterías Convencionales de Plomo-Ácido: Más económicas, usan placas de plomo y electrolito líquido. Requieren mantenimiento (controlar nivel, rellenar agua destilada). Toleran altas corrientes de arranque pero pueden derramar ácido.' },
    { type: 'paragraph', text: 'Baterías Selladas AGM (Absorbed Glass Mat): El electrolito se absorbe en malla de fibra de vidrio. Totalmente selladas, no requieren mantenimiento, se instalan en varias posiciones. Resistencia a vibraciones, soportan descargas profundas, baja autodescarga.' },
    { type: 'paragraph', text: 'Baterías de Gel: Electrolito mezclado con sílice formando gel espeso. Ideales para descargas profundas, no toleran corrientes tan altas como AGM. Gran estabilidad térmica y seguridad.' },
    { type: 'paragraph', text: 'Baterías de Litio: Tecnología más moderna, usan iones de litio. Densidad energética muy alta (más capacidad con menos peso), vida útil superior (miles de ciclos), admiten descargas profundas, carga rápida. Requieren BMS (sistema de gestión) y tienen costo inicial elevado.' },
    { type: 'paragraph', text: 'Baterías Híbridas o Duales: Combinan características de arranque y servicio. Opción práctica en embarcaciones pequeñas para reducir cantidad de baterías.' },

    { type: 'subtitle', text: 'Conexión de Bancos de Baterías' },
    { type: 'paragraph', text: 'Conexión en Serie: Se suman los voltajes, la capacidad se mantiene igual. Dos baterías de 12V 100Ah en serie = 24V 100Ah.' },
    { type: 'paragraph', text: 'Conexión en Paralelo: El voltaje permanece igual, se suman las capacidades. Dos baterías de 12V 100Ah en paralelo = 12V 200Ah.' },
    { type: 'paragraph', text: 'Conexión Serie-Paralelo: Permite aumentar tanto tensión como capacidad. Fundamental que las baterías sean idénticas en tipo, capacidad y antigüedad.' },

    { type: 'subtitle', text: 'Cálculo del Banco de Baterías de Servicio' },
    { type: 'paragraph', text: 'Capacidad (Ah) = ConsDia / (Voltaje × Descarga × Eficiencia)' },
    { type: 'paragraph', text: 'Donde: ConsDia es el consumo diario en watts; Voltaje del sistema; Descarga es la profundidad de descarga utilizable (50% para plomo-ácido, 90% para litio); Eficiencia total del sistema (~85%).' },
    { type: 'paragraph', text: 'Ejemplo: Consumo 1.500W, sistema 12V, baterías plomo-ácido (50% descarga), eficiencia 85%: 1.500 / (12 × 0,5 × 0,85) = 300 Ah. Equivalentes a tres baterías de 100Ah en paralelo.' },

    { type: 'subtitle', text: 'Cantidad Recomendada de Bancos' },
    { type: 'paragraph', text: 'Embarcaciones pequeñas: Un solo banco, o dos si el motor requiere batería dedicada (arranque y servicio separados).' },
    { type: 'paragraph', text: 'Veleros o Cruceros: Dos bancos idealmente: uno de arranque pequeño para el motor, otro de servicio mayor para luces, bombas e instrumentos. Evita quedarse sin batería para arrancar.' },
    { type: 'paragraph', text: 'Barcos con gran autonomía: Tres bancos o más: arranque, servicios generales, y sistemas específicos (molinetes, bow thrusters, propulsión eléctrica).' },

    { type: 'subtitle', text: 'Recarga de las Baterías' },
    { type: 'paragraph', text: 'Conexión a Red Eléctrica en Puerto: Mediante cargador de baterías, viable mientras el barco está amarrado.' },
    { type: 'paragraph', text: 'Paneles Solares: Transforman energía del sol en electricidad. Funcionan en silencio y sin mantenimiento, pero dependen de luz solar y espacio disponible.' },
    { type: 'paragraph', text: 'Generadores Eólicos (Aerogeneradores): Aprovechan energía del viento. Excelente para travesías largas o fondeos prolongados en zonas ventosas, pueden producir más energía por hora que paneles solares.' },
    { type: 'paragraph', text: 'Generadores Hidráulicos: Utilizan el flujo de agua bajo el casco mientras el barco navega. Muy eficiente durante singladuras continuas.' },
    { type: 'paragraph', text: 'Alternador del Motor: Similar al de automóviles, convierte energía mecánica en electricidad recargando baterías mientras el motor está en marcha. Práctico pero no eficiente para recarga prolongada por consumo de combustible y desgaste.' }
  ],

  quiz: [
    {
      question: '¿Quién inventó la batería eléctrica y en qué año?',
      options: ['Volta en 1800', 'Gaston Planté en 1859', 'Edison en 1900', 'Bouguer en 1746'],
      correctAnswer: 0,
      explanation: 'Alessandro Volta inventó la batería eléctrica (pila voltaica) en 1800. Gaston Planté inventó la batería de plomo-ácido en 1859.'
    },
    {
      question: '¿Qué tipo de corriente generan las baterías?',
      options: ['Corriente alterna (AC)', 'Corriente continua (DC)', 'Corriente trifásica', 'Corriente pulsante'],
      correctAnswer: 1,
      explanation: 'Las baterías generan electricidad continua o directa (DC), donde los electrones fluyen siempre en la misma dirección, de polo negativo a positivo.'
    },
    {
      question: '¿Hasta qué porcentaje de descarga pueden llegar las baterías de litio?',
      options: ['15%', '50%', '80%', '90%'],
      correctAnswer: 3,
      explanation: 'Las baterías de litio permiten descargas profundas del orden del 90%, a diferencia de las de plomo-ácido que se limitan al 50%.'
    },
    {
      question: '¿Qué obtienes al conectar dos baterías de 12V 100Ah en paralelo?',
      options: ['24V 100Ah', '12V 200Ah', '12V 100Ah', '24V 200Ah'],
      correctAnswer: 1,
      explanation: 'En paralelo el voltaje permanece igual (12V) y se suman las capacidades (100Ah + 100Ah = 200Ah).'
    },
    {
      question: '¿Cuál es la fórmula para calcular la capacidad del banco de servicio?',
      options: [
        'Capacidad = ConsDia / Voltaje',
        'Capacidad = ConsDia / (Voltaje × Descarga × Eficiencia)',
        'Capacidad = Voltaje × Descarga',
        'Capacidad = ConsDia × Voltaje'
      ],
      correctAnswer: 1,
      explanation: 'La fórmula es: Capacidad (Ah) = ConsDia / (Voltaje × Descarga × Eficiencia), donde Descarga es la profundidad utilizable y Eficiencia la del sistema.'
    }
  ]
};

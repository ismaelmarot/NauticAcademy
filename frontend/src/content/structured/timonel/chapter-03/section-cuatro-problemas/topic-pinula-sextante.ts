import { Topic } from '@/content/types';

export const topic: Topic = {
  id: 'pinula-sextante',
  title: 'La pínula, el taxímetro y el sextante',
  readingTime: 15,
  audioTime: '14:00',

  content: [
    { type: 'title', text: 'La Pínula, el Taxímetro y el Sextante' },
    { type: 'paragraph', text: 'La navegación de precisión requiere instrumentos para tomar demoras, marcaciones y alturas de astros. La pínula (compás de marcaciones), el taxímetro (alidada de demoras) y el sextante son tres instrumentos fundamentales que todo navegante debe conocer y saber utilizar correctamente.' },
    { type: 'subtitle', text: 'La Pínula (Compás de Marcaciones)' },
    { type: 'paragraph', text: 'La pínula, también conocida como compás de marcaciones o hand bearing compass, es un instrumento portátil utilizado para tomar demoras y marcaciones visuales a objetos costeros, faros, boyas u otros buques.' },
    { type: 'list', items: [
      'Es una brújula portátil con un dispositivo de puntería (visores o prisma)',
      'Permite leer la dirección magnética de un objeto observado',
      'Tipos: de visor directo, de prisma (más preciso) y digitales modernos',
      'La pínula de prisma permite leer la graduación y apuntar al objeto simultáneamente',
      'Se sostiene a la altura de los ojos y se apunta al objeto a través del visor',
      'La lectura se toma cuando la rosa se estabiliza',
      'Se debe tomar al menos tres lecturas y promediar para mayor precisión'
    ]},
    { type: 'paragraph', text: 'La pínula es especialmente útil para obtener líneas de posición por demoras, verificar la posición del buque y tomar marcaciones a otros buques para evaluar riesgo de colisión.' },
    { type: 'subtitle', text: 'El Taxímetro (Alidada de Demoras)' },
    { type: 'paragraph', text: 'El taxímetro o alidada de demoras es un dispositivo instalado en la embarcación que permite tomar demoras desde la proa del buque. A diferencia de la pínula, que es portátil, el taxímetro está fijo y se utiliza girando la alidada hacia el objeto observado.' },
    { type: 'list', items: [
      'Consiste en un anillo graduado montado alrededor del compás o sobre un soporte fijo',
      'Tiene una alidada (regla de puntería) que gira sobre el centro del instrumento',
      'Se apunta al objeto a través de las miras de la alidada',
      'Se lee el ángulo en la graduación del anillo',
      'La demora se obtiene sumando el ángulo leído al rumbo del compás en ese momento',
      'Demora verdadera = Rumbo del compás + Ángulo de marcación ± Variación Total',
      'Es más estable que la pínula pero menos versátil (solo se usa desde el punto donde está instalado)'
    ]},
    { type: 'subtitle', text: 'El Sextante' },
    { type: 'paragraph', text: 'El sextante es el instrumento de navegación astronómica por excelencia. Permite medir ángulos verticales y horizontales con gran precisión, y es fundamental para la navegación por estima astronómica, la determinación de la posición por astros y la medición de distancias por altura angular.' },
    { type: 'list', items: [
      'Ocular: por donde el observador mira',
      'Espejo grande (espejo índice): está unido a la alidada y se mueve con ella',
      'Espejo pequeño (espejo de horizonte): fijo, con mitad transparente y mitad reflectante',
      'Limbo: arco graduado en grados (generalmente de 0° a 120° o más)',
      'Micrómetro (tambor): permite lecturas de minutos y décimas de minuto de arco',
      'Alidada: brazo móvil que indica los grados en el limbo',
      'Filtros: para observación del sol (de diferentes densidades)',
      'Anteojo: para mayor precisión en la observación de astros'
    ]},
    { type: 'subtitle', text: 'Error instrumental del sextante' },
    { type: 'paragraph', text: 'Todo sextante tiene un pequeño error propio llamado error instrumental (ei), que debe determinarse y corregir en cada observación. El error instrumental se verifica observando el horizonte:' },
    { type: 'list', items: [
      'Se coloca la alidada en 0° y se observa el horizonte a través del sextante',
      'Si el horizonte directo y el reflejado están alineados, el error es cero',
      'Si no están alineados, la diferencia es el error instrumental',
      'Error "on the arc" (positivo): se resta de la lectura',
      'Error "off the arc" (negativo): se suma a la lectura',
      'El error instrumental debe verificarse antes de cada uso',
      'Corrección total = Corrección índice + Corrección de altura del observador + Refracción + Semidiámetro (si es sol) + Paralaje (si es luna)'
    ]},
    { type: 'subtitle', text: 'Cómo tomar la altura del Sol con el sextante' },
    { type: 'paragraph', text: 'Para medir la altura del Sol sobre el horizonte (altura meridiana u otra observación):' },
    { type: 'list', items: [
      'Colocar el filtro solar adecuado en el ocular y en el espejo grande',
      'Apuntar el sextante hacia el horizonte y localizar el Sol en el campo visual',
      'Bajar la alidada hasta que la imagen del Sol toque el horizonte',
      'Balancear suavemente el sextante de lado a lado para asegurar que el Sol está justo en el horizonte',
      'Leer la altura en el limbo y el micrómetro (grados y minutos)',
      'Anotar la hora exacta de la observación (cronómetro)',
      'Aplicar todas las correcciones: error instrumental, depresión del horizonte, refracción, semidiámetro del Sol'
    ]},
    { type: 'subtitle', text: 'El libro de bitácora' },
    { type: 'paragraph', text: 'El libro de bitácora (logbook) es el registro oficial de la navegación. En él se anotan todos los datos relevantes del viaje:' },
    { type: 'list', items: [
      'Posiciones (hora y coordenadas)',
      'Rumbo y velocidad',
      'Condiciones meteorológicas (viento, mar, visibilidad)',
      'Observaciones de navegación (demoras, sondas, demoras a faros)',
      'Observaciones astronómicas (alturas, hora, astro observado)',
      'Novedades (incidencias, cambios de rumbo, maniobras)',
      'Firmas del oficial de guardia y del capitán',
      'Es un documento legal y debe mantenerse con cuidado y precisión'
    ]},
    { type: 'subtitle', text: 'Buenas prácticas' },
    { type: 'list', items: [
      'Verificar siempre el error instrumental del sextante antes de usarlo',
      'Tomar múltiples lecturas y promediar para mayor precisión',
      'Anotar la hora exacta de cada observación',
      'Mantener los instrumentos limpios y protegidos de golpes y humedad',
      'No confiar en un solo método de posicionamiento; cruzar información',
      'Practicar regularmente el uso de los instrumentos',
      'Registrar todas las observaciones en la bitácora inmediatamente'
    ]}
  ],

  quiz: [
    {
      question: '¿Qué es la pínula?',
      options: ['Un tipo de ancla', 'Un compás de marcaciones portátil para tomar demoras', 'Un instrumento de medición de profundidad', 'Un tipo de vela'],
      correctAnswer: 1,
      explanation: 'La pínula (compás de marcaciones o hand bearing compass) es un instrumento portátil que permite tomar demoras y marcaciones visuales a objetos costeros, faros, boyas u otros buques.'
    },
    {
      question: '¿Cómo se obtiene la demora verdadera usando el taxímetro?',
      options: ['Se lee directamente en la rosa', 'Demora = Rumbo del compás + Ángulo de marcación ± Variación Total', 'Se multiplica el rumbo por el ángulo', 'Se resta el ángulo del rumbo verdadero'],
      correctAnswer: 1,
      explanation: 'La demora verdadera se obtiene sumando el ángulo de marcación leído en el taxímetro al rumbo del compás en ese momento, y aplicando la Variación Total: Demora V = Rc + Marcación ± Vt.'
    },
    {
      question: '¿Qué es el error instrumental del sextante?',
      options: ['Un error de lectura del observador', 'Un pequeño error propio del sextante que se verifica observando el horizonte a 0°', 'La refracción atmosférica', 'El error por la curvatura terrestre'],
      correctAnswer: 1,
      explanation: 'El error instrumental (ei) es un error propio del sextante que se verifica colocando la alidada en 0° y observando si el horizonte directo y el reflejado están alineados. Debe determinarse y corregir en cada observación.'
    },
    {
      question: '¿Qué se debe anotar junto con la altura de un astro tomada con el sextante?',
      options: ['Solo la altura medida', 'La hora exacta de la observación', 'La temperatura del agua', 'La velocidad del barco'],
      correctAnswer: 1,
      explanation: 'Es fundamental anotar la hora exacta de la observación (con cronómetro), ya que la posición de los astros cambia constantemente y la hora es necesaria para los cálculos de navegación astronómica.'
    }
  ]
};

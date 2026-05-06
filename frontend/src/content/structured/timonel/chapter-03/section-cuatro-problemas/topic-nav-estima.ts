import { Topic } from '@/content/types';

export const topic: Topic = {
  id: 'nav-estima',
  title: 'Métodos de posicionamiento en navegación por estima',
  readingTime: 9,
  audioTime: '08:30',

  content: [
    { type: 'title', text: 'Métodos de Posicionamiento en Navegación por Estima' },
    { type: 'paragraph', text: 'La navegación por estima (dead reckoning) es el método de posicionamiento que consiste en calcular la posición del buque a partir de una posición conocida, aplicando el rumbo, la velocidad y el tiempo transcurrido. Es el método de navegación más antiguo y sigue siendo fundamental como respaldo cuando no hay referencias externas disponibles.' },
    { type: 'title', text: 'Proyección de la posición futura' },
    { type: 'paragraph', text: 'La navegación por estima permite predecir dónde estará el buque en un momento futuro. Esto es esencial para la planificación de la navegación y para anticipar peligros:' },
    { type: 'list', items: [
      'Se parte de una posición conocida (fix o posición inicial)',
      'Se aplica el rumbo que se va a seguir',
      'Se aplica la velocidad del buque (nudos)',
      'Se calcula la distancia a recorrer: D = V × T',
      'Se traza desde la posición conocida la distancia en la dirección del rumbo',
      'El punto final es la posición estimada (EP) en el momento futuro',
      'Se marcan los puntos intermedios cada hora o cada cambio de rumbo'
    ]},
    { type: 'title', text: 'Cálculo de la posición actual por estima' },
    { type: 'paragraph', text: 'Cuando no se puede fijar la posición por observación, la estima permite saber dónde se encuentra el buque aproximadamente:' },
    { type: 'list', items: [
      'Se registra cada cambio de rumbo y velocidad en la bitácora',
      'Se calcula la distancia recorrida en cada tramo (D = V × T)',
      'Se trazan los tramos sucesivos desde la última posición conocida',
      'Se anota la hora en cada punto de estima',
      'La posición actual es el último punto de la serie de estimas',
      'Es importante registrar también los efectos conocidos de corriente y viento'
    ]},
    { type: 'title', text: 'Estimación gráfica desde un punto conocido' },
    { type: 'paragraph', text: 'El procedimiento gráfico para estimar la posición desde un punto conocido es el siguiente:' },
    { type: 'list', items: [
      'Partir de la última posición fija conocida (marcada con un círculo)',
      'Trazar una línea en la dirección del rumbo verdadero (Rv)',
      'Medir sobre la escala de latitud la distancia recorrida (en millas)',
      'Marcar el punto de estima a esa distancia sobre la línea de rumbo',
      'Anotar la hora junto al punto',
      'Repetir para cada tramo de navegación',
      'Si se conoce la corriente, se traza el vector de corriente desde el punto de estima para obtener la posición estimada corregida (EP)'
    ]},
    { type: 'title', text: 'Factores que afectan la precisión de la estima' },
    { type: 'paragraph', text: 'La navegación por estima acumula errores con el tiempo. Los principales factores que afectan su precisión son:' },
    { type: 'list', items: [
      'Corrientes marinas no consideradas',
      'Abatimiento por el viento no corregido',
      'Errores en la medición de la velocidad del buque',
      'Errores en el rumbo (desvío no compensado, timonel)',
      'Tiempo transcurrido sin fijación de posición',
      'Por esto, es esencial fijar la posición por observación periódicamente'
    ]},
    { type: 'title', text: 'Abreviaturas de posición' },
    { type: 'list', items: [
      'Fix: posición fija por observación (círculo ●)',
      'DR: dead reckoning — posición por estima pura (triángulo △)',
      'EP: estimated position — estima corregida por corriente y viento (cuadrado □)',
      'GPS: posición por GPS (círculo con punto central)',
      'Rdr: posición por radar',
      'Cel: posición por navegación celestial'
    ]},
    { type: 'paragraph', text: 'La navegación por estima es una habilidad fundamental que todo navegante debe dominar. Aunque el GPS proporciona posiciones precisas, la estima sigue siendo el método de respaldo indispensable cuando fallan los sistemas electrónicos.' }
  ],

  quiz: [
    {
      question: '¿Qué tres datos se necesitan para calcular la posición por estima?',
      options: ['Latitud, longitud y altitud', 'Rumbo, velocidad y tiempo', 'Viento, corriente y marea', 'Demora, marcación y distancia'],
      correctAnswer: 1,
      explanation: 'La navegación por estima requiere tres datos fundamentales: el rumbo que sigue el buque, su velocidad y el tiempo transcurrido desde la última posición conocida.'
    },
    {
      question: '¿Con qué símbolo se marca una posición estimada corregida (EP) en la carta?',
      options: ['Un círculo', 'Un triángulo', 'Un cuadrado', 'Una cruz'],
      correctAnswer: 2,
      explanation: 'La posición estimada corregida (EP — estimated position) se marca con un cuadrado. El fix por observación usa un círculo y la estima pura (DR) usa un triángulo.'
    },
    {
      question: '¿Por qué la navegación por estima pierde precisión con el tiempo?',
      options: ['Porque el GPS se desconecta', 'Porque los errores se acumulan: corrientes, viento, errores de rumbo y velocidad', 'Porque las cartas náuticas se desgastan', 'Porque el compás se desmagnetiza'],
      correctAnswer: 1,
      explanation: 'La estima acumula errores porque no corrige automáticamente los efectos de corrientes, viento, errores de rumbo del timonel y errores de medición de velocidad. Por eso requiere fijación periódica de la posición.'
    },
    {
      question: 'Un buque sale de una posición conocida a las 10:00 a 10 nudos rumbo 090°. ¿Dónde estará a las 12:00?',
      options: ['A 10 millas al norte', 'A 20 millas al este', 'A 20 millas al oeste', 'A 10 millas al este'],
      correctAnswer: 1,
      explanation: 'D = V × T = 10 kn × 2 h = 20 millas. Rumbo 090° es hacia el este. Por lo tanto, el buque estará 20 millas al este de la posición de partida.'
    }
  ]
};

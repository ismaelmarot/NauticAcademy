import type { Topic } from '../../../../types';

export const topic: Topic = {
  id: 'pampero',
  title: 'El Pampero',
  readingTime: 8,
  audioTime: '07:30',
  content: [
    { type: 'title', text: 'El Pampero' },
    { type: 'paragraph', text: 'Fenómeno caracterizado por vientos frescos a fuertes (17-27 kt) del 3º cuadrante (entre Sur y Oeste) que recorren gran parte de Sudamérica desde la Patagonia central hacia el norte.' },
    { type: 'paragraph', text: 'Causado por el borde delantero de un anticiclón migratorio polar, que puede o no empujar tormentas frontales.' },
    { type: 'title', text: 'Tipos de Pampero' },
    { type: 'list', items: ['Pampero húmedo: acompañado de lluvia y tormentas', 'Pampero seco: sin precipitaciones'] },
    { type: 'paragraph', text: 'Más violento en verano, pero ocurre durante todo el año.' },
    { type: 'title', text: 'Ciclo de vida' },
    { type: 'list', items: ['Anticiclón migratorio polar entra por el SO del continente, dirigiéndose al NE', 'Cruza la Patagonia, se encuentra con el Anticiclón Semipermanente del Atlántico', 'Se forma un frente polar en la zona de cierre entre las dos masas', 'La depresión se profundiza en la vaguada, potenciada por cizallamiento ciclónico', 'Se desarrolla en ciclogénesis sobre el Mar Argentino al SE de la provincia de Buenos Aires', 'Con vientos del NW en altura → Pampero húmedo (tormentas complejas); vientos perpendiculares → Pampero seco'] },
    { type: 'title', text: 'Signos observables' },
    { type: 'list', items: ['Caída continua de presión con vientos predominantes del 1º cuadrante (Norte a Este)', 'Si es Pampero húmedo: nubes altas aparecen del SO (Cirrus → Cirrocumulus → Cirrostratus → Altostratus → Altocumulus → cumuliformes bajas → Cumulonimbus)', 'Viento reduce a casi calma, cielo se oscurece, precipitación intensa, actividad eléctrica, posible granizo, peligrosas corrientes descendentes', 'Tras el paso del frente: viento rota inmediatamente al 3º cuadrante, fuerza aumenta notablemente, temperatura baja, presión sube, tiempo mejora en horas'] },
    { type: 'title', text: 'Pampero Náutico' },
    { type: 'paragraph', text: 'Término usado por navegantes del Río de la Plata que se refiere al "sifonazo" — la corriente descendente de los Cumulonimbus.' },
    { type: 'title', text: 'Duración' },
    { type: 'paragraph', text: '12-24 horas desde el paso del frente hasta la entrada del Pampero (raramente más de 36 horas).' }
  ],
  quiz: [
    {
      question: '¿De qué cuadrante provienen los vientos del Pampero?',
      options: [
        '1º cuadrante (Norte a Este)',
        '2º cuadrante (Este a Sur)',
        '3º cuadrante (Sur a Oeste)',
        '4º cuadrante (Oeste a Norte)'
      ],
      correctAnswer: 2,
      explanation: 'El Pampero tiene vientos frescos a fuertes del 3º cuadrante, entre Sur y Oeste.'
    },
    {
      question: '¿En qué consiste el Pampero húmedo?',
      options: [
        'Viento sin precipitaciones',
        'Viento acompañado de lluvia y tormentas',
        'Viento que solo ocurre en invierno',
        'Viento que no está asociado a frentes polares'
      ],
      correctAnswer: 1,
      explanation: 'El Pampero húmedo está acompañado de lluvia y tormentas, generadas por la inestabilidad del frente.'
    },
    {
      question: '¿Qué es el "Pampero Náutico"?',
      options: [
        'Término para el Pampero seco',
        'Referencia al "sifonazo" o corriente descendente de Cumulonimbus',
        'Nombre del Pampero en invierno',
        'Viento que solo afecta a alta mar'
      ],
      correctAnswer: 1,
      explanation: 'El Pampero Náutico es el término usado por navegantes del Río de la Plata para referirse al "sifonazo", la corriente descendente de los Cumulonimbus.'
    },
    {
      question: '¿Cuál es la duración típica del Pampero desde el paso del frente hasta su entrada?',
      options: [
        '1-3 días',
        '12-24 horas (raramente más de 36)',
        '36-48 horas',
        'Solo unas horas'
      ],
      correctAnswer: 1,
      explanation: 'El Pampero dura típicamente 12-24 horas desde el paso del frente hasta su entrada, raramente superando las 36 horas.'
    }
  ]
};

import { Topic } from '@/content/types';

export const topic: Topic = {
  id: 'sail-trim-theory',
  title: 'Conceptos Generales de Trimado de las Velas',
  readingTime: 14,
  audioTime: '12:30',

  content: [
    { type: 'title', text: '¿Cómo Funciona un Velero?' },
    { type: 'paragraph', text: 'En los veleros modernos, las velas producen un efecto aerodinámico cuando el viento incide en ángulos cerrados (través a ceñida). El flujo se divide en dos: por el lado de barlovento (baja presión, aire acelerado) y por el lado de sotavento (alta presión, aire frenado).' },
    { type: 'paragraph', text: 'La fuerza de la vela se genera por la diferencia de presiones entre los lados de barlovento y sotavento. Cuanto mayor sea el "embolsamiento" (curvatura) de la vela, más fuerza podrá generar.' },
    { type: 'title', text: 'Fuerza Aerodinámica' },
    { type: 'paragraph', text: 'La fuerza producida por la acción del viento sobre la vela es perpendicular a la cuerda de la vela. Pero debido a la resistencia hidrodinámica del casco, resulta un nuevo vector oblicuo a la dirección del viento: es sobre este vector que navegará el velero.' },
    { type: 'paragraph', text: 'El "centro vélico" es el punto donde se aplica la resultante de las fuerzas aerodinámicas. No es el centro geométrico, sino que cambia dinámicamente según la forma y trimado de la vela.' },
    { type: 'title', text: 'Efectos de la Escora' },
    { type: 'paragraph', text: 'La performance del velero dependerá de combinar las velas adecuadas sin escorar la embarcación. A medida que el barco escora, se reduce la superficie útil de la vela, afectando la performance.' },
    { type: 'title', text: 'Fuerza Hidrodinámica' },
    { type: 'paragraph', text: 'El quillote y el timón actúan en el agua de forma similar a la vela en el aire. La fuerza hidrodinámica es perpendicular a sus superficies y depende del ángulo de abatimiento (desvío del velero).' },
    { type: 'title', text: 'Descomposición de las Fuerzas' },
    { type: 'paragraph', text: 'Fuerza aerodinámica: Fuerza Propulsiva (en dirección de avance) y Fuerza de Escora/abatimiento. Fuerza hidrodinámica: Fuerza de Resistencia (en contra del avance) y Fuerza Antideriva.' },
    { type: 'paragraph', text: 'El velero navegará equilibrado cuando las fuerzas aerodinámicas de cada vela estén balanceadas y compensadas con el momento de las fuerzas hidrodinámicas de la obra viva.' }
  ],

  quiz: [
    {
      question: '¿Qué efecto produce el viento al pasar por el lado de sotavento de la vela?',
      options: ['Aire se frena, aumenta presión', 'Aire acelera, baja presión', 'No afecta la vela', 'Cambia de dirección'],
      correctAnswer: 0,
      explanation: 'En el lado de sotavento (cóncavo) el aire se frena y aumenta la presión, mientras que en barlovento ocurre lo contrario.'
    },
    {
      question: '¿Qué es el centro vélico?',
      options: ['Centro geométrico de la vela', 'Punto de aplicación de la resultante aerodinámica', 'Centro del mástil', 'Centro del barco'],
      correctAnswer: 1,
      explanation: 'El centro vélico es el punto donde se aplica la resultante de las fuerzas aerodinámicas, cambia según la forma y trimado de la vela.'
    },
    {
      question: '¿Qué es el embolsamiento de una vela?',
      options: ['El borde inferior', 'La curvatura que genera diferencia de presiones', 'El puño de driza', 'El grátil de la vela'],
      correctAnswer: 1,
      explanation: 'El embolsamiento es la curvatura de la vela que permite generar la diferencia de presiones entre sus dos caras, produciendo fuerza de tracción.'
    },
    {
      question: '¿Qué relación hay entre escora y performance?',
      options: ['Más escora = más velocidad', 'Menos escora = menor superficie útil', 'A medida que escora, se reduce superficie útil y performance', 'No hay relación'],
      correctAnswer: 2,
      explanation: 'A medida que el barco escora, se reduce la superficie útil de la vela sobre la que el viento aplica su fuerza, afectando la performance.'
    }
  ]
};

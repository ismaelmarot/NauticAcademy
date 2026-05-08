import { Topic } from '@/content/types';

export const topic: Topic = {
  id: 'wind-angles',
  title: 'Rumbos de Viento',
  readingTime: 9,
  audioTime: '8:00',

  content: [
    { type: 'title', text: 'Definiciones' },
    { type: 'paragraph', text: 'Se llaman "rumbos de viento" a la dirección en la cual el viento aparente incide sobre el velero.' },
    { type: 'subtitle', text: 'Rumbo de Ceñida' },
    { type: 'paragraph', text: 'Ceñir significa navegar llevando la proa en un ángulo lo más próximo posible a la dirección de la que proviene el viento (35-45°). Es el rumbo más incómodo pero necesario. La vela mayor y la de proa van ajustadas sobre la línea de crujía.' },
    { type: 'subtitle', text: 'Rumbo a un Descuartelar' },
    { type: 'paragraph', text: 'Es el rumbo siguiente a la ceñida, con un ángulo de 60-70° respecto al viento aparente. Las velas van algo más abiertas que en ceñida, aprovechando más su embolsamiento para producir fuerza.' },
    { type: 'subtitle', text: 'Rumbo de Través' },
    { type: 'paragraph', text: 'Navegar de través es recibir el viento aproximadamente a 90° respecto al viento aparente. Es un rumbo franco donde las velas se llevan abiertas en un punto medio, generando considerable fuerza de tracción.' },
    { type: 'subtitle', text: 'Rumbo a un Largo' },
    { type: 'paragraph', text: 'Corresponde a un ángulo de unos 120° respecto al viento aparente. Es un rumbo franco donde se filan las escotas para abrir más las velas. Puede usarse spinnaker asimétrico o gennaker si el viento lo permite.' },
    { type: 'subtitle', text: 'Rumbo de Aleta' },
    { type: 'paragraph', text: 'Se navega con un ángulo de unos 150° respecto al viento aparente. Es un rumbo franco propicio para spinnaker. Conviene cazar el vang para evitar que la botavara se eleve.' },
    { type: 'subtitle', text: 'Rumbo de Popa Redonda' },
    { type: 'paragraph', text: 'El viento entra directamente por la popa (180°). Es un rumbo lento donde la vela de proa queda blanqueteada (sin recibir viento pleno). La solución es navegar a "orejas de burro", llevando la vela de proa a barlovento usando el tangón.' }
  ],

  quiz: [
    {
      question: '¿Qué ángulo se mantiene en un rumbo de ceñida?',
      options: ['90°', '35-45°', '120°', '180°'],
      correctAnswer: 1,
      explanation: 'En ceñida se navega con un ángulo de 35-45° respecto a la dirección del viento aparente.'
    },
    {
      question: '¿Qué es navegar a "orejas de burro"?',
      options: ['Navegar en ceñida', 'Llevar vela mayor a sotavento y vela de proa a barlovento', 'Navegar sin velas', 'Usar solo la vela mayor'],
      correctAnswer: 1,
      explanation: 'Orejas de burro es navegar en popa con vela mayor a sotavento y vela de proa extendida a barlovento, ganando superficie de empuje.'
    },
    {
      question: '¿Qué rumbo tiene el viento entrando por el través?',
      options: ['Ceñida (35-45°)', 'Aleta (150°)', 'Través (90°)', 'Popa (180°)'],
      correctAnswer: 2,
      explanation: 'Navegar de través es recibir el viento aproximadamente a 90° respecto a la dirección del viento aparente.'
    },
    {
      question: '¿Qué vela es ideal para rumbos de aleta o popa?',
      options: ['Foque', 'Genoa', 'Spinnaker', 'Trinquetilla'],
      correctAnswer: 2,
      explanation: 'El spinnaker es ideal para rumbos portantes como aleta (150°) y popa redonda (180°).'
    }
  ]
};

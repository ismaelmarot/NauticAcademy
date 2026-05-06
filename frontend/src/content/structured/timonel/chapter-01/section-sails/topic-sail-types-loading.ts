import { Topic } from '@/content/types';

export const topic: Topic = {
  id: 'sail-types-loading',
  title: 'Velas Orzantes y Derivantes',
  readingTime: 5,
  audioTime: '4:30',

  content: [
    { type: 'title', text: 'Acción y Reacción' },
    { type: 'paragraph', text: 'Las velas ejercen sus fuerzas en distintas secciones del barco. La vela mayor trabaja aplicando su fuerza sobre la sección de popa, mientras que las velas de proa lo hacen sobre la sección de proa.' },
    { type: 'paragraph', text: 'Si el velero tuviese únicamente la vela mayor con viento desde el través de babor, la fuerza ejercida se concentraría en popa, empujándola hacia sotavento y provocando que la proa se dirija hacia barlovento (orzar). Las velas de proa producen el efecto contrario.' },
    { type: 'paragraph', text: 'La vela mayor es "orzante" pues la presión del viento hace que la proa se dirija hacia el viento. Las velas de proa son "derivantes" porque su empuje hace que la proa se desplace siguiendo la dirección del viento.' },
    { type: 'paragraph', text: 'Un velero navegará bien cuando la presión del viento en ambas velas esté equilibrada. El resultado de diferentes cargas de presión se manifestará como tendencia a orzar o derivar, obligando al timonel a corregir el rumbo, lo que produce pérdida de velocidad.' },
    { type: 'paragraph', text: 'Un velero navegará confortablemente cuando ambas velas ejerzan presiones equilibradas sobre el eje vertical del barco, sin necesidad de correcciones constantes en el timón.' }
  ],

  quiz: [
    {
      question: '¿Qué significa "orzar"?',
      options: ['Dirigir la proa hacia la dirección de donde viene el viento', 'Dirigir la proa hacia donde va el viento', 'Navegar en popa', 'Frenar el barco'],
      correctAnswer: 0,
      explanation: 'Orzar significa dirigir la proa hacia la dirección de donde viene el viento. La vela mayor es orzante.'
    },
    {
      question: '¿Qué significa "derivar"?',
      options: ['Dirigir la proa hacia el viento', 'Frenar el barco', 'Dirigir la proa hacia donde va el viento', 'Izar las velas'],
      correctAnswer: 2,
      explanation: 'Derivar significa dirigir la proa hacia la dirección donde va el viento. Las velas de proa son derivantes.'
    },
    {
      question: '¿Qué sucede si el barco está desequilibrado?',
      options: ['Navega más rápido', 'Tiende a orzar o derivar, requiriendo corrección de timón', 'Las velas se hinchan más', 'El barco se detiene'],
      correctAnswer: 1,
      explanation: 'Un barco desequilibrado tiende a orzar o derivar según corresponda, obligando al timonel a estar corrigiendo constantemente el rumbo.'
    },
    {
      question: '¿Cómo saber si el barco está equilibrado?',
      options: ['Mirando la velocidad', 'Soltando el timón; si mantiene el rumbo está equilibrado', 'Contando las velas', 'Midiendo el viento'],
      correctAnswer: 1,
      explanation: 'Si al soltar el timón el velero continúa navegando en el mismo rumbo, requiriendo solo correcciones de 1-2 grados, está equilibrado.'
    }
  ]
};

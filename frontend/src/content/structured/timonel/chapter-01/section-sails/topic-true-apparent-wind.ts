import { Topic } from '@/content/types';

export const topic: Topic = {
  id: 'true-apparent-wind',
  title: 'Viento Real y Viento Aparente',
  readingTime: 5,
  audioTime: '4:30',

  content: [
    { type: 'title', text: 'Definiciones' },
    { type: 'paragraph', text: 'El "viento real" es el que percibe el observador en reposo, producido por los factores meteorológicos. Tiene una dirección (punto cardinal desde donde se origina) y una magnitud (fuerza/velocidad en nudos).' },
    { type: 'paragraph', text: 'El "viento aparente" es el que el observador percibe a bordo de un velero en movimiento. Resulta de la suma de los vectores del viento real y del movimiento del velero. El trimado debe efectuarse en función de los parámetros del viento aparente.' },
    { type: 'paragraph', text: 'Cuando el velero está parado, el viento aparente resulta igual al viento real. Inmediatamente después de que el barco comienza a moverse, empieza a manifestarse el viento aparente, cambiando su fuerza y dirección.' },
    { type: 'paragraph', text: 'El aire está sujeto a las mismas condiciones de viscosidad que los fluidos. El aire de las capas más altas se deslizará a velocidades mayores que en superficie, donde se frena por el rozamiento contra el agua y las olas.' }
  ],

  quiz: [
    {
      question: '¿Qué es el viento real?',
      options: ['El viento que siente el observador en movimiento', 'El viento que percibe el observador en reposo', 'El viento que produce el barco', 'El viento en la cima de las olas'],
      correctAnswer: 1,
      explanation: 'El viento real es el que percibe el observador en reposo, producido por los factores meteorológicos.'
    },
    {
      question: '¿Qué es el viento aparente?',
      options: ['El viento meteorológico', 'El viento que siente el observador a bordo en movimiento', 'El viento en la costa', 'El viento de la noche'],
      correctAnswer: 1,
      explanation: 'El viento aparente es el que se experimenta a bordo de un barco en movimiento, resultante de la suma del viento real y el movimiento del velero.'
    },
    {
      question: '¿Con qué viento navega el velero en movimiento?',
      options: ['Viento real', 'Viento aparente', 'Viento de popa', 'Viento en calma'],
      correctAnswer: 1,
      explanation: 'El velero siempre navega con el viento aparente, que es el que actúa sobre las velas cuando el barco está en movimiento.'
    },
    {
      question: '¿Por qué el viento en superficie es diferente al de altura?',
      options: ['Por la viscosidad del aire y rozamiento', 'Porque cambia de dirección', 'Por la temperatura', 'Por la altura del mástil'],
      correctAnswer: 0,
      explanation: 'La viscosidad hace que el aire de la capa cercana al agua se frene por el rozamiento, mientras que en altura se desliza a mayor velocidad.'
    }
  ]
};

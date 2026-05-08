import { Topic } from '@/content/types';

export const topic: Topic = {
  id: 'tacking',
  title: 'Virar',
  readingTime: 5,
  audioTime: '4:30',

  content: [
    { type: 'title', text: 'Introducción' },
    { type: 'paragraph', text: 'En la navegación a vela, no todos los cambios de rumbo implican una maniobra de virada. Cambiar de rumbo puede ser simplemente mover la proa en cualquier dirección sin que cruce la línea del viento.' },
    { type: 'paragraph', text: 'Una virada es una maniobra específica que implica que la proa del barco pase directamente por el viento, debiendo cambiar de amura. Requiere coordinación precisa de la tripulación, ajuste de escotas y control del timón.' },

    { type: 'subtitle', text: 'Virar por Avante' },
    { type: 'paragraph', text: 'Se ejecuta llevando la proa hacia barlovento (orzando) hasta que pase la línea del viento, comenzando a recibir el viento por la banda contraria. Obliga a cambiar las velas de amura.' },
    { type: 'paragraph', text: 'Es útil para cambiar de borde navegando en rumbos de ceñida, a un descuartelar o ángulos cerrados de través. El barco pierde poco tiempo y velocidad en la maniobra.' },

    { type: 'subtitle', text: 'Virar en Redondo' },
    { type: 'paragraph', text: 'Es la opuesta a virar por avante. Se ejecuta llevando la proa hacia sotavento (derivando) hasta pasar la línea del viento, obligando a cambiar las velas de amura.' },
    { type: 'paragraph', text: 'Se aplica navegando en rumbos de aleta, a un largo o ángulos abiertos de través. También cuando navegando en ceñida no es posible virar por avante por tráfico u otras condiciones.' },
    { type: 'paragraph', text: 'Prestar especial atención a la trasluchada (cambio de banda de la vela mayor) en viento en popa redonda, llevando primero la vela mayor hacia la línea de crujía antes de virar.' }
  ],

  quiz: [
    {
      question: '¿Qué caracteriza a una maniobra de virada?',
      options: [
        'La proa no cruza la línea del viento',
        'La proa cruza la línea del viento cambiando de amura',
        'Solo se ajustan las escotas',
        'Se navega siempre a favor del viento'
      ],
      correctAnswer: 1,
      explanation: 'Una virada es específicamente cuando la proa cruza la línea del viento, debiendo cambiar de amura las velas.'
    },
    {
      question: '¿Cuándo se usa virar por avante?',
      options: [
        'En vientos en popa redonda',
        'En rumbos de ceñida o descuartelar',
        'Solo en emergencias',
        'Cuando hay mucho tráfico'
      ],
      correctAnswer: 1,
      explanation: 'Virar por avante es útil para cambiar de borde navegando en rumbos de ceñida, descuartelar o ángulos cerrados de través.'
    },
    {
      question: '¿Qué es la trasluchada?',
      options: [
        'Cambio de banda de la vela mayor',
        'Virar por avante',
        'Arriar la vela mayor',
        'Cambio de ancla'
      ],
      correctAnswer: 0,
      explanation: 'La trasluchada es el cambio de banda de la vela mayor, debe controlarse especialmente en viento en popa para evitar que sea descontrolada.'
    }
  ]
};

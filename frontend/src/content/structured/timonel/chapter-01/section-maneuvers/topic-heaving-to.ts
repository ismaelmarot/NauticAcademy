import { Topic } from '@/content/types';

export const topic: Topic = {
  id: 'heaving-to',
  title: 'Puesta al Pairo',
  readingTime: 6,
  audioTime: '5:30',

  content: [
    { type: 'title', text: 'Introducción' },
    { type: 'paragraph', text: 'Ponerse al pairo es una técnica clásica que consiste en equilibrar velas y timón para que el barco quede prácticamente detenido, con mínima arrancada y adrizado, aunque siga derivando suavemente con la corriente.' },
    { type: 'paragraph', text: 'Los barcos no tienen frenos. En veleros se puede frenar desenando las velas (detienen en algunos metros) o poniéndolos al pairo (detención casi instantánea).' },

    { type: 'subtitle', text: 'Poner al Pairo' },
    { type: 'paragraph', text: 'Se logra dejando derivar el barco hasta que la vela de proa quede acuartelada, orientando luego la vela mayor y el timón para compensar la fuerza derivante, dejando el velero en equilibrio.' },
    { type: 'paragraph', text: 'La vela de proa acuartelada hace que la proa tienda a derivar hacia sotavento, por eso la vela mayor y timón deben compensar esa fuerza manteniendo el barco equilibrado.' },
    { type: 'paragraph', text: 'Para salir del pairo: liberar la vela de proa de su acuartelamiento, dejar caer la proa a sotavento y acompañar con vela mayor y timón.' },
    { type: 'paragraph', text: 'Vela acuartelada: portando, hinchada, pero tomada sobre banda de barlovento sin dejarla pasar a sotavento.' },

    { type: 'subtitle', text: 'Pairo vs Enfachar' },
    { type: 'paragraph', text: 'Pairo: Frena el barco dinámicamente manteniendo control. El timonel puede soltar el timón sin riesgo, el barco permanecerá frenado todo el tiempo necesario.' },
    { type: 'paragraph', text: 'Enfachar: Proa al viento, desventando. Ninguna vela trabaja, el barco se detiene pero requiere que el timonel mantenga la proa opuesta al viento. Se pierde control, el viento hará caer la proa hacia una banda.' },
    { type: 'paragraph', text: 'Útil para: Maniobra de rescate de "hombre al agua" como último paso para detener el barco cerca del náufrago.' }
  ],

  quiz: [
    {
      question: '¿Qué es poner el velero al pairo?',
      options: [
        'Detenerlo con el motor',
        'Equilibrar velas y timón sin arrancada',
        'Arriar todas las velas',
        'Navegar a máxima velocidad'
      ],
      correctAnswer: 1,
      explanation: 'Poner al pairo consiste en equilibrar las fuerzas entre velas y timón para que el barco quede prácticamente detenido, con mínima arrancada.'
    },
    {
      question: '¿Qué diferencia hay entre pairo y enfachar?',
      options: [
        'Son lo mismo',
        'Pairo pierde control, enfachar lo mantiene',
        'Pairo mantiene control sin tocar timón, enfachar requiere mantener proa al viento',
        'Enfachar es más rápido'
      ],
      correctAnswer: 2,
      explanation: 'Al pairo el barco mantiene control y puede soltarse el timón. Enfachado se pierde control, requiere mantener proa al viento.'
    },
    {
      question: '¿Cuándo se usa la puesta al pairo?',
      options: [
        'Solo en regatas',
        'Para detener el barco en un punto determinado',
        'Para aumentar velocidad',
        'Para cambiar velas'
      ],
      correctAnswer: 1,
      explanation: 'Se usa para detener el velero en el punto donde se encuentra, manteniéndolo bajo control. Es clave en rescate de hombre al agua.'
    }
  ]
};

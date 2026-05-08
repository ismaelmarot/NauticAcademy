import { Topic } from '@/content/types';

export const topic: Topic = {
  id: 'humedad-relativa',
  title: 'La Humedad Relativa',
  readingTime: 12,
  audioTime: '11:15',

  content: [
    { type: 'title', text: 'La Humedad Relativa' },
    { type: 'paragraph', text: 'La humedad es un parámetro clave para entender el comportamiento del aire y su capacidad para contener vapor de agua. Se trata de la proporción entre la cantidad de vapor que el aire contiene y la cantidad máxima que podría contener a esa misma temperatura.' },
    { type: 'paragraph', text: 'La temperatura determina el límite de saturación del aire: cuanto más cálido está, más vapor puede retener; cuanto más frío, menos. Junto con la temperatura y la presión, la humedad completa el trío de variables esenciales que gobiernan la dinámica del tiempo meteorológico.' },
    { type: 'subtitle', text: 'Humedad Relativa y Punto de Rocío' },
    { type: 'paragraph', text: 'La humedad relativa es la relación entre la cantidad de vapor de agua que contiene una masa de aire a una temperatura dada y la cantidad máxima que podría contener cuando está saturada a esa misma temperatura.' },
    { type: 'paragraph', text: 'La saturación ocurre cuando el aire ya no puede seguir incorporando vapor de agua y comienza a devolverlo en forma líquida, como pequeñas gotas de rocío. Ese estado corresponde al 100% de humedad relativa. Se denomina "relativa" porque depende directamente de la temperatura y la presión del aire.' },
    { type: 'paragraph', text: 'El punto de rocío es la temperatura a la cual una masa de aire debe enfriarse para alcanzar su punto de saturación. Una vez alcanzada esa temperatura, el aire deja de admitir más vapor y comienza a condensarlo, devolviéndolo al estado líquido.' },
    { type: 'subtitle', text: 'Ley de Dalton' },
    { type: 'paragraph', text: 'La Ley de las Presiones Parciales establece que la presión total de una mezcla de gases es la suma de las presiones parciales ejercidas por cada uno de sus componentes. Esto permite explicar el comportamiento del vapor de agua en la atmósfera:' },
    { type: 'list', items: [
      'Si la temperatura permanece constante y aumenta el vapor de agua, la humedad relativa aumenta',
      'Si la temperatura aumenta con vapor constante, la humedad relativa disminuye',
      'Si la temperatura desciende con vapor constante, la humedad relativa aumenta y puede alcanzarse la saturación'
    ]},
    { type: 'subtitle', text: 'Instrumentos de Medición' },
    { type: 'paragraph', text: 'La humedad relativa se mide con el higrómetro y se registra en el tiempo con el higrógrafo. El punto de rocío se obtiene generalmente con un psicrómetro, compuesto por dos termómetros: uno que toma la temperatura de un paño húmedo y otro la del aire. La diferencia entre ambos indica la distancia al punto de rocío.' },
    { type: 'subtitle', text: 'Ciclo Hidrológico' },
    { type: 'paragraph', text: 'El agua interactúa constantemente con la atmósfera a través del ciclo del agua:' },
    { type: 'list', items: [
      'Evaporación: el agua pasa del estado líquido al gaseoso, impulsada por la radiación solar',
      'Condensación: el vapor alcanza capas más frías y forma diminutas gotas que originan las nubes',
      'Precipitación: las gotas o cristales crecen lo suficiente y caen como lluvia, nieve o granizo'
    ]},
    { type: 'subtitle', text: 'Cambios de Estado y Energía' },
    { type: 'paragraph', text: 'El proceso de cambio de estados del agua requiere intercambio de energía:' },
    { type: 'list', items: [
      'Fusión: sólido a líquido, absorbe 80 calorías por gramo',
      'Evaporación: líquido a gaseoso, absorbe ~560 calorías por gramo',
      'Condensación: gaseoso a líquido, libera ~560 calorías por gramo',
      'Solidificación: líquido a sólido, libera 80 calorías por gramo',
      'Sublimación: paso directo de sólido a gaseoso y viceversa, sin pasar por el estado líquido'
    ]}
  ],

  quiz: [
    {
      question: '¿Qué es la humedad relativa?',
      options: ['La cantidad absoluta de vapor de agua en el aire', 'La proporción entre el vapor que contiene el aire y el máximo que podría contener a esa temperatura', 'La temperatura a la que el aire se satura', 'La presión parcial del vapor de agua'],
      correctAnswer: 1,
      explanation: 'La humedad relativa es la relación entre la cantidad de vapor de agua presente en el aire y la cantidad máxima que podría contener a esa misma temperatura.'
    },
    {
      question: '¿Qué ocurre con la humedad relativa si la temperatura aumenta y el vapor de agua permanece constante?',
      options: ['Aumenta', 'Disminuye', 'Se mantiene igual', 'Alcanza la saturación'],
      correctAnswer: 1,
      explanation: 'Un aire más cálido puede contener más vapor antes de saturarse, por lo que la humedad relativa disminuye al aumentar la temperatura con vapor constante.'
    },
    {
      question: '¿Qué instrumento se utiliza para medir el punto de rocío?',
      options: ['Higrómetro', 'Barómetro', 'Psicrómetro', 'Termógrafo'],
      correctAnswer: 2,
      explanation: 'El psicrómetro, compuesto por dos termómetros (uno con bulbo húmedo), permite determinar el punto de rocío a partir de la diferencia de temperaturas.'
    },
    {
      question: '¿Cuánta energía libera el agua al condensarse de gaseoso a líquido?',
      options: ['80 calorías por gramo', '~560 calorías por gramo', '100 calorías por gramo', '1000 calorías por gramo'],
      correctAnswer: 1,
      explanation: 'La condensación libera aproximadamente 560 calorías por gramo, que pasan del vapor de agua al aire o a los materiales con los que entra en contacto.'
    }
  ]
};

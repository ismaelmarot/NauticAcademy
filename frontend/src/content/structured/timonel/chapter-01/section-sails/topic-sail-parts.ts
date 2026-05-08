import { Topic } from '@/content/types';

export const topic: Topic = {
  id: 'sail-parts',
  title: 'Las partes de las velas de los veleros modernos',
  readingTime: 7,
  audioTime: '6:30',

  content: [
    { type: 'title', text: 'Definiciones' },
    { type: 'paragraph', text: 'La mayoría de los veleros modernos son del tipo sloop que llevan un mástil un poco adelantado a proa y portando dos velas triangulares.' },
    { type: 'paragraph', text: 'Las velas triangulares disponen de tres vértices, que reciben el nombre de "puños", y por lo tanto, también de tres bordes entre ellos. Cada puño posee un "ollao", que es un ojal utilizado para fijar la vela a un elemento dado.' },
    { type: 'paragraph', text: 'El "puño de driza" se ubica en la esquina superior de la vela, y es en el cual se conecta la "driza" para izar la vela. El "puño de amura" se ubica en la esquina inferior de la vela del lado de proa y es por el que se sujeta la vela al punto de amura. Por último, el "puño de escota" es el que corresponde a la esquina inferior de popa de la vela, y es en el que se sujetan las "escotas".' },
    { type: 'paragraph', text: 'En cuanto a los lados, el "pujamen" es el borde inferior del triángulo de la vela. La "baluma" es el borde del lado de popa, por el que sale el flujo del viento. Y el "grátil" es el lado de la vela que queda a proa, tomado al mástil en el caso de la vela mayor o al stay en las velas de proa.' },
    { type: 'paragraph', text: 'Dependiendo del método de montaje de la vela, su grátil puede estar formado por una "relinga", que consiste en un cable o cabo grueso injertado en el borde de la vela, o bien llevar una serie de pequeños herrajes llamados "garruchos" en el caso de la vela mayor o "mosquetones" en las velas de proa.' },
    { type: 'subtitle', text: 'Elementos de la Vela' },
    { type: 'paragraph', text: 'Los "batens" o "sables" son listones de material ligero y flexible que se colocan en unas fundas perpendiculares a la baluma de la vela, cuya finalidad es mantener plano el tercio posterior de la vela y evitar el flameo de la baluma.' },
    { type: 'paragraph', text: 'El "balumero" ayuda también con esto último; es un cabo regulable que recorre la baluma de la vela y que cazándolo tensará la baluma reduciendo las vibraciones y el flameo causado por el viento.' },
    { type: 'paragraph', text: 'En ciertas ocasiones, cuando el viento es demasiado fuerte, se torna necesario reducir la superficie vélica tomando rizos. Para eso se usan los "ollaos de rizos", que son una serie de ojales reforzados dispuestos en línea horizontal a distintas alturas de la vela por los que se pasan los "matafiones", que son los cabos utilizados para recoger los pliegues de la vela.' },
    { type: 'paragraph', text: 'En la vela se añaden también cordones de lana o cintas de telas muy livianas, que reciben el nombre de "catavientos" y que se usan para monitorear el flujo del viento. Las "bandas de profundidad" son unas tiras de un color contrastante que se colocan a distintas alturas en las velas, dando una referencia visual de la curvatura del plano de la vela.' }
  ],

  quiz: [
    {
      question: '¿Qué es el puño de driza?',
      options: ['Borde inferior de la vela', 'Esquina superior donde se conecta la driza', 'Borde de popa de la vela', 'Extremo del mástil'],
      correctAnswer: 1,
      explanation: 'El puño de driza se ubica en la esquina superior de la vela y es donde se conecta la driza para izarla.'
    },
    {
      question: '¿Qué es el grátil de una vela?',
      options: ['Borde inferior', 'Borde de popa', 'Borde de proa que se toma al mástil o stay', 'El vientre de la vela'],
      correctAnswer: 2,
      explanation: 'El grátil es el lado de la vela que queda a proa, tomado al mástil en la vela mayor o al stay en las velas de proa.'
    },
    {
      question: '¿Para qué sirven los batens o sables?',
      options: ['Sujección al mástil', 'Mantener plano el tercio posterior y evitar flameo', 'Ajustar la tensión de la driza', 'Conectar la escota'],
      correctAnswer: 1,
      explanation: 'Los batens mantienen plano el tercio posterior de la vela y evitan el flameo de la baluma causado por el viento.'
    },
    {
      question: '¿Qué son los catavientos?',
      options: ['Cabos de amarre', 'Tiras de lana para monitorear el flujo del viento', 'Tipo de nudos', 'Elementos de la botavara'],
      correctAnswer: 1,
      explanation: 'Los catavientos son tiras de lana o cintas que se usan para monitorear el flujo del viento sobre el plano de la vela.'
    }
  ]
};

import { Topic } from '@/content/types';

export const topic: Topic = {
  id: 'mainsail',
  title: 'La Vela Mayor',
  readingTime: 6,
  audioTime: '5:30',

  content: [
    { type: 'title', text: 'Las Partes de la Vela Mayor' },
    { type: 'paragraph', text: 'La vela mayor de los veleros actuales es una vela de tipo bermuda. Surgieron en el siglo XVI cuando, como consecuencia del uso de un mástil único algo inclinado hacia popa, se fue dejando de lado la vela cangreja para pasar a otra más simple.' },
    { type: 'paragraph', text: 'La botavara es lo único que la actual vela mayor mantiene de las viejas velas cangrejas. En cuanto a sus componentes, las velas mayores tienen elementos destinados a mejorar su "trimado" (puesta a punto).' },
    { type: 'paragraph', text: 'Uno de esos elementos es el "pujamero", que es un cabo que une el puño de escota de la vela con el extremo libre de la botavara. Cazándolo o filándolo permite desplazar el puño de escota a lo largo de la botavara, regulando la tensión de la tela en la base de la vela.' },
    { type: 'paragraph', text: 'Otro elemento es el "cunningham", que consiste en un cabo utilizado para regular la tensión de la tela de la vela mayor en la sección inferior cerca del grátil. Al cazar el cunningham, se tracciona sobre el grátil provocando que la sección inferior se tense, aplanándose.' },
    { type: 'paragraph', text: 'Algunas velas mayores tienen un "alunamiento", que es una extensión del paño de la vela del lado de la baluma, más allá de la línea recta que une el puño de driza con el puño de escota. El objetivo es aumentar la superficie vélica.' },
    { type: 'title', text: 'Montaje de la Vela Mayor' },
    { type: 'paragraph', text: 'Previamente a ser usada, la vela mayor se monta fijando primero su puño de amura a la "gancera" (herraje que vincula la botavara con el mástil) y el puño de escota al extremo del pujamero en la botavara.' },
    { type: 'paragraph', text: 'Luego se insertan los garruchos o la relinga de la vela en la guía del mástil, y finalmente se fija la driza de mayor al puño de driza. Con esto, la vela ya está en condiciones de ser izada.' },
    { type: 'paragraph', text: 'Hasta que llegue el momento de izarla, las buenas prácticas indican mantener la vela mayor plegada sobre la botavara, sujeta con algún tipo de "amante" o "shock cord" elástico. Otra herramienta útil son los "enrolladores" que recogen la vela arrollándola dentro de la botavara o del mismo mástil.' }
  ],

  quiz: [
    {
      question: '¿Qué tipo de vela es la vela mayor moderna?',
      options: ['Vela cuadrada', 'Vela latina', 'Vela bermuda', 'Vela cangreja'],
      correctAnswer: 2,
      explanation: 'La vela mayor de los veleros actuales es una vela de tipo bermuda, que surgieron en el siglo XVI.'
    },
    {
      question: '¿Qué es el pujamero?',
      options: ['Cabo que une el puño de escota con la botavara', 'Cabo de la driza', 'Elemento de la botavara', 'Tipo de nudo'],
      correctAnswer: 0,
      explanation: 'El pujamero es un cabo que une el puño de escota de la vela con el extremo libre de la botavara, permitiendo regular la tensión.'
    },
    {
      question: '¿Para qué sirve el cunningham?',
      options: ['Sujección al mástil', 'Regular la tensión de la tela cerca del grátil', 'Conectar la escota', 'Ajustar la botavara'],
      correctAnswer: 1,
      explanation: 'El cunningham se utiliza para regular la tensión de la tela de la vela mayor en la sección inferior cerca del grátil.'
    },
    {
      question: '¿Qué es la gancera?',
      options: ['Un tipo de vela', 'Herraje que vincula la botavara con el mástil', 'Un cabo de amarre', 'Elemento de la driza'],
      correctAnswer: 1,
      explanation: 'La gancera es el herraje que vincula la botavara con el mástil, donde se fija el puño de amura de la vela mayor.'
    }
  ]
};

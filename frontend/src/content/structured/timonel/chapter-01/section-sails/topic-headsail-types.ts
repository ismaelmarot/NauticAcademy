import { Topic } from '@/content/types';

export const topic: Topic = {
  id: 'headsail-types',
  title: 'Las Velas de Proa',
  readingTime: 19,
  audioTime: '17:30',

  content: [
    { type: 'title', text: 'Introducción' },
    { type: 'paragraph', text: 'Las velas de proa de los veleros modernos caben casi todas ellas dentro de la categoría de las velas "bermudas" o "de cuchillo". El desarrollo de un triángulo de proa vacío entre el stay proel y el mástil permitió colocar velas triangulares, dando excelentes resultados.' },
    { type: 'paragraph', text: 'Esa configuración permite montar varias velas en proa, tales como las genoas o génovas, los foques, trinquetillas, spinakers y gennakers. El triángulo de proa se mide por su "J" (distancia del stay al mástil) y el "LP" o "luff perpendicular" (perpendicular del grátil).' },
    { type: 'subtitle', text: 'Las Genoas' },
    { type: 'paragraph', text: 'Las "genoas" son las velas de proa de mayor tamaño, superando largamente la medida del triángulo de proa. Se diferencian por su LP (porcentaje de solapamiento): Genoa 1 (150-155%), Genoa 2 (125-130%), Genoa 3 (90-110%).' },
    { type: 'paragraph', text: 'La Genoa 1 se utiliza con vientos suaves, la Genoa 2 con vientos leves a moderados, y la Genoa 3 con vientos moderados a regulares. Las genoas se colocan afirmando su puño de amura al caperol, enganchando los mosquetones del grátil al stay proel, y conectando el puño de driza.' },
    { type: 'subtitle', text: 'El Reacher' },
    { type: 'paragraph', text: 'El "reacher" es una vela de proa con LP de 130-150%, pero con puño de escota bastante más elevado. Diseñada para navegar con vientos portantes o de través en singladuras largas, evitando que las olas carguen sobre la vela.' },
    { type: 'subtitle', text: 'El Foque' },
    { type: 'paragraph', text: 'El "foque" tiene un LP de 100-110%, no quedando superpuesta a la vela mayor. Su puño de escota está más elevado. Es una vela para vientos entre regulares y fuertes, desde el través hacia la amura. Su montaje es idéntico al de la genoa.' },
    { type: 'subtitle', text: 'La Trinquetilla' },
    { type: 'paragraph', text: 'La "trinquetilla" es una vela que se iza en un stay intermedio entre el mástil y el stay de proa. Más pequeña que un foque, se utiliza en vientos fuertes o moderados cuando no conviene izar una genoa, permitiendo mantener velocidad sin sobrecargar el stay principal.' },
    { type: 'subtitle', text: 'El Spinnaker' },
    { type: 'paragraph', text: 'El "spinnaker" es una vela para vientos de popa y aleta, originalmente simétrica y casi redonda. Evolucionó al spinnaker asimétrico y luego al gennaker. Tiene puño de driza al tope, puño de escota en sotavento y puño de braza en barlovento. Se utiliza un tangón para manejar el grátil.' },
    { type: 'subtitle', text: 'El Gennaker' },
    { type: 'paragraph', text: 'El "gennaker" puede ser descripto como un genoa súper grande y liviano (LP hasta 180%), combinando características de genoa y spinnaker. No utiliza tangón sino que su puño de amura se fija en un botalón. Diseñado para vientos suaves desde el través, no para ceñida.' },
    { type: 'subtitle', text: 'Materiales' },
    { type: 'paragraph', text: 'El material más común es el "Dacrón" (poliéster tejido). En veleros de competición se usan fibras como Kevlar o Pentex, que son menos flexibles y mantienen mejor la forma aerodinámica. El Dacrón es estable, duradero y fácil de manejar, aunque tiende a estirarse con el tiempo.' }
  ],

  quiz: [
    {
      question: '¿Qué es el LP en las velas de proa?',
      options: ['Longitud del puño', 'Luff perpendicular (perpendicular del grátil)', 'Largo del pujamen', 'Luz del puño'],
      correctAnswer: 1,
      explanation: 'El LP o "luff perpendicular" mide el porcentaje de solapamiento de la vela respecto del mástil y la vela mayor.'
    },
    {
      question: '¿Qué Genoa se utiliza con vientos suaves?',
      options: ['Genoa 3', 'Genoa 2', 'Genoa 1 (150-155%)', 'Trinquetilla'],
      correctAnswer: 2,
      explanation: 'La Genoa 1 con LP del 150-155% se utiliza con vientos suaves a leves, buscando máxima potencia.'
    },
    {
      question: '¿Qué vela es ideal para vientos de popa y aleta?',
      options: ['Foque', 'Trinquetilla', 'Spinnaker', 'Genoa'],
      correctAnswer: 2,
      explanation: 'El spinnaker es la vela diseñada para vientos de popa y aleta, originalmente simétrica y casi redonda.'
    },
    {
      question: '¿Qué material es el más común en la construcción de velas?',
      options: ['Nylon', 'Dacrón (poliéster)', 'Kevlar', 'Seda'],
      correctAnswer: 1,
      explanation: 'El Dacrón (nombre comercial del poliéster tejido) es el material más comúnmente utilizado en la construcción de velas.'
    }
  ]
};

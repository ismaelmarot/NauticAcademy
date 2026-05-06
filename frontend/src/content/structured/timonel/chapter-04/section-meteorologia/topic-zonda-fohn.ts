import type { Topic } from '../../../../types';

export const topic: Topic = {
  id: 'zonda-fohn',
  title: 'El Zonda y el Efecto Föhn',
  readingTime: 8,
  audioTime: '07:30',
  content: [
    { type: 'title', text: 'El Zonda' },
    { type: 'paragraph', text: 'Viento cálido, seco y a menudo violento que desciende de los Andes hacia las llanuras orientales de Argentina. Es una expresión local del efecto Föhn.' },
    { type: 'title', text: 'Efecto Föhn' },
    { type: 'paragraph', text: 'Viento cálido, seco y descendente en el lado de sotavento de una cadena montañosa. Fenómenos equivalentes: Chinook (Norteamérica), Bergwind (Sudáfrica).' },
    { type: 'title', text: 'Proceso del efecto Föhn' },
    { type: 'list', items: ['Una masa de aire húmedo es forzada a ascender sobre una barrera orográfica (cordillera)', 'El aire se expande y enfría adiabáticamente durante el ascenso', 'En el punto de saturación, el vapor se condensa → nubes y precipitación en el lado barlovento', 'Se libera calor latente durante la condensación', 'El aire desciende en el lado de sotavento, se comprime y calienta adiabáticamente', 'La tasa de calentamiento durante el descenso seco es mayor que la tasa de enfriamiento durante el ascenso húmedo', 'Resultado: el viento en sotavento es más seco, cálido e intenso que el aire original'] },
    { type: 'title', text: 'Efecto Föhn en la navegación' },
    { type: 'list', items: ['Aceleración rápida del viento, carácter racheado, turbulencia marcada', 'Fuertes corrientes descendentes, cambios bruscos de dirección, viento muy desigual en cortas distancias', 'En archipiélagos (Canarias, Cabo Verde, costa de Brasil): chorros de viento entre islas, zonas de calma cercanas', 'Vórtices de von Kármán: vórtices alternados formados al abrigo de islas/montañas cuando un flujo estable fuerte las golpea. Causan rodillos rápidos, ráfagas marcadas, zonas de fuerte cizallamiento', 'La superficie del mar refleja la inestabilidad: zonas muy rizadas junto a otras relativamente planas'] }
  ],
  quiz: [
    {
      question: '¿Qué es el Zonda?',
      options: [
        'Viento frío y húmedo de los Andes',
        'Viento cálido, seco y violento que desciende de los Andes',
        'Viento local del Río de la Plata',
        'Efecto de enfriamiento en laderas de montaña'
      ],
      correctAnswer: 1,
      explanation: 'El Zonda es un viento cálido, seco y a menudo violento que desciende de los Andes hacia las llanuras orientales de Argentina, expresión local del efecto Föhn.'
    },
    {
      question: '¿Qué ocurre durante el ascenso de la masa de aire en el efecto Föhn?',
      options: [
        'El aire se comprime y calienta',
        'El vapor se condensa, liberando calor latente',
        'El aire desciende rápidamente',
        'No hay formación de nubes'
      ],
      correctAnswer: 1,
      explanation: 'Durante el ascenso húmedo, al llegar al punto de saturación el vapor se condensa, formando nubes y precipitación en el lado barlovento, liberando calor latente.'
    },
    {
      question: '¿Qué son los vórtices de von Kármán?',
      options: [
        'Vientos que descienden de las montañas',
        'Vórtices alternados formados al abrigo de islas/montañas con flujo estable fuerte',
        'Nubes típicas del efecto Föhn',
        'Corrientes marinas frías cerca de las costas'
      ],
      correctAnswer: 1,
      explanation: 'Los vórtices de von Kármán son vórtices alternados formados al abrigo de islas o montañas cuando un flujo estable fuerte las golpea, causando ráfagas y fuerte cizallamiento.'
    },
    {
      question: '¿Por qué el viento en sotavento es más cálido en el efecto Föhn?',
      options: [
        'Porque el aire se enfría durante el descenso',
        'Porque la tasa de calentamiento en descenso seco es mayor que el enfriamiento en ascenso húmedo',
        'Porque el aire absorbe calor de las montañas',
        'Porque no hay nubes en sotavento'
      ],
      correctAnswer: 1,
      explanation: 'La tasa de calentamiento adiabático durante el descenso seco es mayor que la tasa de enfriamiento adiabático durante el ascenso húmedo, por lo que el aire en sotavento es más cálido.'
    }
  ]
};

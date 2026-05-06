import { Topic } from '@/content/types';

export const topic: Topic = {
  id: 'las-brisas',
  title: 'Las Brisas: Mar y Tierra',
  readingTime: 11,
  audioTime: '10:20',

  content: [
    { type: 'title', text: 'Las Brisas' },
    { type: 'paragraph', text: 'Las brisas son movimientos de aire locales generados por las diferencias de temperatura —y por lo tanto de presión— entre dos superficies cercanas que se calientan y enfrían a ritmos distintos, como la tierra y el agua.' },
    { type: 'paragraph', text: 'Para la náutica, entender cómo y cuándo se forman las brisas es fundamental, porque pueden modificar significativamente la intensidad y dirección del viento real sobre el agua, incluso en condiciones de aparente calma atmosférica general.' },
    { type: 'paragraph', text: 'A diferencia del viento, que es producto del gradiente de presión a gran escala y se desplaza con las masas de aire, las brisas son movimientos localizados causados por efectos térmicos en las zonas costeras.' },
    { type: 'title', text: 'Brisa Marina' },
    { type: 'paragraph', text: 'Durante el día, el Sol calienta la tierra más rápidamente que el agua. El aire sobre la tierra se calienta, asciende y crea un área de baja presión relativa (baja térmica). La atmósfera busca restablecer el equilibrio, y el aire fluye desde el agua (mayor presión) hacia la costa (menor presión), produciendo la brisa marina.' },
    { type: 'list', items: [
      'Comienza entre 2 y 4 horas después del amanecer',
      'Se desvanece luego del ocaso',
      'En superficie, el viento fluye del agua hacia la costa',
      'En altura, se produce un flujo de retorno desde la costa hacia el agua',
      'Sobre la costa puede formarse nubosidad cumuliforme',
      'Es más fuerte cerca de la costa; aguas adentro hay calmas con vientos descendentes'
    ]},
    { type: 'title', text: 'Brisa de Tierra (Terral)' },
    { type: 'paragraph', text: 'Durante la noche, la tierra se enfría más rápido que el agua, invirtiendo el proceso. El aire sobre la tierra se vuelve más denso y pesado, y fluye desde la costa hacia el agua. En altura se genera el flujo de retorno, desde las aguas hacia la costa.' },
    { type: 'list', items: [
      'Es más débil que la brisa marina porque la variación térmica nocturna del agua es menor',
      'Más común en otoño e invierno',
      'El terreno frío actúa como freno para las masas de aire'
    ]},
    { type: 'title', text: 'Factores de la Circulación de las Brisas' },
    { type: 'list', items: [
      'Ocurren en costas de mares y grandes cuerpos de agua (Río de la Plata, grandes lagos)',
      'Condiciones ideales: cielos despejados y vientos que no superen el nivel de moderados (11-16 nudos)',
      'En latitudes medias y altas, más frecuentes en estaciones cálidas',
      'En zonas tropicales, ocurren todo el año',
      'Un viento débil del agua hacia la costa favorece la brisa marina'
    ]},
    { type: 'title', text: 'Brisas en el Río de la Plata' },
    { type: 'paragraph', text: 'En el sector Noreste del Río de la Plata, la brisa de mar puede alcanzar intensidades de 11 a 19 nudos, con dirección general del sector Este. En el sector Sudeste (Montevideo a Punta del Este), puede llegar a 25-30 nudos en verano.' },
    { type: 'paragraph', text: 'El término "virazón" se utiliza en el Río de la Plata para definir el momento del cambio de sentido de la brisa.' }
  ],

  quiz: [
    {
      question: '¿Qué causa la brisa marina?',
      options: ['El gradiente de presión a gran escala', 'La diferencia térmica entre tierra y agua durante el día', 'La rotación terrestre', 'Las mareas'],
      correctAnswer: 1,
      explanation: 'La brisa marina se produce porque la tierra se calienta más rápido que el agua durante el día, creando una baja térmica sobre la costa que atrae el aire más fresco del agua.'
    },
    {
      question: '¿Cuándo comienza la brisa marina?',
      options: ['Al amanecer', 'Entre 2 y 4 horas después del amanecer', 'Al mediodía', 'Al atardecer'],
      correctAnswer: 1,
      explanation: 'La brisa marina comienza entre 2 y 4 horas después del amanecer, cuando la diferencia térmica entre tierra y agua es suficiente para generar el gradiente de presión necesario.'
    },
    {
      question: '¿Por qué la brisa de tierra es más débil que la brisa marina?',
      options: ['Porque el agua se enfría más rápido', 'Porque la variación térmica del agua es menor y el terreno frío frena el aire', 'Porque Coriolis la cancela', 'Porque solo ocurre en invierno'],
      correctAnswer: 1,
      explanation: 'La brisa de tierra es más débil porque el agua mantiene una temperatura más estable y el terreno frío actúa como freno para las masas de aire.'
    },
    {
      question: '¿Qué intensidad puede alcanzar la brisa en el sector Sudeste del Río de la Plata en verano?',
      options: ['5 a 10 nudos', '11 a 19 nudos', '25 a 30 nudos', 'Más de 40 nudos'],
      correctAnswer: 2,
      explanation: 'En el sector Sudeste del Río de la Plata, especialmente entre Montevideo y Punta del Este, las brisas pueden alcanzar 25 a 30 nudos en verano.'
    }
  ]
};

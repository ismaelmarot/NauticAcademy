import { Topic } from '@/content/types';

export const topic: Topic = {
  id: 'mareas',
  title: 'Cálculo y estima de altura y momento de la marea',
  readingTime: 20,
  audioTime: '19:00',

  content: [
    { type: 'title', text: 'Cálculo y Estima de Altura y Momento de la Marea' },
    { type: 'paragraph', text: 'Las mareas son uno de los fenómenos más importantes para la navegación, ya que determinan la profundidad real del agua en cualquier momento y lugar. Conocer cómo calcular la altura de la marea y el momento en que se produce es esencial para la seguridad de la navegación, especialmente en puertos, canales y zonas de bajo fondo.' },
    { type: 'title', text: '¿Qué son las mareas?' },
    { type: 'paragraph', text: 'Las mareas son movimientos periódicos de ascenso y descenso del nivel del mar, provocados principalmente por las fuerzas gravitacionales que ejercen la Luna y el Sol sobre la Tierra. Este movimiento se produce generalmente dos veces al día (mareas semidiurnas) en la mayoría de las costas.' },
    { type: 'list', items: [
      'Causa principal: atracción gravitacional de la Luna (aproximadamente 2/3 del efecto)',
      'Causa secundaria: atracción gravitacional del Sol (aproximadamente 1/3 del efecto)',
      'La fuerza centrífuga del sistema Tierra-Luna también contribuye',
      'Las mareas se manifiestan como oscilaciones del nivel del mar con períodos de aproximadamente 12 h 25 min (media luna)'
    ]},
    { type: 'title', text: 'Mareas de Sicigia y de Cuadratura' },
    { type: 'paragraph', text: 'Según la posición relativa del Sol, la Luna y la Tierra, las mareas tienen diferente amplitud:' },
    { type: 'list', items: [
      'Mareas de sicigia (vivas o de aguas vivas): ocurren en luna nueva y luna llena, cuando el Sol, la Luna y la Tierra están alineados. Las fuerzas se suman y la amplitud de la marea es máxima.',
      'Mareas de cuadratura (muertas o de aguas muertas): ocurren en cuarto creciente y cuarto menguante, cuando el Sol y la Luna forman un ángulo de 90° respecto a la Tierra. Las fuerzas se contrarrestan parcialmente y la amplitud es mínima.',
      'La amplitud es la diferencia de altura entre la pleamar y la bajamar',
      'El coeficiente de marea indica la fuerza de la marea: alto en sicigia, bajo en cuadratura'
    ]},
    { type: 'title', text: 'Terminología de las mareas' },
    { type: 'list', items: [
      'Pleamar (High Water, HW): punto más alto alcanzado por la marea en un ciclo',
      'Bajamar (Low Water, LW): punto más bajo alcanzado por la marea en un ciclo',
      'Flujo (Flood): período de ascenso del nivel del mar (de bajamar a pleamar)',
      'Reflujo (Ebb): período de descenso del nivel del mar (de pleamar a bajamar)',
      'Estoa (Slack water): momento de transición entre flujo y reflujo, cuando la corriente de marea es mínima y el nivel se mantiene casi constante brevemente',
      'Amplitud de marea: diferencia de altura entre pleamar y bajamar',
      'Nivel medio del mar: altura promedio del mar en un período largo'
    ]},
    { type: 'title', text: 'Plano de Reducción de Sondaajes (PRS)' },
    { type: 'paragraph', text: 'Las profundidades indicadas en las cartas náuticas se refieren a un nivel de referencia llamado Plano de Reducción de Sondaajes (PRS), también conocido como datum de sondaajes. Este nivel se fija por debajo del nivel medio del mar, de modo que en la gran mayoría de los casos la profundidad real sea igual o mayor que la indicada en la carta.' },
    { type: 'list', items: [
      'El PRS corresponde aproximadamente a la bajamar más baja que se puede esperar en condiciones meteorológicas normales',
      'Todas las sondas (profundidades) de la carta están referidas al PRS',
      'La altura de la marea se mide desde el PRS hacia arriba',
      'Profundidad real = Sonda de carta + Altura de marea'
    ]},
    { type: 'title', text: 'Constantes armónicas' },
    { type: 'paragraph', text: 'Las constantes armónicas son valores numéricos que caracterizan el régimen de mareas de un puerto o lugar determinado. Se obtienen mediante análisis matemático de series de observaciones de mareas y permiten predecir las alturas y horas de pleamares y bajamares.' },
    { type: 'list', items: [
      'Cada puerto tiene sus propias constantes armónicas',
      'Las constantes se publican en anuarios de mareas',
      'Permiten calcular la altura de marea para cualquier fecha y hora',
      'Los puertos principales tienen tablas completas; los puertos secundarios se calculan por diferencias respecto al puerto principal'
    ]},
    { type: 'title', text: 'Cómo calcular la altura de marea usando las tablas' },
    { type: 'paragraph', text: 'El procedimiento general para calcular la altura de marea en un momento dado es el siguiente:' },
    { type: 'list', items: [
      'Consultar la tabla de mareas del puerto para el día deseado',
      'Identificar las horas y alturas de pleamar (HW) y bajamar (LW)',
      'Determinar la duración entre pleamar y bajamar adyacentes',
      'Determinar la amplitud de marea (diferencia HW − LW)',
      'Usar la regla de los doceavos o la tabla de correcciones para interpolar la altura en el momento deseado',
      'La regla de los doceavos: en cada hora del ciclo de 6 horas, la marea sube o baja 1/12, 2/12, 3/12, 3/12, 2/12, 1/12 de la amplitud'
    ]},
    { type: 'title', text: 'La regla de los doceavos' },
    { type: 'paragraph', text: 'La regla de los doceavos es un método práctico para estimar la altura de la marea en un momento intermedio entre pleamar y bajamar, asumiendo un ciclo de aproximadamente 6 horas:' },
    { type: 'list', items: [
      'Hora 1: sube/baja 1/12 de la amplitud',
      'Hora 2: sube/baja 2/12 de la amplitud',
      'Hora 3: sube/baja 3/12 de la amplitud',
      'Hora 4: sube/baja 3/12 de la amplitud',
      'Hora 5: sube/baja 2/12 de la amplitud',
      'Hora 6: sube/baja 1/12 de la amplitud',
      'Total: 12/12 = la amplitud completa'
    ]},
    { type: 'paragraph', text: 'Esta regla permite estimaciones rápidas sin necesidad de tablas complejas, aunque las publicaciones oficiales de mareas proporcionan cálculos más precisos.' }
  ],

  quiz: [
    {
      question: '¿Cuál es la causa principal de las mareas?',
      options: ['El viento sobre la superficie del mar', 'La atracción gravitacional de la Luna', 'La rotación de la Tierra', 'Las corrientes oceánicas'],
      correctAnswer: 1,
      explanation: 'La causa principal de las mareas es la atracción gravitacional de la Luna, que representa aproximadamente dos tercios del efecto total. El Sol contribuye con el tercio restante.'
    },
    {
      question: '¿Cuándo ocurren las mareas de sicigia (vivas)?',
      options: ['En cuarto creciente y cuarto menguante', 'En luna nueva y luna llena', 'Solo en verano', 'Durante los equinoccios'],
      correctAnswer: 1,
      explanation: 'Las mareas de sicigia ocurren en luna nueva y luna llena, cuando el Sol, la Luna y la Tierra están alineados y sus fuerzas gravitacionales se suman, produciendo la máxima amplitud de marea.'
    },
    {
      question: '¿Qué es el Plano de Reducción de Sondaajes (PRS)?',
      options: ['El nivel más alto de la marea', 'El nivel de referencia al que se refieren todas las profundidades de la carta', 'La profundidad media del puerto', 'El nivel del mar en reposo'],
      correctAnswer: 1,
      explanation: 'El PRS es el nivel de referencia (datum) al que se refieren todas las sondas de la carta náutica. Corresponde aproximadamente a la bajamar más baja esperable en condiciones normales.'
    },
    {
      question: 'Según la regla de los doceavos, ¿qué fracción de la amplitud sube la marea en la tercera hora?',
      options: ['1/12', '2/12', '3/12', '4/12'],
      correctAnswer: 2,
      explanation: 'Según la regla de los doceavos, en la tercera hora la marea sube 3/12 de la amplitud total. La secuencia es: 1/12, 2/12, 3/12, 3/12, 2/12, 1/12.'
    }
  ]
};

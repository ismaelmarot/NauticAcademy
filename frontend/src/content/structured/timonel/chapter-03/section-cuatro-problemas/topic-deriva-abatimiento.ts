import { Topic } from '@/content/types';

export const topic: Topic = {
  id: 'deriva-abatimiento',
  title: 'La deriva y el abatimiento',
  readingTime: 24,
  audioTime: '22:00',

  content: [
    { type: 'title', text: 'La Deriva y el Abatimiento' },
    { type: 'paragraph', text: 'Cuando una embarcación navega, rara vez se desplaza exactamente en la dirección hacia la que apunta su proa. Dos factores externos —las corrientes marinas y el viento— desvían al buque de su rumbo previsto. Estos efectos se denominan deriva y abatimiento, y su correcta evaluación y compensación es esencial para una navegación precisa.' },
    { type: 'title', text: 'La Deriva' },
    { type: 'paragraph', text: 'La deriva es el desplazamiento lateral que sufre una embarcación debido a la acción de las corrientes marinas. Una corriente es una masa de agua en movimiento con una dirección y una velocidad determinadas. Cuando el buque se encuentra dentro de una corriente, esta lo arrastra en su dirección, modificando la trayectoria real sobre el fondo.' },
    { type: 'list', items: [
      'Dirección de la corriente: hacia donde fluye el agua (se expresa en grados verdaderos)',
      'Intensidad o velocidad de la corriente: se mide en nudos',
      'Deriva (abreviatura: d): ángulo entre el rumbo y la derrota efectiva producido por la corriente',
      'El buque se mueve en la resultante de su velocidad propia más la velocidad de la corriente',
      'La deriva puede ser a estribor (positiva) o a babor (negativa)'
    ]},
    { type: 'paragraph', text: 'La deriva no es un error del compás ni del navegante, sino un fenómeno físico real. Para compensarla, el navegante debe calcular el rumbo de estimación que, sumado vectorialmente al efecto de la corriente, resulte en la derrota deseada.' },
    { type: 'title', text: 'El Abatimiento' },
    { type: 'paragraph', text: 'El abatimiento es el desplazamiento lateral que sufre la embarcación debido a la acción del viento sobre las obras muertas (parte del buque por encima de la línea de flotación). A diferencia de la deriva, que es causada por el agua, el abatimiento es causado por el aire.' },
    { type: 'list', items: [
      'Símbolo: A (a veces Ab)',
      'Ángulo entre el rumbo y la derrota efectiva producido por el viento',
      'Depende de: la intensidad del viento, el ángulo del viento respecto a la proa, la superficie vélica o de obra muerta expuesta, y el calado del buque',
      'Los buques de vela son mucho más sensibles al abatimiento que los de motor',
      'Abatimiento a estribor: positivo (+); a babor: negativo (−)'
    ]},
    { type: 'paragraph', text: 'En la práctica, el navegante debe gobernar un rumbo que tenga en cuenta tanto la deriva como el abatimiento para seguir la derrota prevista. La corrección total es la suma algebraica de ambos efectos.' },
    { type: 'title', text: 'Análisis vectorial: triángulo de velocidades' },
    { type: 'paragraph', text: 'La combinación de rumbo, velocidad del buque, corriente y viento se resuelve mediante un análisis vectorial. El triángulo de velocidades relaciona:' },
    { type: 'list', items: [
      'Vector del buque: rumbo y velocidad del buque respecto al agua (R y Vb)',
      'Vector de la corriente: dirección e intensidad de la corriente (Dc e Ic)',
      'Vector resultante: derrota efectiva y velocidad efectiva (Re y Ve)',
      'Conociendo dos de los tres vectores, se puede resolver el tercero gráficamente o mediante cálculo trigonométrico'
    ]},
    { type: 'title', text: 'Método directo para el análisis de la deriva' },
    { type: 'paragraph', text: 'El método directo consiste en conocer las características de la corriente (dirección e intensidad) antes de navegar, y calcular de antemano el rumbo que se debe gobernar para contrarrestar su efecto.' },
    { type: 'list', items: [
      'Se conoce la derrota deseada (ruta a seguir sobre la carta)',
      'Se conoce la velocidad del buque (Vb) y las características de la corriente (dirección e intensidad)',
      'Se construye el triángulo de velocidades partiendo del punto de salida',
      'Se traza el vector de la corriente desde el punto de partida',
      'Desde el extremo del vector de corriente, se traza un arco con radio igual a Vb',
      'El punto donde el arco corta la derrota deseada determina el rumbo a gobernar'
    ]},
    { type: 'title', text: 'Método indirecto para el análisis de la deriva' },
    { type: 'paragraph', text: 'El método indirecto se usa cuando no se conocen las características de la corriente, pero se puede determinar observando la posición real del buque en relación con la posición estimada.' },
    { type: 'list', items: [
      'Se parte de una posición conocida (fijada por GPS, demoras u otro método)',
      'Se navega un tiempo determinado a un rumbo y velocidad conocidos',
      'Se obtiene una nueva posición (por observación o GPS)',
      'La diferencia entre la posición estimada (sin corriente) y la posición real indica la dirección e intensidad de la corriente',
      'El vector que une la posición estimada con la posición real es el vector de corriente'
    ]},
    { type: 'title', text: 'Cómo hallar la dirección y velocidad de la corriente en las cartas' },
    { type: 'paragraph', text: 'Las cartas náuticas y los derroteros proporcionan información sobre las corrientes predominantes en la zona. Además, las tablas de mareas y corrientes ofrecen datos detallados:' },
    { type: 'list', items: [
      'Cartas náuticas: indican corrientes permanentes con flechas y valores de velocidad',
      'Derroteros: describen corrientes estacionales y locales',
      'Tablas de mareas: proporcionan direcciones e intensidades de corrientes de marea',
      'Publicaciones de corrientes: datos de corrientes oceánicas como la del Golfo, Brasil, etc.',
      'GPS: comparando la posición estimada con la real se puede deducir la corriente actual'
    ]},
    { type: 'title', text: 'Método 50/90 para curvas de corrientes de marea' },
    { type: 'paragraph', text: 'El método 50/90 es una aproximación práctica para estimar la velocidad de la corriente de marea en momentos intermedios entre la pleamar/bajamar y el momento de máxima corriente. Se basa en la observación de que la velocidad de la corriente no aumenta linealmente, sino que sigue una curva aproximada:' },
    { type: 'list', items: [
      'A la primera hora después del reposo (estoa): la corriente alcanza aproximadamente el 50% de su velocidad máxima',
      'A la segunda hora: alcanza aproximadamente el 90% de su velocidad máxima',
      'A la tercera hora: alcanza el 100% (velocidad máxima)',
      'Luego comienza a disminuir siguiendo la misma proporción en sentido inverso',
      'Este método permite estimar la corriente cuando solo se conoce la hora y velocidad máxima'
    ]},
    { type: 'paragraph', text: 'Dominar la deriva y el abatimiento permite al navegante gobernar el rumbo correcto para seguir la derrota prevista, compensando los efectos del agua y del viento sobre la embarcación.' }
  ],

  quiz: [
    {
      question: '¿Qué es la deriva en navegación?',
      options: ['El desplazamiento lateral causado por el viento', 'El desplazamiento lateral causado por las corrientes marinas', 'El error del compás magnético', 'La diferencia entre rumbo y derrota'],
      correctAnswer: 1,
      explanation: 'La deriva es el desplazamiento lateral que sufre una embarcación debido a la acción de las corrientes marinas, que arrastran al buque en su dirección.'
    },
    {
      question: '¿Qué es el abatimiento?',
      options: ['El desplazamiento causado por la corriente', 'El ángulo de escora del buque', 'El desplazamiento lateral causado por el viento sobre las obras muertas', 'La velocidad del buque respecto al fondo'],
      correctAnswer: 2,
      explanation: 'El abatimiento es el desplazamiento lateral producido por la acción del viento sobre las obras muertas (parte del buque sobre la línea de flotación).'
    },
    {
      question: 'En el método 50/90, ¿qué porcentaje de la velocidad máxima alcanza la corriente en la primera hora?',
      options: ['25%', '50%', '75%', '90%'],
      correctAnswer: 1,
      explanation: 'Según el método 50/90, en la primera hora después del reposo la corriente alcanza aproximadamente el 50% de su velocidad máxima.'
    },
    {
      question: 'En el método indirecto, ¿cómo se determina la corriente?',
      options: ['Consultando el derrotero', 'Comparando la posición estimada con la posición real observada', 'Midiendo con el sextante', 'Usando la tabla de mareas'],
      correctAnswer: 1,
      explanation: 'El método indirecto consiste en comparar la posición estimada (sin corriente) con la posición real observada; el vector que une ambas posiciones indica la dirección e intensidad de la corriente.'
    }
  ]
};

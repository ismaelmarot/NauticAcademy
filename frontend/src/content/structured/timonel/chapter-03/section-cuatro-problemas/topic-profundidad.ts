import { Topic } from '@/content/types';

export const topic: Topic = {
  id: 'profundidad',
  title: 'Profundidad, calado y margen de seguridad',
  readingTime: 19,
  audioTime: '18:00',

  content: [
    { type: 'title', text: 'Profundidad, Calado y Margen de Seguridad' },
    { type: 'paragraph', text: 'Uno de los problemas fundamentales de la navegación es saber si hay suficiente agua debajo de la quilla del buque para pasar con seguridad. Esto requiere comprender la relación entre la profundidad indicada en la carta, la altura de la marea en el momento de la navegación y el calado del buque.' },
    { type: 'subtitle', text: 'El problema de la profundidad' },
    { type: 'paragraph', text: 'Las profundidades indicadas en las cartas náuticas no representan la profundidad real del agua en todo momento. Estas sondas están referidas al Plano de Reducción de Sondaajes (PRS), que corresponde a un nivel bajo de referencia. La profundidad real del agua varía con la marea, y el navegante debe calcular si la profundidad disponible es suficiente para el calado de su embarcación.' },
    { type: 'list', items: [
      'La sonda de carta indica la profundidad desde el PRS hasta el fondo',
      'La altura de marea se suma a la sonda de carta para obtener la profundidad real',
      'El calado del buque es la distancia vertical desde la línea de flotación hasta el punto más bajo de la quilla',
      'El margen de seguridad (resguardo) es la profundidad adicional que se deja entre la quilla y el fondo'
    ]},
    { type: 'subtitle', text: 'La fórmula fundamental: P = PRS + Hm' },
    { type: 'paragraph', text: 'La profundidad real del agua (P) en un momento dado se calcula sumando la sonda de carta (el valor indicado en la carta, referido al PRS) más la altura de la marea (Hm) en ese momento:' },
    { type: 'list', items: [
      'P = PRS + Hm',
      'Donde: P = profundidad real del agua en el momento de la navegación',
      'Donde: PRS = sonda indicada en la carta (profundidad desde el plano de reducción hasta el fondo)',
      'Donde: Hm = altura de la marea sobre el PRS en el momento deseado',
      'Si Hm es positiva (marea alta): la profundidad real es mayor que la de carta',
      'Si Hm es negativa (marea muy baja): la profundidad real puede ser menor que la de carta'
    ]},
    { type: 'subtitle', text: 'El calado del buque' },
    { type: 'paragraph', text: 'El calado es la distancia vertical entre la línea de flotación y el punto más sumergido del casco (generalmente la quilla). Es un dato fundamental que todo navegante debe conocer de su embarcación:' },
    { type: 'list', items: [
      'Calado máximo: el mayor calado del buque, generalmente en la popa',
      'Calado a proa y calado a popa: pueden ser diferentes dependiendo del asiento',
      'El calado varía según la carga, el combustible, el agua y las provisiones a bordo',
      'Se lee en las marcas de calado (escalas de calado) pintadas en el casco a proa y popa',
      'En las cartas de navegación y documentos del buque figura el calado máximo'
    ]},
    { type: 'subtitle', text: 'Margen de seguridad (under-keel clearance)' },
    { type: 'paragraph', text: 'El margen de seguridad o resguardo bajo la quilla es la distancia vertical entre el punto más bajo de la quilla y el fondo marino. Es el "colchón" de agua que separa al buque del fondo.' },
    { type: 'list', items: [
      'Margen de seguridad = Profundidad real − Calado del buque',
      'También: Margen = (PRS + Hm) − Calado',
      'Se recomienda un mínimo de 0,5 a 1,0 metros en aguas costeras protegidas',
      'En mar abierto o con fondo irregular, se recomienda un margen mayor (2 m o más)',
      'En zonas de oleaje, se debe considerar el hundimiento del buque en el seno de la ola (squat)',
      'El "squat" es el hundimiento adicional del buque por efecto de la velocidad en aguas poco profundas'
    ]},
    { type: 'subtitle', text: 'Sondajes en la carta náutica' },
    { type: 'paragraph', text: 'Las cartas náuticas representan las profundidades mediante números (sondas) y curvas isobáticas (isóbatas). Interpretar correctamente esta información es esencial para la navegación segura:' },
    { type: 'list', items: [
      'Los números indican la profundidad en metros (cartas modernas) o en brazas/pies (cartas antiguas)',
      'Las isóbatas son líneas que unen puntos de igual profundidad (como las curvas de nivel en tierra)',
      'La zona de seguridad (seguro para la navegación) está fuera de la isóbata de profundidad adecuada',
      'Los fondos bajos se señalan en la carta con tipografía especial o color diferente',
      'Las zonas de sonda desconocida o no explorada se indican claramente',
      'Hay que verificar la unidad de las sondas en la leyenda de la carta'
    ]},
    { type: 'subtitle', text: 'Cómo determinar si hay suficiente agua para pasar' },
    { type: 'paragraph', text: 'El procedimiento para verificar si hay suficiente profundidad para navegar por una zona es el siguiente:' },
    { type: 'list', items: [
      'Paso 1: Identificar la sonda mínima en la ruta prevista (de la carta náutica)',
      'Paso 2: Calcular la altura de marea en el momento de paso (tablas de mareas)',
      'Paso 3: Calcular la profundidad real: P = PRS + Hm',
      'Paso 4: Conocer el calado máximo del buque',
      'Paso 5: Calcular el margen de seguridad: Margen = P − Calado',
      'Paso 6: Verificar que el margen sea suficiente (mínimo 0,5-1,0 m)',
      'Si el margen es insuficiente, esperar a marea más alta o buscar una ruta alternativa',
      'Considerar también el efecto del oleaje y el squat a velocidad'
    ]},
    { type: 'subtitle', text: 'Ejemplo práctico' },
    { type: 'paragraph', text: 'Un buque con calado de 2,5 metros quiere pasar por un canal donde la carta indica una sonda mínima de 1,8 metros. En el momento del paso, la altura de marea es de 2,0 metros.' },
    { type: 'list', items: [
      'Profundidad real: P = 1,8 + 2,0 = 3,8 metros',
      'Margen de seguridad: 3,8 − 2,5 = 1,3 metros',
      'Conclusión: hay suficiente agua con un margen de 1,3 m, que es aceptable',
      'Si la marea fuera de solo 0,5 m: P = 1,8 + 0,5 = 2,3 m; Margen = 2,3 − 2,5 = −0,2 m → ¡NO PASAR!'
    ]},
    { type: 'paragraph', text: 'Este cálculo simple puede ser la diferencia entre una navegación segura y un encallamiento. Siempre debe realizarse antes de navegar por zonas de profundidad limitada.' }
  ],

  quiz: [
    {
      question: '¿Cuál es la fórmula para calcular la profundidad real del agua?',
      options: ['P = PRS − Hm', 'P = PRS × Hm', 'P = PRS + Hm', 'P = Calado + Hm'],
      correctAnswer: 2,
      explanation: 'La profundidad real (P) se calcula sumando la sonda de carta (PRS) más la altura de la marea (Hm): P = PRS + Hm.'
    },
    {
      question: '¿Qué es el margen de seguridad bajo la quilla?',
      options: ['La profundidad total del agua', 'La distancia entre la quilla y el fondo marino', 'El calado del buque', 'La altura de la marea'],
      correctAnswer: 1,
      explanation: 'El margen de seguridad (under-keel clearance) es la distancia vertical entre el punto más bajo de la quilla y el fondo marino. Se calcula como: Profundidad real − Calado.'
    },
    {
      question: 'Un buque con calado de 3,0 m pasa por una zona donde la sonda de carta es 2,0 m y la marea es 1,5 m. ¿Cuál es el margen de seguridad?',
      options: ['0,5 m', '1,0 m', '1,5 m', '6,5 m'],
      correctAnswer: 0,
      explanation: 'Profundidad real = 2,0 + 1,5 = 3,5 m. Margen = 3,5 − 3,0 = 0,5 m. Este margen es justo pero aceptable.'
    },
    {
      question: '¿Qué es el "squat" en navegación?',
      options: ['Un tipo de ancla', 'El hundimiento adicional del buque por efecto de la velocidad en aguas poco profundas', 'Un tipo de corriente', 'La inclinación del buque por el viento'],
      correctAnswer: 1,
      explanation: 'El squat es el hundimiento adicional que experimenta un buque cuando navega a velocidad en aguas poco profundas, debido a la alteración del flujo de agua bajo el casco. Debe considerarse al calcular el margen de seguridad.'
    }
  ]
};

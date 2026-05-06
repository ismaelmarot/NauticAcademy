import { Topic } from '@/content/types';

export const topic: Topic = {
  id: 'las-nubes',
  title: 'Las Nubes y las de Tormenta',
  readingTime: 17,
  audioTime: '16:00',

  content: [
    { type: 'title', text: 'Las Nubes' },
    { type: 'paragraph', text: 'Las nubes son un conjunto de minúsculas partículas de agua o hielo suspendidas por corrientes ascendentes. Se forman cuando el aire húmedo asciende, se enfría y el vapor se condensa en torno a partículas de polvo, hollín y sales marinas. No son de vapor de agua (que es invisible), sino de agua líquida o hielo condensado.' },
    { type: 'paragraph', text: 'Para el navegante, las nubes son indicadores visuales del estado de la atmósfera y de los cambios que pueden venir.' },
    { type: 'title', text: 'Clasificación por Aspecto' },
    { type: 'list', items: [
      'Estratiformes: desarrollo horizontal, manto uniforme, estabilidad atmosférica, precipitación débil y persistente',
      'Cumuliformes: desarrollo vertical, inestabilidad atmosférica, precipitaciones intensas y localizadas'
    ]},
    { type: 'title', text: 'Nubes Altas (por encima de 6.000 m, cristales de hielo)' },
    { type: 'list', items: [
      'Cirrus (Ci): delgadas y fibrosas, "colas de caballo", no precipitan',
      'Cirrostratus (Cs): capa delgada blanquecina, produce halos alrededor del Sol o la Luna',
      'Cirrocúmulus (Cc): pequeños grumos blancos en ondulaciones, no precipitan'
    ]},
    { type: 'title', text: 'Nubes Medias (2 a 8 km según latitud, gotas de agua y cristales)' },
    { type: 'list', items: [
      'Altocúmulus (Ac): láminas blancas o grises, guijarros o rodillos, ~3.000-4.000 m',
      'Altostratus (As): capa grisácea uniforme, Sol visible como mancha difusa, puede precipitar llovizna'
    ]},
    { type: 'title', text: 'Nubes Bajas (por debajo de 2.000 m, gotas de agua)' },
    { type: 'list', items: [
      'Stratus (St): capa gris uniforme, puede producir lloviznas finas',
      'Stratocúmulus (Sc): mosaicos grises o blanquecinos, no dejan ver el Sol',
      'Nimbostratus (Ns): manto gris oscuro muy espeso, lluvia o nieve continua, no deja ver el Sol',
      'Cúmulus (Cu): contornos definidos, blancos, base plana, desarrollo vertical tipo coliflor'
    ]},
    { type: 'title', text: 'Cumulonimbos (Cb): La Nube de Tormenta' },
    { type: 'paragraph', text: 'El Cumulonimbo es una nube densa, potente y de enorme desarrollo vertical, desde ~500 m hasta el límite de la Tropósfera (10-12 km). Su cima adopta la característica forma de yunque.' },
    { type: 'paragraph', text: 'Ciclo de vida: 1-3 horas (2 horas promedio). Etapa de madurez: 20-40 minutos de fenómenos peligrosos.' },
    { type: 'list', items: [
      'Etapa de desarrollo: cúmulus crece por calentamiento superficial, corrientes ascendentes, poca turbulencia',
      'Etapa de madurez: coexisten corrientes ascendentes y descendentes (hasta 60 nudos). Produce lluvia intensa, granizo, ráfagas descendentes (>50 nudos) y actividad eléctrica violenta',
      'Frente de racha: flujo de aire violento cuando la corriente descendente toca el suelo y se desplaza radialmente',
      'Arcus o "cigarro": arco visible en la base, con roll clouds, wall clouds o shelf clouds',
      'Etapa de disipación: la nube pierde energía, se contrae, cesa la precipitación'
    ]},
    { type: 'title', text: 'Actividad Eléctrica' },
    { type: 'paragraph', text: 'Las colisiones entre cristales de hielo, graupel y gotas superenfriadas generan cargas eléctricas dentro del Cumulonimbo. Se forma una estructura de dipolo (alto positivo, medio negativo) y tripolo (alto positivo, medio negativo, base positiva).' },
    { type: 'list', items: [
      'Rayo: descarga entre nube y superficie (peligroso para la navegación)',
      'Relámpago: descarga dentro o entre nubes (no impacta el suelo)',
      'Temperatura del rayo: 25.000-30.000°C, 100-150 millones de voltios, ~20.000 Amperes',
      'Mayor riesgo: mediodía a media tarde, épocas de actividad frontal'
    ]}
  ],

  quiz: [
    {
      question: '¿De qué están compuestas las nubes?',
      options: ['De vapor de agua', 'De minúsculas partículas de agua o hielo', 'De polvo y hollín solamente', 'De aire caliente'],
      correctAnswer: 1,
      explanation: 'Las nubes están formadas por minúsculas partículas de agua líquida o hielo suspendidas por corrientes ascendentes, no por vapor de agua (que es invisible).'
    },
    {
      question: '¿Qué tipo de nube produce halos alrededor del Sol o la Luna?',
      options: ['Cirrus', 'Cirrostratus', 'Altostratus', 'Nimbostratus'],
      correctAnswer: 1,
      explanation: 'El Cirrostratus forma una capa delgada de cristales de hielo que produce el efecto de halo alrededor del Sol o la Luna por refracción de la luz.'
    },
    {
      question: '¿Cuánto dura la etapa de madurez de un Cumulonimbo?',
      options: ['5 a 10 minutos', '20 a 40 minutos', '2 a 3 horas', '6 a 12 horas'],
      correctAnswer: 1,
      explanation: 'La etapa de madurez del Cumulonimbo, cuando produce lluvia fuerte, granizo, ráfagas y actividad eléctrica, dura entre 20 y 40 minutos.'
    },
    {
      question: '¿Qué es el "frente de racha"?',
      options: ['El frente cálido de un sistema frontal', 'El flujo de aire violento que se expande radialmente cuando la corriente descendente toca el suelo', 'Una línea de nubes Cirrus', 'El borde de un anticiclón'],
      correctAnswer: 1,
      explanation: 'El frente de racha es el flujo de aire violento que se produce cuando la corriente descendente del Cumulonimbo toca el suelo y se desplaza radialmente con gran fuerza.'
    }
  ]
};

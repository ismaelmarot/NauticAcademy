import { Topic } from '@/content/types';

export const topic: Topic = {
  id: 'propellers',
  title: 'Las Hélices',
  readingTime: 22,
  audioTime: '20:15',

  content: [
    { type: 'title', text: 'Introducción' },
    { type: 'paragraph', text: 'El sistema de propulsión transforma la energía (viento o motor) en movimiento. En veleros, la fuerza primaria es el viento sobre las velas, pero la propulsión mecánica cumple un papel importante en maniobras, calma o tormenta.' },
    { type: 'paragraph', text: 'La hélice es una pieza con forma helicoidal que, al girar, impulsa el agua hacia atrás generando el empuje que hace avanzar el casco. También existen jets de agua y hélices de paso variable como alternativas eficientes.' },

    { type: 'title', text: 'Características de una Hélice' },
    { type: 'paragraph', text: 'La hélice está formada por un núcleo o nuez donde se montan las palas, y donde encastra el eje porta hélice. Su rendimiento depende de: diámetro, cantidad de palas, paso y velocidad máxima de rotación.' },

    { type: 'title', text: 'Diámetro' },
    { type: 'paragraph', text: 'Es la medida desde la punta de una pala hasta la punta opuesta. Determina la masa de agua que la hélice puede mover por cada vuelta.' },
    { type: 'paragraph', text: 'En barcos con cascos pesados o motores con mucho torque, se usa diámetro grande para empujar mucha agua a pocas RPM. En cascos livianos y rápidos convienen diámetros más pequeños para girar más rápido.' },
    { type: 'paragraph', text: 'El diámetro máximo está condicionado por el espacio bajo la línea de flotación o dentro de la cola del motor fuera de borda.' },

    { type: 'title', text: 'Cantidad de Palas' },
    { type: 'paragraph', text: 'Generalmente entre 2 y 5 palas, buscando equilibrio entre suavidad, empuje y rendimiento:' },
    { type: 'list', items: [
      '2 palas: Más eficientes, menos resistencia, pero generan vibraciones. Para barcos livianos o veleros.',
      '3 palas: Mejor alternativa, empuje estable y buen rendimiento a distintas velocidades.',
      '4 palas: Más empuje y menos vibración. Ideales para cascos pesados o planeadores.',
      '5 palas o más: Máxima suavidad y agarre. Para embarcaciones rápidas de planeo.'
    ]},

    { type: 'title', text: 'Paso (Pitch)' },
    { type: 'paragraph', text: 'Es la inclinación de las palas, define la distancia que recorrería la hélice en un giro completo en condiciones ideales (sin resbalamiento). Se expresa en pulgadas.' },
    { type: 'paragraph', text: 'Paso corto da más aceleración; paso largo permite mayor velocidad final pero exige más potencia. Es inversamente proporcional a las RPM: mayor número de revoluciones = menor paso, y viceversa.' },
    { type: 'paragraph', text: 'En veleros se usan hélices de paso constante (motores a régimen regular). En lanchas y barcos de planeo se usan hélices de paso variable (distintas velocidades).' },

    { type: 'title', text: 'Velocidad Máxima de Rotación' },
    { type: 'paragraph', text: 'Es el número máximo de RPM al que la hélice puede girar de manera segura y eficiente. Está condicionado por el rango de RPM del motor y la relación de transmisión.' },
    { type: 'paragraph', text: 'Para alto número de revoluciones se prefieren hélices de 3 o 4 palas. Las de 2 palas producen excesivas vibraciones y las de más de 4 palas sufren caída brusca del rendimiento.' },

    { type: 'title', text: 'Fuerzas Laterales y Resbalamiento' },
    { type: 'paragraph', text: 'La presión hidráulica aumenta con la profundidad, por lo que las palas inferiores encuentran mayor resistencia que las superiores, generando una fuerza de desplazamiento lateral.' },
    { type: 'paragraph', text: 'Hélices dextrógiras: Giran en sentido horario (vistas desde atrás). En marcha adelante traccionan la popa hacia estribor (derecha), cayendo la proa hacia babor. En marcha atrás se convierten en levógiras, llevando la popa hacia babor con efecto más notable.' },
    { type: 'paragraph', text: 'Hélices levógiras: Giran en sentido antihorario. El efecto es opuesto al de las dextrógiras.' },
    { type: 'paragraph', text: 'En marcha atrás, el flujo impacta en el codaste o espejo del casco, generando fuerzas adicionales que afectan el gobierno. El resbalamiento disminuye el rendimiento al 60-70% de la potencia suministrada.' },
    { type: 'paragraph', text: 'En veleros el efecto barely se siente (pocas RPM, hélices pequeñas). En lanchas con motores poderosos se compensa usando dos hélices (una dextrógira y otra levógira).' },

    { type: 'title', text: 'Cavitación' },
    { type: 'paragraph', text: 'La cavitación ocurre cuando la hélice gira a excesivas revoluciones, generando una diferencia de presión tal que produce un vacío sobre el dorso de las palas.' },
    { type: 'paragraph', text: 'El agua se separa de la superficie de la hélice, ésta gira más rápido al no encontrar resistencia, y se produce una emulsión de agua que impacta a alta velocidad erosionando el material de las palas.' },
    { type: 'paragraph', text: 'El síntoma es que el motor acelera pero el barco no avanza, percibiéndose vibración en el eje. Se debe desacelerar hasta que desaparezcan los síntomas y luego aumentar velocidad gradualmente.' },

    { type: 'title', text: 'Tipos de Hélices' },
    { type: 'paragraph', text: 'Hélices de paso fijo: Paso definido de fábrica, no modificable. Simplicidad mecánica, confiabilidad, bajo costo y poco mantenimiento. Habituales en lanchas y veleros.' },
    { type: 'paragraph', text: 'Hélices de paso variable: El ángulo de las palas se modifica en marcha, permitiendo más empuje a bajas velocidades y mejor eficiencia en crucero. Comunes en buques mercantes y pesqueros.' },
    { type: 'paragraph', text: 'Hélices plegables: Palas se pliegan hacia atrás cuando no están impulsadas, reduciendo el arrastre cuando se navega a vela.' },
    { type: 'paragraph', text: 'Hélices de palas orientables: Palas se alinean con el flujo de agua cuando el motor no se usa, reduciendo resistencia sin perder eficiencia.' },
    { type: 'paragraph', text: 'Hélices contrarrotantes: Dos hélices coaxiales giran en sentidos opuestos. Eliminan el torque lateral y logran empuje rectilíneo estable.' },

    { type: 'title', text: 'Sistemas de Transmisión' },
    { type: 'paragraph', text: 'Línea de Eje: Sistema simple y robusto para motores internos. El eje atraviesa el casco por la bocina (tubo robusto). El prensa estopa evita filtraciones apretando una junta que abraza al eje. Afuera, el eje se apoya en una chumacera. Robusto y duradero, pero exige alineación cuidadosa.' },
    { type: 'paragraph', text: 'Saildrive (sistemas de pata): Común en veleros modernos. El motor conecta a un sistema vertical que sale perpendicularmente por el casco, terminando en una hélice con alineación perfecta y menos vibraciones.' },
    { type: 'paragraph', text: 'Sistemas Orientables: Unidades externas con hélices dirigibles controladas electrónicamente. El empuje es direccionable, cambiando el paradigma: ya no gobierna el timón sino el propio empuje.' },

    { type: 'title', text: 'Sistemas de Propulsión por Chorro de Agua (Waterjets)' },
    { type: 'paragraph', text: 'Aspira agua por la parte inferior de la embarcación y la expulsa a gran velocidad por una tobera orientable, generando empuje por reacción. No hay palas expuestas bajo la línea de flotación.' },
    { type: 'paragraph', text: 'Se destacan a alta velocidad con respuesta inmediata. Se utilizan en lanchas rápidas, embarcaciones militares, motos de agua, barcos de rescate y yates de altas prestaciones.' }
  ],

  quiz: [
    {
      question: '¿Qué determina el diámetro de una hélice?',
      options: [
        'La velocidad máxima del barco',
        'La masa de agua que puede mover por cada vuelta',
        'La cantidad de palas',
        'El tipo de combustible'
      ],
      correctAnswer: 1,
      explanation: 'El diámetro es la medida desde punta a punta de las palas y determina la masa de agua que la hélice puede mover por cada vuelta.'
    },
    {
      question: '¿Qué es el paso (pitch) de una hélice?',
      options: [
        'El diámetro de la hélice',
        'La inclinación de las palas que define distancia teórica por vuelta',
        'La velocidad de rotación',
        'El número de palas'
      ],
      correctAnswer: 1,
      explanation: 'El paso es la inclinación de las palas, define la distancia que recorrería la hélice en un giro completo en condiciones ideales (sin resbalamiento).'
    },
    {
      question: '¿Cómo se denominan las hélices que giran en sentido horario vista desde atrás?',
      options: ['Levógiras', 'Dextrógiras', 'Contrarrotantes', 'Plegables'],
      correctAnswer: 1,
      explanation: 'Las hélices dextrógiras giran en sentido horario vistas desde atrás, y las levógiras en sentido antihorario.'
    },
    {
      question: '¿Qué es la cavitación?',
      options: [
        'El plegado de las palas de la hélice',
        'Un vacío sobre el dorso de las palas que erosiona el material',
        'El paso variable de la hélice',
        'La fuerza lateral de la hélice'
      ],
      correctAnswer: 1,
      explanation: 'La cavitación ocurre cuando excesivas RPM generan un vacío sobre el dorso de las palas, produciendo una emulsión de agua que erosiona el material de la hélice.'
    },
    {
      question: '¿Qué sistema de transmisión es más común en veleros modernos?',
      options: ['Línea de eje', 'Saildrive (pata)', 'Waterjet', 'Chorro de agua'],
      correctAnswer: 1,
      explanation: 'El Saildrive o sistema de pata es común en veleros modernos: el motor conecta a un sistema vertical que sale perpendicularmente por el casco con alineación perfecta y menos vibraciones.'
    }
  ]
};

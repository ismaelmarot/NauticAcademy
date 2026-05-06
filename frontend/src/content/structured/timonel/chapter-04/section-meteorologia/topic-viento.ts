import { Topic } from '@/content/types';

export const topic: Topic = {
  id: 'viento',
  title: 'El Viento: Dirección e Intensidad',
  readingTime: 22,
  audioTime: '20:45',

  content: [
    { type: 'title', text: 'El Viento' },
    { type: 'paragraph', text: 'El viento es el movimiento del aire en la atmósfera que se desplaza desde zonas de alta presión hacia zonas de baja presión. Para los navegantes a vela, el viento es la fuerza que impulsa la embarcación y define las maniobras posibles.' },
    { type: 'paragraph', text: 'En la náutica, la velocidad del viento se mide en nudos (millas náuticas por hora) y la dirección se indica según el punto cardinal desde donde proviene. Así, un viento Este viene desde el Este.' },
    { type: 'title', text: 'Instrumentos de Medición' },
    { type: 'list', items: [
      'Anemómetro: mide la velocidad del viento mediante hélices o copas',
      'Veleta: indica la dirección del viento alineándose con el flujo de aire',
      'Anemógrafo: registra los valores de dirección y velocidad a lo largo del tiempo',
      'Dispositivos ultrasónicos: sin partes mecánicas, requieren menor mantenimiento'
    ]},
    { type: 'paragraph', text: 'En los mapas meteorológicos, el viento se representa con líneas barbadas: una barba larga = 10 nudos, barba corta = 5 nudos, triángulo = 50 nudos.' },
    { type: 'title', text: 'Factores que Definen la Dirección y Fuerza del Viento' },
    { type: 'title', text: 'Gradiente de Presión' },
    { type: 'paragraph', text: 'Es el factor principal que determina la velocidad del viento. Depende de la diferencia de presión entre un anticiclón y un ciclón y de la distancia en la que esa diferencia se distribuye. Cuanto mayor sea la diferencia y más corta la distancia, más intenso será el viento.' },
    { type: 'paragraph', text: 'En las cartas meteorológicas, isobaras más juntas indican un gradiente más pronunciado y, por lo tanto, vientos más fuertes.' },
    { type: 'title', text: 'Efecto de Coriolis' },
    { type: 'paragraph', text: 'La rotación terrestre desvía la trayectoria de todo lo que se mueve sobre su superficie. El efecto es nulo en el Ecuador y máximo en los polos. Desvía el viento hacia la derecha en el hemisferio Norte y hacia la izquierda en el hemisferio Sur. No modifica la velocidad, solo la dirección.' },
    { type: 'title', text: 'Rozamiento Superficial' },
    { type: 'paragraph', text: 'En los primeros ~100 metros de la atmósfera, el viento encuentra resistencia por contacto con la superficie terrestre. El máximo rozamiento se da en los primeros 10 metros, donde el viento cruza las isobaras con un ángulo de 20° a 30° hacia la baja presión. Este es el viento que "siente" el barco.' },
    { type: 'title', text: 'Fuerzas Centrípeta y Centrífuga' },
    { type: 'paragraph', text: 'Cuando el viento circula por isobaras curvas, sufre la acción de estas fuerzas. Alrededor de un anticiclón, la fuerza centrífuga acelera el viento (supergeostrófico). Alrededor de un ciclón, la fuerza centrípeta lo frena (subgeostrófico).' },
    { type: 'title', text: 'Viento Geostrófico' },
    { type: 'paragraph', text: 'Es el viento teórico que fluiría paralelo a las isobaras si solo actuaran el gradiente de presión y la fuerza de Coriolis, sin rozamiento ni curvatura.' },
    { type: 'title', text: 'Borneos, Rotaciones y Ráfagas' },
    { type: 'list', items: [
      'Borneos: pequeñas oscilaciones temporales en la dirección del viento alrededor de una predominante',
      'Rotaciones: cambios de dirección mayores y sostenidos, donde el viento no regresa a su rumbo inicial',
      'Ráfagas (rachas): aumentos breves en la velocidad, generalmente entre 15% y 50% sobre la velocidad media'
    ]},
    { type: 'paragraph', text: 'Las nubes también producen borneos y ráfagas: las zonas bajo su sombra se enfrían, creando gradientes locales de presión que generan aceleraciones puntuales del viento.' }
  ],

  quiz: [
    {
      question: '¿Qué indica la dirección del viento?',
      options: ['Hacia dónde se dirige', 'Desde dónde proviene', 'La velocidad de desplazamiento', 'La temperatura de la masa de aire'],
      correctAnswer: 1,
      explanation: 'La dirección del viento se indica siempre según el punto cardinal desde donde proviene, no hacia dónde se dirige.'
    },
    {
      question: '¿Cómo afecta el efecto de Coriolis al viento en el hemisferio Sur?',
      options: ['Lo desvía hacia la derecha', 'Lo desvía hacia la izquierda', 'Aumenta su velocidad', 'No tiene ningún efecto'],
      correctAnswer: 1,
      explanation: 'El efecto de Coriolis desvía el viento hacia la izquierda en el hemisferio Sur y hacia la derecha en el hemisferio Norte, sin modificar su velocidad.'
    },
    {
      question: '¿Qué indica un agrupamiento de isobaras muy juntas en una carta meteorológica?',
      options: ['Vientos débiles', 'Zona de calma', 'Gradiente de presión alto y vientos fuertes', 'Lluvia intensa'],
      correctAnswer: 2,
      explanation: 'Isobaras muy juntas indican un gradiente de presión pronunciado, lo que se traduce en vientos más intensos.'
    },
    {
      question: '¿Cuánto puede superar la velocidad de una ráfaga respecto a la velocidad media del viento?',
      options: ['5% a 10%', '10% a 15%', '15% a 50%', '50% a 100%'],
      correctAnswer: 2,
      explanation: 'Las ráfagas pueden alcanzar entre un 15% y un 50% por encima de la velocidad media del viento, dependiendo de las condiciones atmosféricas.'
    }
  ]
};

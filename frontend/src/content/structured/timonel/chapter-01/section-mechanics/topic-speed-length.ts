import { Topic } from '@/content/types';

export const topic: Topic = {
  id: 'speed-length',
  title: 'La Relación Entre la Velocidad y la Eslora del Barco',
  readingTime: 6,
  audioTime: '5:30',

  content: [
    { type: 'title', text: 'Introducción' },
    { type: 'paragraph', text: 'En la navegación a vela, la velocidad de un barco con casco de desplazamiento no depende solo de la fuerza del viento o del diseño de sus velas, sino también de las proporciones de su casco. La eslora, particularmente la longitud en la línea de flotación, juega un papel fundamental.' },
    { type: 'paragraph', text: 'Existe una relación bien establecida entre la longitud del barco y la velocidad máxima que puede alcanzar sin entrar en régimen de planeo, lo que define gran parte del comportamiento y prestaciones de los veleros de desplazamiento.' },

    { type: 'title', text: 'La Velocidad Máxima según la Eslora' },
    { type: 'paragraph', text: 'La gran mayoría de los veleros de crucero son embarcaciones de desplazamiento, lo que significa que la forma de su carena debe desplazar el agua para avanzar.' },
    { type: 'paragraph', text: 'Los veleros generan una onda mientras navegan, producida por el empuje de la proa en el agua. La sección delantera navega sobre la cresta de esa onda mientras que la sección media y la popa lo hace sobre su seno.' },
    { type: 'paragraph', text: 'La propagación de esa onda limita la velocidad máxima. La única alternativa para superar esa barrera es modificar el casco durante su diseño, convirtiéndolo en uno de planeo (como veleros de regata o lanchas) para que se eleve sobre la superficie del agua.' },
    { type: 'paragraph', text: 'Agregar un motor con potencia suficiente para superar el límite de velocidad máxima no es viable, porque se sometería la estructura a un esfuerzo que podría dañar el casco o sus apéndices. Un casco de desplazamiento seguirá empujando el agua, hasta que alguna parte termine rompiéndose.' },

    { type: 'title', text: 'Cálculo de la Velocidad Máxima' },
    { type: 'paragraph', text: 'Los veleros deben equiparse con motores cuya potencia corresponda a la que la embarcación puede soportar. El dato requerido para calcular dicha potencia es la velocidad máxima nominal del velero.' },
    { type: 'paragraph', text: 'Velocidad máxima = Relación Velocidad-Eslora × √(Eslora en Flotación)' },
    { type: 'paragraph', text: 'La velocidad máxima se expresa en nudos. La relación velocidad-eslora varía según las características de cada embarcación:' },
    { type: 'list', items: ['Velero de crucero típico: factor 1,35', 'Velero de casco más plano: factor 1,50 a 1,60', 'Velero de regata: factor ~2,00'] },

    { type: 'title', text: 'Ejemplo de Cálculo' },
    { type: 'paragraph', text: 'Para un velero de crucero de 23 pies de eslora en flotación:' },
    { type: 'paragraph', text: 'Velocidad máxima = 1,35 × √(23 pies) = 1,35 × 4,79 = 6,47 nudos' },
    { type: 'paragraph', text: 'Usando relaciones de 1,6 y 2,0 para veleros modernos y de regata resultarían velocidades de 7,67 y 9,59 nudos respectivamente.' },
    { type: 'paragraph', text: 'Esta fórmula solo sirve para estimar la velocidad máxima aproximada. En la práctica, la velocidad dependerá de varios parámetros adicionales no considerados en la fórmula.' }
  ],

  quiz: [
    {
      question: '¿Qué limita la velocidad máxima de un velero de desplazamiento?',
      options: ['La fuerza del viento', 'La onda que genera el barco', 'El tamaño de las velas', 'La potencia del motor'],
      correctAnswer: 1,
      explanation: 'La onda generada por el barco mientras navega limita su velocidad máxima. La sección delantera navega sobre la cresta de esa onda y la física de propagación impone un límite.'
    },
    {
      question: '¿Cuál es la relación velocidad-eslora típica de un velero de crucero?',
      options: ['1,00', '1,35', '1,60', '2,00'],
      correctAnswer: 1,
      explanation: 'Un velero típico de crucero tendrá un factor de relación velocidad-eslora del orden de 1,35.'
    },
    {
      question: '¿Qué fórmula se utiliza para calcular la velocidad máxima?',
      options: [
        'Vel = Relación × Eslora',
        'Vel = Relación × √(Eslora en Flotación)',
        'Vel = Eslora / Relación',
        'Vel = √(Relación × Eslora)'
      ],
      correctAnswer: 1,
      explanation: 'La fórmula es: Velocidad máxima = Relación Velocidad-Eslora × √(Eslora en Flotación).'
    },
    {
      question: '¿Qué sucede si se agrega un motor muy potente a un casco de desplazamiento?',
      options: [
        'Aumentará la velocidad indefinidamente',
        'El barco entrará en planeo',
        'Podría dañarse el casco por el esfuerzo',
        'La onda desaparecerá'
      ],
      correctAnswer: 2,
      explanation: 'Por más fuerza de propulsión que se aplique, un casco de desplazamiento seguirá empujando el agua hasta que alguna parte termine rompiéndose por el esfuerzo.'
    }
  ]
};

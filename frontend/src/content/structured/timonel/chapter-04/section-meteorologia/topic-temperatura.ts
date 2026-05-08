import type { Topic } from '../../../../types';

export const topic: Topic = {
  id: 'temperatura',
  title: 'La Temperatura',
  readingTime: 6,
  audioTime: '05:30',
  content: [
    {
      type: 'paragraph',
      text: 'La temperatura es un pilar fundamental de la meteorología, actuando como el principal motor de la dinámica atmosférica. Las variaciones de temperatura entre regiones generan contrastes de energía que la atmósfera intenta compensar, provocando movimientos del aire y fenómenos meteorológicos.'
    },
    {
      type: 'paragraph',
      text: 'Se mide con termómetro y termógrafo.'
    },
    {
      type: 'title',
      text: 'Escalas de temperatura'
    },
    {
      type: 'list',
      items: [
        'Celsius: Congelación a 0°C, ebullición a 100°C (usado en Argentina).',
        'Fahrenheit: Congelación a 32°F, ebullición a 212°F.',
        'Kelvin: Comienza en cero absoluto; 0°C = 273.15 K.'
      ]
    },
    {
      type: 'subtitle',
      text: 'Fórmulas de conversión'
    },
    {
      type: 'list',
      items: [
        'F = (9/5) × C + 32, o F = 1.8 × C + 32.',
        'C = (F - 32) / 1.8.'
      ]
    },
    {
      type: 'subtitle',
      text: 'Variaciones de temperatura'
    },
    {
      type: 'list',
      items: [
        'La radiación solar calienta el aire directamente y por transferencia desde el suelo.',
        'Las temperaturas máximas suelen ocurrir después del mediodía.',
        'Las temperaturas mínimas ocurren justo antes del amanecer.',
        'Las zonas costeras tienen variaciones térmicas diarias menores debido al efecto moderador térmico del agua.',
        'La temperatura disminuye con la altitud.'
      ]
    }
  ],
  quiz: [
    {
      question: '¿A qué temperaturas equivalen el punto de congelación y ebullición en la escala Celsius?',
      options: [
        '0°C y 100°C',
        '32°C y 212°C',
        '273.15°C y 373.15°C',
        '-273.15°C y 0°C'
      ],
      correctAnswer: 0,
      explanation: 'En la escala Celsius, el punto de congelación es 0°C y el de ebullición es 100°C.'
    },
    {
      question: '¿Cuándo ocurren generalmente las temperaturas mínimas?',
      options: [
        'Al mediodía',
        'Al atardecer',
        'Justo antes del amanecer',
        'A medianoche'
      ],
      correctAnswer: 2,
      explanation: 'Las temperaturas mínimas ocurren justo antes del amanecer, después de la pérdida de calor durante toda la noche.'
    },
    {
      question: '¿Qué escala de temperatura se utiliza en Argentina?',
      options: [
        'Fahrenheit',
        'Kelvin',
        'Celsius',
        'Rankine'
      ],
      correctAnswer: 2,
      explanation: 'En Argentina se utiliza la escala Celsius, donde el punto de congelación es 0°C y el de ebullición es 100°C.'
    },
    {
      question: '¿Cómo varía la temperatura con la altitud?',
      options: [
        'Aumenta con la altitud',
        'Disminuye con la altitud',
        'Permanece constante',
        'Varía de forma impredecible'
      ],
      correctAnswer: 1,
      explanation: 'La temperatura disminuye con la altitud, ya que el aire es menos denso y retiene menos calor a mayores altitudes.'
    }
  ]
};

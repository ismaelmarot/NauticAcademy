import { Topic } from '@/content/types';

export const topic: Topic = {
  id: 'calculos-distancia',
  title: 'Cálculos de distancia, de tiempo y de velocidad',
  readingTime: 8,
  audioTime: '07:30',

  content: [
    { type: 'title', text: 'Cálculos de Distancia, Tiempo y Velocidad' },
    { type: 'paragraph', text: 'Tres magnitudes fundamentales gobiernan toda la navegación: la distancia recorrida, el tiempo empleado y la velocidad del buque. Estas tres variables están relacionadas por tres ecuaciones simples que todo navegante debe dominar y aplicar con fluidez.' },
    { type: 'title', text: 'Las tres ecuaciones fundamentales' },
    { type: 'paragraph', text: 'La relación entre distancia (D), velocidad (V) y tiempo (T) se expresa mediante tres ecuaciones básicas. En navegación, las unidades son: distancia en millas marinas (M), velocidad en nudos (kn) y tiempo en horas (h).' },
    { type: 'list', items: [
      'D = V × T — Distancia = Velocidad × Tiempo',
      'T = D / V — Tiempo = Distancia / Velocidad',
      'V = D / T — Velocidad = Distancia / Tiempo',
      'Regla mnemotécnica: el triángulo D-V-T, donde D arriba, V y T abajo',
      'Tapando la incógnita en el triángulo, se obtiene la fórmula correspondiente'
    ]},
    { type: 'title', text: 'Ejemplo: Cálculo de distancia (D = V × T)' },
    { type: 'paragraph', text: 'Si un buque navega a 12 nudos durante 2,5 horas, ¿qué distancia recorre?' },
    { type: 'list', items: [
      'D = V × T',
      'D = 12 kn × 2,5 h',
      'D = 30 millas marinas',
      'El buque recorre 30 millas en 2 horas y 30 minutos'
    ]},
    { type: 'title', text: 'Ejemplo: Cálculo de tiempo (T = D / V)' },
    { type: 'paragraph', text: 'Si un buque debe recorrer 45 millas a una velocidad de 15 nudos, ¿cuánto tiempo tardará?' },
    { type: 'list', items: [
      'T = D / V',
      'T = 45 M / 15 kn',
      'T = 3 horas',
      'Si sale a las 08:00, llegará a las 11:00'
    ]},
    { type: 'paragraph', text: 'Cuando el resultado de tiempo tiene decimales, se convierten a minutos multiplicando la parte decimal por 60. Por ejemplo: 2,75 h = 2 h + (0,75 × 60) = 2 h 45 min.' },
    { type: 'title', text: 'Ejemplo: Cálculo de velocidad (V = D / T)' },
    { type: 'paragraph', text: 'Si un buque recorrió 24 millas en 1 hora y 36 minutos, ¿cuál fue su velocidad?' },
    { type: 'list', items: [
      'Primero convertir el tiempo a horas decimales: 1 h 36 min = 1 + (36/60) = 1,6 h',
      'V = D / T',
      'V = 24 M / 1,6 h',
      'V = 15 nudos'
    ]},
    { type: 'title', text: 'Relación entre millas, nudos y horas' },
    { type: 'paragraph', text: 'Es fundamental recordar que estas tres unidades están íntimamente ligadas:' },
    { type: 'list', items: [
      '1 nudo = 1 milla marina por hora',
      'Un buque a 10 nudos recorre 10 millas en 1 hora',
      'Un buque a 10 nudos recorre 1 milla cada 6 minutos',
      'Regla práctica: a 10 nudos, cada minuto se avanza 1 cable (0,1 milla)',
      'Para cálculos rápidos: minutos para recorrer 1 milla = 60 / velocidad en nudos'
    ]},
    { type: 'paragraph', text: 'Estas tres ecuaciones son la base de todos los cálculos de navegación, desde la planificación de travesías hasta la estimación de la hora de llegada (ETA). Dominarlas es imprescindible para todo navegante.' }
  ],

  quiz: [
    {
      question: 'Un buque navega a 8 nudos durante 3 horas. ¿Qué distancia recorre?',
      options: ['16 millas', '24 millas', '32 millas', '11 millas'],
      correctAnswer: 1,
      explanation: 'D = V × T = 8 kn × 3 h = 24 millas marinas.'
    },
    {
      question: '¿Cuánto tiempo tarda un buque en recorrer 60 millas a 12 nudos?',
      options: ['3 horas', '4 horas', '5 horas', '6 horas'],
      correctAnswer: 2,
      explanation: 'T = D / V = 60 M / 12 kn = 5 horas.'
    },
    {
      question: 'Un buque recorre 18 millas en 1 hora y 12 minutos. ¿Cuál es su velocidad?',
      options: ['12 nudos', '14 nudos', '15 nudos', '18 nudos'],
      correctAnswer: 2,
      explanation: '1 h 12 min = 1,2 h. V = D / T = 18 M / 1,2 h = 15 nudos.'
    },
    {
      question: 'A 10 nudos, ¿cuánto tiempo se tarda en recorrer 1 milla?',
      options: ['10 minutos', '8 minutos', '6 minutos', '12 minutos'],
      correctAnswer: 2,
      explanation: 'Tiempo para 1 milla = 60 / velocidad = 60 / 10 = 6 minutos. A 10 nudos se recorre 1 milla cada 6 minutos.'
    }
  ]
};

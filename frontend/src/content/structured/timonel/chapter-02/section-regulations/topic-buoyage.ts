import { Topic } from '@/content/types';

export const topic: Topic = {
  id: 'buoyage',
  title: 'El Sistema de Balizamiento Marítimo',
  readingTime: 35,
  audioTime: '32:00',

  content: [
    { type: 'title', text: 'Antecedentes' },
    { type: 'paragraph', text: 'Hasta 1976 existían más de 30 sistemas de boyado diferentes, algunos contradictorios. Tras la Segunda Guerra Mundial, la IALA (International Association of Lighthouse Authorities) trabajó para unificar criterios.' },
    { type: 'paragraph', text: 'En 1957 se formó la IALA. En 1976 se completaron las reglas del Sistema Lateral Región "A" y "B". En 1980 se integró el Sistema Cardinal y se conformó el Sistema de Balizamiento Marítimo (IALA).' },

    { type: 'title', text: 'Principios Generales' },
    { type: 'paragraph', text: 'El Sistema de Balizamiento Marítimo comprende dos partes:' },
    { type: 'list', items: [
      'Sistema de Balizamiento Marítimo: Marcas laterales, cardinales, peligro aislado, nuevos peligros, aguas seguras, especiales.',
      'Ayudas a la Navegación: Dispositivos fijos (faros, espeques, balizas) y flotantes (boyas, buques faros).'
    ]},

    { type: 'title', text: 'Sistema Lateral - Región "A"' },
    { type: 'paragraph', text: 'Sentido convencional hacia el puerto más cercano. Babor = Rojo, Estribor = Verde. Formas: Cónicas a estribor, cilíndricas a babor. Luces: Roja a babor, Verde a estribor.' },

    { type: 'title', text: 'Sistema Lateral - Región "B"' },
    { type: 'paragraph', text: 'Sentido convencional hacia el puerto más cercano. Babor = Verde, Estribor = Rojo. Formas: Cónicas a babor, cilíndricas a estribor. Luces: Verde a babor, Roja a estribor.' },

    { type: 'title', text: 'Sistema Cardinal' },
    { type: 'paragraph', text: 'Indica dónde están las aguas más profundas (seguras) respecto a la marca. Norte: Negro arriba, Amarillo abajo. Este: Negro centro, Amarillo extremos. Sur: Amarillo arriba, Negro abajo. Oeste: Amarillo centro, Negro extremos.' },
    { type: 'paragraph', text: 'Luces blancas con ritmos: Norte (continuos rápidos), Este (3 destellos), Sur (6 destellos), Oeste (9 destellos).' },

    { type: 'title', text: 'Marca de Peligro Aislado' },
    { type: 'paragraph', text: 'Señala peligro localizado (naufragio, rocas) rodeado de aguas navegables. Color: Negro con banda roja central. Luz blanca, grupos de 2 destellos.' },

    { type: 'title', text: 'Marca de Aguas Seguras' },
    { type: 'paragraph', text: 'Indica aguas navegables alrededor. Color: Franjas verticales rojas y blancas. Luz blanca: fases iguales o código Morse "A".' },

    { type: 'title', text: 'Otras Ayudas' },
    { type: 'paragraph', text: 'Enfilaciones: Grupos de marcas en línea vertical para guiar por un rumbo. Luces de Sectores: Haces de distintos colores visibles en arcos específicos. Faros: Estructuras fijas de gran porte para referencia y luz potente.' },
    { type: 'paragraph', text: 'Ayudas Electrónicas: RACON (transpondedor radar), Reflectores de Radar (dispositivos pasivos), AIS AtoN (transmisor automático en ayudas).' }
  ],

  quiz: [
    {
      question: '¿Cuáles son las regiones del Sistema Lateral?',
      options: [
        'Región "A" y "B"',
        'Región Norte y Sur',
        'Región Este y Oeste',
        'Región Roja y Verde'
      ],
      correctAnswer: 0,
      explanation: 'El Sistema Lateral se divide en Región "A" y Región "B", diferenciándose en qué color corresponde a cada banda en el sentido convencional.'
    },
    {
      question: 'En Región "A", ¿qué color tiene la marca a estribor?',
      options: ['Rojo', 'Verde', 'Negro', 'Amarillo'],
      correctAnswer: 1,
      explanation: 'En Región "A", el sentido convencional hacia el puerto tiene: Babor = Rojo, Estribor = Verde.'
    },
    {
      question: '¿Qué indica una marca Cardinal Norte?',
      options: [
        'Aguas seguras al Norte de la marca',
        'Aguas seguras al Sur de la marca',
        'Peligro al Norte',
        'Canal hacia el Norte'
      ],
      correctAnswer: 0,
      explanation: 'Una marca Cardinal Norte indica que las aguas más seguras (mayor profundidad) se encuentran al Norte de la marca.'
    },
    {
      question: '¿Qué ritmo de destellos tiene la marca Cardinal Este?',
      options: [
        'Continuos rápidos',
        '3 destellos muy rápidos',
        '6 destellos muy rápidos',
        '9 destellos muy rápidos'
      ],
      correctAnswer: 1,
      explanation: 'La Cardinal Este tiene luz blanca con 3 destellos muy rápidos cada 5 segundos (Vq(3)W 5s).'
    }
  ]
};

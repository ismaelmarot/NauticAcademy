import { Topic } from '@/content/types';

export const topic: Topic = {
  id: 'environment',
  title: 'Protección del Medio Ambiente',
  readingTime: 10,
  audioTime: '9:00',

  content: [
    { type: 'title', text: 'Normativa Vigente' },
    { type: 'paragraph', text: 'Artículo 41 de la Constitución Argentina: "Todos los habitantes gozan del derecho a un ambiente sano... y tienen el deber de preservarlo."' },
    { type: 'paragraph', text: 'La Prefectura Naval Argentina, bajo la Ordenanza Nº 4/98, regula la protección ambiental para embarcaciones deportivas y recreativas en aguas jurisdiccionales.' },

    { type: 'subtitle', text: 'Conductas para la Preservación del Medio Acuático' },
    { type: 'paragraph', text: 'El Capitán debe:' },
    { type: 'list', items: [
      'Almacenar desechos en condiciones higiénicas según eslora y duración de singladura.',
      'Familiarizar tripulación con restricciones de descargas de aguas servidas y efluentes.',
      'Evitar descargas de hidrocarburos, aceites y basuras plásticas, especialmente en fondeaderos y playas.',
      'No pasar cerca de hábitat de aves y mamíferos. Evitar zonas de protección especial.',
      'Retener basura a bordo hasta su disposición en instalaciones receptoras en tierra.'
    ]},

    { type: 'subtitle', text: 'Tabla de Descargas' },
    { type: 'paragraph', text: 'Zonas de Protección Especial (Bahía Samborombón, San Blas, Golfo San José, etc.): Prohibido descargar cualquier residuo. Solo aguas servidas degradables a más de 3 mn.' },
    { type: 'paragraph', text: 'Resto de aguas generales: Degradables triturados a más de 3 mn. No degradables ni hidrocarburos: retener a bordo. Aceites: retener a bordo hasta tierra.' },

    { type: 'subtitle', text: 'Zonas de Protección Especial' },
    { type: 'paragraph', text: 'Buenos Aires: Bahía Samborombón (6 mn). Río Negro: Caleta Los Loros, Bahía San Antonio. Chubut: Golfo San José, Golfo Nuevo, Punta Tombo. Santa Cruz: Ría Puerto Deseado, Cabo Vírgenes, Ría Santa Cruz. Tierra del Fuego: Bahía San Sebastián a Río Grande, Bahías Ushuaia y Lapataia, Canal Beagle.' }
  ],

  quiz: [
    {
      question: '¿Qué artículo constitucional respalda la protección ambiental?',
      options: ['Artículo 14', 'Artículo 41', 'Artículo 75', 'Artículo 100'],
      correctAnswer: 1,
      explanation: 'El Artículo 41 de la Constitución Nacional establece el derecho a un ambiente sano y el deber de preservarlo para las generaciones futuras.'
    },
    {
      question: '¿Qué autoridad regula la protección ambiental en aguas argentinas?',
      options: ['Armada Argentina', 'Prefectura Naval Argentina', 'Gobierno Provincial', 'Municipalidades'],
      correctAnswer: 1,
      explanation: 'La Prefectura Naval Argentina es la autoridad responsable de ejercer funciones de prevención y vigilancia de la contaminación en aguas de jurisdicción nacional.'
    },
    {
      question: '¿A qué distancia mínima se pueden descargar aguas servidas degradables?',
      options: ['1 milla náutica', '3 millas náuticas', '12 millas náuticas', '200 millas náuticas'],
      correctAnswer: 1,
      explanation: 'Las aguas servidas degradables pueden descargarse a más de 3 mn de la costa más próxima, fuera de zonas de protección especial.'
    },
    {
      question: '¿Qué se prohibe en las Zonas de Protección Especial?',
      options: [
        'Navegar con motor',
        'Fondear',
        'Descargar cualquier tipo de residuo',
        'Pescar'
      ],
      correctAnswer: 2,
      explanation: 'En las Zonas de Protección Especial está prohibido descargar cualquier residuo (salvo emergencia), incluyendo sustancias tóxicas y basura plástica.'
    }
  ]
};

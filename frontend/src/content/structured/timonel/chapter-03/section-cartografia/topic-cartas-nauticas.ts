import { Topic } from '@/content/types';

export const topic: Topic = {
  id: 'cartas-nauticas',
  title: 'Las cartas náuticas',
  readingTime: 12,
  audioTime: '11:30',

  content: [
    { type: 'title', text: 'Las Cartas Náuticas' },
    { type: 'paragraph', text: 'Las cartas náuticas son representaciones planas y detalladas de la superficie terrestre y marina, cuidadosamente elaboradas para ofrecer al navegante información confiable sobre profundidades, costas, peligros y ayudas a la navegación, así como referencias de orientación mediante meridianos, paralelos y rosas de los vientos.' },
    { type: 'paragraph', text: 'Su correcta interpretación depende del conocimiento de sus elementos y proyecciones, ya que de ello depende la precisión en la navegación y el trazado de rumbos.' },
    { type: 'paragraph', text: 'Las cartas náuticas son la herramienta fundamental del navegante para planificar y ejecutar la navegación. Sobre ellas se trazan los rumbos, se miden las distancias, se marcan las posiciones y se registran todos los datos relevantes para la seguridad de la travesía.' },
    { type: 'subtitle', text: 'Información que Proporcionan las Cartas Náuticas' },
    { type: 'paragraph', text: 'Una carta náutica contiene una gran cantidad de información esencial para la navegación segura:' },
    { type: 'list', items: [
      'Costas y líneas de costa con sus detalles topográficos',
      'Profundidades (sondas) referidas al datum vertical',
      'Peligros para la navegación: rocas, bajos, arrecifes, naufragios',
      'Ayudas a la navegación: faros, balizas, enfilaciones',
      'Meridianos y paralelos con sus escalas graduadas',
      'Rosas de los vientos para referencia de rumbos',
      'Información sobre mareas y corrientes',
      'Zonas de fondeo y canales navegables',
      'Limitaciones y zonas restringidas',
      'Datos sobre la declinación magnética'
    ]},
    { type: 'subtitle', text: 'Proyección de Mercator' },
    { type: 'paragraph', text: 'La proyección más utilizada en cartografía náutica es la proyección de Mercator. Esta proyección cilíndrica tiene la propiedad fundamental de conservar los ángulos, lo que significa que los rumbos se representan como líneas rectas sobre la carta.' },
    { type: 'paragraph', text: 'En la proyección de Mercator, las deformaciones se incrementan progresivamente hacia los polos, de modo que tanto las latitudes como las longitudes se representan con escalas cada vez mayores. Esta característica, aunque distorsiona las áreas, permite conservar los ángulos y los rumbos, lo que hace de la proyección de Mercator la más útil para la navegación.' },
    { type: 'subtitle', text: 'Elementos de una Carta Náutica' },
    { type: 'paragraph', text: 'Para poder interpretar correctamente una carta náutica, es necesario conocer sus elementos principales:' },
    { type: 'list', items: [
      'Título: indica la zona geográfica representada',
      'Escala: relación entre las distancias en la carta y las distancias reales',
      'Datum: sistema de referencia geodésico utilizado',
      'Sondas: profundidades expresadas en metros o brazas',
      'Símbolos y abreviaturas: convenciones cartográficas estandarizadas',
      'Rosa de los vientos: indicación del norte y los rumbos',
      'Compás de demoras: rosa graduada en grados para medición de rumbos'
    ]},
    { type: 'paragraph', text: 'En las cartas basadas en la proyección de Mercator, la escala de latitudes se representa sobre los márgenes laterales —derecho e izquierdo— de la carta, mientras que la escala de longitudes se ubica en los márgenes superior e inferior.' },
    { type: 'subtitle', text: 'Escala de la Carta' },
    { type: 'paragraph', text: 'La escala de una carta náutica indica la relación entre las distancias medidas sobre la carta y las distancias reales en la superficie terrestre. Se expresa como una fracción, por ejemplo 1:50.000, lo que significa que una unidad de medida en la carta equivale a 50.000 unidades en la realidad.' },
    { type: 'paragraph', text: 'Las cartas de mayor escala (denominador más pequeño) muestran mayor detalle pero cubren una zona más reducida, mientras que las de menor escala cubren zonas más extensas con menos detalle.' },
    { type: 'subtitle', text: 'Clasificación de las Cartas Náuticas' },
    { type: 'paragraph', text: 'Las cartas náuticas se clasifican según su escala y el propósito para el que fueron diseñadas:' },
    { type: 'list', items: [
      'Cartas generales: cubren grandes extensiones, utilizadas para navegación oceánica',
      'Cartas de navegación costera: para navegación próxima a la costa',
      'Cartas de acercamiento: para aproximación a puertos y bahías',
      'Cartas portuarias: de gran escala, con máximo detalle para maniobras en puerto'
    ]}
  ],

  quiz: [
    {
      question: '¿Qué propiedad fundamental tiene la proyección de Mercator?',
      options: ['Conserva las distancias', 'Conserva los ángulos y rumbos', 'Conserva las áreas', 'Conserva las profundidades'],
      correctAnswer: 1,
      explanation: 'La proyección de Mercator conserva los ángulos, lo que permite representar los rumbos como líneas rectas sobre la carta, facilitando enormemente la navegación.'
    },
    {
      question: '¿En qué márgenes de la carta se representa la escala de latitudes?',
      options: ['Superior e inferior', 'Derecho e izquierdo', 'Solo en el margen derecho', 'Solo en el margen izquierdo'],
      correctAnswer: 1,
      explanation: 'En las cartas de proyección Mercator, la escala de latitudes se representa sobre los márgenes laterales —derecho e izquierdo— de la carta.'
    },
    {
      question: '¿Qué información proporcionan las cartas náuticas?',
      options: ['Solo profundidades', 'Solo costas y peligros', 'Profundidades, costas, peligros, ayudas a la navegación y más', 'Solo rumbos y distancias'],
      correctAnswer: 2,
      explanation: 'Las cartas náuticas proporcionan información completa sobre profundidades, costas, peligros, ayudas a la navegación, meridianos, paralelos, rosas de los vientos y mucho más.'
    },
    {
      question: '¿Qué indica la escala de una carta náutica?',
      options: ['El tamaño del papel', 'La relación entre distancias en la carta y distancias reales', 'La profundidad máxima de la zona', 'El año de publicación'],
      correctAnswer: 1,
      explanation: 'La escala indica la relación entre las distancias medidas sobre la carta y las distancias reales en la superficie terrestre, expresada como una fracción.'
    }
  ]
};

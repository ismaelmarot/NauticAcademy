import { Topic } from '@/content/types';

export const topic: Topic = {
  id: 'metodos-posicionamiento',
  title: 'Métodos de posicionamiento asociados al tipo de navegación',
  readingTime: 5,
  audioTime: '04:30',

  content: [
    { type: 'title', text: 'Métodos de Posicionamiento Asociados al Tipo de Navegación' },
    { type: 'paragraph', text: 'A lo largo de la historia de la navegación, se han desarrollado diferentes métodos para determinar la posición del buque en el mar. Cada método está asociado a un tipo de navegación, y el navegante moderno debe conocerlos todos para poder elegir el más adecuado según las circunstancias.' },
    { type: 'subtitle', text: 'Navegación Costera' },
    { type: 'list', items: [
      'Se realiza a la vista de la costa o con referencias costeras',
      'Posicionamiento por demoras, marcaciones, enfilaciones y sondajes',
      'Uso de la carta náutica como herramienta principal',
      'Precisión alta cuando hay referencias visibles',
      'Limitada a zonas cercanas a la costa'
    ]},
    { type: 'subtitle', text: 'Navegación por Estima' },
    { type: 'list', items: [
      'Se basa en proyectar la posición futura a partir de una posición conocida',
      'Utiliza rumbo, velocidad y tiempo transcurrido',
      'No requiere referencias externas visuales',
      'El error se acumula con el tiempo; requiere fijación periódica',
      'Es fundamental como método de respaldo y en travesías oceánicas'
    ]},
    { type: 'subtitle', text: 'Navegación Radioeléctrica' },
    { type: 'list', items: [
      'Utiliza señales de radio de estaciones terrestres',
      'Sistemas históricos: LORAN, Decca, Omega (mayormente obsoletos)',
      'Permite posicionamiento a larga distancia, sin visibilidad',
      'Fue fundamental antes de la era del GPS',
      'Algunos sistemas aún operan como respaldo'
    ]},
    { type: 'subtitle', text: 'Navegación Astronómica' },
    { type: 'list', items: [
      'Determina la posición mediante la observación de astros (Sol, Luna, planetas, estrellas)',
      'Utiliza el sextante para medir alturas y un cronómetro para la hora',
      'No depende de ningún sistema terrestre o electrónico',
      'Es el método de posicionamiento más antiguo y el último recurso',
      'Todo navegante debería mantener competencias básicas en navegación astronómica'
    ]},
    { type: 'subtitle', text: 'Navegación Satelital (GPS)' },
    { type: 'list', items: [
      'Utiliza señales de satélites para determinar la posición con gran precisión',
      'Sistemas: GPS (EE.UU.), GLONASS (Rusia), Galileo (UE), BeiDou (China)',
      'Proporciona latitud, longitud, velocidad y hora',
      'Precisión típica de 3 a 10 metros',
      'Es el sistema de posicionamiento más utilizado actualmente, pero debe tener respaldo'
    ]},
    { type: 'paragraph', text: 'Un buen navegante nunca depende de un solo método de posicionamiento. La práctica segura consiste en usar el sistema más preciso disponible (generalmente GPS) pero mantener la capacidad de verificar la posición por otros medios, especialmente cuando la navegación lo requiere.' }
  ],

  quiz: [
    {
      question: '¿En qué tipo de navegación se posiciona el buque usando demoras y enfilaciones a objetos costeros?',
      options: ['Navegación por estima', 'Navegación astronómica', 'Navegación costera', 'Navegación satelital'],
      correctAnswer: 2,
      explanation: 'La navegación costera se realiza a la vista de la costa y utiliza demoras, marcaciones, enfilaciones y sondajes a objetos costeros para determinar la posición.'
    },
    {
      question: '¿Cuál es la principal limitación de la navegación por estima?',
      options: ['Requiere visibilidad de la costa', 'El error se acumula con el tiempo', 'Solo funciona de día', 'Necesita señales de satélite'],
      correctAnswer: 1,
      explanation: 'La navegación por estima proyecta la posición a partir de rumbo, velocidad y tiempo. Como no corrige por corrientes ni viento de forma automática, el error se acumula progresivamente y requiere fijación periódica de la posición.'
    },
    {
      question: '¿Qué sistema de navegación no depende de ninguna infraestructura terrestre o electrónica?',
      options: ['GPS', 'LORAN', 'Navegación astronómica', 'AIS'],
      correctAnswer: 2,
      explanation: 'La navegación astronómica utiliza la observación de astros con sextante y cronómetro. No depende de ningún sistema terrestre, satélite o electrónico, lo que la convierte en el último recurso de posicionamiento.'
    },
    {
      question: '¿Cuál es la precisión típica del GPS?',
      options: ['100 metros', '1 kilómetro', '3 a 10 metros', '500 metros'],
      correctAnswer: 2,
      explanation: 'El GPS proporciona una precisión típica de 3 a 10 metros en condiciones normales, lo que lo convierte en el sistema de posicionamiento más preciso disponible para la navegación civil.'
    }
  ]
};

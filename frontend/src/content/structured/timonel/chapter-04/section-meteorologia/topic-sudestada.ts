import type { Topic } from '../../../../types';

export const topic: Topic = {
  id: 'sudestada',
  title: 'La Sudestada',
  readingTime: 7,
  audioTime: '06:30',
  content: [
    { type: 'title', text: 'La Sudestada' },
    { type: 'paragraph', text: 'Fenómeno meteorológico local que afecta al Río de la Plata y costas adyacentes de Argentina y Uruguay.' },
    { type: 'subtitle', text: 'Características' },
    { type: 'list', items: ['Vientos: moderados a frescos (11-21 kt) del 2º cuadrante (entre Este y Sur)', 'Tiempo malo persistente, lluvia y llovizna continua', 'Descenso de temperatura', 'Subida del nivel del agua en el Río de la Plata por empuje del viento', 'Más frecuente en junio y julio, otro pico en octubre con vientos más fuertes', 'Menos común en meses cálidos'] },
    { type: 'subtitle', text: 'Requisitos de formación' },
    { type: 'list', items: ['Anticiclón migratorio frío antártico cruza los Andes a baja altura', 'Centro del anticiclón llega al Atlántico frente a la Patagonia central', 'Baja presión profunda entre el litoral argentino sur y el oeste de Uruguay', 'Vientos del NW en altura cruzan un eje de vaguada en ~80°W'] },
    { type: 'subtitle', text: 'Ciclo de vida' },
    { type: 'list', items: ['El anticiclón migratorio avanza al NE sobre la Patagonia y el Mar Argentino', 'Su borde delantero se encuentra con el Anticiclón Semipermanente del Atlántico', 'Una zona de baja presión queda atrapada entre los dos anticiclones', 'El cizallamiento ciclónico encapsula parte de la baja presión', 'La depresión se profundiza, la circulación del viento aumenta, se desarrollan nubes estratiformes', 'Puede convertirse en ciclogénesis desplazándose al SE sobre Mesopotamia y el sur de Brasil'] },
    { type: 'subtitle', text: 'Duración e intensidad' },
    { type: 'paragraph', text: 'Duración: 1-3 días (excepcionalmente hasta 6 días). Velocidades de viento: 10-25 kt (leve), pueden superar 40 kt (fuertes temporales).' },
    { type: 'subtitle', text: 'Signos observables' },
    { type: 'list', items: ['Caída continua de presión', 'Viento rota del sector Norte a Este y luego Sudeste', 'Cielo se cubre con nubes medias y bajas', 'Tras 12-24 horas: cielo totalmente cubierto, vientos establecidos en 2º cuadrante, comienza lluvia', 'Fin: presión se estabiliza y sube ligeramente, vientos rotan al Sur y luego Suroeste'] }
  ],
  quiz: [
    {
      question: '¿Qué zona afecta principalmente la Sudestada?',
      options: [
        'Costas de Chile y Perú',
        'Río de la Plata y costas adyacentes de Argentina y Uruguay',
        'Mar Caribe y Golfo de México',
        'Costas de Brasil y Guayanas'
      ],
      correctAnswer: 1,
      explanation: 'La Sudestada es un fenómeno local que afecta al Río de la Plata y las costas adyacentes de Argentina y Uruguay.'
    },
    {
      question: '¿De qué cuadrante provienen los vientos de la Sudestada?',
      options: [
        '1º cuadrante (Norte a Este)',
        '2º cuadrante (Este a Sur)',
        '3º cuadrante (Sur a Oeste)',
        '4º cuadrante (Oeste a Norte)'
      ],
      correctAnswer: 1,
      explanation: 'Los vientos de la Sudestada son moderados a frescos (11-21 kt) del 2º cuadrante, entre Este y Sur.'
    },
    {
      question: '¿Cuál es el requisito de formación de la Sudestada relacionado con el anticiclón?',
      options: [
        'Anticiclón tropical se desplaza al sur',
        'Anticiclón migratorio frío antártico cruza los Andes a baja altura',
        'Anticiclón del Atlántico se desplaza al oeste',
        'Anticiclón polar se estaciona en la Patagonia'
      ],
      correctAnswer: 1,
      explanation: 'La formación de la Sudestada requiere que un anticiclón migratorio frío antártico cruce los Andes a baja altura.'
    },
    {
      question: '¿Cuál es el signo que indica el fin de la Sudestada?',
      options: [
        'Caída continua de presión',
        'Viento rota al Norte',
        'Presión se estabiliza y sube ligeramente, vientos rotan al Sur y Suroeste',
        'Cielo totalmente cubierto con lluvia intensa'
      ],
      correctAnswer: 2,
      explanation: 'El fin de la Sudestada se identifica cuando la presión se estabiliza y sube ligeramente, y los vientos rotan al Sur y luego Suroeste.'
    }
  ]
};

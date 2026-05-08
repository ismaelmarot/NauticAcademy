import { Topic } from '@/content/types';

export const topic: Topic = {
  id: 'headsail-trim',
  title: 'Trimado de las Velas de Proa',
  readingTime: 29,
  audioTime: '26:00',

  content: [
    { type: 'title', text: 'Introducción' },
    { type: 'paragraph', text: 'Las velas de proa tienen elementos de control similares a la mayor: driza, escota, patín de escota, stay popel y barber hauler. El trimado adecuado maximiza la fuerza aerodinámica.' },
    { type: 'subtitle', text: 'El Embolsamiento' },
    { type: 'paragraph', text: 'En las velas de proa, el embolsamiento suele ubicarse más hacia el tercio delantero para optimizar la aceleración del flujo. Se analiza mediante: Arco, Cuerda y Flecha.' },
    { type: 'subtitle', text: 'Elementos de Trimado' },
    { type: 'paragraph', text: 'Driza: Cazándola se aplana la vela moviendo la flecha hacia adelante (viento fuerte/ceñida). Filándola gana profundidad (viento suave/rumbo abierto).' },
    { type: 'paragraph', text: 'Escota y Patín de escota: La escota controla el ángulo de ataque. El patín ajusta la distribución de tensión entre baluma y pujamen. Adelantado = más tensión en baluma, pujamen laxo (más potencia). Atrasado = tensión en pujamen, baluma abierta (más control).' },
    { type: 'paragraph', text: 'Stay popel: Tensándolo se aplana el stay de proa. Filándolo permite que la vela gane profundidad.' },
    { type: 'paragraph', text: 'Barber hauler: Desplaza lateralmente el punto de tiro de la escota. Hacia barlovento cierra el ángulo (mejor para ceñir). Hacia sotavento abre la vela.' },
    { type: 'paragraph', text: 'Catavientos: Indican cómo circula el aire. Deben flamear paralelos al grátil. Si flamean a sotavento, abrir escota. Si se pegan a barlovento, cazar escota.' },
    { type: 'subtitle', text: 'Trimado en Ceñida con Viento Suave' },
    { type: 'paragraph', text: 'Stay popel con leve curvatura. Driza punto menor tensión. Patín ligeramente adelantado. Escota hasta catavientos volando parejos. Corregir con barber o stay popel si es necesario.' },
    { type: 'subtitle', text: 'Trimado en Ceñida con Viento Fuerte' },
    { type: 'paragraph', text: 'Driza al punto de máxima tensión. Patín hacia popa (aplana pujamen, abre baluma). Escota cazada. Usar barber hacia barlovento. Catavientos trabajando equilibrados.' },
    { type: 'subtitle', text: 'Trimado en Rumbos Portantes' },
    { type: 'paragraph', text: 'Mástil vertical, stay popel mínima tensión. Driza a tope. Patín hacia popa o centro. Escota filada hasta perpendicular al viento. Evitar blanqueteo de la vela mayor usando orejas de burro.' }
  ],

  quiz: [
    {
      question: '¿Qué hace el patín de escota cuando se adelanta?',
      options: ['Tensa el pujamen, abre baluma', 'Tensa la baluma, pujamen laxo (más potencia)', 'Sube la driza', 'Baja la botavara'],
      correctAnswer: 1,
      explanation: 'Al adelantar el patín, la escota tira más hacia abajo, tensando la baluma y dejando el pujamen laxo, lo que profundiza el embolsamiento.'
    },
    {
      question: '¿Para qué sirve el barber hauler?',
      options: ['Izar la vela', 'Desplazar lateralmente punto de tiro de escota', 'Ajustar el grátil', 'Controlar la botavara'],
      correctAnswer: 1,
      explanation: 'El barber hauler desplaza lateralmente el punto de tiro de la escota, afinando el ángulo de ataque de la vela de proa.'
    },
    {
      question: '¿Qué indican los catavientos de una vela de proa?',
      options: ['La velocidad del barco', 'Cómo circula el aire por ambos lados', 'La tensión del grátil', 'El ángulo de la botavara'],
      correctAnswer: 1,
      explanation: 'Los catavientos indican cómo circula el aire por ambos lados de la vela. Deben flamear paralelos al grátil.'
    },
    {
      question: '¿Qué configuración es ideal para ceñida con viento fuerte en velas de proa?',
      options: ['Driza suelta, patín adelantado', 'Driza máxima tensión, patín atrasado, barber a barlovento', 'Escota filada, patín al centro', 'Stay popel flojo'],
      correctAnswer: 1,
      explanation: 'Con viento fuerte: driza al punto de máxima tensión, patín hacia popa, escota cazada y barber hacia barlovento para ceñir.'
    }
  ]
};

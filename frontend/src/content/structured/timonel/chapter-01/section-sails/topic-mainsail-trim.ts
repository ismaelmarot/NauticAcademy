import { Topic } from '@/content/types';

export const topic: Topic = {
  id: 'mainsail-trim',
  title: 'Trimado de la Vela Mayor',
  readingTime: 31,
  audioTime: '28:00',

  content: [
    { type: 'title', text: 'Introducción' },
    { type: 'paragraph', text: 'La vela mayor cuenta con varios elementos de control: driza, cunningham, escota, pujamero, traveller, vang, amantillo, rizos y stay popel. Operándolos adecuadamente se mejora la performance del barco.' },
    { type: 'title', text: 'El Embolsamiento' },
    { type: 'paragraph', text: 'El embolsamiento o "draft" se logra mediante el ensamblado de paños. Se analiza por: Arco (forma real de la vela), Cuerda (línea recta del grátil a la baluma) y Flecha (distancia máxima entre arco y cuerda).' },
    { type: 'paragraph', text: 'La flecha indica cuán profunda es la vela. Cuanto mayor sea, más potencia generará pero con más resistencia. Una flecha reducida mejora el rendimiento al ceñir. La flecha influye en la posición del centro vélico.' },
    { type: 'title', text: 'Elementos de Trimado' },
    { type: 'paragraph', text: 'Driza: Ajusta la tensión del grátil. Tensándola se aplana la vela (para viento fuerte/ceñida), aflojándola gana profundidad (viento suave/rumbo abierto).' },
    { type: 'paragraph', text: 'Cunningham: Ajusta la tensión longitudinal del grátil sin modificar la driza. Cazándolo aplana la sección inferior.' },
    { type: 'paragraph', text: 'Escota: Controla el ángulo de ataque y la apertura de la baluma. Cazándola se aplana la parte baja; filándola se abre.' },
    { type: 'paragraph', text: 'Pujamero: Regula la tensión del pujamen. Tensándolo aplana la vela; aflojándolo aumenta el embolsamiento.' },
    { type: 'paragraph', text: 'Traveller: Desplaza lateralmente el punto de amarre de la escota. Hacia barlovento aplana la parte baja; hacia sotavento abre y reduce potencia inferior.' },
    { type: 'paragraph', text: 'Vang: Controla la altura de la botavara y el twist. Tensándolo cierra la baluma; filándolo permite que se abra la parte alta.' },
    { type: 'title', text: 'Trimado en Ceñida con Viento Suave' },
    { type: 'paragraph', text: 'Driza al punto de menor tensión (sin arrugas horizontales). Cunningham filado. Pujamero suelto. Vang suelto. Traveller centrado o a barlovento. Escota hasta que catavientos flameen paralelos.' },
    { type: 'title', text: 'Trimado en Ceñida con Viento Fuerte' },
    { type: 'paragraph', text: 'Stay popel tensado (mástil hacia atrás, aplana vela). Driza al punto de máxima tensión (arrugas verticales). Cunningham cazado. Pujamero tenso. Vang cazado. Traveller a barlovento. Escota ajustada.' },
    { type: 'title', text: 'Trimado en Rumbos Portantes' },
    { type: 'paragraph', text: 'Mástil vertical, stay popel con tensión mínima. Driza a tope sin sobrecazar. Cunningham suelto. Pujamero cazado. Vang cazado (botavara abajo). Escota filada hasta perpendicular al viento. Evitar blanqueteo de vela de proa usando orejas de burro.' }
  ],

  quiz: [
    {
      question: '¿Qué es la flecha de una vela?',
      options: ['El borde inferior', 'Distancia máxima entre arco y cuerda', 'El puño de driza', 'La altura del mástil'],
      correctAnswer: 1,
      explanation: 'La flecha es la distancia máxima entre el arco (forma real) y la cuerda (línea recta del grátil a la baluma) de la vela.'
    },
    {
      question: '¿Para qué sirve el vang?',
      options: ['Izar la vela', 'Controlar altura de botavara y twist', 'Ajustar el grátil', 'Sujección al mástil'],
      correctAnswer: 1,
      explanation: 'El vang controla la altura de la botavara y el twist (torsión) de la vela, manteniéndola en la posición deseada.'
    },
    {
      question: '¿Qué hace el traveller cuando se mueve a barlovento?',
      options: ['Abre la baluma', 'Cierra la baluma y aplana parte baja', 'Sube la botavara', 'Baja la driza'],
      correctAnswer: 1,
      explanation: 'Al mover el traveller a barlovento, la vela se acerca al eje de crujía, cerrando la baluma y aplanando la parte baja de la vela.'
    },
    {
      question: '¿Qué configuración es ideal para ceñida con viento suave?',
      options: ['Vela aplanada, driza cazada', 'Vela con embolsamiento natural, driza punto menor tensión', 'Vang suelto, botavara arriba', 'Traveller a sotavento'],
      correctAnswer: 1,
      explanation: 'Con viento suave se busca que la vela mantenga su embolsamiento natural (driza sin sobrecazar) para generar más fuerza.'
    }
  ]
};

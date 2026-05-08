import { Topic } from '@/content/types';

export const topic: Topic = {
  id: 'spinnaker-trim',
  title: 'Trimado del Spinnaker',
  readingTime: 18,
  audioTime: '16:00',

  content: [
    { type: 'title', text: 'Introducción' },
    { type: 'paragraph', text: 'El spinnaker es una vela especial para vientos portantes suaves (través a popa). Existen dos variantes: simétricos y asimétricos. Su trimado requiere atención constante y coordinación entre timonel y trimmers.' },
    { type: 'subtitle', text: 'Identificación de los Lados' },
    { type: 'paragraph', text: 'El borde de barlovento actúa como grátil (recibe el viento). El borde de sotavento es la baluma (escape del viento). El puño de braza está en barlovento, el de escota en sotavento. El tangón sostiene el grátil abierto.' },
    { type: 'subtitle', text: 'Elementos de Trimado' },
    { type: 'paragraph', text: 'Braza: Controla la orientación del grátil respecto al viento. Cazándola mueve el grátil a barlovento; filándola a sotavento.' },
    { type: 'paragraph', text: 'Tangón y Amantillos: El tangón sostiene el grátil mediante un gancho al carro del mástil. El amantillo (arriba) y contra amantillo (abajo) regulan su altura y evitan movimientos violentos.' },
    { type: 'paragraph', text: 'Escota: Controla la apertura de la baluma. Cazándola se cierra la vela; filándola se abre dejando escapar el aire. El spinnaker debe mantenerse "lleno" pero sin flamear excesivamente.' },
    { type: 'subtitle', text: 'Izado del Spinnaker' },
    { type: 'paragraph', text: 'Método seguro: izar detrás de la vela de proa (que actúa como pantalla). Con barco a un largo, braza y escota preparadas, tangón montado. Subir driza firmemente. Al llegar arriba, cazar braza hasta tensar tangón. Luego cazar escota hasta que se infle. Finalmente arriar vela de proa.' },
    { type: 'paragraph', text: 'Alternativa con snuffer: Bolsa tubular que contiene el spinnaker. Se iza todo el conjunto plegado y luego se libera la vela levantando el snuffer desde cubierta.' },
    { type: 'subtitle', text: 'Trimado para Obtener Fuerza (Viento Suave)' },
    { type: 'paragraph', text: 'Escota filada hasta que el grátil comience a flamear levemente. Braza ajustada para mantener tangón perpendicular al viento. Amantillo regulando altura: parte superior llena, inferior sin flamear. Corregir con patín de escota o stay popel si es necesario.' },
    { type: 'subtitle', text: 'Posición de la Vela Mayor' },
    { type: 'paragraph', text: 'La mayor debe estar abierta (escota filada, vang suelto) para no ocultar el flujo hacia el spinnaker. Navegando en popa, usar "orejas de burro" (mayor a sotavento, vela de proa a barlovento con tangón).' },
    { type: 'subtitle', text: 'Arriado del Spinnaker' },
    { type: 'paragraph', text: 'Con mayor estable y ligeramente descargada. Filando braza (grátil a sotavento) y escota (puño a popa) simultáneamente. Bajar driza trayendo vela a la cabina. O usar snuffer: bajar cubriendo la vela.' }
  ],

  quiz: [
    {
      question: '¿Qué borde del spinnaker actúa como grátil?',
      options: ['El de sotavento (baluma)', 'El de barlovento (recibe el viento)', 'El pujamen', 'Todos por igual'],
      correctAnswer: 1,
      explanation: 'En el spinnaker, el borde de barlovento recibe el flujo del viento y actúa como grátil, definiendo la curvatura de la vela.'
    },
    {
      question: '¿Para qué sirve el tangón del spinnaker?',
      options: ['Izar la vela', 'Sostener el grátil abierto y orientarlo al viento', 'Ajustar la escota', 'Controlar la botavara'],
      correctAnswer: 1,
      explanation: 'El tangón sostiene el grátil del spinnaker mediante un gancho, permitiendo manejar su orientación respecto al viento.'
    },
    {
      question: '¿Qué es el snuffer?',
      options: ['Un tipo de nudo', 'Bolsa tubular para izar y arriar el spinnaker fácilmente', 'Una vela de proa', 'Elemento de la botavara'],
      correctAnswer: 1,
      explanation: 'El snuffer es una funda tubular que contiene el spinnaker, permitiendo izarlo plegado y luego liberarlo levantando la funda.'
    },
    {
      question: '¿Qué configuración es "orejas de burro"?',
      options: ['Solo spinnaker', 'Mayor a sotavento, vela proa a barlovento con tangón', 'Mayor y proa a la misma banda', 'Navegar sin velas'],
      correctAnswer: 1,
      explanation: 'Orejas de burro es navegar en popa con mayor a sotavento y vela de proa extendida a barlovento, maximizando superficie al viento.'
    }
  ]
};

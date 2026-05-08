import { Topic } from '@/content/types';

export const topic: Topic = {
  id: 'linea-de-vida',
  title: 'Línea de Vida',
  readingTime: 5,

  content: [
    { type: 'title', text: 'Elementos de Seguridad: La Línea de Vida' },
    { type: 'subtitle', text: 'Introducción' },
    { type: 'subtitle', text: 'Línea de Vida.' },
    { type: 'paragraph', text: 'Los elementos de seguridad cumplen un doble objetivo: evitar la caída al agua y, si esta ocurre, proteger la vida y ganar tiempo hasta el momento del rescate y recuperación de la víctima.' },
    { type: 'paragraph', text: 'Chalecos salvavidas, arneses, líneas de vida, balizas personales y otros dispositivos actuales forman un sistema que, usado de manera correcta y constante, multiplica las probabilidades de supervivencia.' },
    { type: 'paragraph', text: 'Repasaremos entonces, a lo largo de varios artículos, el inventario de elementos de seguridad personal, explicando las características y funciones de cada uno de ellos.' },
    { type: 'subtitle', text: 'Línea de Vida' },
    { type: 'paragraph', text: 'La línea de vida no es exactamente un elemento de seguridad personal, sino que debe ser entendida como un componente que forma parte de la infraestructura de seguridad del barco, y que tiene como principal tarea ser parte del "sistema" encargado de retener a bordo a un tripulante que, ante una eventual caída mientras opera en la cubierta, no sea arrastrado fuera de ella, cayendo al agua.' },
    { type: 'paragraph', text: 'La línea de vida está diseñada para que la tripulación pueda asegurarse a ella mediante una línea de seguridad que a su vez va conectada al arnés.' },
    { type: 'paragraph', text: 'Su función es muy simple, debe brindar un recorrido seguro desde la popa y el cockpit hasta la proa, permitiendo que el navegante se desplace por la cubierta manteniéndose siempre unido a la embarcación, incluso cuando una ola, un balanceo o una maniobra brusca lo tomen desprevenido, creando una posible situación de caída al agua.' },
    { type: 'paragraph', text: 'Información Adicional' },
    { type: 'paragraph', text: 'El Arnés y la Línea de Seguridad' },
    { type: 'paragraph', text: 'Todo lo esencial sobre el arnés y la línea de seguridad: para qué sirven, que diferentes versiones existen, y cómo deben ser utilizados para garantizar la seguridad.' },
    { type: 'subtitle', text: 'Características Constructivas de la Línea de Vida' },
    { type: 'paragraph', text: 'Formas de instalación de la línea de Vida.' },
    { type: 'paragraph', text: 'Es raro encontrar líneas de vida, ya armadas, a la venta en casas de náutica, por lo que la gran mayoría de las veces es el propio navegante quien debe construirla a la medida de su barco.' },
    { type: 'paragraph', text: 'Debe ir instalada a lo largo de la cubierta y lo más próxima posible al centro del barco, idealmente tendida desde la parte posterior del cockpit o la popa, corriendo sobre ambas bandas, hasta el extremo de la proa. Esto permite desplazarse con seguridad sin necesidad de desengancharse, o haciéndolo lo menos posible.' },
    { type: 'paragraph', text: 'Los Cáncamos de Seguridad' },
    { type: 'paragraph', text: 'Los cáncamos o puntos fijos de seguridad son herrajes que se instalan sólidamente integrados a la cubierta en varios puntos, y que cumplen una función similar a la línea de vida, ´pues están destinados a enganchar en ellos el extremo de la línea de seguridad del arnes.' },
    { type: 'paragraph', text: 'Cáncamos de seguridad.' },
    { type: 'paragraph', text: 'Estos elementos tienen dos grandes diferencias respecto de la línea de vida.' },
    { type: 'paragraph', text: 'Por un lado, al estar fijos, no permiten que el usuario se traslade caminando sobre la cubierta estando siempre sujeto al barco. En este caso, debería soltar la línea de seguridad de un cáncamo y conectarla al siguiente para poder desplazarse.' },
    { type: 'paragraph', text: 'Por otro lado, al estar fijos, no ceden ante la eventualidad de una caída, como lo haría una línea de vida. Este factor es positivo, pues el riesgo de deslizarse hacia el agua ante una caída es algo menor.' },
    { type: 'paragraph', text: 'En definitiva, la línea de vida es la herramienta silenciosa que nos mantiene a bordo cuando todo lo demás se complica.' },
    { type: 'paragraph', text: 'Su función es simple pero decisiva: darnos un punto seguro al cual aferrarnos cuando el barco se mueve, la meteorología no colabora o la atención flaquea.' },
    { type: 'paragraph', text: 'Ya sabemos cómo detener al velero en una posición determinada, poniéndolo al pairo. Podemos entonces explicar la maniobra de rescate de "Hombre al Agua", en la próxima nota.' },
    { type: 'paragraph', text: 'Cabuyería: Tipos de cabos y su aplicación.' },
    { type: 'paragraph', text: 'Técnicas de Fondeo.' },
  ],

  quiz: [
    {
      question: '¿Cuál es la función principal de la línea de vida?',
      options: ['Amarrar el barco al muelle', 'Proporcionar un punto de anclaje continuo para el arnés de seguridad', 'Servir como driza para izar velas', 'Señalizar la posición del barco'],
      correctAnswer: 1,
      explanation: 'La línea de vida proporciona un punto de anclaje continuo al que se engancha el arnés de seguridad, permitiendo al tripulante desplazarse con seguridad por la cubierta.'
    },
    {
      question: '¿Dónde se instala típicamente la línea de vida?',
      options: ['En el mástil', 'A lo largo de la cubierta, de proa a popa', 'Solo en la bañera', 'En el fondo del casco'],
      correctAnswer: 1,
      explanation: 'La línea de vida se instala a lo largo de la cubierta, desde proa hasta popa, para permitir el desplazamiento seguro por toda la embarcación.'
    },
  ]
};
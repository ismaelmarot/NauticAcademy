import { Topic } from '@/content/types';

export const topic: Topic = {
  id: 'mob',
  title: 'Prevención y Rescate de "Hombre al Agua"',
  readingTime: 56,
  audioTime: '50:00',

  content: [
    { type: 'title', text: 'Introducción' },
    { type: 'paragraph', text: 'La caída de un tripulante al agua es uno de los accidentes más graves. Tiene alta probabilidad de muerte (40% de casos fatales) aunque ocurre menos que otros incidentes. Requiere prevención y práctica de técnicas de rescate.' },

    { type: 'title', text: 'Prevención' },
    { type: 'paragraph', text: 'Pasamanos y guías: Equipar barco con pasamanos y guías para asegurar tránsito. Redes anticaídas entre candeleros (soportan peso persona).' },
    { type: 'paragraph', text: 'Línea de vida: Cinta plana de alta resistencia (poliéster o dyneema) instalada firme sobre bandas o línea de crujía. Siempre tensa, baja, sin obstáculos. Enganchar arnés siempre.' },
    { type: 'paragraph', text: 'Salvavidas y elementos: Instalados, accesibles, en posiciones designadas. Conocer equipamiento, dónde está y cómo usarlo. Mínimo inventario reglamentario + adicional según singladura.' },
    { type: 'paragraph', text: 'Chaleco salvavidas y Arnés: Uso mandatorio en cockpit y cubierta. Tipo autoinflable, 3-5 puntos, livianos y cómodos. Luces individuales (eléctricas o químicas), preferentemente activación automática por inmersión.' },
    { type: 'paragraph', text: 'Señales luminosas: Balizas personales AIS u OLAS fijas al arnés/chaleco. Facilitan localización nocturna o baja visibilidad.' },
    { type: 'paragraph', text: 'Indumentaria: Colores alta visibilidad, capuchas contrastantes, parches reflectantes. Facilitan detección entre olas y espuma.' },
    { type: 'paragraph', text: 'Regla del VASCO: Siempre Visible, siempre Acompañado, siempre Sujeto (arnés + 3 puntos apoyo), siempre COmunicado.' },

    { type: 'title', text: 'Reacción de la Tripulación' },
    { type: 'paragraph', text: 'Paso 1 - Dar la Alarma: Gritar "¡Hombre al agua!" con fuerza, señalar con brazo extendido, mantener contacto visual. Convertirse en VIGÍA (no perder de vista, repetir alarma hasta respuesta).' },
    { type: 'paragraph', text: 'Paso 2a - Control: Encender motor, quitar piloto automático. Responsable de rescate asume comando.' },
    { type: 'paragraph', text: 'Paso 2b - Arrojar salvavidas: Hacia persona en agua con cabo flotante (NO atado al barco). Lanzar otros elementos flotantes (defensas). BAJO NINGUNA CIRCUNSTANCIA lanzar otro tripulante al agua.' },
    { type: 'paragraph', text: 'Paso 2c - Registrar posición: Hora, posición GPS/chartplotter (botón MOB), rumbo y velocidad de navegación.' },

    { type: 'title', text: 'Reacción del Náufrago' },
    { type: 'paragraph', text: 'Paso 1 - Estabilizarse: Controlar respiración, mantener cabeza fuera del agua, orientarse. Evitar movimientos bruscos, mantener calma.' },
    { type: 'paragraph', text: 'Paso 2 - Ganar flotabilidad: Ajustar chaleco, inflar si es necesario. Sacar botas (usar como flotador). Aspirar hondo, contener respiración para usar pulmones como flotador.' },
    { type: 'paragraph', text: 'Paso 3 - Localizar salvavidas: Buscar salvavidas arrojado, apoyar cuerpo sobre él. Si hay cabo, hacer lazada debajo axilas.' },
    { type: 'paragraph', text: 'Paso 4 - Comunicar posición: Encender luces, bengalas, balizas. Mantener manos levantadas. Usar silbato (mayor alcance que voz).' },
    { type: 'paragraph', text: 'Paso 5 - Ahorrar energía: Posición fetal, brazos y piernas cruzadas. Ajustar ropa al cuerpo. Si son varios, abrazarse.' },
    { type: 'paragraph', text: 'Paso 6 - Rescate: Seguir instrucciones, brazos y piernas cerca del cuerpo, protegerse de golpes contra casco.' },

    { type: 'title', text: 'Métodos a Motor: Círculo de Evolución' },
    { type: 'paragraph', text: 'Maniobra más rápida. Mínimo 2 tripulantes: timón y vigía.' },
    { type: 'paragraph', text: 'Paso 1: Alejar popa del náufrago (evitar hélice). Paso 2: Girar hacia banda donde cayó. Paso 3: Completar círculo, proa hacia víctima. Paso 4: Aproximar con víctima a sotavento. Paso 5: Motor punto muerto, preparar rescate.' },

    { type: 'title', text: 'Métodos a Motor: Butákov' },
    { type: 'paragraph', text: 'Giño amplio + cambio rumbo compensando abatimiento. Mantener víctima a sotavento. Similiar a Círculo de Evolución pero con corte tangencial del rumbo inicial.' },

    { type: 'title', text: 'Métodos a Motor: Tiempos Iguales' },
    { type: 'paragraph', text: 'Giros simétricos de 180º manteniendo víctima a la vista. Navegar mismo tiempo que se alejó, sobre rumbo opuesto. Ideal para noche, visibilidad reducida, ríos o canales angostos.' },

    { type: 'title', text: 'Métodos a Motor: Marcha Atrás' },
    { type: 'paragraph', text: 'Solo aguas tranquilas sin oleaje. Reducir velocidad sin variar rumbo. Dar marcha atrás a velocidad mínima sobre estela. Aproximar popa con náufrago a sotavento.' },

    { type: 'title', text: 'Métodos a Vela: Maniobra del Ocho' },
    { type: 'paragraph', text: 'Trayectoria en "8". Mínimo 3 tripulantes: timón, velas, vigía. Buscar través, avanzar 3-5 esloras, virar por avante, regresar con náufrago a barlovento (1 eslora), virar nuevamente y poner al pairo con náufrago a proa.' },

    { type: 'title', text: 'Métodos a Vela: Maniobra del Cero' },
    { type: 'paragraph', text: 'Curva cerrada en "0". Para embarcaciones ágiles. Ganar 1-2 esloras, describir curva cerrada completa, aproximar con náufrago a sotavento, poner al pairo.' },

    { type: 'title', text: 'Métodos a Vela: Quick-Stop (Parada Rápida)' },
    { type: 'paragraph', text: 'Detener velero lo más cerca posible. Virar por avante inmediatamente, poner al pairo. Lanzar cabo para ayudar náufrago a acercarse. Rescatar cuando esté al alcance.' }
  ],

  quiz: [
    {
      question: '¿Qué porcentaje de mortalidad tiene la situación de Hombre al Agua?',
      options: ['6,9% del total de fatalidades', '40% de los casos que ocurren', '26% del total de fatalidades', '5,1% de los casos'],
      correctAnswer: 1,
      explanation: 'Aunque solo representa 6,9% del total de fatalidades náuticas, el 40% de las personas que sufren caída al agua fallecen. Es muy alta mortalidad.'
    },
    {
      question: '¿Cuál es la regla de oro para operar en cubierta?',
      options: ['VELOCIDAD', 'VASCO: Visible, Acompañado, Sujeto, Comunicado', 'TIEMPO', 'SEGURO'],
      correctAnswer: 1,
      explanation: 'Regla VASCO: Siempre Visible, siempre Acompañado, siempre Sujeto (arnés+3 puntos), siempre Comunicado.'
    },
    {
      question: '¿Qué NO debe hacer el barco remolcado durante navegación?',
      options: ['Mantener contacto visual', 'Seguir instrucciones', 'Filar el cabo de remolque', 'Mantener velas bajas'],
      correctAnswer: 2,
      explanation: 'NO se debe filar el cabo de remolque mientras navegan. Puede causar accidentes graves y pérdida de control.'
    },
    {
      question: '¿Qué maniobra a vela deja el barco al pairo con náufrago a proa?',
      options: ['Butákov', 'Tiempos Iguales', 'Ocho', 'Quick-Stop'],
      correctAnswer: 2,
      explanation: 'La maniobra del Ocho termina poniendo el barco al pairo con el náufrago próximo a la proa, tras virar sobre él.'
    }
  ]
};

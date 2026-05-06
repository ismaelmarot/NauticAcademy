import { Topic } from '@/content/types';

export const topic: Topic = {
  id: 'bad-weather',
  title: 'Navegación con Mal Tiempo',
  readingTime: 42,
  audioTime: '38:00',

  content: [
    { type: 'title', text: 'Introducción' },
    { type: 'paragraph', text: 'Mal tiempo: Situación originada por condiciones meteorológicas desfavorables que obligan modificar actitud o configuración del barco para enfrentarla con seguridad.' },
    { type: 'paragraph', text: 'Criterio: "¡Evite navegar con mal tiempo!" El capitán es responsable de la seguridad de tripulación y barco. Sea prudente. Condiciones subjetivas + variables: tamaño barco, entrenamiento, aguas, derrota.' },
    { type: 'paragraph', text: 'Límite mal tiempo: Desde que navegación deja de ser confortable (aumenta viento/oleaje). Desde que comienza a preguntarse si debe tomar rizos o achicar vela de proa.' },

    { type: 'title', text: 'Decisión de Navegar o No' },
    { type: 'paragraph', text: 'Si está en puerto: NO salir. Especialmente si no conoce la zona.' },
    { type: 'paragraph', text: 'Si está navegando: REGRESAR a puerto o zona de fondeo protegida siempre que condiciones lo permitan sin comprometer seguridad.' },
    { type: 'paragraph', text: 'Si no puede regresar: Preparar barco y tripulación para mal tiempo. Error común: basar decisión solo en meteorología. Lo primero que falla es material humano.' },

    { type: 'title', text: 'Preparación del Barco' },
    { type: 'paragraph', text: 'Mantenimiento preventivo: Revisar jarcia firme y de trabajo, casco/cubierta/cockpit (candeleros, imbornales, bombas), velamen (costuras, puños, rizos), instalación eléctrica, gas, gobierno/motor, elementos de seguridad (PLB, EPIRB, balsas, bengalas).' },
    { type: 'paragraph', text: 'Alistamiento: Cubierta/cockpit aséptica (sin objetos sueltos). Cerrar escotillas y tragavientos. Instalar línea de vida.' },
    { type: 'paragraph', text: 'Velamen: Reducir superficie al mínimo (rizo mayor, foque pequeno, tormentín, trinquetilla, vela mayor de capa). Colores llamativos (rojo/naranja) para identificación.' },
    { type: 'paragraph', text: 'Interior: Ordenado, seco, alimentos aislados. Definir "zona húmeda" al pie escalera para cambio ropa mojada. Cerrar escotillas hacia popa si corre tormenta.' },
    { type: 'paragraph', text: 'Electricidad: Encender luces navegación (visibilidad reducida), radio VHF, GPS/chartplotter, RADAR, AIS. Mantener motor encendido en neutro como elemento de seguridad.' },

    { type: 'title', text: 'Preparación de Tripulación' },
    { type: 'paragraph', text: 'Normas: Uso obligatorio chaleco + arnés + línea de vida en cockpit/cubierta. Organizar guardias, medidas seguridad.' },
    { type: 'paragraph', text: 'Alimentos: Preparar con antelación, termos. Cocinar en tormenta es peligroso. Tener barras cereales, chocolates, frutas secas a mano.' },
    { type: 'paragraph', text: 'Salud: Evaluar estado físico, mareos. Usar antieméticos si es necesario. Vestimenta: Traje agua, calzado impermeable, mudas secas en zona húmeda.' },

    { type: 'title', text: 'Planeamiento Navegación' },
    { type: 'paragraph', text: 'Derrota meteorológica: Evitar mal tiempo dirigiéndose a puerto o fondeo protegido. Técnica "correr la tormenta" (navegar hacia sotavento) si hay margen gobierno. Si no, mantenerse en aguas abiertas a barlovento.' },

    { type: 'title', text: 'En la Tormenta' },
    { type: 'paragraph', text: 'Robustez, maniobrabilidad y margen estabilidad son claves. Evitar vuelcos: olas ROMPIENTES (pendiente alta + chorro agua) son peligrosas. Riesgo cuando altura ola > 30% eslora (rompientes) o > 60% (no rompientes).' },
    { type: 'paragraph', text: 'Momento adrizante: Máximo entre 30º-40º escora. Evitar llevar barco al límite en tormenta. Barcos de manga ancha = más resistentes. Quilla corrida = mejor control rumbo pero menos planeo.' },

    { type: 'title', text: 'Técnicas de Supervivencia' },
    { type: 'paragraph', text: 'Capear: Tormentín retrasado en proa + mayor de capa, trimar con timón para mantener proa al viento. Avanzar 1-2 nudos con abatimiento. Foque acuartelado o mayor rizada pueden servir.' },
    { type: 'paragraph', text: 'A palo seco: Sin velamen, timón para proa al barlovento, ancla de mar por proa o motor. Tripulación a refugio en cabina. Barcos diseño antiguo resisten mejor que modernos.' },
    { type: 'paragraph', text: 'Correr la tormenta: Navegar libre delante del temporal hacia sotavento. Viento aparente reduce, movimiento más cómodo. Requiere aguas abiertas, NO costas cercanas.' },

    { type: 'title', text: 'Anclas de Mar' },
    { type: 'paragraph', text: 'Ancla cónica: Cono lona resistente. Flujo entra por extremo mayor, sale por menor. Diferencia diámetros genera freno hidrodinámico. Diámetro entrada según eslora. Boyarín evita profundidad. Recupera colapsándola tirando cabo caudal.' },
    { type: 'paragraph', text: 'Ancla paracaídas: Disco PVC/tesa forma paracaídas. Diámetro 35% eslora, soporta 80% peso barco. Grillete giratorio para evitar rotación. Recuperación igual a cónica.' },
    { type: 'paragraph', text: 'Uso: Por popa (freno al correr tormenta) o por proa ( aminorar abatimiento a palo seco). Emitir VHF periódicamente indicando posición por riesgo a otras embarcaciones.' },

    { type: 'title', text: 'Otros Dispositivos' },
    { type: 'paragraph', text: 'Estachas: Cabos gruesos fondeo/remolque lanzados por popa. Generan arrastre, amortiguan movimientos, estabilizan barco. Simil cola de barrilete.' },
    { type: 'paragraph', text: 'Drogues: Freno hidrodinámico más predecible que estachas. Conos simples, en serie (Jordan Series Drogue). Por popa para correr temporal con control. Mejor que ancla cónica para mantener popa al oleaje.' }
  ],

  quiz: [
    {
      question: '¿Qué es "mal tiempo" en navegación?',
      options: [
        'Solo vientos fuertes',
        'Situación meteorológica que obliga modificar actitud o configuración',
        'Solo olas altas',
        'Cualquier lluvia'
      ],
      correctAnswer: 1,
      explanation: 'Mal tiempo es cualquier situación originada por condiciones meteorológicas desfavorables que obligan modificar actitud o configuración del barco.'
    },
    {
      question: '¿Qué debe hacer si está en puerto y hay pronóstico de mal tiempo?',
      options: ['Salir igual', 'NO salir', 'Salir con chaleco', 'Esperar 1 hora'],
      correctAnswer: 1,
      explanation: 'Si está en puerto, la decisión recomendada es NO salir a navegar, especialmente sin conocer la zona.'
    },
    {
      question: '¿Qué es "capear la tormenta"?',
      options: [
        'Navegar a máxima velocidad',
        'Usar tormentín y mayor de capa para mantener proa al viento',
        'Arriar todas las velas',
        'Usar solo el motor'
      ],
      correctAnswer: 1,
      explanation: 'Capear consiste en montar tormentín + mayor de capa, trimando con timón para mantener proa al viento, avanzando lentamente.'
    },
    {
      question: '¿Cuándo una ola rompiente es riesgosa para un velero de 10m eslora?',
      options: [
        'Altura > 1 metro',
        'Altura > 3 metros (30% eslora)',
        'Altura > 6 metros',
        'Siempre es riesgosa'
      ],
      correctAnswer: 1,
      explanation: 'Riesgo de vuelco cuando ola rompiente altura > 30% eslora. En 10m = 3m. No rompientes riesgo > 60% (6m).'
    },
    {
      question: '¿Para qué sirve el ancla de mar cónica?',
      options: [
        'Anclar en fondo arenoso',
        'Freno hidrodinámico para capear o correr tormenta',
        'Remolcar otros barcos',
        'Sustituir el timón'
      ],
      correctAnswer: 1,
      explanation: 'El ancla de mar cónica funciona como freno hidrodinámico, útil para capear (por proa) o correr tormenta (por popa).'
    }
  ]
};

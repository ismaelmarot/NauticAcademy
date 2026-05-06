import type { Topic } from '../../../../types';

export const topic: Topic = {
  id: 'frentes-polares',
  title: 'Frentes Polares',
  readingTime: 21,
  audioTime: '19:45',
  content: [
    { type: 'title', text: 'Masas de aire' },
    { type: 'paragraph', text: 'Porciones atmosféricas extensas con características físicas uniformes que abarcan miles de kilómetros. Los anticiclones migratorios se originan en altas polares y se desplazan hacia el NE en el hemisferio sur.' },
    { type: 'title', text: 'Un frente' },
    { type: 'paragraph', text: 'Zona de contacto entre dos masas de aire con características físicas diferentes.' },
    { type: 'title', text: 'Zona frontal' },
    { type: 'paragraph', text: 'Franja de transición entre las dos masas. Su grosor varía de cientos de metros (contraste abrupto) a decenas de kilómetros (transición gradual).' },
    { type: 'title', text: 'Actividad frontal' },
    { type: 'list', items: ['Anafrente: el aire cálido asciende → muy activo (tormentas, viento fuerte)', 'Catafrente: el aire cálido desciende → menos activo'] },
    { type: 'title', text: 'Frente Frío' },
    { type: 'paragraph', text: 'La masa de aire frío avanza y se desliza debajo del aire cálido. Tiene una pendiente frontal más pronunciada, zona más estrecha pero más energética.' },
    { type: 'list', items: ['Nubes cumuliformes (Cumulus, Cumulonimbus), ráfagas fuertes, lluvia intensa, granizo, actividad eléctrica', 'Tras su paso: presión sube rápido, temperatura baja, humedad cae, viento rota al tercer cuadrante (S a W en hemisferio sur)', 'Representado por línea azul con triángulos que apuntan en dirección de movimiento'] },
    { type: 'title', text: 'Frente Cálido' },
    { type: 'paragraph', text: 'La masa de aire cálido se desliza sobre el aire frío. Tiene pendiente suave, sistema de nubes estratiformes extenso.' },
    { type: 'list', items: ['Secuencia de nubes: Cirrus → Cirrostratus → Altostratus → Altocumulus → Stratus/Stratocumulus/Nimbostratus', 'Precipitación suave, continua y persistente que se extiende cientos de km', 'Tras su paso: presión se estabiliza, temperatura sube, viento rota suavemente', 'Representado por línea roja con semicírculos'] },
    { type: 'title', text: 'Frente Ocluido' },
    { type: 'paragraph', text: 'El frente frío alcanza al frente cálido (el frío se desplaza más rápido). El aire cálido se eleva completamente de la superficie.' },
    { type: 'list', items: ['Oclusión fría: la masa trasera es más fría → se comporta como frente frío', 'Oclusión cálida: la masa trasera es menos fría → se comporta como frente cálido', 'Representado por línea púrpura (triángulos y semicírculos alternados)'] },
    { type: 'title', text: 'Frente Estacionario' },
    { type: 'paragraph', text: 'Ninguna masa avanza, el frente permanece estacionario. Puede persistir días, disiparse o generar sistemas de baja presión.' },
    { type: 'list', items: ['Representado por semicírculos y triángulos alternados en lados opuestos'] },
    { type: 'title', text: 'Etapas de formación de frentes (Modelo Shapiro-Keyser, hemisferio sur)' },
    { type: 'list', items: ['Etapa Inicial: vientos del NW en altura crean divergencia → convergencia en superficie → inicia baja presión. Se forma frente estacionario (frente polar)', 'Onda Frontal: los vientos rompen el frente estacionario en su punto más débil → se forman frentes frío (Oeste) y cálido (Este) alrededor de la baja presión. La onda se profundiza', 'Madurez: la ciclogénesis se profundiza, el frente frío se cierra sobre el cálido, las tormentas alcanzan máxima intensidad', 'Disipación: el frente frío alcanza al cálido, formando oclusión. La temperatura se homogeniza, el gradiente disminuye'] }
  ],
  quiz: [
    {
      question: '¿Qué es un frente?',
      options: [
        'Porción atmosférica con características uniformes',
        'Zona de contacto entre dos masas de aire con características diferentes',
        'Viento local del Río de la Plata',
        'Sistema de alta presión migratorio'
      ],
      correctAnswer: 1,
      explanation: 'Un frente es la zona de contacto entre dos masas de aire con características físicas diferentes.'
    },
    {
      question: '¿Cómo se representa un frente frío en los mapas meteorológicos?',
      options: [
        'Línea roja con semicírculos',
        'Línea azul con triángulos que apuntan en dirección de movimiento',
        'Línea púrpura con triángulos y semicírculos alternados',
        'Línea roja con triángulos'
      ],
      correctAnswer: 1,
      explanation: 'El frente frío se representa con una línea azul y triángulos orientados hacia la dirección de desplazamiento del frente.'
    },
    {
      question: '¿En qué consiste una oclusión fría?',
      options: [
        'El frente no se desplaza y permanece estacionario',
        'La masa de aire trasera es más fría y el frente se comporta como un frente frío',
        'El aire cálido desciende generando poca actividad',
        'La masa de aire trasera es menos fría y se comporta como frente cálido'
      ],
      correctAnswer: 1,
      explanation: 'En la oclusión fría, la masa de aire que avanza por detrás es más fría que la masa delantera, por lo que el frente mantiene las características del frente frío.'
    },
    {
      question: '¿Cuál es la última etapa de formación de frentes según el modelo Shapiro-Keyser?',
      options: [
        'Etapa Inicial',
        'Onda Frontal',
        'Madurez',
        'Disipación'
      ],
      correctAnswer: 3,
      explanation: 'La etapa de disipación ocurre cuando el frente frío alcanza al frente cálido, formando una oclusión. La temperatura se homogeniza y el gradiente de presión disminuye.'
    }
  ]
};

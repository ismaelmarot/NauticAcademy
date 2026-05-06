import type { Topic } from '../../../../types';

export const topic: Topic = {
  id: 'pronostico',
  title: 'Interpretación de Cartas de Pronóstico',
  readingTime: 41,
  audioTime: '38:30',
  content: [
    { type: 'title', text: 'Importancia de los pronósticos' },
    { type: 'paragraph', text: 'Los pronósticos meteorológicos son herramientas fundamentales para que los navegantes planifiquen viajes seguros.' },
    { type: 'title', text: 'Tipos de cartas meteorológicas' },
    { type: 'list', items: ['Cartas Sinópticas: escala continental/oceánica. Muestran grandes sistemas (anticiclones, depresiones, frentes), isobaras, isohipsas. Esenciales para entender la situación general', 'Cartas de Mesoescala: escala regional (cientos a ~1.000 km). Más detalle sobre frentes, sistemas convectivos, efectos locales, orografía', 'Cartas de Microescala: escala 1-10 km. Procesos de pequeña escala: tormentas aisladas, corrientes descendentes, efectos de relieve local'] },
    { type: 'title', text: 'Modelos numéricos' },
    { type: 'list', items: ['GFS (NOAA/NCEP): global, no hidrostático, resolución ~7 nm, 4 ejecuciones/día, pronóstico a 16 días (fiable 5-7 días)', 'ECMWF: mayor precisión en medio plazo, pronóstico de conjunto, 2 ejecuciones/día, a 10 días', 'WRF (NCAR/NOAA): regional, no hidrostático, alta resolución, requiere entrada de modelo global. Usado por SMN Argentina a 2,2 nm', 'SPIRE: privado, usa constelación de CubeSats para perfiles atmosféricos', 'ICON (DWD/Alemania), GEM (Canadá), UKMO (Reino Unido), ACCESS-G (Australia)'] },
    { type: 'title', text: 'Archivos GRIB' },
    { type: 'paragraph', text: 'Formato binario para datos meteorológicos, requiere software (OpenCPN, Weather4D, Squid).' },
    { type: 'title', text: 'Servicios' },
    { type: 'list', items: ['SailDocs: gratuito, solicitud por email de archivos GRIB GFS', 'Global Marine Net: gratuito, solicitud por email para Mediterráneo', 'NAVTEX: 518 kHz (inglés, 400 nm alcance), 490 kHz (idioma local, 200 nm)'] },
    { type: 'title', text: 'Mejores prácticas' },
    { type: 'list', items: ['Usar 2 o más fuentes (comparar modelos)', 'Empezar por la situación sinóptica', 'Analizar tendencias, luego valores específicos', 'Priorizar viento sobre precipitación', 'Prestar atención a ráfagas (si >150% del viento, asumir como mínimo)', 'Relacionar viento con fetch y orientación del área', 'Cruzar viento con alturas de marea', 'Confirmar pronóstico con observación directa', 'Planificar alternativas de contingencia', 'Actualizar pronósticos regularmente (fiable 48-72 horas)'] },
    { type: 'title', text: 'Condiciones no navegables' },
    { type: 'list', items: ['Borde de anticiclón migratorio', 'Frente Pampero', 'Sudestada', 'Cumulonimbus (20 nm alrededor, especialmente barlovento)', 'Vientos sostenidos > 30 kt'] }
  ],
  quiz: [
    {
      question: '¿Qué escala abarca una carta sinóptica?',
      options: [
        '1-10 km (microescala)',
        'Cientos a ~1.000 km (mesoescala)',
        'Continental/oceánica (escala global)',
        'Solo zona costera'
      ],
      correctAnswer: 2,
      explanation: 'Las cartas sinópticas tienen escala continental u oceánica, mostrando grandes sistemas meteorológicos y situación general.'
    },
    {
      question: '¿Qué modelo numérico tiene mayor precisión en medio plazo?',
      options: [
        'GFS',
        'ECMWF',
        'WRF',
        'SPIRE'
      ],
      correctAnswer: 1,
      explanation: 'El modelo ECMWF es considerado el más preciso en medio plazo, con pronósticos de conjunto y 2 ejecuciones diarias a 10 días.'
    },
    {
      question: '¿Qué se recomienda hacer con las ráfagas de viento en el pronóstico?',
      options: [
        'Ignorarlas si el viento promedio es bajo',
        'Si superan 150% del viento promedio, asumirlas como viento mínimo',
        'Solo tenerlas en cuenta en tormentas',
        'No están incluidas en los modelos GFS'
      ],
      correctAnswer: 1,
      explanation: 'Se recomienda prestar atención a las ráfagas: si superan el 150% del viento promedio, se debe asumir ese valor como viento mínimo.'
    },
    {
      question: '¿Cuál es una condición no navegable según el contenido?',
      options: [
        'Vientos sostenidos de 20 kt',
        'Cumulonimbus a 30 nm de distancia',
        'Vientos sostenidos > 30 kt',
        'Frente cálido con lluvia suave'
      ],
      correctAnswer: 2,
      explanation: 'Entre las condiciones no navegables se incluyen los vientos sostenidos superiores a 30 kt, que representan riesgo para la navegación.'
    }
  ]
};

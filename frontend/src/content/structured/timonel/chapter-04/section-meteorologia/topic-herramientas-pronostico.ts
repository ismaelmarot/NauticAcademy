import type { Topic } from '../../../../types';

export const topic: Topic = {
  id: 'herramientas-pronostico',
  title: 'Herramientas de Pronóstico Meteorológico',
  readingTime: 19,
  audioTime: '17:45',
  content: [
    { type: 'title', text: 'Sensores e instrumentos' },
    { type: 'list', items: ['Estaciones meteorológicas electrónicas (miden presión, temperatura, humedad simultáneamente)', 'Barómetro/barógrafo', 'Termómetro/termógrafo', 'Higrómetro/higrógrafo/psicrómetro', 'Anemómetro/veleta/anemógrafo (dispositivos ultrasónicos ahora comunes)'] },
    { type: 'subtitle', text: 'Radar' },
    { type: 'list', items: ['Radar de precipitación detecta intensidad y movimiento de lluvia', 'Radar marino puede detectar celdas de lluvia y tormentas', 'Redes de radares meteorológicos proveen mapas de precipitación en tiempo real'] },
    { type: 'subtitle', text: 'NAVTEX' },
    { type: 'list', items: ['Servicio de información de seguridad marítima', 'Parte de GMDSS y SOLAS', '518 kHz (inglés, 400 nm alcance), 490 kHz (idioma local, 200 nm), 4209,5 kHz (trópicos)', 'Servicio gratuito (requiere compra de receptor)', 'Mensajes también disponibles vía sitio web WMO GMDSS'] },
    { type: 'subtitle', text: 'Imágenes satelitales' },
    { type: 'list', items: ['Imágenes visibles e infrarrojas muestran sistemas nubosos', 'Imágenes de vapor de agua muestran humedad atmosférica', 'Mapas de temperatura superficial del mar', 'Seguimiento en tiempo real de frentes, tormentas y sistemas'] },
    { type: 'subtitle', text: 'Cartas de Pilotaje (Pilot Charts)' },
    { type: 'list', items: ['Muestran viento, corriente y condiciones climáticas promedio por mes', 'Basadas en décadas de observaciones', 'Útiles para planificación de viajes de larga distancia', 'NO muestran clima específico para una fecha determinada'] },
    { type: 'subtitle', text: 'Internet y aplicaciones' },
    { type: 'list', items: ['Windy, PredictWind y plataformas similares', 'Visores de archivos GRIB (OpenCPN, Weather4D)', 'Datos de boyas en tiempo real', 'Estaciones meteorológicas costeras'] },
    { type: 'subtitle', text: 'Fuentes de datos GRIB' },
    { type: 'list', items: ['SailDocs (gratuito, solicitud por email de GFS)', 'zyGrib (suscripción)', 'Global Marine Net (gratuito, Mediterráneo)'] }
  ],
  quiz: [
    {
      question: '¿Qué frecuencia NAVTEX se usa para mensajes en inglés?',
      options: [
        '490 kHz',
        '518 kHz',
        '4209,5 kHz',
        '2182 kHz'
      ],
      correctAnswer: 1,
      explanation: 'NAVTEX opera en 518 kHz para mensajes en inglés con alcance de 400 nm, y 490 kHz para idioma local con 200 nm de alcance.'
    },
    {
      question: '¿Qué muestran las Cartas de Pilotaje?',
      options: [
        'Clima específico para una fecha determinada',
        'Viento, corriente y condiciones promedio por mes',
        'Sistemas de alta resolución para mesoescala',
        'Solo temperatura superficial del mar'
      ],
      correctAnswer: 1,
      explanation: 'Las Cartas de Pilotaje muestran condiciones promedio de viento, corriente y clima por mes, basadas en décadas de observaciones, útiles para planificación de larga distancia.'
    },
    {
      question: '¿Cuál es una fuente gratuita de datos GRIB?',
      options: [
        'zyGrib',
        'SailDocs',
        'PredictWind',
        'Weather4D'
      ],
      correctAnswer: 1,
      explanation: 'SailDocs es un servicio gratuito que permite solicitar archivos GRIB del modelo GFS vía email.'
    },
    {
      question: '¿Qué dispositivo se usa para medir velocidad y dirección del viento?',
      options: [
        'Barómetro',
        'Anemómetro y veleta',
        'Higrómetro',
        'Termógrafo'
      ],
      correctAnswer: 1,
      explanation: 'El anemómetro mide la velocidad del viento y la veleta su dirección; actualmente los dispositivos ultrasónicos combinados son comunes.'
    }
  ]
};

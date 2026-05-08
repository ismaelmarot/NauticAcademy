import { Topic } from '@/content/types';

export const topic: Topic = {
  id: 'nieblas',
  title: 'Niebla, Neblina, Rocío y Escarcha',
  readingTime: 7,
  audioTime: '06:30',

  content: [
    { type: 'title', text: 'Niebla y Neblina' },
    { type: 'paragraph', text: 'La niebla y la neblina son el mismo fenómeno atmosférico: una nube de espesor y densidad variable cuya base está en contacto con la superficie terrestre. La diferencia está en la visibilidad:' },
    { type: 'list', items: [
      'Neblina: visibilidad mayor a 1.000 metros (ligera)',
      'Niebla: visibilidad no supera los 1.000 metros (densa)'
    ]},
    { type: 'paragraph', text: 'Para que se produzcan, la humedad del aire debe alcanzar el punto de saturación, lo cual puede ocurrir aumentando el contenido de vapor de agua o disminuyendo la temperatura hasta el punto de rocío.' },
    { type: 'subtitle', text: 'Nieblas de Evaporación' },
    { type: 'paragraph', text: 'Se producen por la evaporación del agua en aire frío, con calmas o ventolinas:' },
    { type: 'list', items: [
      'Niebla de vapor: aire frío sobre superficie acuática más cálida. Común en zonas polares ("humos del mar") y sobre lagos y ríos en otoño',
      'Niebla frontal o de lluvia: la lluvia cae a través de aire cercano al punto de rocío, las gotas se evaporan y condensan inmediatamente. Muy espesa y persistente'
    ]},
    { type: 'subtitle', text: 'Nieblas de Enfriamiento' },
    { type: 'paragraph', text: 'Se generan al enfriarse la masa de aire, condensando el vapor contenido:' },
    { type: 'list', items: [
      'Niebla de radiación: el suelo se enfría durante la noche, enfriando la capa de aire en contacto. Noches claras, alta humedad. Dura 1-3 horas después del amanecer. Solo sobre tierra',
      'Niebla de advección: viento cálido y húmedo sobre superficie más fría. Puede alcanzar 500 m de altura, persistente. Frecuente en costas, especialmente en invierno',
      'Niebla orográfica: aire húmedo asciende por pendiente, se expande y enfría adiabáticamente hasta alcanzar el punto de rocío'
    ]},
    { type: 'subtitle', text: 'Rocío' },
    { type: 'paragraph', text: 'Es la condensación del vapor de agua sobre objetos que han liberado suficiente calor como para disminuir su temperatura por debajo del punto de rocío. Se forma en algunas superficies y no en otras, según la tasa de irradiación de cada objeto. Por ejemplo, sobre la cubierta de un barco se forma poco después de ponerse el Sol, pero sobre el cemento puede no formarse.' },
    { type: 'subtitle', text: 'Escarcha' },
    { type: 'paragraph', text: 'Se forma cuando la temperatura del aire es menor a 0°C, provocando que el vapor de agua se transforme directamente en hielo al depositarse sobre las superficies, generalmente cerca del suelo. También se conoce como helada.' }
  ],

  quiz: [
    {
      question: '¿Cuál es la diferencia entre niebla y neblina?',
      options: ['La temperatura del aire', 'La visibilidad: niebla ≤ 1.000 m, neblina > 1.000 m', 'La altitud a la que se forman', 'El contenido de sal en el aire'],
      correctAnswer: 1,
      explanation: 'La diferencia entre niebla y neblina radica en la visibilidad: cuando no supera los 1.000 metros es niebla, y cuando es mayor es neblina.'
    },
    {
      question: '¿Dónde se produce la niebla de radiación?',
      options: ['Sobre el mar', 'Sobre los lagos', 'Solo sobre la tierra', 'En las montañas'],
      correctAnswer: 2,
      explanation: 'La niebla de radiación se produce solo sobre la tierra, ya que el agua se enfría muy poco por efecto de la irradiación nocturna.'
    },
    {
      question: '¿Qué es la niebla de advección?',
      options: ['Aire frío sobre agua cálida', 'Viento cálido y húmedo sobre superficie más fría', 'Aire ascendiendo por una montaña', 'Lluvia que se evapora al caer'],
      correctAnswer: 1,
      explanation: 'La niebla de advección se produce cuando viento cálido y húmedo transita sobre una superficie más fría, enfriándose por contacto directo y condensando su humedad.'
    },
    {
      question: '¿A qué temperatura se forma la escarcha?',
      options: ['Por debajo de 10°C', 'Por debajo de 5°C', 'Por debajo de 0°C', 'Por debajo de -10°C'],
      correctAnswer: 2,
      explanation: 'La escarcha se forma cuando la temperatura del aire es menor a 0°C, provocando que el vapor se transforme directamente en hielo sobre las superficies.'
    }
  ]
};

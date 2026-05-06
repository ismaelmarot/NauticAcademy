import { Topic } from '@/content/types';

export const topic: Topic = {
  id: 'lineas-posicion',
  title: 'Las líneas de posición',
  readingTime: 26,
  audioTime: '24:00',

  content: [
    { type: 'title', text: 'Las Líneas de Posición' },
    { type: 'paragraph', text: 'Una línea de posición (LOP — Line of Position) es una línea sobre la carta náutica en la que se sabe que está situado el buque. La intersección de dos o más líneas de posición determina la posición del buque (fix). Conocer los diferentes tipos de líneas de posición y cómo obtenerlas es fundamental para toda la navegación.' },
    { type: 'title', text: 'La Marcación' },
    { type: 'paragraph', text: 'La marcación es el ángulo horizontal medido desde la proa del buque hasta la visual de un objeto costero. Se mide en el plano horizontal y se expresa en grados.' },
    { type: 'list', items: [
      'Se mide desde la línea de crujía (proa) del buque',
      'En sentido: horario (000° a 360°) o por la amura de babor/estribor (0° a 180°)',
      'Marcación por estribor: positiva (+) o se indica "E"',
      'Marcación por babor: negativa (−) o se indica "B"',
      'Para convertir a demora: Demora = Rumbo del buque + Marcación',
      'Se toma con la pínula, el taxímetro o visualmente desde la proa'
    ]},
    { type: 'title', text: 'La Enfilación (Transit o Range)' },
    { type: 'paragraph', text: 'Una enfilación se produce cuando dos objetos costeros (naturales o artificiales) se alinean visualmente desde la posición del observador. Es una línea de posición extremadamente precisa:' },
    { type: 'list', items: [
      'Cuando dos objetos se ven uno detrás del otro, el buque está sobre la línea que los une',
      'Las cartas náuticas suelen indicar enfilaciones con líneas punteadas',
      'Es la LOP más precisa que existe, ya que no depende de la medición de ángulos',
      'Se usa frecuentemente para marcar canales seguros de entrada a puertos',
      'Las enfilaciones de faros (luces de enfilación) guían al navegante por el canal',
      'También se pueden usar enfilaciones naturales (un cerro detrás de otro)'
    ]},
    { type: 'title', text: 'La Demora' },
    { type: 'paragraph', text: 'La demora es el ángulo horizontal medido desde el norte (verdadero, magnético o del compás) hasta la visual de un objeto costero. Es la línea de posición más utilizada en navegación costera:' },
    { type: 'list', items: [
      'Demora verdadera (Dv): medida desde el norte verdadero',
      'Demora magnética (Dm): medida desde el norte magnético',
      'Demora de compás (Dc): medida desde el norte del compás',
      'La conversión sigue la misma regla que los rumbos: Mv = Mc + Dm + δ',
      'Se toma con pínula, taxímetro, radar o compás',
      'La LOP se traza en la carta desde el objeto observado en dirección inversa a la demora (demora opuesta = demora ± 180°)',
      'Para obtener una fix se necesitan al menos dos demoras a objetos diferentes'
    ]},
    { type: 'title', text: 'Arco de Distancia' },
    { type: 'paragraph', text: 'Un arco de distancia es una línea de posición circular centrada en un objeto conocido, con un radio igual a la distancia medida hasta ese objeto. Se puede obtener de dos formas:' },
    { type: 'title', text: 'Arco de distancia por visibilidad' },
    { type: 'list', items: [
      'Se basa en la visibilidad de un faro u objeto: cuando aparece o desaparece por el horizonte',
      'La distancia al horizonte depende de la altura del observador y la altura del objeto',
      'Distancia al horizonte (en millas) ≈ 2,08 × (√altura observador + √altura objeto), alturas en metros',
      'Cuando un faro aparece por el horizonte, el buque está sobre un arco de radio igual a la distancia teórica',
      'Es una LOP circular que se traza con el compás desde la posición del faro'
    ]},
    { type: 'title', text: 'Arco de distancia por altura angular' },
    { type: 'list', items: [
      'Se mide la altura angular de un objeto de altura conocida (faro, cerro, faro) con el sextante',
      'Distancia = Altura del objeto / tan(altura angular medida)',
      'Para alturas pequeñas: Distancia (en metros) ≈ Altura (m) / ángulo (en radianes)',
      'También se usa la fórmula práctica: Distancia (millas) ≈ Altura del objeto (m) × 0,565 / ángulo (minutos de arco)',
      'Es útil para obtener una LOP cuando solo se tiene un objeto visible'
    ]},
    { type: 'title', text: 'Otras referencias de posición' },
    { type: 'paragraph', text: 'Además de las líneas de posición clásicas, existen otras referencias que ayudan a determinar o verificar la posición del buque:' },
    { type: 'list', items: [
      'Isóbata: línea de igual profundidad en la carta; navegar sobre una isóbata conocida es una LOP',
      'Tipo de fondo: la naturaleza del fondo (arena, roca, fango) obtenida por sondaje puede compararse con la carta',
      'Sondaje: una sonda medida puede ubicar al buque sobre una isóbata determinada',
      'Radar: las distancias radar a objetos costeros son LOP muy precisas',
      'GPS: proporciona una posición directa (fix) que reemplaza las LOP tradicionales',
      'Ensenada visual: reconocimiento de la costa y sus accidentes'
    ]},
    { type: 'title', text: 'Conversión Mv = Mc + Dm + δ aplicada a demoras' },
    { type: 'paragraph', text: 'La misma fórmula que se usa para los rumbos se aplica a las demoras y marcaciones. Toda lectura de demora tomada con compás debe convertirse a demora verdadera para trazarla sobre la carta:' },
    { type: 'list', items: [
      'Dv = Dc + Dm + δ (declarada verdadera = declarada compás + declinación + desvío)',
      'Dv = Dc + Vt (donde Vt = Variación Total)',
      'Las demoras verdaderas son las que se trazan sobre la carta',
      'Si la demora se toma con pínula, se lee directamente en magnético y solo se aplica Dm',
      'Recordar: "al compás le sumo para verdadero"'
    ]},
    { type: 'title', text: 'El triángulo de posición' },
    { type: 'paragraph', text: 'Cuando se obtienen tres o más líneas de posición, estas rara vez se cruzan en un punto exacto debido a errores de observación. En su lugar, forman un pequeño triángulo llamado "triangle of position" o "cocked hat":' },
    { type: 'list', items: [
      'El triángulo se forma por las pequeñas discrepancias entre las LOP',
      'La posición más probable del buque está dentro del triángulo',
      'Si el triángulo es pequeño, el centro se toma como la posición fija (fix)',
      'Si el triángulo es grande, indica un error significativo en alguna observación',
      'Es preferible repetir las observaciones antes que confiar en un fix dudoso',
      'Con tres demoras, el ángulo ideal entre objetos es de 60° a 120° para mayor precisión'
    ]},
    { type: 'paragraph', text: 'Dominar las líneas de posición es la base de la navegación costera y de estima. Aunque el GPS ha facilitado enormemente el posicionamiento, las LOP tradicionales siguen siendo un recurso esencial de respaldo y verificación.' }
  ],

  quiz: [
    {
      question: '¿Qué es una línea de posición (LOP)?',
      options: ['La trayectoria que sigue el barco', 'Una línea sobre la carta donde se sabe que está el buque', 'El rumbo del barco', 'La línea del ecuador'],
      correctAnswer: 1,
      explanation: 'Una línea de posición (LOP) es una línea sobre la carta náutica en la que se sabe que está situado el buque. La intersección de dos o más LOP determina la posición.'
    },
    {
      question: '¿Por qué la enfilación es la LOP más precisa?',
      options: ['Porque usa el GPS', 'Porque no depende de la medición de ángulos, solo de la alineación visual', 'Porque se mide con el sextante', 'Porque usa el radar'],
      correctAnswer: 1,
      explanation: 'La enfilación es la LOP más precisa porque se basa en la alineación visual de dos objetos, sin necesidad de medir ángulos ni aplicar correcciones.'
    },
    {
      question: '¿Cómo se convierte una demora de compás a demora verdadera?',
      options: ['Dv = Dc − Dm − δ', 'Dv = Dc + Dm + δ', 'Dv = Dc × Dm', 'Dv = Dc / δ'],
      correctAnswer: 1,
      explanation: 'La conversión sigue la misma regla que los rumbos: Dv = Dc + Dm + δ, donde Dm es la declinación magnética y δ es el desvío del compás.'
    },
    {
      question: '¿Qué es el "triángulo de posición" o "cocked hat"?',
      options: ['Un tipo de carta náutica', 'Un triángulo formado cuando tres LOP no se cruzan en un punto exacto por errores de observación', 'Un instrumento de navegación', 'Una forma de vela'],
      correctAnswer: 1,
      explanation: 'El triángulo de posición se forma cuando tres o más líneas de posición no se intersectan en un punto exacto debido a errores de observación. La posición más probable del buque está dentro del triángulo.'
    }
  ]
};

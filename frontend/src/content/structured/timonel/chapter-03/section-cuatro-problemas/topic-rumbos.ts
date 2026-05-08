import { Topic } from '@/content/types';

export const topic: Topic = {
  id: 'rumbos',
  title: 'El rumbo verdadero, el magnético y el del compás',
  readingTime: 19,
  audioTime: '18:00',

  content: [
    { type: 'title', text: 'El Rumbo Verdadero, el Magnético y el del Compás' },
    { type: 'paragraph', text: 'El rumbo es el ángulo horizontal que define la dirección hacia la cual se desplaza o apunta la proa de una embarcación. En la navegación práctica, es fundamental distinguir entre tres tipos de rumbo, ya que cada uno se mide respecto de un norte diferente y conocer sus relaciones permite convertir correctamente entre ellos para navegar con seguridad.' },
    { type: 'subtitle', text: 'Rumbo Verdadero (Rv)' },
    { type: 'list', items: [
      'Símbolo: Rv',
      'Medido desde: el Norte Verdadero (Nv) —polo norte geográfico—',
      'En sentido: horario (de 000° a 360°)',
      'Hasta: la línea de crujía del buque (proa)',
      'Valor: expresado con tres cifras (ejemplo: 045°, 180°, 270°)',
      'Es el rumbo que se traza sobre la carta náutica y el que se usa para la planificación de la derrota'
    ]},
    { type: 'paragraph', text: 'El rumbo verdadero es la dirección real respecto del norte geográfico. Es el que se marca sobre la carta náutica al trazar la línea de ruta entre dos puntos, y es el rumbo de referencia para toda la navegación.' },
    { type: 'subtitle', text: 'Rumbo Magnético (Rm)' },
    { type: 'list', items: [
      'Símbolo: Rm',
      'Medido desde: el Norte Magnético (Nm) —polo norte magnético—',
      'En sentido: horario (de 000° a 360°)',
      'Hasta: la línea de crujía del buque',
      'Valor: expresado con tres cifras',
      'Difiere del rumbo verdadero por la declinación magnética (Dm)'
    ]},
    { type: 'paragraph', text: 'El rumbo magnético se refiere al norte magnético, que no coincide con el norte verdadero. La diferencia angular entre ambos se denomina declinación magnética o variación local, y varía según la posición geográfica y cambia con el tiempo. En las cartas náuticas se indica la declinación del año de edición y su variación anual.' },
    { type: 'subtitle', text: 'Rumbo Compás (Rc)' },
    { type: 'list', items: [
      'Símbolo: Rc',
      'Medido desde: el Norte del Compás (Nc) —norte de aguja—',
      'En sentido: horario (de 000° a 360°)',
      'Hasta: la línea de crujía del buque',
      'Valor: expresado con tres cifras',
      'Es el que se lee directamente en el compás a bordo'
    ]},
    { type: 'paragraph', text: 'El rumbo compás es el que el navegante lee directamente en el compás instalado en la embarcación. Difiere del rumbo magnético por el desvío, un error producido por los campos magnéticos propios del barco (estructuras metálicas, motores, equipos eléctricos).' },
    { type: 'subtitle', text: 'Relación entre los tres rumbos' },
    { type: 'paragraph', text: 'La relación fundamental que permite convertir entre los tres rumbos es:' },
    { type: 'list', items: [
      'Rv = Rc + Dm + δ',
      'Donde: Dm = declinación magnética (variación local)',
      'Donde: δ = desvío del compás (propio de cada embarcación)',
      'La suma Dm + δ se denomina Variación Total (Vt)',
      'Por lo tanto: Rv = Rc + Vt, y Rc = Rv − Vt',
      'Regla mnemotécnica: "al verdadero le quito para compás, al compás le sumo para verdadero"'
    ]},
    { type: 'subtitle', text: 'Variación Total (Vt)' },
    { type: 'paragraph', text: 'La Variación Total es la corrección angular que se debe aplicar al rumbo del compás para obtener el rumbo verdadero. Incluye tanto la declinación magnética —propia de la zona geográfica— como el desvío del compás —propio de la embarcación. Se calcula como:' },
    { type: 'list', items: [
      'Vt = Dm + δ',
      'Se expresa con signo: positiva (+) al este (E o NE), negativa (−) al oeste (W o NW)',
      'Se anota en la bitácora y debe actualizarse periódicamente',
      'El desvío se determina mediante la tabla de desvíos del compás, elaborada durante la compensación'
    ]},
    { type: 'subtitle', text: 'Diferencia entre rumbo y derrota' },
    { type: 'paragraph', text: 'Es importante no confundir el rumbo con la derrota (o rumbo de fondo). El rumbo es la dirección hacia la que apunta la proa del buque, mientras que la derrota es la dirección real del movimiento del buque sobre el fondo, es decir, la trayectoria efectiva resultante de la acción combinada del motor, las corrientes y el viento.' },
    { type: 'list', items: [
      'Rumbo: dirección de la proa (hacia donde apunta el barco)',
      'Derrota: trayectoria real sobre el fondo (hacia donde se mueve el barco)',
      'En aguas sin corriente ni viento: rumbo = derrota',
      'Con corriente o viento: rumbo ≠ derrota; la diferencia se debe a deriva y abatimiento'
    ]},
    { type: 'subtitle', text: 'Cómo hallar el rumbo verdadero en la carta náutica' },
    { type: 'paragraph', text: 'Para obtener el rumbo verdadero de una línea trazada en la carta náutica se utiliza la regla de paralelas o transportador:' },
    { type: 'list', items: [
      'Se trazan los puntos de salida y llegada y se une con una línea recta (la ruta)',
      'Se coloca la regla de paralelas sobre la línea trazada',
      'Se traslada la regla hasta la rosa de los vientos de la carta, manteniendo el ángulo',
      'Se lee el valor en la graduación de la rosa correspondiente al norte verdadero',
      'El valor leído es el rumbo verdadero (Rv)',
      'Para convertir a rumbo compás: Rc = Rv − Vt (aplicando Dm y δ con sus signos)'
    ]},
    { type: 'paragraph', text: 'Con estos conceptos claros, el navegante puede planificar su ruta sobre la carta, convertir el rumbo verdadero al rumbo que debe gobernar en el compás, y navegar con precisión y seguridad.' }
  ],

  quiz: [
    {
      question: '¿Cuál es la fórmula que relaciona el rumbo verdadero con el rumbo del compás?',
      options: ['Rv = Rc − Dm + δ', 'Rv = Rc + Dm + δ', 'Rv = Rc × Dm × δ', 'Rv = Rc + Dm − δ'],
      correctAnswer: 1,
      explanation: 'La relación fundamental es Rv = Rc + Dm + δ, donde Dm es la declinación magnética y δ es el desvío del compás. Ambos se suman algebraicamente con sus signos correspondientes.'
    },
    {
      question: '¿Qué es la Variación Total (Vt)?',
      options: ['La diferencia entre rumbo y derrota', 'La suma de la declinación magnética y el desvío del compás', 'El error del compás por sí solo', 'La variación anual de la declinación'],
      correctAnswer: 1,
      explanation: 'La Variación Total (Vt) es la suma algebraica de la declinación magnética (Dm) y el desvío del compás (δ): Vt = Dm + δ.'
    },
    {
      question: '¿Cuál es la diferencia entre rumbo y derrota?',
      options: ['No hay diferencia, son lo mismo', 'El rumbo es la dirección de la proa y la derrota es la trayectoria real sobre el fondo', 'El rumbo se mide en nudos y la derrota en grados', 'La derrota es solo teórica'],
      correctAnswer: 1,
      explanation: 'El rumbo es la dirección hacia la que apunta la proa del buque, mientras que la derrota es la trayectoria real que sigue el buque sobre el fondo, resultante de la acción combinada de la propulsión, corrientes y viento.'
    },
    {
      question: '¿Qué instrumento se utiliza para hallar el rumbo verdadero de una línea trazada en la carta náutica?',
      options: ['El sextante', 'La sonda', 'La regla de paralelas o transportador', 'El anemómetro'],
      correctAnswer: 2,
      explanation: 'La regla de paralelas o el transportador se utilizan para trasladar el ángulo de la línea de ruta hasta la rosa de los vientos de la carta, donde se lee el rumbo verdadero.'
    }
  ]
};

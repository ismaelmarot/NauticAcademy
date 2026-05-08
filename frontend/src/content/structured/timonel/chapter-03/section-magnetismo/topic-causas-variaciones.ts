import { Topic } from '@/content/types';

export const topic: Topic = {
  id: 'causas-variaciones',
  title: 'Causas y Variaciones del magnetismo terrestre',
  readingTime: 8,
  audioTime: '07:30',

  content: [
    { type: 'title', text: 'El Magnetismo Terrestre: Causas y Variaciones' },
    { type: 'paragraph', text: 'Desde tiempos muy antiguos, los navegantes descubrieron que una aguja imantada, libre para girar, tiende a orientarse siempre en una dirección determinada, con un extremo apuntando al Norte y el otro al Sur.' },
    { type: 'paragraph', text: 'Este fenómeno se debe a que la Tierra se comporta como un enorme imán, rodeado por un campo magnético que influye sobre todos los cuerpos magnetizados que se encuentren dentro de él.' },
    { type: 'paragraph', text: 'El magnetismo terrestre es, por tanto, el conjunto de efectos producidos por ese campo magnético natural de la Tierra. Dicho campo puede representarse, de manera simplificada, como si existiera una gran barra imantada inclinada dentro del planeta, cuyos polos magnéticos —Norte y Sur— no coinciden exactamente con los polos geográficos.' },
    { type: 'paragraph', text: 'Es decir que, por un lado, existe un sistema de referencias basado en cartas náuticas y mapas terrestres cuyo Norte es el geográfico que, por convención, se lo denomina Norte verdadero y, por otro lado, existe otro sistema de referencia que se orienta siguiendo el campo magnético terrestre, cuyo Norte es el Norte magnético.' },
    { type: 'paragraph', text: 'Esta diferencia entre ambos sistemas, el magnético y el geográfico, da origen a una serie de correcciones que el navegante debe conocer y aplicar para determinar con precisión el rumbo del barco, particularmente cuando se lo lleva de un sistema al otro.' },
    { type: 'subtitle', text: 'El Campo Magnético de la Tierra' },
    { type: 'paragraph', text: 'La masa de la Tierra está formada por un núcleo central, sobre el cual se apoya el manto, y sobre este, la corteza terrestre.' },
    { type: 'paragraph', text: 'El núcleo ocupa aproximadamente la mitad del radio terrestre y está compuesto principalmente por hierro y níquel, con presencia de azufre y otros elementos más ligeros. En su parte externa —el núcleo externo— las altísimas presiones existentes comprimen los metales aumentando su temperatura hasta más de 6.000ºC, manteniéndolos en estado líquido. Más cerca del centro, el núcleo interno permanece sólido, a pesar de su temperatura, por la presión extrema que impide la fusión completa del hierro.' },
    { type: 'paragraph', text: 'Las diferencias de temperatura y densidad entre las capas externas del núcleo generan corrientes convectivas que movilizan el hierro fundido —un excelente conductor eléctrico— produciendo corrientes eléctricas que, a su vez, originan un campo magnético. Este fenómeno, conocido como "efecto dínamo", hace que la Tierra se comporte como un gigantesco imán.' },
    { type: 'paragraph', text: 'Un imán convencional genera un campo magnético que puede representarse mediante líneas de fuerza que emergen de su polo norte, se curvan alrededor del imán y vuelven a ingresar por su polo sur, formando trayectorias cerradas.' },
    { type: 'paragraph', text: 'En el campo magnético terrestre sucede algo análogo. Su campo magnético está formado por líneas de fuerza que, por convención, emergen del polo Sur magnético, se extienden por el espacio circundante y vuelven a ingresar por el polo Norte magnético, cerrando así el circuito.' },
    { type: 'subtitle', text: 'Los Polos Magnéticos' },
    { type: 'paragraph', text: 'Los polos magnéticos no coinciden en su ubicación con los polos geográficos, y su posición varía lentamente con el tiempo. Actualmente, el polo Norte magnético se encuentra próximo a la costa oeste de la isla Bathurst, en los Territorios del Noroeste de Canadá, mientras que el polo Sur magnético se sitúa en Tierra Adelia, en el continente antártico.' },
    { type: 'paragraph', text: 'Estos polos no son puntos fijos ni perfectamente definidos, sino zonas de aproximadamente unas 60 millas náuticas de diámetro donde convergen y emergen las líneas de fuerza del campo magnético. En esas regiones, conocidas como "zonas de silencio magnético" —magnetic blackout zones, en inglés— la aguja de una brújula se comporta de forma errática, volviéndose inútil para la navegación.' },
    { type: 'subtitle', text: 'Meridianos Magnéticos, Declinación e Inclinación' },
    { type: 'paragraph', text: 'El campo magnético terrestre no es homogéneo: sus líneas de fuerza —también llamados meridianos magnéticos— se desvían debido a la distribución irregular de materiales ferromagnéticos en la corteza terrestre y a las variaciones en la ionosfera. Los instrumentos magnéticos —como las brújulas y compases— se orientan siguiendo la dirección de estos meridianos magnéticos.' },
    { type: 'paragraph', text: 'El ángulo de inclinación entre un meridiano magnético y el meridiano geográfico que pasa por el mismo punto se denomina "declinación magnética", mientras que el ángulo de inclinación de las líneas de fuerza respecto del plano horizontal recibe el nombre de "inclinación magnética".' },
    { type: 'paragraph', text: 'La línea que une los puntos donde la inclinación magnética es nula —es decir, donde el campo magnético es paralelo al plano del horizonte— se denomina "ecuador magnético". Las líneas que unen puntos de igual declinación se llaman isógonas.' },
    { type: 'subtitle', text: 'Variaciones del Campo Magnético Terrestre' },
    { type: 'paragraph', text: 'El campo magnético terrestre no es estático, sino que varía con el tiempo por causas internas y externas. Estas variaciones se clasifican en:' },
    { type: 'list', items: [
      'Variación secular: es el cambio lento y progresivo de la posición de los polos magnéticos, que se desplazan principalmente hacia el Oeste, a razón de unos 10 minutos de arco por año, completando una rotación en aproximadamente 2.000 años. Esta variación se debe a los movimientos del núcleo terrestre y a los fenómenos de precesión y nutación del eje de rotación de la Tierra.',
      'Variación anual: proviene de cambios estacionales en la distribución de masas dentro del planeta y de variaciones en la ionosfera y el viento solar.',
      'Variación diaria: son pequeñas oscilaciones del campo magnético que ocurren a lo largo del día, influenciadas por la radiación solar y la actividad ionosférica.'
    ]}
  ],

  quiz: [
    {
      question: '¿Qué fenómeno hace que la Tierra se comporte como un gigantesco imán?',
      options: ['La rotación terrestre', 'El efecto dínamo producido por corrientes convectivas en el núcleo externo', 'La gravedad terrestre', 'La presión atmosférica'],
      correctAnswer: 1,
      explanation: 'Las corrientes convectivas en el núcleo externo movilizan el hierro fundido produciendo corrientes eléctricas que originan un campo magnético, fenómeno conocido como "efecto dínamo".'
    },
    {
      question: '¿Qué son las "zonas de silencio magnético"?',
      options: ['Zonas sin viento', 'Zonas donde la brújula se comporta erráticamente', 'Zonas de calma marina', 'Zonas sin corriente eléctrica'],
      correctAnswer: 1,
      explanation: 'Son zonas de aproximadamente 60 millas náuticas de diámetro alrededor de los polos magnéticos donde la aguja de una brújula se comporta de forma errática, volviéndose inútil para la navegación.'
    },
    {
      question: '¿Qué es la variación secular del campo magnético terrestre?',
      options: ['Oscilaciones diarias del campo', 'El cambio lento de la posición de los polos magnéticos', 'Cambios estacionales anuales', 'Variaciones por tormentas solares'],
      correctAnswer: 1,
      explanation: 'La variación secular es el cambio lento y progresivo de la posición de los polos magnéticos, que se desplazan principalmente hacia el Oeste, a razón de unos 10 minutos de arco por año.'
    },
    {
      question: '¿Cómo se llaman las líneas que unen puntos de igual declinación magnética?',
      options: ['Isobaras', 'Isotermas', 'Isógonas', 'Isóbaras'],
      correctAnswer: 2,
      explanation: 'Las líneas que unen puntos de igual declinación magnética se llaman isógonas.'
    }
  ]
};

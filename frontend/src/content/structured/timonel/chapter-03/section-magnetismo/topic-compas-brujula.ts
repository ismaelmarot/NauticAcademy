import { Topic } from '@/content/types';

export const topic: Topic = {
  id: 'compas-brujula',
  title: 'El compás magnético y la brújula',
  readingTime: 10,
  audioTime: '09:30',

  content: [
    { type: 'title', text: 'El Compás Magnético y la Brújula' },
    { type: 'paragraph', text: 'Desde tiempos remotos, el ser humano buscó un medio confiable para orientarse en el mar —y en tierra firme también— cuando las referencias costeras o los astros no eran visibles.' },
    { type: 'paragraph', text: 'La observación de que algún tipo de figura metálica o una aguja imantada tiende a alinearse según una dirección fija condujo al desarrollo de la brújula, uno de los instrumentos más antiguos y revolucionarios de la navegación. Con el progreso de la tecnología y las necesidades de la navegación oceánica, la brújula evolucionó hasta convertirse en el compás magnético, un instrumento más estable y preciso, específicamente diseñado para ser utilizado a bordo de los buques.' },
    { type: 'paragraph', text: 'Ambos, la brújula y el compás, se basan en el mismo principio físico: la acción del campo magnético terrestre sobre un imán, pero difieren en su construcción y en el modo en que permiten determinar y mantener un rumbo con exactitud.' },
    { type: 'title', text: 'La Brújula' },
    { type: 'paragraph', text: 'La brújula está compuesta por una aguja imantada, fabricada con materiales ferrosos dotados de propiedades magnéticas, cuyo centro se apoya sobre un eje vertical o pivote que le permite girar libremente en el plano horizontal. El extremo de la aguja que apunta hacia el Norte magnético se identifica habitualmente con un color distinto, una letra "N" —por la inicial de Norte— o una pequeña marca luminiscente.' },
    { type: 'paragraph', text: 'La aguja se dispone sobre un pequeño plato denominado "limbo", que es una rosa de los vientos graduada en el sistema sexagesimal, en 360 grados. Este limbo suele incluir al menos las marcas de los cuatro puntos cardinales —Norte, Sur, Este y Oeste— y en muchos modelos también las subdivisiones intermedias.' },
    { type: 'paragraph', text: 'Todo el conjunto se aloja dentro de una carcasa circular, generalmente cubierta con una tapa transparente de vidrio o plástico, que permite observar la aguja y leer la dirección hacia la que apunta. En algunos modelos, especialmente los utilizados en orientación terrestre, se añaden líneas de fe, espejos de lectura o visores, que ayudan a tomar rumbos visuales más precisos.' },
    { type: 'paragraph', text: 'Vale acotar que el único elemento ferroso e imantado en la brújula, es su aguja.' },
    { type: 'paragraph', text: 'Aunque la brújula es un instrumento simple, económico y fácil de fabricar, resulta poco práctica a bordo de embarcaciones. Los movimientos del barco —especialmente los balanceos y cabeceos— hacen que la aguja se incline trabándose, perdiendo su libertad de movimiento y, por lo tanto, su precisión. Además, requiere ser observada desde arriba, lo que dificulta su uso en la timonera o en condiciones de navegación adversa.' },
    { type: 'title', text: 'El Compás Magnético' },
    { type: 'paragraph', text: 'El compás magnético representa la evolución natural de la brújula, adaptado específicamente para su uso a bordo de embarcaciones, donde las condiciones de movimiento y vibración hacen ineficaz a la aguja suspendida de la brújula tradicional.' },
    { type: 'paragraph', text: 'En el compás, es el disco de la "Rosa de los Vientos" la que se orienta hacia el Norte magnético —en lugar de la aguja, como en la brújula— gracias a un conjunto de imanes fijados en su cara inferior, denominado equipaje magnético. Estos imanes están dispuestos paralelamente y alineados con el eje Norte-Sur de la Rosa, lo que otorga al conjunto una mayor sensibilidad y estabilidad direccional. De esta manera, aun cuando el compás gire o la embarcación cambie de rumbo, la Rosa mantiene su orientación respecto del meridiano magnético del lugar.' },
    { type: 'paragraph', text: 'La Rosa está montada dentro de un contenedor estanco lleno de una mezcla de agua destilada y alcohol, donde el agua actúa como fluido amortiguador que reduce las oscilaciones causadas por el movimiento del barco, mientras que el alcohol cumple funciones de anticongelante en temperaturas gélidas, y evita la formación de burbujas.' },
    { type: 'paragraph', text: 'El conjunto permite la lectura de la Rosa desde cualquier posición, ya que flota libremente dentro del líquido. En este instrumento, la antigua aguja móvil de la brújula es reemplazada por una línea de fe fija, representada por un filamento o trazo marcado sobre el cristal o sobre la carcasa del compás, que indica la dirección a la que va la proa del barco. Así, el rumbo magnético del buque se obtiene leyendo en la Rosa el valor que coincide con esa línea de fe.' },
    { type: 'title', text: 'El Desvío del Compás' },
    { type: 'paragraph', text: 'El desvío del compás es un error propio del instrumento, causado por la influencia magnética de otros elementos existentes dentro de la embarcación, tales como las masas metálicas cercanas al compás, los campos electromagnéticos generados por equipos eléctricos o electrónicos, y la imantación permanente o inducida de estructuras del buque, como el casco o los mástiles de metales ferrosos, o los motores.' },
    { type: 'paragraph', text: 'También puede variar ligeramente con los cambios de rumbo o de latitud, debido a las modificaciones que sufre la relación entre el campo magnético terrestre y los elementos magnéticos del barco.' },
    { type: 'paragraph', text: 'Para reducir o evitar este error, el compás debe instalarse lo más alejado posible de grandes masas metálicas y de fuentes eléctricas. Es importante no guardar objetos ferrosos o imantados en las proximidades y mantener fijas las instalaciones eléctricas cercanas para evitar variaciones en el campo magnético local.' },
    { type: 'paragraph', text: 'Debe verificarse periódicamente el desvío comparando el rumbo del compás con direcciones conocidas y, cuando sea necesario, realizar la compensación del compás, ajustando los pequeños imanes o las esferas de Kelvin —dependiendo del tipo de compás y buque— hasta lograr una lectura correcta.' },
    { type: 'title', text: 'Las Esferas de Thomson' },
    { type: 'paragraph', text: 'Las esferas de Thomson, también conocidas como bolas de compensación o esferas de Kelvin, son dos esferas metálicas, generalmente de hierro dulce, que se colocan a ambos lados del compás magnético, sostenidas por brazos regulables.' },
    { type: 'paragraph', text: 'Su función es corregir el desvío causado por la imantación horizontal permanente del buque. Cuando una embarcación está construida con materiales ferrosos o cuenta con motores y estructuras metálicas, estas adquieren cierta magnetización permanente que genera su propio campo magnético, el que interfiere con el del compás, desviándolo.' },
    { type: 'paragraph', text: 'Para compensar ese efecto, se ajusta la posición de las esferas acercándolas o alejándolas del compás, y moviéndolas hacia arriba o hacia abajo hasta que la lectura del instrumento coincida con el Norte magnético real.' },
    { type: 'paragraph', text: 'Las esferas de Thomson actúan únicamente sobre los errores producidos por magnetización horizontal permanente. Otros tipos de desvíos —como los provocados por magnetización inducida o por variaciones locales— se corrigen mediante imanes adicionales o con la colocación de una barra vertical llamada "barra Flinders", situada cerca del compás para contrarrestar la magnetización vertical.' }
  ],

  quiz: [
    {
      question: '¿Cuál es la principal diferencia entre la brújula y el compás magnético?',
      options: ['La brújula es más precisa', 'En el compás la rosa se orienta, en la brújula es la aguja', 'No hay diferencia', 'El compás no usa magnetismo'],
      correctAnswer: 1,
      explanation: 'En el compás magnético es el disco de la Rosa de los Vientos el que se orienta hacia el Norte magnético gracias a un equipaje magnético, mientras que en la brújula es la aguja imantada la que se orienta.'
    },
    {
      question: '¿Qué función cumple el alcohol en el líquido del compás?',
      options: ['Aumentar la viscosidad', 'Actuar como anticongelante y evitar burbujas', 'Dar color al líquido', 'Aumentar el peso'],
      correctAnswer: 1,
      explanation: 'El alcohol cumple funciones de anticongelante en temperaturas gélidas y evita la formación de burbujas en el líquido del compás.'
    },
    {
      question: '¿Qué son las esferas de Thomson?',
      options: ['Instrumentos de medición de profundidad', 'Esferas metálicas para corregir el desvío por imantación horizontal', 'Tipos de brújulas', 'Rosas de los vientos especiales'],
      correctAnswer: 1,
      explanation: 'Las esferas de Thomson son dos esferas metálicas de hierro dulce que se colocan a ambos lados del compás para corregir el desvío causado por la imantación horizontal permanente del buque.'
    },
    {
      question: '¿Qué indica la línea de fe en el compás magnético?',
      options: ['El Norte verdadero', 'La dirección a la que va la proa del barco', 'La velocidad del barco', 'La profundidad del agua'],
      correctAnswer: 1,
      explanation: 'La línea de fe es un filamento o trazo marcado sobre el cristal o carcasa del compás que indica la dirección a la que va la proa del barco. El rumbo magnético se lee en la Rosa en el valor que coincide con esa línea.'
    }
  ]
};

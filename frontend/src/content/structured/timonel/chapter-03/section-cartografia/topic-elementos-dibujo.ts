import { Topic } from '@/content/types';

export const topic: Topic = {
  id: 'elementos-dibujo',
  title: 'Elementos de dibujo para trabajo sobre cartas náuticas',
  readingTime: 14,
  audioTime: '13:00',

  content: [
    { type: 'title', text: 'Elementos de Dibujo para Trabajo sobre Cartas Náuticas' },
    { type: 'paragraph', text: 'El trabajo del navegante, es decir, de quien controla la navegación y plantea la derrota a seguir, se realiza principalmente sobre las cartas náuticas, trazando rumbos, midiendo distancias y estimando posiciones, valiéndose de un pequeño conjunto de instrumentos de dibujo que, aunque sencillos, es conveniente conocer y aprender las buenas prácticas acerca de su uso.' },
    { type: 'title', text: 'Las Reglas Paralelas' },
    { type: 'paragraph', text: 'Las reglas paralelas están formadas por dos reglas planas, generalmente transparentes, y graduadas con escalas angulares y unidades de longitud —como centímetros o pulgadas—, unidas entre sí por dos bisagras inclinadas en el mismo sentido.' },
    { type: 'paragraph', text: 'Ese sistema de bisagras permite desplazar una regla mientras la otra permanece fija, manteniéndolas siempre paralelas.' },
    { type: 'paragraph', text: 'Se utilizan para transportar líneas rectas —tales como las correspondientes a rumbos o marcaciones— sobre la carta náutica o el croquis, desde un punto determinado hasta otro, o bien desde la rosa de los vientos impresa en la carta hasta la posición deseada.' },
    { type: 'paragraph', text: 'El procedimiento es sencillo: se apoya el borde de una de las reglas sobre la línea que se desea copiar y, mientras se la mantiene firmemente apoyada, se mueve la otra regla hasta alcanzar el punto donde debe reproducirse la recta. De esta manera se traslada una línea recta desde un lugar de la carta a otro.' },
    { type: 'paragraph', text: 'Cuando la distancia a la que se debe mover la recta excede el rango que permite la apertura de las reglas paralelas, el traslado puede realizarse en dos o más movimientos sucesivos, conservando el paralelismo en cada paso para asegurar la precisión del trazado.' },
    { type: 'title', text: 'Buenas Prácticas para el Uso de las Reglas Paralelas' },
    { type: 'list', items: [
      'Calidad: compruebe que las reglas no tengan juego y que sus bisagras estén firmes',
      'Precisión: apoye una de las reglas exactamente sobre la línea base que se desea trasladar',
      'Mantenga la regla que está sobre la recta firmemente en su posición para evitar desvíos',
      'Verifique que la regla móvil está en el lugar correcto antes de efectuar el trazo',
      'Cualquier pequeña inclinación producirá un error que se irá amplificando a medida que avance',
      'Para movimientos sucesivos, mantenga siempre una regla apoyada mientras mueve la otra',
      'Después de varios traslados, verifique que las rectas copiadas sigan siendo paralelas a la línea de base'
    ]},
    { type: 'title', text: 'Alternativas a las Reglas Paralelas' },
    { type: 'paragraph', text: 'Existen otros instrumentos que pueden utilizarse para trasladar rectas de forma paralela:' },
    { type: 'paragraph', text: 'Regla de rodillos o Rolling rule: consiste en una regla recta montada sobre un rodillo cilíndrico, que permite deslizarla suavemente sobre la superficie de la carta sin necesidad de movimientos alternados. Es una herramienta rápida y cómoda, pero requiere que la superficie de la carta esté perfectamente plana.' },
    { type: 'paragraph', text: 'Uso combinado de escuadra y regla: la escuadra actúa como elemento móvil que copia las líneas, mientras que la regla sirve como guía fija para mantener el paralelismo durante el desplazamiento.' },
    { type: 'title', text: 'El Talco o Regla de Navegación' },
    { type: 'paragraph', text: 'El talco o regla de navegación es un elemento de dibujo que surge de combinar un transportador circular graduado en 360º, con una regla, también graduada, pero en escalas de distancia, que parte del eje central del transportador.' },
    { type: 'paragraph', text: 'Se lo utiliza para medir ángulos a partir de un punto que se debe hacer coincidir con el centro del transportador, o para trazar rectas de rumbos o marcaciones en la dirección de un valor angular dado.' },
    { type: 'title', text: 'Buenas Prácticas para el Uso del Talco' },
    { type: 'list', items: [
      'Precisión en el centrado: asegúrese de que el punto central del talco coincida exactamente con el punto de la carta desde donde se va a medir o trazar',
      'Alineación con el norte verdadero: alinee el 000º de la rosa del transportador con un meridiano de la carta',
      'Presión uniforme: mantenga el talco firmemente apoyado sin deslizarlo al trazar líneas',
      'Precisión del instrumento: controle que la regla del talco esté alineada con la rosa del transportador, verificando que pase por valores exactamente opuestos'
    ]},
    { type: 'title', text: 'El Compás de Puntas Secas y el de Dibujo' },
    { type: 'paragraph', text: 'El compás de puntas secas posee dos brazos, idealmente metálicos, terminados en puntas agudas, sin elemento de dibujo. En la parte superior, ambos brazos se unen mediante un eje provisto de un tornillo de ajuste, que permite regular la rigidez del movimiento.' },
    { type: 'paragraph', text: 'El compás de dibujo mantiene la misma estructura general, pero reemplaza una de las puntas por un porta-mina o punta de grafito, lo que permite trazar círculos o arcos con buena precisión.' },
    { type: 'paragraph', text: 'Ambos instrumentos se emplean para medir distancias entre dos puntos de la carta náutica, posicionando cada extremo sobre cada uno de los puntos, y llevando luego esa apertura de los brazos del compás a la escala de latitudes sobre los laterales de la carta, para convertir dichas medidas en millas náuticas.' },
    { type: 'title', text: 'Buenas Prácticas para el Uso del Compás' },
    { type: 'list', items: [
      'Apoyar siempre ambas puntas con suavidad para no marcar ni dañar el papel',
      'Ajustar el tornillo de fricción para que el compás mantenga su apertura con firmeza',
      'Usar puntas de lápiz finas para mayor precisión',
      'La apertura del compás se debe mantener inalterada entre la toma de una medición y su traslado'
    ]},
    { type: 'title', text: 'La Lupa o Lupa con Base' },
    { type: 'paragraph', text: 'Una lupa facilita la lectura de detalles finos o minúsculos en cartas de pequeña escala o cuando la luz es insuficiente.' },
    { type: 'paragraph', text: 'La lupa con base es un instrumento óptico diseñado para facilitar la ampliación de detalles finos directamente sobre una superficie plana, como una carta náutica. La principal ventaja de la lupa de base radica en la estabilidad, al no depender del pulso del usuario.' },
    { type: 'title', text: 'Lápices y Gomas de Borrar' },
    { type: 'paragraph', text: 'En las cartas náuticas se trabaja en general en lápiz, para poder borrar lo escrito y dejar la carta en su estado original.' },
    { type: 'paragraph', text: 'Se recomiendan minas duras —"HB" o "H"— para líneas finas y limpias que no manchen la carta al desplazar la mano o algún otro objeto. Los lápices blandos —de tipo "B"— también pueden ser utilizados, particularmente si luego se borrará lo dibujado.' },
    { type: 'paragraph', text: 'En lo que hace a las gomas de borrar, son preferibles las blandas o de vinilo o plástico. Deben evitarse gomas rugosas o muy granuladas que puedan arrastrar tinta, levantar la superficie de la carta o dejar marcas.' }
  ],

  quiz: [
    {
      question: '¿Para qué se utilizan las reglas paralelas?',
      options: ['Para medir distancias', 'Para transportar líneas rectas sobre la carta manteniendo el paralelismo', 'Para trazar círculos', 'Para medir profundidades'],
      correctAnswer: 1,
      explanation: 'Las reglas paralelas se utilizan para transportar líneas rectas —tales como las correspondientes a rumbos o marcaciones— sobre la carta náutica, manteniéndolas siempre paralelas.'
    },
    {
      question: '¿Qué es el talco o regla de navegación?',
      options: ['Una regla de rodillos', 'Un transportador circular combinado con una regla graduada', 'Un compás de puntas secas', 'Una lupa con base'],
      correctAnswer: 1,
      explanation: 'El talco combina un transportador circular graduado en 360º con una regla graduada en escalas de distancia, que parte del eje central del transportador.'
    },
    {
      question: '¿Qué tipo de mina de lápiz se recomienda para trabajar sobre cartas náuticas?',
      options: ['Minas blandas tipo "B"', 'Minas duras "HB" o "H"', 'Tinta permanente', 'Cualquier tipo de lápiz'],
      correctAnswer: 1,
      explanation: 'Se recomiendan minas duras —"HB" o "H"— para líneas finas y limpias que no manchen la carta al desplazar la mano u otros objetos sobre ella.'
    },
    {
      question: '¿Para qué se utiliza el compás de puntas secas en la carta náutica?',
      options: ['Para trazar círculos', 'Para medir distancias entre dos puntos', 'Para borrar trazos', 'Para medir ángulos'],
      correctAnswer: 1,
      explanation: 'El compás de puntas secas se emplea para medir distancias entre dos puntos de la carta, llevando luego esa apertura a la escala de latitudes para convertir las medidas en millas náuticas.'
    }
  ]
};

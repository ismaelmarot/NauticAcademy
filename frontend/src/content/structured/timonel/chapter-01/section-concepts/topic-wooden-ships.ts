import { Topic } from '@/content/types';

export const topic: Topic = {
  id: 'wooden-ships',
  title: 'Las partes de los veleros de madera',
  readingTime: 6,
  audioTime: '04:51',

  content: [
    { type: 'title', text: 'Partes de los Veleros de Madera' },
    { type: 'image', src: '/images/content/timonel/chapter-01/estructura_01.png', alt: 'Partes de los veleros de madera', caption: 'Estructura tradicional de madera' },
    { type: 'paragraph', text: 'A diferencia de los veleros de fibra de vidrio, cuyos cascos se fabrican a partir de matrices, los de madera requieren del ensamblaje artesanal de cientos de piezas y partes.' },
    { type: 'paragraph', text: 'La estructura fundamental es la que ya hemos explicado, basada en una quilla robusta que se une en la proa a la roda y en la popa al codaste, y sobre la cual se calzan las cuadernas. Debajo de la quilla se agregan una serie de tablones que conforman la zapata y debajo de ella se coloca el quillote, fijando todo el conjunto con pernos. La función de la zapata es alejar el quillote —que es la pieza de que lleva el lastre— del centro de gravedad del barco, produciendo un brazo de palanca más largo que redunde en mayor estabilidad horizontal.' },
    { type: 'paragraph', text: 'La sobrequilla consiste en un entablado de madera más ancha que la sección de la quilla, que se coloca sobre ésta para trabar en su sitio a las cuadernas.' },
    { type: 'paragraph', text: 'Las serretas son listones que se cruzan transversalmente desde la roda hasta el codaste, a distintas alturas de las cuadernas, para darle a éstas sostén estructural.' },
    { type: 'paragraph', text: 'Los baos se colocan sobre las cuadernas, dándole el soporte necesario para que estas puedan resistir la presión ejercida por el agua sobre el forro del casco, que lo trasladada a las cuadernas. Asimismo, los baos sirven de base al tablado de la cubierta.' },
    { type: 'paragraph', text: 'El forro exterior del casco se construye con un conjunto de tablas, llamadas tracas, que se ensamblan una sobre la otra, fijándolas horizontalmente a las cuadernas. La traca de aparadura es la que se coloca inmediatamente sobre la quilla —puede ser más de una línea de tracas— y es de un espesor superior a las demás. Sobre ésta se colocan las tracas cinta, llamándose tracas cinta de agua a las que quedan debajo de la línea de flotación en contacto con el agua —esa es la obra viva— y que son más gruesas que las que quedarán sobre ella —en la obra muerta—.' },
    { type: 'paragraph', text: 'En algunos antiguos barcos de vela, particularmente a partir del siglo XVIII, solía cubrirse las tracas cinta de agua con un revestimiento de láminas de cobre, colocando entre ellas y la madera una capa de fieltro o papel.' },
    { type: 'paragraph', text: 'El objeto de esto era aislar la madera del contacto con el agua, para evitar su podredumbre y, principalmente, la fijación de lapas, moluscos y crustáceos —a los que no les agrada el cobre— logrando así mantener la superficie sana y lisa, que es lo que se necesita para que el casco prolongue su vida útil y se deslice mejor en el agua.' },
    { type: 'paragraph', text: 'Las tracas pueden colocarse de la forma tradicional, montándolas una sobre otra de tal forma que queden unidas por sus cantos, o en tingladillo superponiendo sus bordes.' },
    { type: 'paragraph', text: 'La ventaja del segundo método es que permite usar tracas —tablas— más finas, obteniéndose así una embarcación relativamente más liviana, pero en detrimento de la performance pues el escalonamiento de las tracas en el tingladillo genera algunas turbulencias al navegar que degradan la facilidad de deslizamiento del casco en el agua.' },
    { type: 'paragraph', text: 'La unión de las cuadernas con los baos se refuerza con un listón llamado durmiente que, al igual que las serretas, recorre la banda de proa a popa, conectando el extremo de la roda con el espejo de popa o el codaste.' },
    { type: 'paragraph', text: 'Sobre los baos se coloca luego la tablazón que forma el forro de la cubierta, hecho también con tracas del mismo ancho ensambladas una al lado de la otra. La única excepción a esto son las tracas de trancanil, que son las que quedan en el borde de la cubierta, en contacto con la más alta de las tracas cinta, y que se las fabricaba con tablas generalmente más anchas, y montadas en desnivel para facilitar el escurrimiento del agua hacia la borda.' },
    { type: 'paragraph', text: 'Antiguamente, la unión de las tracas, tanto las de las bandas como las de la cubierta, se calafateaban —es decir, se sellaban— con una mezcla de estopa embebida en brea para impedir el paso del agua. Actualmente esto se resuelve con selladores sintéticos.' },
    { type: 'paragraph', text: 'Sobre el trancanil sobresalen los barraganetes, que son los extremos de las cuadernas, o bien unos tacos de madera instalados a propósito, y sobre los cuales se apoya la tapa de la regala, que opera como borde de toda la obra muerta.' }
  ],

  quiz: [
    {
      question: '¿Qué son las cuadernas?',
      options: ['Elementos longitudinales', 'Elementos transversales del casco', 'Partes de la vela', 'Tipos de anclas'],
      correctAnswer: 1,
      explanation: 'Las cuadernas son los elementos transversales que dan forma al casco y sostienen las tracas.'
    },
    {
      question: '¿Qué es la zapata?',
      options: ['Parte del timón', 'Tablones debajo de la quilla', 'Una vela', 'El mástil'],
      correctAnswer: 1,
      explanation: 'La zapata aleja el quillote del centro de gravedad, produciendo mayor estabilidad.'
    },
    {
      question: '¿Qué son las tracas?',
      options: ['Cabos de la jarcia', 'Tablas del forro exterior', 'Partes del mástil', 'Tipo de ancla'],
      correctAnswer: 1,
      explanation: 'Las tracas son las tablas que forman el forro exterior del casco, fijadas a las cuadernas.'
    },
    {
      question: '¿Qué es el calafateo?',
      options: ['Izar una vela', 'Sellar las uniones de las tracas', 'Navegar a vela', 'Cortar la madera'],
      correctAnswer: 1,
      explanation: 'El calafateo es el sellado de las uniones de las tracas con estopa y brea o selladores sintéticos.'
    }
  ]
};

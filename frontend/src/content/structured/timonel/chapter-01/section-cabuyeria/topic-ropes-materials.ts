import { Topic } from '@/content/types';

export const topic: Topic = {
  id: 'ropes-materials',
  title: 'Tipos de Cabos, Materiales y Aplicaciones',
  readingTime: 17,
  audioTime: '15:39',

  content: [
    { type: 'title', text: 'Definiciones' },
    { type: 'paragraph', text: 'La palabra "cabo" se utiliza en la náutica como un término genérico para referirse a todas las cuerdas, independientemente de su tipo, de su mena —su circunferencia— o del material con el que están fabricadas, y tanto para aquellas utilizadas para resolver la maniobra a bordo como, por ejemplo, las drizas y las escotas, como las usadas en tierra y en los muelles para amarrar a los buques o sujetar las cargas.' },
    { type: 'paragraph', text: 'La cabuyería, por su lado, define al conjunto de cabos utilizados en un barco, y se extiende al arte de realizar nudos utilizando cabos.' },

    { type: 'subtitle', text: 'Tipos de Cabos' },
    { type: 'image', src: '/images/content/timonel/chapter-01/cabuyeria_01.png', alt: 'Tipos de cabos', caption: 'Diferentes tipos de cabos y cuerdas' },
    { type: 'paragraph', text: 'Los cabos están íntimamente relacionados a la náutica, al punto tal que no es posible rastrear que fue primero, si uno o el otro.' },
    { type: 'paragraph', text: 'El primer registro que existe de la fabricación de cuerdas y cabos data del año 4.000 a.c., en Egipto, donde se los elaboraba principalmente de fibras de juncos que eran abundantes en las costas del Nilo, y en menor medida de las extraídas de las palmeras, el desecho del lino y el papiro. Estos cabos se fabricaban manualmente, retorciendo los manojos de fibras sobre si mismos para lograr extenderlos y darle resistencia mecánica.' },
    { type: 'paragraph', text: 'Si bien los primeros diagramas de máquinas para producir cuerdas y cabos surgieron de la mano de Leonardo Da Vinci, se cree que ya existían herramientas para ayudar a su fabricación desde bastante tiempo atrás.' },
    { type: 'paragraph', text: 'Finalmente, el gran paso evolutivo en las técnicas y materiales utilizados en la fabricación de cabos ocurrió a mediados del siglo XX, con la aparición de las fibras sintéticas, que no solo son mucho más resistentes que las vegetales y textiles, sino que además de ser retorcidas pueden ser también trenzadas logrando así cabos extremadamente fuertes y robustos.' },
    { type: 'paragraph', text: 'Al respecto, vale decir que un cabo se fabrica uniendo grupos de pocas fibras que se retuercen entre sí para formar las "filásticas" o hilos base. Esas filásticas se unen luego en nuevos grupos que se retuercen nuevamente entre sí resultando en "cordones", que vuelven a retorcerse en grupos para formar "cordones retorcidos". Estos pueden retorcerse otra vez en grupos de tres o cinco obteniendo así los "cabos retorcidos". A su vez puede forrarse el cabo en una vaina de otro material, sea para agregar resistencia a los rayos solares o para facilitar su manipulación.' },
    { type: 'paragraph', text: 'Otra alternativa de fabricación más moderna consiste en trenzar los cordones, en lugar de retorcerlos, para obtener así los llamados "cabos trenzados".' },
    { type: 'paragraph', text: 'El cabo retorcido más elemental es el de tres cordones, que resulta en un cabo sumamente flexible al punto de que permite hacer "gazas" —ojales y lazos no deslizables— con facilidad, pero esa misma flexibilidad hace que el cabo sufra de algún nivel de estiramiento.' },
    { type: 'paragraph', text: 'Para evitar ese estiramiento se fabrican otros cabos con un trenzado más cerrado llamado "trenzado macizo" o "trenzado sólido". Estos cabos pueden resultar de la combinación de un alma interior de cordones sin trenzar forrada por otra malla trenzada. En cualquier caso, resultan ser cabos más bien rígidos, que no permiten realizar gazas pequeñas, y con un bajo grado de estiramiento.' },
    { type: 'paragraph', text: 'Otra opción son los cabos de "trenzado hueco", que se confeccionan con un único trenzado tubular periférico, dejando el interior vacío. Los cabos utilizados para ski acuático son un ejemplo de este tipo de cabo.' },
    { type: 'paragraph', text: 'Los cabos de "doble trenzado" son los de confección más compleja, pues básicamente consisten en dos cabos en uno. Se trenza primero el alma interior y luego se trenza sobre ella una vaina de otro material. Esta técnica permite combinar en un mismo cabo propiedades de distintos materiales, por ejemplo, alma de bajo estiramiento y funda con mayor resistencia a la fricción.' },
    { type: 'paragraph', text: 'Por su conformación, el cabo retorcido es más flexible y elástico —y en general más económico— que el cabo trenzado, y por lo tanto, más apto para fabricar gazas y para resolver amarres pues en esos casos es bueno que el cabo a utilizar tenga algo de elasticidad ya que de esa forma el barco sufre menos el movimiento y tirones en la amarra. Y en cambio, cuando se busca un cabo de bajo estiramiento y flexible para pasar por motones o hacer nudos, se debe acudir a los cabos trenzados.' },

    { type: 'subtitle', text: 'Materiales y Atributos' },
    { type: 'image', src: '/images/content/timonel/chapter-01/cabuyeria_02.png', alt: 'Materiales de cabos', caption: 'Fibras naturales y sintéticas' },
    { type: 'paragraph', text: 'Actualmente, los cabos de fibras naturales se fabrican principalmente con hebras de algodón, lino, de bonote o cáñamo.' },
    { type: 'paragraph', text: 'Este tipo de cabos suele sufrir un gran desgaste en el ambiente marino y no resisten tensiones producidas por tirones violentos. Tampoco soportan los roces constantes y, cuando se mojan, aumentan notablemente de peso y se hinchan. Además, los nudos son difíciles de desarmar, especialmente si fueron sometidos a tensiones. En función de las cargas que soportan, el diámetro de este tipo de cabos debe ser mayor que en el caso de los sintéticos.' },
    { type: 'paragraph', text: 'A igualdad de cargas, la mena —longitud de la circunferencia— de este tipo de cabos debe ser mayor que la de los cabos sintéticos.' },
    { type: 'paragraph', text: 'Los cabos de fibras sintéticas, por su parte, se fabrican a partir de múltiples hilos continuos —que no tienen cortes ni empalmes— que se retuercen entre sí aplicando las técnicas ya explicadas. Son más livianos, soportan mayores tensiones y tirones, no aumentan de peso luego de mojarse y las secciones son más pequeñas respecto del esfuerzo a realizar. Algunos nudos pueden deshacerse con más facilidad que en los cabos de fibras naturales, ya que son materiales más suaves. No obstante, tienen la desventaja de fundirse con las altas temperaturas generadas por el roce entre dos cabos o motones que no ruedan o ante la exposición continua al Sol, estropeando por completo el cabo.' },

    { type: 'subtitle', text: 'Fibras Sintéticas' },
    { type: 'image', src: '/images/content/timonel/chapter-01/cabuyeria_03.png', alt: 'Fibras sintéticas', caption: 'Cabos de nylon, poliéster y UHMWPE' },
    { type: 'paragraph', text: 'Nylon: También conocido como poliamida, es un material muy resistente y flexible que soporta bien la abrasión y la luz solar. Es ideal para ser utilizado en cabos de amarre, fondeo y remolque ya que es capaz de soportar tirones y no flota.' },
    { type: 'paragraph', text: 'Poliéster: Se lo conoce también como "Dacrón", que es el nombre comercial del producto. Su resistencia es similar a la del Nylon, pero es muy poco flexible, razón por la cual suele ser utilizado para hacer drizas —especialmente los que vienen pre-estirados y forrados— o cabos de fondeo y amarre.' },
    { type: 'paragraph', text: 'Polipropileno: Este material es poco resistente y no soporta grandes cargas de trabajo. Su principal ventaja es que es más liviano que el agua y por lo tanto flota, por lo que es útil para realizar aparejos de rescate, o para remolcar salvavidas o luces de señales.' },
    { type: 'paragraph', text: 'Polietileno: Sus características son similares a las del polipropileno, siendo poco resistente a la tracción, a los rayos ultravioletas y a los roces, y flota sobre el agua. Se lo usa también para remolcar objetos livianos tales como salvavidas o para realizar los llamadores en las amarras.' },
    { type: 'paragraph', text: 'Aramida: Es una fibra derivada del Nylon, pero con una resistencia al estiramiento y la tracción tres veces superior. A los cabos de esta fibra se los conoce usualmente por sus marcas comerciales, tales como Kevlar o Technora. Su principal debilidad es que pierde resistencia al ser doblado, por lo cual se recomienda hacer gazas en reemplazo de los nudos. Dado que tiene baja resistencia a la exposición solar, se lo provee forrado en vainas de poliéster. Suele usárselo en veleros de regata para resolver la jarcia móvil, especialmente para aquellos cabos en los cuales debe prevenirse el estiramiento.' },
    { type: 'paragraph', text: 'Polietileno de ultra alto peso molecular (UHMWPE): Son extremadamente fuertes, muy ligeros y flotan en el agua, con excelente resistencia a la abrasión y a productos químicos, pero sensibles a las altas temperaturas y la radiación solar, por lo que se los vende recubiertos en vainas de otros materiales resistentes al Sol. Son más conocidos por las marcas comerciales Dyneema y Spectra.' },

    { type: 'subtitle', text: 'Características' },
    { type: 'image', src: '/images/content/timonel/chapter-01/cabuyeria_04.png', alt: 'Características de cabos', caption: 'Elasticidad, peso y resistencia' },
    { type: 'paragraph', text: 'Las principales características que definen a los cabos son su elasticidad, su peso y su coeficiente de resistencia.' },
    { type: 'paragraph', text: 'Grado de Elasticidad: Trata la capacidad de recuperación ante los estiramientos que pueda sufrir un determinado cabo, y tiene tres instancias: la elasticidad (recuperación inmediata), la histéresis (recuperación gradual) y el estiramiento permanente (no se recupera).' },
    { type: 'paragraph', text: 'Peso: Tiene que ver con la capacidad de un cabo de flotar o de hundirse. El polipropileno y el polietileno flotan, mientras que el nylon y el poliéster se hunden.' },
    { type: 'paragraph', text: 'Coeficiente de Resistencia: Mide el límite de rotura de cada cabo. A mayor diámetro, mayor resistencia. Los materiales sintéticos modernos como el UHMWPE (Dyneema) ofrecen la mayor resistencia por diámetro.' },

    { type: 'subtitle', text: 'Aplicación' },
    { type: 'paragraph', text: 'Amarre, Fondeo y Remolque: Para resolver amarres, fondeos y remolques, pueden utilizarse cabos retorcidos de tres cordones, pero en general, son más convenientes los de doble trenzado porque mantienen su flexibilidad y grado de elasticidad. Los materiales aptos son el Nylon y el poliéster, prefiriendo el primero, por tener mayor elasticidad.' },
    { type: 'paragraph', text: 'Para remolcar embarcaciones pequeñas y livianas, tales como un bote auxiliar o un semirrígido, conviene usar cabos flotantes de polipropileno. Pero para remolcar embarcaciones más pesadas, debe pensarse ya en un cabo de características similares a las de los cabos de fondeo.' },
    { type: 'paragraph', text: 'Cabos de Maniobra para Veleros: El término "cabo de maniobra" refiere a los cabos que forman parte de la jarcia móvil, es decir las drizas, las escotas y los demás cabos que hacen al control del velamen. Para esta aplicación pueden utilizarse cabos de poliéster, siempre que sean de excelente confección y de muy bajo estiramiento. En los veleros de crucero de gran tamaño y en los de regata, se requieren materiales más costosos como los de polietileno del tipo UHMWPE (Dyneema o Spectra).' },

    { type: 'subtitle', text: 'Cuidado y Protección de los Cabos' },
    { type: 'paragraph', text: 'Exposición al Sol: No exponer innecesariamente los cabos al Sol, pues la acción de los rayos ultravioletas y las altas temperaturas los desgastan.' },
    { type: 'paragraph', text: 'Estiba: No almacenar los cabos mientras estén húmedos. Es conveniente dejarlos secar al aire libre antes de estibarlos.' },
    { type: 'paragraph', text: 'Roce y Fricción: Evitar las fricciones excesivas contra bordes y ángulos agudos o contra superficies ásperas. Utilizar guardacabos metálicos o plásticos cuando deba vincularse el cabo con grilletes o mosquetones.' },
    { type: 'paragraph', text: 'Lavado: Lavar los cabos con abundante agua dulce, particularmente si hubiesen estado en contacto con arena o tierra. Luego de navegaciones en el mar, conviene lavarlos en puerto con agua potable para evitar que el salitre queme o degrade las fibras.' },
    { type: 'paragraph', text: 'Corte: En caso de tener que cortar un cabo de forma programada, hágalo con un instrumento cortante al que se lo haya previamente calentado al punto de que pueda derretir materiales plásticos.' },
    { type: 'paragraph', text: 'Medida Adecuada: Utilizar cabos de la sección apropiada con respecto a su función de carga o esfuerzo. Debido a las diferentes tecnologías, algunos cabos son de pequeña sección con respecto a la carga que soportan.' }
  ],

  quiz: [
    {
      question: '¿Qué material es ideal para cabos de amarre y fondeo por su elasticidad?',
      options: ['Polipropileno', 'Nylon (Poliamida)', 'Poliéster', 'Aramida'],
      correctAnswer: 1,
      explanation: 'El Nylon o poliamida es ideal para amarres y fondeos debido a su alta elasticidad, lo que permite absorber tirones.'
    },
    {
      question: '¿Cuál es la principal ventaja del polipropileno?',
      options: ['Es muy resistente', 'Flota en el agua', 'No se estira', 'Es muy económico'],
      correctAnswer: 1,
      explanation: 'El polipropileno es más liviano que el agua y flota, lo que lo hace útil para rescates y cabos de seguridad.'
    },
    {
      question: '¿Qué tipo de cabo es más flexible y elástico?',
      options: ['Cabo trenzado sólido', 'Cabo de trenzado hueco', 'Cabo retorcido de tres cordones', 'Cabo de doble trenzado'],
      correctAnswer: 2,
      explanation: 'El cabo retorcido de tres cordones es sumamente flexible y elástico, ideal para amarres y gazas.'
    },
    {
      question: '¿Qué material se conoce comercialmente como Dyneema o Spectra?',
      options: ['Nylon', 'Poliéster', 'UHMWPE', 'Aramida'],
      correctAnswer: 2,
      explanation: 'El Polietileno de ultra alto peso molecular (UHMWPE) se conoce comercialmente como Dyneema o Spectra.'
    }
  ]
};

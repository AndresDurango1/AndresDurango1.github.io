const dialogos_1 = [
    {
        tipo: "texto",
        personaje: "presenter", 
        texto: "Bienvenidos al Concurso 'Nociones Cloud' de Tigo Business. El día de hoy tengo unos invitados muy especiales, Fernando y Gabriela. Bienvenidos a este programa",
        audio: "../resources/audios/presenter/presenter-welcome.m4a"
    },
    { 
        tipo: "texto",
        personaje: "guests", 
        texto: "Muchas gracias Lucas. Buen día y muy agradecidos por tu invitación.",
        audio: "../resources/audios/guests/guests-gratitude.m4a"
    },
    { 
        tipo: "texto",
        personaje: "presenter", 
        texto: "El agradecimiento se los doy yo por aceptar esta invitación. Bien, Fernando y Gabriela, para esta ocasión el tema que trataremos es “Nociones del mundo Cloud y sus servicios",
        audio: "../resources/audios/presenter/presenter-gratitude.m4a"
    },
    {
        tipo: "video",
        personaje: "presenter", 
        texto: "Antes de iniciar hablemos un poco de historia. Nuestra civilización en su vertiginosa evolución tecnológica ha tenido momentos históricos en el mundo de la computación, podríamos remontarnos incluso a varios milenios atrás si queremos contemplar máquinas de cálculo como el ábaco. Si nos adelantamos un poco en el tiempo por allá en 1642 ya visualizábamos la máquina de pascal que traía consigo engranajes que le permitían realizar cálculos matemáticos lo propio con la máquina de Charles Babbage en 1834 que utilizó tarjetas perforadas para sus cálculos, hasta que llegamos a ENIAC considerada la primera computadora de propósito general y realizaba cálculos matemáticos en segundos ya estamos ubicados en el año 1945, en adelante se empiezan a fabricar máquinas de cómputo de 1ª, 2ª, 3ª 4ª generación que basaban su avance en la reducción de costo, consumo y en el aumento de sus capacidades y velocidades de procesamiento.",
        src: "../resources/video/presenter-history.mp4"
    },
];

const dialogos_2 = [
    {
        tipo: "texto",
        personaje: "both", 
        texto: "Bien. Revisemos las respuestas seleccionadas. Veo que estamos divididos en los conceptos; en ese caso analicemos las opciones que se nos presentan. Voy a ir leyendo aleatoriamente las respuestas",
        audio: "../resources/audios/presenter/presenter-review-answers.m4a"
    },
    {
        tipo: "texto",
        personaje: "both", 
        texto:"<span style='background-color:#488d2b'>La opción que nos indica que es un cuarto que aloja grandes máquinas de cómputo, que de forma autónoma corren procesos que no impactan al usuario final, por lo tanto, no están al servicio de estos. Es posible que ustedes vean algo de certeza en lo de cuarto que aloja máquinas de cómputo, pero tiene una inconsistencia; dice que no está al servicio del usuario final. Se cae ahí lo que buscamos como definición de Cloud.</span>",
        audio: "../resources/audios/presenter/presenter-review-question1-answer1.m4a"
    },
    {
        tipo: "texto",
        personaje: "both", 
        texto: "<span style='background-color:#f3af56'>Hay otra  opción que nos indica que es un grupo de computadores sobre los cuales los Ingenieros de T.I. pueden ejecutar un proceso empresarial crítico, que permite la continuidad de la operación. Esta opción probablemente inicia bien, no obstante, le deja la exclusividad de su uso solo a ingenieros de T.I.</span>",
        audio: "../resources/audios/presenter/presenter-review-question1-answer2.m4a"
    },
    {
        tipo: "texto",
        personaje: "both", 
        texto: "<span style='background-color:#3165c7'>También encontramos una opción que nos indica que es un conjunto de archivos en una máquina de cómputo que pueden ser ejecutados por un usuario administrador que accede a la máquina con usuario y contraseña. Pero en esta se está limitando el concepto a una sola máquina de cómputo con acceso restringido.</span>",
        audio: "../resources/audios/presenter/presenter-review-question1-answer3.m4a"
    },
    {
        tipo: "texto",
        personaje: "both", 
        texto: "<span style='background-color:#d93d4a'>Si revisamos la opción que nos indica que Cloud es un conjunto de recursos de infraestructura (como servidores, almacenamiento y redes) interconectados, que permiten el almacenamiento, procesamiento y ejecución de aplicaciones y que estos recursos están disponibles para los usuarios a través de internet u otras redes y se gestionan de manera flexible y escalable, vemos que esta respuesta define perfectamente lo que es Cloud.</span>",
        audio: "../resources/audios/presenter/presenter-review-question1-answer4.m4a"
    },
    {
        tipo: "texto",
        personaje: "guests", 
        texto: "La expresión 'conjunto de recursos de infraestructura' hace alusión, entonces, a las máquinas de cómputo robustas con sus componentes, es decir, disco, memoria, procesador y demás?",
        audio: "../resources/audios/guests/guests-question-1.m4a"
    },
    {
        tipo: "video",
        personaje: "presenter", 
        texto: "Muy bien definido querido amigo. Ese grupo de servidores con sus componentes, interconectados entre si a través de equipos de red es parte esencial de lo que denominamos un data center, y sobre esa red de servidores se alojan las aplicaciones que usualmente utilizamos.",
        src: "../resources/video/presenter-data-center.mp4"
    },
]
$('document').ready(function () {


  // var res;

  var misverbos = [{
      "spanish": "Ser/estar",
      "infinitive": "be",
      "simplePast": "was",
      "pastParticiple": "been"
    },
    {
      "spanish": "Tener",
      "infinitive": "have",
      "simplePast": "had",
      "pastParticiple": "had"
    },
    {
      "spanish": "Hacer(mental)",
      "infinitive": "do",
      "simplePast": "did",
      "pastParticiple": "done"
    },
    {
      "spanish": "Decir algo",
      "infinitive": "say",
      "simplePast": "said",
      "pastParticiple": "said"
    },
    {
      "spanish": "Ir",
      "infinitive": "go",
      "simplePast": "went",
      "pastParticiple": "gone"
    },
    {
      "spanish": "Obtener",
      "infinitive": "get",
      "simplePast": "got",
      "pastParticiple": "got"
    },
    {
      "spanish": "Hacer(fisicamente)",
      "infinitive": "make",
      "simplePast": "made",
      "pastParticiple": "made"
    },
    {
      "spanish": "Saber",
      "infinitive": "know",
      "simplePast": "knew",
      "pastParticiple": "known"
    },
    {
      "spanish": "Pensar",
      "infinitive": "think",
      "simplePast": "thought",
      "pastParticiple": "thought"
    },
    {
      "spanish": "Tomar/Agarrar",
      "infinitive": "take",
      "simplePast": "took",
      "pastParticiple": "taken"
    },
    {
      "spanish": "Ver",
      "infinitive": "see",
      "simplePast": "saw",
      "pastParticiple": "seen"
    },
    {
      "spanish": "Venir",
      "infinitive": "come",
      "simplePast": "came",
      "pastParticiple": "come"
    },
    {
      "spanish": "Querer",
      "infinitive": "want",
      "simplePast": "wanted",
      "pastParticiple": "wanted"
    },
    {
      "spanish": "Usar",
      "infinitive": "use",
      "simplePast": "used",
      "pastParticiple": "used"
    },
    {
      "spanish": "Encontrar",
      "infinitive": "find",
      "simplePast": "found",
      "pastParticiple": "found"
    },
    {
      "spanish": "Dar",
      "infinitive": "give",
      "simplePast": "gave",
      "pastParticiple": "given"
    },
    {
      "spanish": "Decir a alguien/contar",
      "infinitive": "tell",
      "simplePast": "told",
      "pastParticiple": "told"
    },
    {
      "spanish": "Trabajar",
      "infinitive": "work",
      "simplePast": "worked",
      "pastParticiple": "worked"
    },
    {
      "spanish": "Llamar",
      "infinitive": "call",
      "simplePast": "called",
      "pastParticiple": "called"
    },
    {
      "spanish": "Intentar/tratar",
      "infinitive": "try",
      "simplePast": "tried",
      "pastParticiple": "tried"
    },
    {
      "spanish": "Preguntar",
      "infinitive": "ask",
      "simplePast": "asked",
      "pastParticiple": "asked"
    },
    {
      "spanish": "Necesitar",
      "infinitive": "need",
      "simplePast": "needed",
      "pastParticiple": "needed"
    },
    {
      "spanish": "Sentir",
      "infinitive": "feel",
      "simplePast": "felt",
      "pastParticiple": "felt"
    },
    {
      "spanish": "Llegar a ser",
      "infinitive": "become",
      "simplePast": "became",
      "pastParticiple": "become"
    },
    {
      "spanish": "Deja/Salir/Abandonar",
      "infinitive": "leave",
      "simplePast": "left",
      "pastParticiple": "left"
    },
    {
      "spanish": "Poner",
      "infinitive": "put",
      "simplePast": "put",
      "pastParticiple": "put"
    },
    {
      "spanish": "Significar",
      "infinitive": "mean",
      "simplePast": "meant",
      "pastParticiple": "meant"
    },
    {
      "spanish": "Mantener/conservar",
      "infinitive": "keep",
      "simplePast": "kept",
      "pastParticiple": "kept"
    },
    {
      "spanish": "permitir",
      "infinitive": "let",
      "simplePast": "let",
      "pastParticiple": "let"
    },
    {
      "spanish": "Empezar/comenzar",
      "infinitive": "begin",
      "simplePast": "began",
      "pastParticiple": "begun"
    },
    {
      "spanish": "Parecer",
      "infinitive": "seem",
      "simplePast": "seemed",
      "pastParticiple": "seemed"
    },
    {
      "spanish": "Ayudar",
      "infinitive": "help",
      "simplePast": "helped",
      "pastParticiple": "helped"
    },
    {
      "spanish": "Mostrar",
      "infinitive": "show",
      "simplePast": "showed",
      "pastParticiple": "shown"
    },
    {
      "spanish": "Escuchar/oir",
      "infinitive": "hear",
      "simplePast": "heard",
      "pastParticiple": "heard"
    },
    {
      "spanish": "Jugar",
      "infinitive": "play",
      "simplePast": "played",
      "pastParticiple": "played"
    },
    {
      "spanish": "Correr",
      "infinitive": "run",
      "simplePast": "ran",
      "pastParticiple": "run"
    },
    {
      "spanish": "Mover/mudar",
      "infinitive": "move",
      "simplePast": "moved",
      "pastParticiple": "moved"
    },
    {
      "spanish": "Vivir",
      "infinitive": "live",
      "simplePast": "lived",
      "pastParticiple": "lived"
    },
    {
      "spanish": "Creer",
      "infinitive": "believe",
      "simplePast": "believed",
      "pastParticiple": "believed"
    },
    {
      "spanish": "Traer",
      "infinitive": "bring",
      "simplePast": "brought",
      "pastParticiple": "brought"
    },
    {
      "spanish": "Suceder/ocurrir",
      "infinitive": "happen",
      "simplePast": "happened",
      "pastParticiple": "happened"
    },
    {
      "spanish": "Escribir",
      "infinitive": "write",
      "simplePast": "wrote",
      "pastParticiple": "written"
    },
    {
      "spanish": "Sentarse",
      "infinitive": "sit",
      "simplePast": "sat",
      "pastParticiple": "sat"
    },
    {
      "spanish": "Estar de pie",
      "infinitive": "stand",
      "simplePast": "stood",
      "pastParticiple": "stood"
    },
    {
      "spanish": "Perder",
      "infinitive": "lose",
      "simplePast": "lost",
      "pastParticiple": "lost"
    },
    {
      "spanish": "Pagar",
      "infinitive": "pay",
      "simplePast": "paid",
      "pastParticiple": "paid"
    },
    {
      "spanish": "Conocer/reunir",
      "infinitive": "meet",
      "simplePast": "met",
      "pastParticiple": "met"
    },
    {
      "spanish": "Incluir",
      "infinitive": "include",
      "simplePast": "included",
      "pastParticiple": "included"
    },
    {
      "spanish": "Continuar",
      "infinitive": "continue",
      "simplePast": "continued",
      "pastParticiple": "continued"
    },
    {
      "spanish": "Colocar/establecer",
      "infinitive": "set",
      "simplePast": "set",
      "pastParticiple": "set"
    },
    {
      "spanish": "Aprender",
      "infinitive": "learn",
      "simplePast": "learned",
      "pastParticiple": "learned"
    },
    {
      "spanish": "Cambiar",
      "infinitive": "change",
      "simplePast": "changed",
      "pastParticiple": "changed"
    },
    {
      "spanish": "Dirigir/guiar",
      "infinitive": "lead",
      "simplePast": "led",
      "pastParticiple": "led"
    },
    {
      "spanish": "Entender/comprender",
      "infinitive": "understand",
      "simplePast": "understood",
      "pastParticiple": "understood"
    },
    {
      "spanish": "Observar",
      "infinitive": "watch",
      "simplePast": "watched",
      "pastParticiple": "watched"
    },
    {
      "spanish": "Seguir",
      "infinitive": "follow",
      "simplePast": "followed",
      "pastParticiple": "followed"
    },
    {
      "spanish": "Detener/parar/dejar",
      "infinitive": "stop",
      "simplePast": "stopped",
      "pastParticiple": "stopped"
    },
    {
      "spanish": "Crear",
      "infinitive": "create",
      "simplePast": "created",
      "pastParticiple": "created"
    },
    {
      "spanish": "Hablar",
      "infinitive": "speak",
      "simplePast": "spoke",
      "pastParticiple": "spoken"
    },
    {
      "spanish": "Leer",
      "infinitive": "read",
      "simplePast": "read",
      "pastParticiple": "read"
    },
    {
      "spanish": "Gastar",
      "infinitive": "spend",
      "simplePast": "spent",
      "pastParticiple": "spent"
    },
    {
      "spanish": "Crecer",
      "infinitive": "grow",
      "simplePast": "grew",
      "pastParticiple": "grown"
    },
    {
      "spanish": "Abrir",
      "infinitive": "open",
      "simplePast": "opened",
      "pastParticiple": "opened"
    },
    {
      "spanish": "Caminar",
      "infinitive": "walk",
      "simplePast": "walked",
      "pastParticiple": "walked"
    },
    {
      "spanish": "Ganar",
      "infinitive": "win",
      "simplePast": "won",
      "pastParticiple": "won"
    },
    {
      "spanish": "Enseñar",
      "infinitive": "teach",
      "simplePast": "taught",
      "pastParticiple": "taught"
    },
    {
      "spanish": "Ofrecer",
      "infinitive": "offer",
      "simplePast": "offered",
      "pastParticiple": "offered"
    },
    {
      "spanish": "Recordar",
      "infinitive": "remember",
      "simplePast": "remembered",
      "pastParticiple": "remembered"
    },
    {
      "spanish": "Considerar",
      "infinitive": "consider",
      "simplePast": "considered",
      "pastParticiple": "considered"
    },
    {
      "spanish": "Aparecer",
      "infinitive": "appear",
      "simplePast": "appeared",
      "pastParticiple": "appeared"
    },
    {
      "spanish": "Comprar",
      "infinitive": "buy",
      "simplePast": "bought",
      "pastParticiple": "bought"
    },
    {
      "spanish": "Servir/atender",
      "infinitive": "serve",
      "simplePast": "served",
      "pastParticiple": "served"
    },
    {
      "spanish": "Morir",
      "infinitive": "die",
      "simplePast": "died",
      "pastParticiple": "died"
    },
    {
      "spanish": "Enviar",
      "infinitive": "send",
      "simplePast": "sent",
      "pastParticiple": "sent"
    },
    {
      "spanish": "Construir",
      "infinitive": "build",
      "simplePast": "built",
      "pastParticiple": "built"
    },
    {
      "spanish": "Quedarse",
      "infinitive": "stay",
      "simplePast": "stayed",
      "pastParticiple": "stayed"
    },
    {
      "spanish": "Caer",
      "infinitive": "fall",
      "simplePast": "fell",
      "pastParticiple": "fallen"
    },
    {
      "spanish": "Cortar",
      "infinitive": "cut",
      "simplePast": "cut",
      "pastParticiple": "cut"
    },
    {
      "spanish": "Alcanzar/llegar",
      "infinitive": "reach",
      "simplePast": "reached",
      "pastParticiple": "reached"
    },
    {
      "spanish": "Matar",
      "infinitive": "kill",
      "simplePast": "killed",
      "pastParticiple": "killed"
    },
    {
      "spanish": "Aumentar/levantar",
      "infinitive": "raise",
      "simplePast": "raised",
      "pastParticiple": "raised"
    },
    {
      "spanish": "Pasar",
      "infinitive": "pass",
      "simplePast": "passed",
      "pastParticiple": "passed"
    },
    {
      "spanish": "Vender",
      "infinitive": "sell",
      "simplePast": "sold",
      "pastParticiple": "sold"
    },
    {
      "spanish": "Decidir",
      "infinitive": "decide",
      "simplePast": "decided",
      "pastParticiple": "decided"
    },
    {
      "spanish": "Regresar",
      "infinitive": "return",
      "simplePast": "returned",
      "pastParticiple": "returned"
    },
    {
      "spanish": "Explicar",
      "infinitive": "explain",
      "simplePast": "explained",
      "pastParticiple": "explained"
    },
    {
      "spanish": "Esperar(esperanza)",
      "infinitive": "hope",
      "simplePast": "hoped",
      "pastParticiple": "hoped"
    },
    {
      "spanish": "Desarrollar",
      "infinitive": "develop",
      "simplePast": "developed",
      "pastParticiple": "developed"
    },
    {
      "spanish": "Llevar/trasnportar",
      "infinitive": "carry",
      "simplePast": "carried",
      "pastParticiple": "carried"
    },
    {
      "spanish": "Romper/quebrar",
      "infinitive": "break",
      "simplePast": "broke",
      "pastParticiple": "broken"
    },
    {
      "spanish": "Recibir",
      "infinitive": "receive",
      "simplePast": "received",
      "pastParticiple": "received"
    },
    {
      "spanish": "Estar de acuerdo",
      "infinitive": "agree",
      "simplePast": "agreed",
      "pastParticiple": "agreed"
    },
    {
      "spanish": "Apoyar",
      "infinitive": "support",
      "simplePast": "supported",
      "pastParticiple": "supported"
    },
    {
      "spanish": "Golpear/pegar",
      "infinitive": "hit",
      "simplePast": "hit",
      "pastParticiple": "hit"
    },
    {
      "spanish": "Producir",
      "infinitive": "produce",
      "simplePast": "produced",
      "pastParticiple": "produced"
    },
    {
      "spanish": "Comer",
      "infinitive": "eat",
      "simplePast": "ate",
      "pastParticiple": "eaten"
    },
    {
      "spanish": "Cubrir/tapar",
      "infinitive": "cover",
      "simplePast": "covered",
      "pastParticiple": "covered"
    },
    {
      "spanish": "Atrapar/agarrar",
      "infinitive": "catch",
      "simplePast": "caught",
      "pastParticiple": "caught"
    },
    {
      "spanish": "Dibujar",
      "infinitive": "draw",
      "simplePast": "drew",
      "pastParticiple": "drawn"
    },
    {
      "spanish": "Elegir/escoger",
      "infinitive": "choose",
      "simplePast": "chose",
      "pastParticiple": "chosen"
    },
    {
      "spanish": "Esperar/Aguardar",
      "infinitive": "wait",
      "simplePast": "waited",
      "pastParticiple": "waited"
    },
    {
      "spanish": "Esperar/Creer",
      "infinitive": "expect",
      "simplePast": "expected",
      "pastParticiple": "expected"
    },
    {
      "spanish": "Permanecer",
      "infinitive": "remain",
      "simplePast": "remained",
      "pastParticiple": "remained"
    },
    {
      "spanish": "Sugerir",
      "infinitive": "suggest",
      "simplePast": "suggested",
      "pastParticiple": "suggested"
    },
    {
      "spanish": "Requerir",
      "infinitive": "require",
      "simplePast": "required",
      "pastParticiple": "required"
    },
    {
      "spanish": "Informar/Denunciar",
      "infinitive": "report",
      "simplePast": "reported",
      "pastParticiple": "reported"
    },
    {
      "spanish": "Jalar/tirar de",
      "infinitive": "pull",
      "simplePast": "pulled",
      "pastParticiple": "pulled"
    },
    {
      "spanish": "Conducir",
      "infinitive": "drive",
      "simplePast": "drove",
      "pastParticiple": "driven"
    },
    {
      "spanish": "Unir,Juntar",
      "infinitive": "join",
      "simplePast": "joined",
      "pastParticiple": "joined"
    },
    {
      "spanish": "Elegir/levantar",
      "infinitive": "pick",
      "simplePast": "picked",
      "pastParticiple": "picked"
    }
  ]
  let respuestasFinales = [];

  var aciertos = 0;
  var incorrectos = 0;




  var inputInfinitive = document.getElementById('infinitivo');

  var inputSimple = document.getElementById('simplePast');
  var inputParticiple = document.getElementById('pastParticiple');
  inputInfinitive.disabled = true;
  inputSimple.disabled = true;
  inputParticiple.disabled = true;

  var verbosDescargados = Array.from(misverbos);

  function shuffle(array) {
    var currentIndex = array.length,
      temporaryValue, randomIndex;

    // Mientras queden elementos a mezclar...
    while (0 !== currentIndex) {

      // Seleccionar un elemento sin mezclar...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // E intercambiarlo con el elemento actual
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  arr = shuffle(verbosDescargados);




  var numeroVerbos = 0;


  if (numeroVerbos < 4) {
    $('#cambiarBoton').html('<div class="botonBloqueado" ><h1 class="go">Empezar</h1></div>');
  }


  var verbosSeleccionados = [];

  var contador = 0;
  var correctos = 0;
  var correcto1 = false;
  var correcto2 = false;
  var correcto3 = false;


  var respuesta = {

  }


  $("#infinitivo").keyup(function () {
    var infinitivo = $('#infinitivo').val();
    var infinitivo2 = infinitivo.trim();


    if (infinitivo2 === verbosSeleccionados[contador - 1]["infinitive"]) {
      respuesta.infinitivo = [infinitivo2, true];

    } else {
      respuesta.infinitivo = [infinitivo2 + '(<span class="correcto">' + verbosSeleccionados[contador - 1]["infinitive"] + '</span>)', false];

    }
  })

  $("#simplePast").keyup(function () {

    var simplePast = $('#simplePast').val();
    var simplePast2 = simplePast.trim();


    if (simplePast2 === verbosSeleccionados[contador - 1]["simplePast"]) {
      respuesta.simplePast = [simplePast2, true];
    } else {
      respuesta.simplePast = [simplePast2 + '(<span class="correcto">' + verbosSeleccionados[contador - 1]["simplePast"] + '</span>)', false];
    }

  })

  $("#pastParticiple").keyup(function () {

    var pastParticiple = $('#pastParticiple').val();
    var pastParticiple2 = pastParticiple.trim();


    if (pastParticiple2 === verbosSeleccionados[contador - 1]["pastParticiple"]) {

      respuesta.pastParticiple = [pastParticiple2, true];
    } else {
      respuesta.pastParticiple = [pastParticiple2 + '(<span class="correcto">' + verbosSeleccionados[contador - 1]["pastParticiple"] + '</span>)', false];
    }
  })


  $(document).on('click', '#botonEmpezar', function () {
    let precio = document.getElementById("customRange2");
    precio.disabled = true;
    inputInfinitive.disabled = false;
    inputSimple.disabled = false;
    inputParticiple.disabled = false;
    // $('#cambiarBoton').html('<div class="botonBloqueado" id="botonSiguiente"><h1 class="go">Siguiente</h1></div>');
    $('#cambiarBoton').html('<div class="boton focusNext" tabindex="4" id="botonCorrecto"><h1 class="go">Siguiente</h1></div>');
    // $('#cambiarBoton').html('<div class="boton " id="botonCorrecto"><h1 class="go">Siguiente</h1></div>');
    var verbo = verbosSeleccionados[contador]["spanish"]

    $('#verb').html(verbo);
    contador++
    $('#totalSuma').html(contador);
    const empezar = document.querySelector('#infinitivo');
    empezar.focus();

  });

  $(document).on('click', '#botonCorrecto', function () {
    respuesta.spanish = [verbosSeleccionados[contador - 1]["spanish"], true];

    if ($('#infinitivo').val() == '') {
      respuesta.infinitivo = ['sin respuesta', false];

    }
    if ($('#simplePast').val() == '') {
      respuesta.simplePast = ['sin respuesta', false];

    }
    if ($('#pastParticiple').val() == '') {
      respuesta.pastParticiple = ['sin respuesta', false];

    }

    $('#enviarDatos').trigger('reset');
    $('#infinitivo').removeClass('correcto');
    $('#simplePast').removeClass('correcto');
    $('#pastParticiple').removeClass('correcto');
    // $('#cambiarBoton').html('<div class="botonBloqueado" id="botonSiguiente"><h1 class="go">Siguiente</h1></div>');
    $('#cambiarBoton').html('<div class="boton focusNext" tabindex="4"id="botonCorrecto"><h1 class="go">Siguiente</h1></div>');


    respuestasFinales = [...respuestasFinales, respuesta];


    respuesta = {};


    if (contador > verbosSeleccionados.length - 1) {
      var termino = "Examen Finalizado"
      $('#verb').html(termino);
      $('#cambiarBoton').html('<div class="result"><button type="button" class="btn botonresultt  botonresultt" data-toggle="modal" data-target="#staticBackdrop">Mostrar resultados</button></div>');

    } else {
      var verbo = verbosSeleccionados[contador]["spanish"]

      $('#verb').html(verbo);
      contador++;
      $('#totalSuma').html(contador);
    }
    const empezar = document.querySelector('#infinitivo');
    empezar.focus();



  });



  document.addEventListener('keypress', function (evt) {

    // Si el evento NO es una tecla Enter
    if (evt.key !== 'Enter') {
      return;
    }

    let element = evt.target;

    // Si el evento NO fue lanzado por un elemento con class "focusNext"
    if (!element.classList.contains('focusNext')) {
      return;
    }

    // AQUI logica para encontrar el siguiente
    let tabIndex = element.tabIndex + 1;
    var next = document.querySelector('[tabindex="' + tabIndex + '"]');

    // Si encontramos un elemento
    if (next) {
      next.focus();
      event.preventDefault();
    } else if (element.tabIndex == 4) {

      $("#botonCorrecto").click();
    }
  });

  $(document).on('click', '.botonresultt', function () {

    var resultados = '';
    var numeracion = 0;
    var claseInfinitivo = ''
    var claseSimple = ''
    var clasePast = ''
    var check = ''
    respuestasFinales.forEach((respuesta) => {
      numeracion++;
      const {
        spanish,
        infinitivo,
        simplePast,
        pastParticiple
      } = respuesta;
      if (infinitivo[1] == true) {
        claseInfinitivo = 'correcto'
      } else {
        claseInfinitivo = 'incorrecto'
      }
      if (simplePast[1] == true) {
        claseSimple = 'correcto'
      } else {
        claseSimple = 'incorrecto'
      }
      if (pastParticiple[1] == true) {
        clasePast = 'correcto'
      } else {
        clasePast = 'incorrecto'
      }
      if (infinitivo[1] == true && simplePast[1] == true && pastParticiple[1] == true) {
        aciertos++;
        check = 'far fa-check-circle'
      } else {
        check = 'far fa-times-circle'
        incorrectos++;
      }

      resultados = resultados + `
      <tr>
      <th scope="row">${numeracion}</th>
      <th  scope="row">${spanish[0]}</th>
      <th class='${claseInfinitivo}'  scope="row">${infinitivo[0]}</th>
      <th class='${claseSimple}' scope="row">${simplePast[0]}</th>
      <th class='${clasePast}' scope="row">${pastParticiple[0]}</th>
      <th scope="row"><i class="${check}"></i></th>
      </tr>
      
      `;


    })

    var totalAciertos = (aciertos * 100) / verbosSeleccionados.length;
    var sinDecimal = totalAciertos.toFixed(1);

    if (sinDecimal < 80) {
      $('#por').removeClass('porcentaje');
      $('#por').addClass('porcentajeNo');
      $('#por2').removeClass('porcentaje');
      $('#por2').addClass('porcentajeNo');
    }

    $('#contenido').html(resultados);
    $('#por').html(totalAciertos);
  });



  var valorRango = $('#customRange2').val();

  $("#customRange2").on("input change", function () {
    var valorRango = $('#customRange2').val();
    numeroVerbos = valorRango;
    verbosSeleccionados = verbosDescargados.slice(0, numeroVerbos);
    arr = arr.slice(0, numeroVerbos);
    $('#total').html(numeroVerbos);

    if (numeroVerbos > 4) {
      $('#cambiarBoton').html('<div class="botonEmpezar" id="botonEmpezar"><h1 class="go">Empezar</h1></div>');
    } else {
      $('#cambiarBoton').html('<div class="botonBloqueado" ><h1 class="go">Empezar</h1></div>');
    }
  })

})
$('document').ready(function () {

    listaVerbos = [];


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
    var numeracion = 0;
    var resultados = '';
    misverbos.forEach((respuesta) => {
        numeracion++;
        const {
            spanish,
            infinitive,
            simplePast,
            pastParticiple
        } = respuesta;


        resultados = resultados + `
        <tr>
        <th scope="row">${numeracion}</th>
        <th scope="row">correr${spanish}</th>
        <th scope="row">${infinitive}</th>
        <th scope="row">${simplePast}</th>
        <th scope="row">${pastParticiple}</th>
        <th scope="row">
        <label class="container">
         <input class="checkbox" type="checkbox" >
            <div class="checkmark"></div>
        </label>
        </th>
      </tr>
        
        `;

        $('#contenido').html(resultados);


    })
})

$(document).on('change', '.checkbox', function (e) {
    var verbo = {
        spanish: '',
        infinitive: '',
        simplePast: '',
        pastParticiple: '',
    };
    verbo.spanish = e.target.parentElement.parentElement.parentElement.children[1].innerHTML;
    verbo.infinitive = e.target.parentElement.parentElement.parentElement.children[2].innerHTML;
    verbo.simplePast = e.target.parentElement.parentElement.parentElement.children[3].innerHTML;
    verbo.pastParticiple = e.target.parentElement.parentElement.parentElement.children[4].innerHTML;


    if (this.checked) {
        // checkbox is checked

        listaVerbos = [...listaVerbos, verbo];



    } else {
        listaVerbos = listaVerbos.filter(seleccionado => seleccionado.spanish !== verbo.spanish);

    }




});
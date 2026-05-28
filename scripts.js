//Refazer as tarefas em jQuery

$(document).ready(function () {


  $("#titulo").fadeIn(3000);

  $("#animar").mouseover(function () {
    //alert("Mouse over");
  });


  // $("#titulo").fadeIn(1000).delay(2000).fadeOut(1000);

$("#animar").click(function () {
    $("#titulo")
    .animate(
        {
            left: "-=100px", //
            opacity: 0.5, // deixa semitransparente
        },
        1000
    )
    .animate(
        {
            left: "+=100px", // volta à posição original
            opacity: 1, // totalmente visível
        },
        1000
    );

});

  // Tarefa 1 -  Saudação ao clicar no botão


  const nomeUtilizador = localStorage.getItem("nomeUtilizador");

 if (nomeUtilizador) {
    //$("#mensagemBoasVindas").text("Olá, " + nome + " Bem-vindo ao meu site");
    $("#mensagemBoasVindas").html(
      "<b>Olá</b>, <strong>" + nomeUtilizador + "</strong> Bem-vindo ao meu site"
    );
  } else {
    $("#mensagemBoasVindas").html("<strong> Olá visitante! </strong>");
  }

$("#btnSaudacao").click(function () {
    const nome = prompt("Qual o seu nome");

    if (nome) {
        $("#mensagemBoasVindas").text("Olá, " + nome + " Bem-vindo ao meu site");
        localStorage.setItem("nomeUtilizador", nome);
    } else {
        $("#mensagemBoasVindas").html("<strong> Olá visitante! </strong>");
    }
});


  
  // 2 Mudar tema (dark/light)

  $("#btnTema").click(function () {

    $("body").toggleClass("bg-dark text-white");
    $(this).toggleClass("btn-light btn-dark");

    // Troca o texto do botão conforme o tema
    //Se o elemento body tiver o bg-dark, ele vai tirar, caso contrário põe.
    if ($("body").hasClass("bg-dark")) {
        $(this).text("Tema Claro");
    } else {
        $(this).text("Tema Escuro");
    }
  });
///////// 3 Tratamento de formulário


$("#formContato").on("submit", function (e) {

    // evita recarregar a página ou submissão do formulário para o servidor
    e.preventDefault();

    const nome = $("#nome").val().trim();
    const email = $("#email").val().trim();
    const genero = $("#genero").val();
    const password = $("#password").val();

    const mensagem = $("#mensagemForm");

    if (nome === "" || email === "" || password === "") {
      mensagem
          .removeClass("alert-success")
          .addClass("alert-danger")
          .text(
              "Erro! Por favor, preencha todos os campos obrigatórios."
          )
          .fadeIn(400)
          .delay(2500)
          .fadeOut(400);
     } else {
        
      mensagem
        .removeClass("alert-danger")
        .addClass("alert-success")
        .html(
            "<strong>Sucesso!</strong> O formulário foi enviado corretamente."
        )
        .fadeIn(400)
        .delay(2500)
        .fadeOut(400);

        // Guardar no localStorage
        localStorage.setItem("nome", nome);
        localStorage.setItem("email", email);
        localStorage.setItem("genero", genero);

        // Mostrar no ecrã (secção "Dados guardados")
        $("#nomeLocal").text(nome);
        $("#emailLocal").text(email);
        $("#generoLocal").text(genero);

        //Cuidado com o formulário ao recarregar não aparece o elemento de aviso.
        //this.submit();

    }

});

// 4 - Mostrar dados guardados ao carregar a página
if (localStorage.getItem("nome")) {
    $("#nomeLocal").text(localStorage.getItem("nome"));
    $("#emailLocal").text(localStorage.getItem("email"));
    $("#generoLocal").text(localStorage.getItem("genero"));
}

// 5 Botão "Voltar ao topo"

$(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $("#btnTopo").fadeIn(1000);
    } else {
        $("#btnTopo").fadeOut(1000);
    }
});

$("#btnTopo").click(function () {
    //O scroll pode estar associado ao html ou body consoante o navegador
    $("html, body").animate({ scrollTop: 0 }, 1000);
});

//6 Mostrar hora atual no footer

function atualizaHora() {
  const agora = new Date().toLocaleTimeString();
  $("#horaAtual").text("Hora atual: " + agora)
}

setInterval(atualizaHora, 1000);


// 7 - Limpar dados

$("#btnLimpar").click(function () {
   $("#nomeLocal").text("");
   $("#emailLocal").text("");
   $("#generoLocal").text("");
  
  // localStorage.clear();
  localStorage.removeItem("nome");
  localStorage.removeItem("email");
  localStorage.removeItem("genero");



});
});
function irLogin(){

    window.location.href = "login.html";

}

function validarLogin(){

    let nome = document.getElementById("nome").value;

    let idade = document.getElementById("idade").value;

    let estado = document.getElementById("estado").value;

    let cidade = document.getElementById("cidade").value;

    let email = document.getElementById("email").value;

    if(nome == "" || idade == "" || estado == "" || cidade == "" || email == ""){

        alert("Preencha todos os campos!");

    }

    else{

        localStorage.setItem("logado", "sim");

        window.location.href = "pacotes.html";

    }

}

function abrirPacote1(){

    window.location.href = "detalhes1.html";

}

function abrirPacote2(){

    window.location.href = "detalhes2.html";

}

function abrirPacote3(){

    window.location.href = "detalhes3.html";

}

function logout(){

    localStorage.removeItem("logado");

    window.location.href = "index.html";

}
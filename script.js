// ======================================
// KPLACE - JavaScript
// ======================================

// Mensagem no console
console.log("KPlace iniciado com sucesso!");

// ======================================
// BOTÃO "ANUNCIAR AGORA"
// (index.html)
// ======================================

const btnAnunciar = document.getElementById("anunciar-leticia");

if (btnAnunciar) {

    btnAnunciar.addEventListener("click", function () {

        window.location.href = "index3.html";

    });

}

// ======================================
// PESQUISA DE PRODUTOS
// (index.html)
// ======================================

const pesquisa = document.getElementById("pesquisa");

if (pesquisa) {

    pesquisa.addEventListener("submit", function (e) {

        e.preventDefault();

        let produto = document.getElementById("produto").value.trim();

        if (produto === "") {

            alert("Digite um produto para pesquisar.");

        } else {

            alert("Pesquisando por: " + produto);

        }

    });

}

// ======================================
// BOTÕES COMPRAR
// (index.html e index2.html)
// ======================================

const botoesComprar = document.querySelectorAll(".comprar");

const links = [

"https://www.kabum.com.br/busca/notebook-gamer",

"https://www.apple.com/br/shop/buy-iphone",

"https://www.decathlon.com.br/search?query=bicicleta",

"https://www.playstation.com/pt-br/ps5/",

"https://www.amazon.com.br/s?k=smartwatch",

"https://www.magazineluiza.com.br/busca/monitor-gamer/"

];

botoesComprar.forEach(function(botao, indice){

    botao.addEventListener("click", function(){

        if(indice < links.length){

            window.open(links[indice], "_blank");

        }else{

            alert("Produto indisponível.");

        }

    });

});

// ======================================
// FORMULÁRIO DE ANÚNCIO
// (index3.html)
// ======================================

const formAnuncio = document.querySelector("form");

const campoNome = document.getElementById("nome");
const campoPreco = document.getElementById("preco");

if(formAnuncio && campoNome && campoPreco){

    formAnuncio.addEventListener("submit", function(e){

        e.preventDefault();

        if(campoNome.value.trim() === "" || campoPreco.value.trim() === ""){

            alert("Preencha todos os campos obrigatórios.");

            return;

        }

        alert("Seu anúncio foi publicado com sucesso!");

        formAnuncio.reset();

    });

}

// ======================================
// LOGIN
// (index4.html)
// ======================================

const email = document.getElementById("email");
const senha = document.getElementById("senha");

if(email && senha){

    document.querySelector("form").addEventListener("submit", function(e){

        e.preventDefault();

        if(email.value.trim() === ""){

            alert("Digite seu e-mail.");

            return;

        }

        if(senha.value.trim() === ""){

            alert("Digite sua senha.");

            return;

        }

        alert("Login realizado com sucesso!");

    });

}

// ======================================
// EFEITO NOS BOTÕES
// ======================================

const botoes = document.querySelectorAll("button");

botoes.forEach(function(botao){

    botao.addEventListener("mouseenter", function(){

        botao.style.transform = "scale(1.05)";

    });

    botao.addEventListener("mouseleave", function(){

        botao.style.transform = "scale(1)";

    });

});

// ======================================
// RODAPÉ
// ======================================

const footer = document.querySelector("footer");

if(footer){

    footer.title = "Obrigado por visitar o KPlace!";

}

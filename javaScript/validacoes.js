// Buscando os itens para serem manipulados;

const btnValidacao = document.getElementById("btn");
const cidadeValidacao = document.getElementById("nome_cad");
const pontoTuristicoValidacao = document.getElementById("NomeLocal_cad");
const imgValidacao = document.getElementById("url_cad");
const descricaoCidadeValidacao = document.getElementById("descricao_cad");

// criando as validaçoes para cada input;

cidadeValidacao.addEventListener("keyup", function () {
    let validacao = document.getElementById("smallCidade");
    if (cidadeValidacao.value.length >= 4) {
        validacao.innerText = "Ok!";
        validacao.style.color = "green";

    } else {
        cidadeValidacao.style.backgroundColor = "#ffffff";
        validacao.innerText = "Campo obrigatorio com 4 letras no minimo";
        validacao.style.color = "red";
    }
})

pontoTuristicoValidacao.addEventListener("keyup", function () {
    let validacao = document.getElementById("localSmall");
    if (pontoTuristicoValidacao.value.length >= 4) {
        validacao.innerText = "Ok!";
        validacao.style.color = "green";

    } else {
        pontoTuristicoValidacao.style.backgroundColor = "#ffffff";
        validacao.innerText = "Campo obrigatorio com 4 letras no minimo";
        validacao.style.color = "red";

    }
})

imgValidacao.addEventListener("keyup", function () {
    let validacao = document.getElementById("imgSmall");
    if (imgValidacao.value.length >= 10) {
        validacao.innerText = "Ok!";
        validacao.style.color = "green";

    } else {
        imgValidacao.style.backgroundColor = "#ffffff";
        validacao.innerText = "Campo obrigatorio com no minimo um endereço válido ex: Http ou Https";
        validacao.style.color = "red";

    }
})

// validando o form por completo;

function validateForm() {

    if (!(cidadeValidacao.value.length >= 4 && pontoTuristicoValidacao.value.length >= 4 && imgValidacao.value.length >= 4 && descricaoCidadeValidacao.value.length >= 4)) {
        alert("Name must be filled out");
        return false;
    }
}


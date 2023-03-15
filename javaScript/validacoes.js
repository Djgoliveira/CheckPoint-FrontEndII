// validaçao

const btnValidacao = document.getElementById("btn");
const cidadeValidacao = document.getElementById("nome_cad");
const pontoTuristicoValidacao = document.getElementById("NomeLocal_cad");
const descricaoCidadeValidacao = document.getElementById("descricao_cad");
let cidadeBool = false;
let localBool = false;
let descricaoBool = false;

cidadeValidacao.addEventListener("keyup", function(){
    let validacao = document.getElementById("smallCidade");
    if (cidadeValidacao.value.length >= 4) {
        cidadeValidacao.style.backgroundColor = "#5eff00";
        validacao.innerText = "";
        cidadeBool = true;
        
    } else {
        cidadeValidacao.style.backgroundColor = "#ffffff";
        validacao.innerText = "Campo obrigatorio com 4 letras no minimo";
        cidadeBool = false;
    }
})

pontoTuristicoValidacao.addEventListener("keyup", function(){
    let validacao = document.getElementById("localSmall");
    if (pontoTuristicoValidacao.value.length >= 4) {
        pontoTuristicoValidacao.style.backgroundColor = "#5eff00";
        validacao.innerText = "";
        localBool = true;
    } else {
        pontoTuristicoValidacao.style.backgroundColor = "#ffffff";
        validacao.innerText = "Campo obrigatorio com 4 letras no minimo";
        localBool = false;
    }
})

descricaoCidadeValidacao.addEventListener("keyup", function(){
    let validacao = document.getElementById("descricaoSmall");
    if (descricaoCidadeValidacao.value.length >= 4) {
        descricaoCidadeValidacao.style.backgroundColor = "#5eff00";
        validacao.innerText = "";
        descricaoBool = true;
    } else {
        descricaoCidadeValidacao.style.backgroundColor = "#ffffff";
        validacao.innerText = "Campo obrigatorio com 4 letras no minimo";
        descricaoBool = false;
    }
})

btnValidacao.addEventListener("mouseup", function(){

    if (cidadeBool == true && localBool == true && descricaoBool == true) {
        btnValidacao.remove('disabled')    
    } else {
        btnValidacao.setAttribute('disabled', true);
    }
})


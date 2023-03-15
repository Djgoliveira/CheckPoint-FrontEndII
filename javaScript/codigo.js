//Vamos criar agora a primeira Div para colocar os elementos dentro
//criando a div
let elementoPai = document.getElementById("ElementoPai");
elementoPai.classList.add('banner-cards');

function PontosTuristicos(imageUrl, cidade, pontoTuristico, descricao) {
    this.imageUrl = imageUrl;
    this.cidade = cidade;
    this. pontoTuristico = pontoTuristico;
    this.descricao = descricao;
}

let listaPontoTuristicos =[];

function Cadrastrar(){

    console.log("Falhou");
    const imgUrl = document.getElementById("url_cad");
    const nomeCidade = document.getElementById("nome_cad");
    const pontoTuristico = document.getElementById("NomeLocal_cad");
    const descricaoCidade = document.getElementById("descricao_cad");

    const n = new PontosTuristicos(imgUrl.value,nomeCidade.value ,pontoTuristico.value,descricaoCidade.value);
    if (nomeCidade.value && pontoTuristico.value && imgUrl.value && descricaoCidade.value) { 
        listaPontoTuristicos.push(n);   
        rendenizarCards();    
    }
};

function rendenizarCards(){
    let novaDiv = document.createElement("div");
        novaDiv.setAttribute("class", "cards");
    // percorrer a lista de ponto turisticos
    for (const card of listaPontoTuristicos) {     
                    novaDiv.innerHTML = `   <div class="card-filme">                              
                                    <h1 class ="titulos-card">${card.cidade}</h1>
                                    <h2 class ="titulos-card">${card.pontoTuristico}</h2>
                                    <img src="${card.imageUrl}" class ="card">
                                    <p class ="texto-img">
                                    ${card.descricao}
                                    </p>
                                    </div>
                                `;
        elementoPai.appendChild(novaDiv);
    }
}

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




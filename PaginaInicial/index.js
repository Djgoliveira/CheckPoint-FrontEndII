//Vamos criar agora a primeira Div para colocar os elementos dentro
//criando a div
let div = document.createElement("div");
div.classList.add('banner-cards')

let divCards = document.createElement("div");
divCards.classList.add('cards');

let divCardImg = document.createElement("div");
divCardImg.classList.add('card-img');

let textoImg = document.createElement("div");
textoImg.classList.add('texto-img');

let titulos = document.createElement('p');
titulos.classList.add('titulos');

let descricao = document.createElement('p');
descricao.classList.add('descricao');

const listaCards =[
    {
        titulo:`${document.getElementById("nome_cad")}`,
        descricao:`${document.getElementById("descricao_cad")}`,
        imgUrl:`${document.getElementById("url_cad")}`,

    },
]

document.body.appendChild(div);
div.appendChild(divCards);
divCards.appendChild(divCardImg);
divCardImg.appendChild(textoImg);
textoImg.appendChild(titulos);
textoImg.appendChild(descricao);

function cadastrarCards(){}
function rendenizarCards(){
    for (const cads of listaCards) {
        
    }
}

console.log(listaCards.titulo);
console.log(listaCards.descricao);
console.log(listaCards.imgUrl);

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

    const a = document.getElementById("url_cad");
    const b = document.getElementById("nome_cad");
    const c = document.getElementById("NomeLocal_cad");
    const d = document.getElementById("descricao_cad");

    const n = new PontosTuristicos(a.value ,b.value ,c.value ,d.value)
    listaPontoTuristicos.push(n);   
    rendenizarCards();
    console.log(listaPontoTuristicos);
    
};

function rendenizarCards(){

    // percorrer a lista de ponto turisticos
    for (const card of listaPontoTuristicos) {
        
        let novaDiv = document.createElement("div");
        novaDiv.setAttribute("class", "cards");

            novaDiv.innerHTML = `
                                    <img src="${card.imageUrl}" class = "card-img">
                                    <h1 class ="titulos">${card.cidade}</h1>
                                    <h2 class ="titulos">${card.pontoTuristico}</h2>
                                    <p class ="descricao">
                                    ${card.descricao}
                                    </p>
                                `;
        elementoPai.appendChild(novaDiv);
    }
}


console.log(listaPontoTuristicos);

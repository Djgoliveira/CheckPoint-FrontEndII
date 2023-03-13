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

let btnCadastrar = document.getElementById("btn");
btnCadastrar.addEventListener("click", function(){
    Cadrastrar();
});

let listaPontoTuristicos =[];

function Cadrastrar(){

    const imgUrl = document.getElementById("url_cad");
    const nomeCidade = document.getElementById("nome_cad");
    const pontoTuristico = document.getElementById("NomeLocal_cad");
    const descricaoCidade = document.getElementById("descricao_cad");

    const n = new PontosTuristicos(imgUrl.value,nomeCidade.value ,pontoTuristico.value,descricaoCidade.value);
    if (nomeCidade.value == 0 ) { 
        alert(`você não preencheu o nome da Cidade`);
    }else if (pontoTuristico.value == 0 ) { 
        alert(`você não preencheu o nome do local`);
    }else if (imgUrl.value == 0 ) { 
        alert(`você não preencheu a Url da Imagem`);
    }else if (descricaoCidade.value == 0 ) { 
        alert(`você não preencheu a descrição`);
    }    else {
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



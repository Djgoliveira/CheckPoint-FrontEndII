const btnValidacao = document.getElementById("btn");
btnValidacao.style.backgroundColor = "gray";

const cidadeValidacao = document.getElementById("nome_cad");

const pontoTuristicoValidacao = document.getElementById("NomeLocal_cad");
pontoTuristicoValidacao.setAttribute("disabled", true);

const imgValidacao = document.getElementById("url_cad");
imgValidacao.setAttribute("disabled", true);

const descricaoCidadeValidacao = document.getElementById("descricao_cad");
descricaoCidadeValidacao.setAttribute("disabled", true);

cidadeValidacao.addEventListener("keyup", function(){
    let validacao = document.getElementById("smallCidade");
    if (cidadeValidacao.value.length >= 4) {
        validacao.innerText = "Ok!";
        validacao.style.color="green"; 
        pontoTuristicoValidacao.removeAttribute("disabled");                            
    } else {
        cidadeValidacao.style.backgroundColor = "#ffffff";
        validacao.innerText = "Campo obrigatorio com 4 letras no minimo";
        validacao.style.color="red";      
    }
})

pontoTuristicoValidacao.addEventListener("keyup", function(){
    let validacao = document.getElementById("localSmall");
    if (pontoTuristicoValidacao.value.length >= 4) {
        validacao.innerText = "Ok!";
        validacao.style.color="green";
        imgValidacao.removeAttribute("disabled");
             
    } else {
        pontoTuristicoValidacao.style.backgroundColor = "#ffffff";
        validacao.innerText = "Campo obrigatorio com 4 letras no minimo";
        validacao.style.color="red";       
    }   
})

imgValidacao.addEventListener("keyup", function(){
    let validacao = document.getElementById("imgSmall");
    if (imgValidacao.value.length >= 10) {
        validacao.innerText = "Ok!";
        validacao.style.color="green";
        descricaoCidadeValidacao.removeAttribute("disabled");
        
                
    } else {
        imgValidacao.style.backgroundColor = "#ffffff";
        validacao.innerText = "Campo obrigatorio com no minimo um endereço válido ex: Http ou Https";
        validacao.style.color="red";        
    }   
})

descricaoCidadeValidacao.addEventListener("keyup", function(){
    let validacao = document.getElementById("descricaoSmall");
    if (descricaoCidadeValidacao.value.length >= 4) {
        validacao.innerText = "Ok!";
        validacao.style.color="green";
        btnValidacao.style.cursor = "pointer";
        btnValidacao.removeAttribute("disabled");
        btnValidacao.style.backgroundColor="#3d9db3" ;

    } else {
        descricaoCidadeValidacao.style.backgroundColor = "#ffffff";
        validacao.innerText = "Campo obrigatorio com 4 letras no minimo";
        validacao.style.color="red"; 
        btnValidacao.style.backgroundColor="gray" ;                    
    }    
})


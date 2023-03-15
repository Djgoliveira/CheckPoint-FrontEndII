const btnValidacao = document.getElementById("btn");
btnValidacao.style.backgroundColor = "gray";

const cidadeValidacao = document.getElementById("nome_cad");

const pontoTuristicoValidacao = document.getElementById("NomeLocal_cad");
pontoTuristicoValidacao.setAttribute("disabled", true);

const imgValidacao = document.getElementById("url_cad");
imgValidacao.setAttribute("disabled", true);

const descricaoCidadeValidacao = document.getElementById("descricao_cad");
descricaoCidadeValidacao.setAttribute("disabled", true);

const recarregarCampos = document.getElementById('btn2');
recarregarCampos.style.backgroundColor = "gray";
recarregarCampos.setAttribute("disabled", true);

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
        btnValidacao.setAttribute("disabled", true);        
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
        btnValidacao.setAttribute("disabled", true);          
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
        btnValidacao.setAttribute("disabled", true);        
    }   
})

descricaoCidadeValidacao.addEventListener("keyup", function(){
    let validacao = document.getElementById("descricaoSmall");
    if (descricaoCidadeValidacao.value.length >= 4) {
        validacao.innerText = "Ok!";
        validacao.style.color="green";
        btnValidacao.style.backgroundColor="#3d9db3" ;
        btnValidacao.style.cursor = "pointer";
        btnValidacao.removeAttribute("disabled");
        recarregarCampos.removeAttribute("disabled", true); 
        recarregarCampos.style.backgroundColor="#3d9db3" ;      
       
       
    } else {
        descricaoCidadeValidacao.style.backgroundColor = "#ffffff";
        validacao.innerText = "Campo obrigatorio com 4 letras no minimo";
        validacao.style.color="red"; 
        btnValidacao.style.backgroundColor="gray" ; 
                          
    }    
})


//setInterval(recarregarCampo, 10000);

function recarregarCampo() {

if (cidadeValidacao.value.length >=1 && pontoTuristicoValidacao.value.length >=1 && imgValidacao.value.length>=1 && descricaoCidadeValidacao.value.length>=1){
    cidadeValidacao.value="";
    pontoTuristicoValidacao.value="";
    imgValidacao.value="";
    descricaoCidadeValidacao.value="";
    }
}
  
 




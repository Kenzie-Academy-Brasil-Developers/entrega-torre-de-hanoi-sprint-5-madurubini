//Função que cria as torres 
let torre = ""
let baseTorre = ""

function criarTorre(){
    torre = document.createElement('div')//quadrado verde
    baseTorre = document.createElement('div')
    let secao = document.getElementById('jogo')
    torre.className = "torres"
    baseTorre.className = "base"
    document.body.appendChild(secao)
    secao.appendChild(torre)
    torre.appendChild(baseTorre)
}



for(let i = 0; i < 3; i++){
    criarTorre()   
  
}


//Função criar disco

function criarDisco(n){
    let discoWidth = ""
    for(let i = 0; i < n; i++){
        let disco = document.createElement('div')
        disco.className = "discos"
        let numero = document.createTextNode(i+1)
        disco.appendChild(numero)
        baseTorre.appendChild(disco) 
        discoWidth = disco.clientWidth  
        disco.style.width = discoWidth + 10          
    }
    
    
}
function posicionarDisco(){
    criarDisco(3)
}

posicionarDisco()


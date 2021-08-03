//Função que cria as torres 
// function criarTorre(){
//  let barra = document.createElement('div')
//  let torre = document.getElementsByClassName("torres")
//  barra.className = "base"
//  torre.appendChild(barra)
    
// }



// for(let i = 0; i < 3; i++){
//     criarTorre()   
  
// }


//Função criar disco
//  let disco = ""
// function criarDisco(){
   
//     for(let i = 0; i < 3; i++){
//         disco = document.createElement('div')
//         disco.className = "discos"
//         let torreInicial = document.getElementById("inicial")
//         let numero = document.createTextNode(i+1)
//         disco.appendChild(numero)
//         torreInicial.appendChild(disco)        
//     }
    
    
// }
// function posicionarDisco(){
//     criarDisco()
//     let torreInicial = document.getElementById("inicial")
//       let discoWidth = disco.clientWidth
//       discoWidth += 20
//       disco.style.width = discoWidth +"10px"
     
      
//       console.log(torreInicial.childElementCount)
// }

// posicionarDisco()

const disco1 = document.createElement('div')
disco1.className = "disco1"
let torreInicial = document.getElementById("inicial")
torreInicial.appendChild(disco1)

const disco2 = document.createElement('div')
disco2.className = "disco2"
torreInicial = document.getElementById("inicial")
torreInicial.appendChild(disco2)

const disco3 = document.createElement('div')
disco3.className = "disco3"
torreInicial= document.getElementById("inicial")
torreInicial.appendChild(disco3)

const disco4 = document.createElement('div')
disco4.className = "disco4"
torreInicial = document.getElementById("inicial")
torreInicial.appendChild(disco4)
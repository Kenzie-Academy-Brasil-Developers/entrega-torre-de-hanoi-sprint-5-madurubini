let primeiraTorre = document.getElementById("inicial")
let segundaTorre = document.getElementById("meio")
let terceiraTorre = document.getElementById("final")
let torreInicial
let torreDestino
let ultimoDisco 
let tamanhoEl
let modoJogador = 0

const disco1 = document.createElement('div')
disco1.className = "disco1"
primeiraTorre .appendChild(disco1)

const disco2 = document.createElement('div')
disco2.className = "disco2"
primeiraTorre .appendChild(disco2)

const disco3 = document.createElement('div')
disco3.className = "disco3"
primeiraTorre .appendChild(disco3)

const disco4 = document.createElement('div')
disco4.className = "disco4"
primeiraTorre .appendChild(disco4)

primeiraTorre .addEventListener("click", function(){
    ultimoDisco = primeiraTorre.lastElementChild
    

})

segundaTorre.addEventListener("click", function(){
   // modoJogador = "primeira-jogada"
   ultimoDisco = segundaTorre.lastElementChild
    
})

terceiraTorre.addEventListener("click", function(){
  //  modoJogador = "primeira-jogada"
  ultimoDisco = terceiraTorre.lastElementChild
    
})


//1 movimento é igual 2 cliques
// Primeiro clique = seleciona o ultimo disco da torre correspondente
//Segundo clique = direciona o disco para a torre de destino

function movimento(){

}
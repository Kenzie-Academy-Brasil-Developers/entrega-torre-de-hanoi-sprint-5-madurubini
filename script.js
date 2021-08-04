let torreInicial = document.getElementById("inicial")
let torreMeio = document.getElementById("meio")
let torreFinal = document.getElementById("final")
let popup = document.getElementsByClassName("popup")






const disco1 = document.createElement('div')
disco1.className = "disco1"
torreInicial.appendChild(disco1)

const disco2 = document.createElement('div')
disco2.className = "disco2"
torreInicial.appendChild(disco2)

const disco3 = document.createElement('div')
disco3.className = "disco3"
torreInicial.appendChild(disco3)

const disco4 = document.createElement('div')
disco4.className = "disco4"
torreInicial.appendChild(disco4)



let firstClick  //primeiro click
let secondClick //segundo click 
let firstQtd // primeira quantidade
let secondQtd// segunda quantidade
let lastElementOfFirst 
let lastElementOfSecond 
function game(tower) {
    let element = document.getElementById(tower)
    if(firstClick === undefined){
        
        firstClick = element
        firstClick.style.border = '2px solid orange'
        firstQtd = firstClick.childElementCount
        lastElementOfFirst = firstClick.lastElementChild
        if(lastElementOfFirst == null){
            alert('O primeiro click não pode ser em um local vazio!')
            firstClick.style.border = '2px solid transparent'
            firstClick = undefined
            lastElementOfFirst  = undefined
            firstQtd = undefined
            
        }
    } else {
        secondClick = element
        secondClick.style.border = '2px solid orange' 
        lastElementOfSecond = secondClick.lastElementChild
    }

    if(lastElementOfSecond === null || lastElementOfSecond.clientWidth > lastElementOfFirst.clientWidth){
        secondClick.appendChild(lastElementOfFirst)
        reset()
    } else {
        alert('Este disco não é válido, por favor escolha outra torre')
        reset()
    }

    condicaoVitoria()
}

function reset() {//resetando
    firstClick.style.border = '2px solid transparent'
    secondClick.style.border = '2px solid transparent'
    firstClick = undefined
    secondClick = undefined
    lastElementOfFirst  = undefined
    lastElementOfSecond = undefined
    firstQtd = undefined
    secondQtd = undefined
}

function condicaoVitoria(){
    if(torreFinal.childElementCount === 4){
        alert("Parabéns você Venceu")
    }
}



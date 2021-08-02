//function criarTorre()
function criarTorre(){
    let torre = document.createElement('div')
    let baseTorre = document.createElement('div')
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

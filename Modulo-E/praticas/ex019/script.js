const { createElement } = require("react")

let num = document.getElementById('inum')
let select_1 = document.getElementById('saida_1')
let saida = document.getElementById('final-output')

let add = document.getElementById('btn_1').addEventListener('click', adicionar)
let finalizar = document.getElementById('btn_2').addEventListener('click', finalizar)

let lista_num = []

function adicionar(){
    let valor = Number(num.value)
    if((!num.value) || valor < 1 || valor > 100){
        alert('[ERRO] Digite um valor válido')
    }else{
        lista_num.push(valor)
        saida.value += ('Lista: ', lista_num)
    }
}
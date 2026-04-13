let num = document.getElementById('inum')
let select_1 = document.getElementById('saida_1')
let saida = document.getElementById('final-output')

let add = document.getElementById('btn_1').addEventListener('click', adicionar)
//let fin = document.getElementById('btn_2').addEventListener('click', finalizar)

let lista_num = []

function adicionar(){
    let valor = Number(num.value)
    if(!num.value || valor < 1 || valor > 100){
        alert('[ERRO] Digite um valor válido')
    }else{
        let item = document.createElement('option')
        lista_num.push(valor)
        item.text = `O número ${valor} foi adicionado!`
        select_1.appendChild(item)
    }
}
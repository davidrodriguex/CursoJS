let num = document.getElementById('inum')
let select_1 = document.getElementById('saida_1')
let saida = document.getElementById('final-output')

document.getElementById('btn_1').addEventListener('click', adicionar)

let lista_num = []

function adicionar(){
    let valor = Number(num.value)
    if(!num.value || valor < 1 || valor > 100){
        alert('[ERRO] Digite um valor válido')
    }else if(lista_num.includes(valor)){
        alert('[ERRO] Valor já adicionado, por favor, escolha outro.')
    }else{
        num.value = ''
        num.focus()
        let item = document.createElement('option')
        lista_num.push(valor)
        item.text = `O número ${valor} foi adicionado!`
        select_1.appendChild(item)
        saida.innerHTML = ''
    }
}

document.getElementById('btn_2').addEventListener('click', finalizar)

function finalizar(){
    if(lista_num.length === 0){
        alert('[ERRO] Digite e adicione um valor.')
        return
    }
    saida.innerHTML = ''
    saida.innerHTML += '<strong>Resultado da Análise</strong><br><br>'
    saida.innerHTML += `<strong>Total de números cadastrados:</strong> ${lista_num.length}<br>`
    let maior = lista_num[0]
    let menor = lista_num[0]
    let soma = 0
    let media
    for(let cont in lista_num){
        if(lista_num[cont] > maior){
            maior = lista_num[cont]
        }
        if(lista_num[cont] < menor){
            menor = lista_num[cont]
        }
        soma = soma + lista_num[cont]
    }
    media = soma / lista_num.length
    saida.innerHTML += `<strong>Maior número adicionado:</strong> ${maior}<br>`
    saida.innerHTML += `<strong>Menor número adicionado:</strong> ${menor}<br>`
    saida.innerHTML += `<strong>Soma dos números adicionados:</strong> ${soma}<br>`
    saida.innerHTML += `<strong>Media dos números adicionados:</strong> ${media}<br>`
}
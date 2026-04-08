var n_inicio = document.querySelector('input#i_inicio')
var n_fim = document.querySelector('input#i_fim')
var n_passo = document.querySelector('input#i_passo')

var saida = document.querySelector('div#output-content')

function contar(){
    var inicio = Number(n_inicio.value)
    var fim = Number(n_fim.value)
    var passo = Number(n_passo.value)
    
    if((!n_inicio.value) || (!n_fim.value) || (!n_passo.value)){
        alert('Faltam dados para contar!')
        saida.innerHTML = 'Impossível contar!'
        return
    }

    if(passo <= 0){
        alert('Passo inválido! Considerando PASSO 1')
        passo = 1
    }

    saida.innerHTML = 'INICIO > '
    if(inicio <= fim){
        while(inicio <= fim){
            saida.innerHTML += ` ${inicio} > `
            inicio = inicio + passo
        }
    }else{
        while(fim <= inicio){
            saida.innerHTML += ` ${inicio} > `
            inicio = inicio - passo
        }
    }
    saida.innerHTML += 'FIM'
}
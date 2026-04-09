let num = document.getElementById('inum')
let saida = document.getElementById('result')
let btn = document.getElementById('btn').addEventListener('click', tabuada)

function tabuada(){
    let number = Number(num.value)
    if(!num.value){
        alert('Error: Digite um número para gerar a tabuada!')
        return
    }
    saida.value = ''
    for (let i = 1; i <= 10; i++) {
        saida.value += (i + ' x ' + number + ' = ' + (i * number) + '\n')
    }
}
// Variáveis para acessar os elementos do DOM de entrada
var entrada_ano = document.getElementById('iage')
var entrada_sexo = document.getElementsByName('isexo')

// Variáveis para acessar os elementos do DOM de saída
var saida_texto = document.getElementById('output-text')
var saida_imagem = document.getElementById('output-image')

function verificar(){
    var ano_nascimento = Number(entrada_ano.value)
    var idade = new Date().getFullYear() - ano_nascimento

    var sexo = entrada_sexo[0].checked ? 'Masculino' : 'Feminino'

    if(ano_nascimento > new Date().getFullYear() || ano_nascimento <= 0){
        alert('Por favor, insira um ano de nascimento válido.')
        return
    } // Verificar se a idade é negativa ou se o ano de nascimento é maior que o ano atual

    /*if(sexo === 'Masculino'){
        var genero = 'Homem'
    }else if(sexo === 'Feminino'){
        var genero = 'Mulher'
    } // Determinar o gênero com base na seleção do sexo*/

    if(sexo === 'Masculino' && idade >= 0 && idade < 10){
        var genero = 'criança masculina'
    }else if(sexo === 'Masculino' && idade >= 10 && idade < 21){
        var genero = 'jovem masculino'
    }else if(sexo === 'Masculino' && idade >= 21 && idade < 50){
        var genero = 'adulto masculino'
    }else if(sexo === 'Masculino' && idade >= 50){
        var genero = 'idoso masculino'
    }else if(sexo === 'Feminino' && idade >= 0 && idade < 10){
        var genero = 'criança feminina'
    }else if(sexo === 'Feminino' && idade >= 10 && idade < 21){
        var genero = 'jovem feminina'
    }else if(sexo === 'Feminino' && idade >= 21 && idade < 50){
        var genero = 'adulta feminina'
    }else if(sexo === 'Feminino' && idade >= 50){
        var genero = 'idosa feminina'
    } // Determinar o gênero e a faixa etária com base na seleção do sexo e na idade

    saida_texto.innerHTML = `Detectamos ${genero} de ${idade} anos.`
}
// Variáveis para acessar os elementos do DOM de entrada
var entrada_ano = document.getElementById('iage')
var entrada_sexo = document.getElementsByName('isexo')

// Variáveis para acessar os elementos do DOM de saída
var saida_texto = document.getElementById('output-text')
var saida_imagem = document.createElement('img')
saida_imagem.setAttribute('id', 'output-image')

function verificar(){
    var ano_nascimento = Number(entrada_ano.value)
    var idade = new Date().getFullYear() - ano_nascimento

    if(ano_nascimento > new Date().getFullYear() || ano_nascimento <= 0 || idade == 0){
        alert('Por favor, insira um ano de nascimento válido.')
        return
    } // Verificar se a idade é negativa ou se o ano de nascimento é maior que o ano atual
    var sexo = ''
    if(entrada_sexo[0].checked){
        var sexo = 'Masculino'
    }else if(entrada_sexo[1].checked){
        var sexo = 'Feminino'
    } // Determinar o sexo com base na seleção do usuário
    if (!entrada_sexo[0].checked && !entrada_sexo[1].checked) {
        alert('Por favor, selecione o sexo.')
        return
    } // Verificar se o sexo foi selecionado

    if(sexo === 'Masculino'){
        if(idade >= 0 && idade < 10){
            var genero = 'criança masculina'
            saida_imagem.setAttribute('src', 'img/homem_crianca.jpg')
            saida_imagem.setAttribute('alt', 'Imagem de um menino criança')
        } else if(idade >= 10 && idade < 21){
            var genero = 'jovem masculino'
            saida_imagem.setAttribute('src', 'img/homem_jovem.jpg')
            saida_imagem.setAttribute('alt', 'Imagem de um jovem masculino')
        } else if(idade >= 21 && idade < 50){
            var genero = 'adulto masculino'
            saida_imagem.setAttribute('src', 'img/homem_adulto.jpg')
            saida_imagem.setAttribute('alt', 'Imagem de um homem adulto')
        } else if(idade >= 50){
            var genero = 'idoso masculino'
            saida_imagem.setAttribute('src', 'img/homem_idoso.jpg')
            saida_imagem.setAttribute('alt', 'Imagem de um homem idoso')
        }
    }else if(sexo === 'Feminino'){
        if(idade >= 0 && idade < 10){
            var genero = 'criança feminina'
            saida_imagem.setAttribute('src', 'img/mulher_crianca.jpg')
            saida_imagem.setAttribute('alt', 'Imagem de uma menina criança')
        } else if(idade >= 10 && idade < 21){
            var genero = 'jovem feminina'
            saida_imagem.setAttribute('src', 'img/mulher_jovem.jpg')
            saida_imagem.setAttribute('alt', 'Imagem de uma jovem feminina')
        } else if(idade >= 21 && idade < 50){
            var genero = 'adulta feminina'
            saida_imagem.setAttribute('src', 'img/mulher_adulta.jpg')
            saida_imagem.setAttribute('alt', 'Imagem de uma mulher adulta')
        } else if(idade >= 50){
            var genero = 'idosa feminina'
            saida_imagem.setAttribute('src', 'img/mulher_idosa.jpg')
            saida_imagem.setAttribute('alt', 'Imagem de uma mulher idosa')
        }
    } // Determinar o gênero e a faixa etária com base na seleção do sexo e na idade

    saida_texto.innerHTML = `Detectamos ${genero} de ${idade} anos.`
    saida_texto.appendChild(saida_imagem)
}
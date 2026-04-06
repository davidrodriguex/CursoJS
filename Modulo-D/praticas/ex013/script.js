var cor = document.getElementsByTagName('body')[0]
var texto = document.querySelector('div#text-content')
var saudacao = document.querySelector('p#saudacao_box')
var img = document.querySelector('div#img-content')

var date = new Date()
var hora = date.getHours()

texto.innerHTML = `Agora são ${hora} horas.`

if(hora >= 5 && hora < 12){
    cor.style.backgroundColor = '#ffe091'
    saudacao.innerHTML = 'Bom Dia!'
    img.innerHTML = '<img src="img/nascer_do_sol.jpg" alt="Nascer do Sol" class="foto"></img>'
}else if(hora >= 12 && hora < 18){
    cor.style.backgroundColor = '#fab428'
    saudacao.innerHTML = 'Boa Tarde!'
    img.innerHTML = '<img src="img/por_do_sol.jpg" alt="Por do Sol" class="foto"></img>'
}else{
    if(hora >= 18){
        cor.style.backgroundColor = '#2c3e50'
        cor.style.color = '#fff'
        texto.style.color = '#000'
        saudacao.style.color = '#000'
        saudacao.innerHTML = 'Boa Noite!'
    }else{
        cor.style.backgroundColor = '#0f2027'
        cor.style.color = '#fff'
        texto.style.color = '#000'
        saudacao.style.color = '#000'
        saudacao.innerHTML = 'Boa Madrugada!'
    }
    img.innerHTML = '<img src="img/boa_noite.jpg" alt="Noite Estrelada" class="foto"></img>'
}
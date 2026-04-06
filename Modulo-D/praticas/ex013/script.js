var cor = document.getElementsByTagName('body')[0]
var texto = document.querySelector('div#text-content')
var saudacao = document.querySelector('p#saudacao_box')
var img = document.querySelector('div#img-content')

var date = new Date()
var hora = date.getHours()

texto.innerHTML = `Agora são ${hora} horas.`

if(hora >= 5 && hora < 12){
    saudacao.innerHTML = 'Bom Dia!'
    img.innerHTML = '<img src="img/nascer_do_sol.jpg" alt="Nascer do Sol" style ="border-radius: 50%; width: 70%; aspect-ratio: 1/1; object-fit: cover; overflow: hidden;"></img>'
}else if(hora >= 12 && hora < 18){
    saudacao.innerHTML = 'Boa Tarde!'
    img.innerHTML = '<img src="img/por_do_sol.jpg" alt="Por do Sol" style ="border-radius: 50%; width: 70%; aspect-ratio: 1/1; object-fit: cover; overflow: hidden;"></img>'
}else{
    if(hora >= 18){
        saudacao.innerHTML = 'Boa Noite!'
    }else{
        saudacao.innerHTML = 'Boa Madrugada!'
    }
    img.innerHTML = '<img src="img/boa_noite.jpg" alt="Noite Estrelada" style ="border-radius: 50%; width: 70%; aspect-ratio: 1/1; object-fit: cover; overflow: hidden;"></img>'
}
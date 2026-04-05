var data = new Date()
var hora = data.getHours()
hora = 1
console.log(`Hora atual: ${hora}h`)
if(hora < 12){
    console.log("Bom Dia!")
} else if(hora >= 12 && hora < 18){
    console.log('Boa Tarde!')
}else{
    console.log('Boa Noite!')
}
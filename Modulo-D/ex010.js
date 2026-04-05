var idade = 70
console.log(`Sua idade é ${idade}`)
if(idade >= 18 && idade < 60){
    console.log(`VOTO OBRIGATÓRIO!`)
}else if(idade >= 16 || idade >= 60){
    console.log("VOTO OPCIONAL!")
}else{
    console.log("NÃO PERMITIDO VOTAR!")
}
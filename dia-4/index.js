let idade =  Number(prompt('insira a sua idade'))

if(idade <= 10){
    console.log(idade)
    let dentroEscopo = 'Paulo Roberto'
    console.log(dentroEscopo)
    console.log('voce tem menos ou tem 10 anos')
}else{
    console.log('voce tem mais de 10 anos')
}

console.log("SAI DO ESCOPO DO IF")
console.log(dentroEscopo)
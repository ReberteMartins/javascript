var idade = 12
console.log(`idade: ${idade} anos`)
if (idade < 16 || idade > 65) {
    console.log('Não vota')
} else if(idade < 18){
    console.log('Voto opcional')
} else {
    console.log('Voto obrigatorio')
}
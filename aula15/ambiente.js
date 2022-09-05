let valores = [5,8,4,7]

valores.push(3)   //acrescenta o numero 3 no vetor
valores.indexOf(7)//retorna a posição do numero
valores.sort()    //organiza o vetor em ordem crescente

console.log(valores)
console.log(`O vetor tem ${valores.length} posições`)
console.log(`O primeiro valor do vetor é ${valores[0]}`)

let pos = valores.indexOf(8)
if (pos == -1) {
    console.log(`O valor não foi encontrado`)
} else {
    console.log(`O valor está na posição ${pos}`)
}
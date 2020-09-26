//declarando um array
let num = [4,2,5]

//adiciona o valor 7 ao indice 3
num[3] = 7
//exclui o ultimo valor
num.pop()
//adiciona o valor 7 ao final do array
num.push(7)
//tamanho do array
num.length
//ordenar em ordem crescente
num.sort()

console.log(num)

for(let pos=0; pos< num.length; pos++){
    console.log(num[pos])
}

for(let pos in num ){
    console.log(num)
}

//impar ou par
function parimpar(n){
    if (n%2 == 0) {
        return 'Par'
    } else{
        return 'Impar'
    }
}
console.log(parimpar(2))

//declarar função em uma variavel
let v = function(x){
    return x*2
}
console.log(v(5))

//fatorial
// function fatorial(n){
//     let fat = 1
//     for(let c = n; c > 1; c--) {
//         fat *= c
//     }
//     return fat
// }
// console.log(fatorial(5))

//recursão.. quando uma função chama ela mesma
function fatorial(n){
    if (n == 1){
        return 1
    } else{
        return n*fatorial(n-1)
    }
}

console.log(fatorial(5))

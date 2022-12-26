let num = [1, 10, 15, 'cu']
num.sort()
num[4] = 8
num[5] = 'junin'
num.push('gay')

console.log(`Nosso vetor é ${num} e tem ${num.length} posições`)

// for(let pos = 0;pos < num.length; pos++) {
//     console.log(`A posição ${pos} tem o valor ${num[pos]}`)
// }

for(let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

let cu = [10,50, 1, 40, 300, 5, 8, 7]
cu.sort()
console.log(cu)
let p = cu.indexOf(11)
if(p == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`o Valor está na posição ${p}`)
}
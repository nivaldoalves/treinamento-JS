
//Aritiméticos

let n1 = 20
let n2 = 2
console.log(`A soma entre n1 e n2 é: ${n1 + n2},`)
console.log(`a subtração é: ${n1 - n2},`)
console.log(`a multiplicação é: ${n1 * n2},`)
console.log(`a divisão é: ${n1 / n2},`)
console.log(`a exponênciação é: ${n1 ** n2},`)
console.log(`o resto da divisão(modulus) é: ${n1 % n2}`)
console.log(`e a ordem de procedência é: (n1 + n2) / 2 = ${(n1 + n2) / 2}`)
console.log(`n1 incrementado fica: ${n1++}`)
console.log(`n2 decrementado fica: ${n2--}`)

//Atribuição

let x = 10
let y = 2
x += y
x -= y
x *= y
x /= y
console.log(`No final o valor de X é: ${x}`)

//Comparação

let num = 5
console.log(`5 é igual a 5 - ${num == 5}`)
console.log(`5 é igual a '5' - ${num == '5'}`)
console.log(`5 é igual e do tipo de '5' - ${num === '5'}`)
console.log(`5 é diferente de 5 - ${num != 5}`)
console.log(`5 é diferente de '5' - ${num != '5'}`)
console.log(`5 é  igual com tipo diferente de '5' - ${num !== '5'}`)
console.log(`5 é maior que 4 - ${num > 4}`)
console.log(`5 é menor que 4 - ${num < 4}`)
console.log(`5 é menor ou igual a 5 - ${num <= 5}`)

//Condicianais(Ternários)

let idade = 17
let eleitor = !(idade <= 15) ? 'Vota' : 'Não vota'
console.log(`Se sua idade não for menor ou igual a 15 você vota, então - ${eleitor}`)

let dinheiro = 20
let valor = (dinheiro >= 20) ? 'Paga' : 'Não paga'
console.log(`Se seu dinheiro for maior ou igual a 20 vai conseguir pagar, então -  ${valor}`)

//Lógicos

let media = 8
let freq = 80
console.log(`A média é maior que 7 'e' a freqência é maior ou igual a 80 - ${media > 7 && freq >= 80}`)
console.log(`A média é maior ou igual a 7 'ou' a freqência é maior ou igual a 90 - ${media >= 7 || freq >= 90}`)
console.log(`A média não é maior que 5 - ${!(media > 5)}`)

//de tipo

console.log(`o tipo de let=media é: ${typeof (media)}`)

//nullish colescing operator

let val = 50
console.log(`O valor1 é: ${val ?? 'Inválido'}`)

val = 0
console.log(`O valor1 é: ${val ?? 'Inválido'}`)

val = null
console.log(`O valor1 é: ${val ?? 'Inválido'}`)

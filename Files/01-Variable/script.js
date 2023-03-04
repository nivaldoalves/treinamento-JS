//Variables / Tipos de dados / typeof

//Number

var n1 = 3
var n2 = 2
var res = n1 + n2
console.log(res, '-', typeof res)

//String

const x = 'javascript'
console.log(x, '-', typeof x)

//boolean

let y = false
console.log(y, '-', typeof y)

//undefined

let a
console.log(a, "-", typeof a)

//array

var frutas = ['goiaba', 'maça', 'pera']
console.log(`O tipo é: ${typeof frutas} e os valores são: ${frutas}`)

//object

var carro = new Object()
carro.fabr = '2020'
carro.cor = 'azul'
console.log(`O tipo é: ${typeof carro}, o ano é: ${carro.fabr} e a cor é: ${carro.cor}`)

//function

var soma = function (a, b) {
    return a + b
}
console.log(`O tipo é: ${typeof soma} e o resultado da soma é: ${soma(3, 2)}`)
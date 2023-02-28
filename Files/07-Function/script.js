
function somar() {
    var x = 2
    var y = 3
    var res = x + y
    document.getElementById('res1').innerHTML = `O resultado da function somar é: ${res}`
}
somar()

//ou

var soma = function () {
    var x = 2
    var y = 3
    var res = x * y
    document.getElementById('res2').innerHTML = `O resultado da function soma é: ${res}`
}
soma()

//ou

var som = function (x, y) {
    var res = x - y
    document.getElementById('res3').innerHTML = `O resultado da function som é: ${res}`
}
som(20, 3)

//ou

var calc = function (x, y) {
    var res = x + y
    return res
}
var num = calc(20, 3)
document.getElementById('res4').innerHTML = `O resultado da function calc é: ${num}`

//ou

function x() {
    return 5 + 5
}
document.getElementById('res5').innerHTML = `O resultado da function x é: ${x()}`

//ou

function y(a, b) {
    return a + b
}
document.getElementById('res6').innerHTML = `O resultado da function y é: ${y(4, 4)}`

function alerta() {
    alert('Resultado das functions')
}


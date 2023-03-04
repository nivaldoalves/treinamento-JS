
function f1() {
    var x = 2
    var y = 3
    var res = x + y
    document.getElementById('res1').innerHTML = `O resultado da function f1 é: ${res}`
}
f1()

//ou

var f2 = function () {
    var x = 2
    var y = 3
    var res = x * y
    document.getElementById('res2').innerHTML = `O resultado da function f2 é: ${res}`
}
f2()

//ou

var f3 = function (x, y) {
    var res = x - y
    document.getElementById('res3').innerHTML = `O resultado da function f3 é: ${res}`
}
f3(20, 3)

//ou

var f4 = function (x, y) {
    var res = x + y
    return res
}
var num = f4(20, 3)
document.getElementById('res4').innerHTML = `O resultado da function f4 é: ${num}`

//ou

function f5() {
    return 5 + 5
}
document.getElementById('res5').innerHTML = `O resultado da function f5 é: ${f5()}`

//ou

function f6(a, b) {
    return a + b
}
document.getElementById('res6').innerHTML = `O resultado da function f6 é: ${f6(4, 4)}`

//ou

let f7 = (a, b) => {
    return a + b
}
document.querySelector('#res7').innerHTML = `O resultado da function f7 é: ${f7(1, 1)}`

//e

const alerta = () => {
    alert('Resultado das functions')
}


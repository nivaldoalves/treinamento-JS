
let pessoa = ['Niva', 'Alves', 50, 'Aluno']

document.getElementById('teste1').innerHTML = pessoa
//method join
document.getElementById('teste2').innerHTML = pessoa.join(' - ')
//remover último item
pessoa.pop()
document.getElementById('teste3').innerHTML = pessoa
//adicionar ao final
pessoa.push('Outro')
document.getElementById('teste4').innerHTML = pessoa
//remove primeiro item
pessoa.shift()
document.getElementById('teste5').innerHTML = pessoa
//adiciona ao início
pessoa.unshift('Eu')
document.getElementById('teste6').innerHTML = pessoa
//posição a ser adicionado, quantidade a ser removida após, item a ser adicionado
pessoa.splice(2, 2, 'adicionado')
document.getElementById('teste7').innerHTML = pessoa
//unir listas
let lista1 = ['Pão', 'Leite', 'Açucar']
let lista2 = ['Café', 'Queilo']
let lista3 = ['Bolo']
let lista = lista1.concat(lista2, lista3)
document.getElementById('teste8').innerHTML = lista
//fatiar itens
let jogador = ['birobiro', 'ribamar', 'pele', 'maradona', 'vampeta']
let craque = jogador.slice(2, 4)
document.getElementById('teste9').innerHTML = jogador
document.getElementById('teste10').innerHTML = craque
//ordem alfabética
jogador.sort()
document.getElementById('teste11').innerHTML = jogador
//ordem numérica
let num = [40, 100, 15, 60, 32]
num.sort()
document.getElementById('teste12').innerHTML = num
num.sort(function (a, b) { return a - b })
document.getElementById('teste13').innerHTML = num
//maior 
function maiorNum(array) {
    return Math.max.apply(null, array)
}
document.getElementById('teste14').innerHTML = maiorNum(num)
//menor
function menorNum(array) {
    return Math.min.apply(null, array)
}
document.getElementById('teste15').innerHTML = menorNum(num)
//maior que
let maior = num.filter(maiores)
function maiores(value, index, array) {
    return value > 35
}
document.getElementById('teste16').innerHTML = maior

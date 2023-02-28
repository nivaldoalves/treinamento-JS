
//objeto

const pessoa = {
    nome: 'Niva',
    idade: 50,
    local: {
        rua: 27,
        num: 268
    }
}
console.log('nome' in pessoa)
console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))
//const local = pessoa.local
//console.log(local)

//DESESTRUTURAÇÃO(destructuring):

//const { local } = pessoa
//console.log(local)
const { local, nome: name, nickname = 'Joca' } = pessoa
console.log({ local, name, nickname })
console.log(JSON.stringify({ local, name, nickname }))

function verIdade({ idade }) {
    return idade
}
console.log(verIdade(pessoa))
//Rest operator
const { nome, idade, ...rest } = pessoa
console.log(rest)

const array = [1, 2, 3, 4, 5, 6, 7, 8]
const [first, , third, ...resto] = array
console.log(first, third, resto)

const novoArray = array.map(i => {
    if (i % 2 == 0) {
        return i * 2
    }
    return i
})
console.log(novoArray)
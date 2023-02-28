
let pessoa = {
    nome: 'Niva',
    idade: 50,
    feliz: true,
    //usar array dentro do objeto
    pets: ['gato', 'cachorro'],
    //usar objeto dentro de objeto
    carros: {
        ford: {
            cor: 'amarelo',
            placa: '1234'
        },
        fiat: {
            cor: 'azul',
            placa: '432'
        }
    },
    //usando métodos(functions x) dentro do objeto
    test: function () {
        return this.idade
    }
}

console.log(pessoa)
console.log(pessoa.nome)
console.log(pessoa.feliz)
console.log(pessoa.pets[1])
console.log(pessoa.carros)
console.log(pessoa.carros.fiat)
console.log(pessoa.carros.ford.placa)
console.log(pessoa['feliz'])
console.log(pessoa.test())



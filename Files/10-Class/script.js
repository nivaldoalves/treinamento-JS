
class Carro {
    constructor(val1, val2, val3) {
        this.marca = val1;
        this.modelo = val2;
        this.ano = val3;
    }
    buzina() {
        return this.modelo + ' buzinou';
    }
}
const uno = new Carro('Fiat', 'Uno', 2000);
const gol = new Carro('WV', 'Gol', 2012);

console.log(uno);
console.log(gol);
console.log(gol.ano);
console.log(gol.buzina());
gol.ano = 2014
console.log(gol)
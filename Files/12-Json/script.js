let carro = {
    Marca: 'Fiat',
    Modelo: 'Uno',
    Ano: [2000, 2015, 2022]
}

let texto = JSON.stringify(carro);
document.querySelector('#texto').innerHTML = texto;

let obj = JSON.parse(texto);
console.log(obj.Modelo);

console.log(obj.Ano[1]);


let data = new Date();
console.log(data);
console.log(data.toLocaleString('pt-br'));
console.log(data.toLocaleString('pt-br', { dateStyle: 'short' }));
console.log(data.toLocaleString('pt-br', { timeStyle: 'short' }));

let ano = data.getFullYear();
console.log(`O ano é: ${ano}`);

let mes = data.getMonth();
console.log(`Os meses são contados de 0 a 11,então o mês é: ${mes}`);
//ou
const mes_ano = ['Janeiro', 'Fevereiro', 'Março', '...'];
let nomeMes = mes_ano[data.getMonth()];
console.log(`Assim o mês é: ${nomeMes}`);

let dia = data.getDate();
console.log(`O dia é: ${dia}`);

let sem = data.getDay();
console.log(`Os dias da semana são contados de 0 a 6, então hoje é: ${sem}`);
//ou
const dia_sem = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
let nomeSem = dia_sem[data.getDay()];
console.log(`Assim o dia da semana é: ${nomeSem}`);

let hora = data.getHours();
console.log(hora);

let min = data.getMinutes();
console.log(min);

let seg = data.getSeconds();
console.log(seg);

let mil_seg = data.getMilliseconds();
console.log(`${mil_seg}\n`);

//outras maneiras:
console.log('Outras maneiras:\n')

let dt = new Date().getFullYear()
console.log(dt)

x = new Date();
d = x.getDate();
m = x.getMonth() + 1;
a = x.getFullYear();
function ad_0(y) {
    return (y < 10 ? '0' + y : '' + y);
}
let pdBr = (`${ad_0(d)}/${ad_0(m)}/${a}`);
console.log(pdBr)

var hoje = new Date();
var vencimento = new Date(2023, 0, 21);
if (hoje > vencimento) {
    console.log('Conta vencida')
} else {
    console.log('Vence em breve')
}

var dataInicial = new Date();
var dataFinal = new Date(2023, 11, 31);
var diferTenpo = dataFinal.getTime() - dataInicial.getTime();
var res = Math.ceil(diferTenpo / (24 * 60 * 60 * 1000));
console.log(`Restam ${res} dias`);

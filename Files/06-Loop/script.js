
//for

for (let i = 0; i <= 10; i++) {
    document.getElementById('par1').innerHTML += i + ", "
}

var ano = new Date().getFullYear()
for (let i = ano; i >= 2000; i--) {
    document.getElementById('ano').innerHTML += "<option value='" + i + "'>" + i + "</option>"
}


let paises = ['Brasil', 'Argentina', 'Canadá', 'Suécia']
for (let i = 0; i < paises.length; i++) {
    document.getElementById('par2').innerHTML += paises[i] + ' - '
}

//for in

let frutas = { nome: 'banana', valor: '2.50', unidades: '12' }

for (let ref in frutas) {
    document.getElementById('par3').innerHTML += '/' + ref
}

for (let ref in frutas) {
    document.getElementById('par4').innerHTML += '/' + frutas[ref]
}

//for of

let eletr = ['mouse', 'teclado', 'fone']

for (let item of eletr) {
    document.getElementById('par5').innerHTML += `/${item}`
}

//Outros

// let num = [2, 3, 4, 5]
// console.log(num)

// for (let res = 0; res < num.length; res++) {
//     console.log(num[res])
// }

// for (let res in num) {
//     console.log(num[res])
// }

//var lista = document.getElementsByTagName("ul")
//console.log(lista)

//var itens = document.getElementsByTagName("li")
//console.log(itens)

//var lista = document.getElementsByTagName("ul")[0]
//console.log(lista)

//InsertBefore

var lista1 = document.getElementsByTagName("ul")[1]
var itens1 = lista1.children
var novo1 = document.createElement("li")
novo1.textContent = "laranja"
lista1.insertBefore(novo1, itens1[3])
//console.log(lista1)

//ReplaceChild

var lista2 = document.getElementsByTagName("ul")[2]
var itens2 = lista2.children
var novo2 = document.createElement("li")
novo2.textContent = "Margarina"
lista2.replaceChild(novo2, itens2[2])
//console.log(lista1)
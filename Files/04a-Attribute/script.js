
//Attribute: get, set, remove

document.getElementById("btn-set").addEventListener("click", function(){
    document.getElementById("title").setAttribute("class","red")
})

document.getElementById("btn-remove").addEventListener("click", function(){
    document.getElementById("title").removeAttribute("class")
})

document.getElementById("btn-get").addEventListener("click", function(){
    var value = document.getElementById("title").getAttribute("class")
    document.getElementById("valor").innerHTML = value
})

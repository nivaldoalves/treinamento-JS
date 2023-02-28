

//function ativar() {
//    document.querySelector('#tempo').innerHTML = 'Contando...'
//    tempo = setTimeout(function () {
//        document.querySelector('#tempo').innerHTML = 'Pronto!'
//        document.body.style.backgroundColor = 'Yellow'
//    }, 5000)
//}
//function parar() {
//    clearTimeout(tempo)
//    document.querySelector('#tempo').innerHTML = 'Parado...'
//}


function ativar() {
    tempo = setInterval(function () {
        var crono = document.querySelector('#tempo').innerHTML;
        var num = parseInt(crono) + 1;
        if (num === 11) {
            parar();
            document.querySelector('#tempo2').innerHTML = "Fim!";
        } else {
            document.querySelector('#tempo').innerHTML = num;
            document.querySelector('#tempo2').innerHTML = "Contando...";
        }
    }, 1000);
}
function parar() {
    clearInterval(tempo);
    document.querySelector('#tempo2').innerHTML = 'Parado';
}

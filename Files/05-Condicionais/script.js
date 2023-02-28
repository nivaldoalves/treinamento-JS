
//if,else,elseif

let hora = new Date().getHours()
if (hora < 12) {
    console.log('Bom dia!')
} else if (hora < 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}

function ver() {
    const nome = document.getElementById('nome').value
    const p = document.getElementById('leg')

    if (nome == '' || nome == null) {
        p.innerHTML = 'vazio',
            p.style.color = 'red'
    } else {
        p.innerHTML = 'ok',
            p.style.color = 'green'
    }
}

//switch case

let local = 'Canada'

switch (local) {
    case 'Argentina':
        console.log('Argentino')
        break
    case 'Canada':
        console.log('Canadense')
        break
    default:
        console.log('Outro')
}

function colorir() {
    let cor = document.getElementById('cor').value
    cor = cor.toLowerCase()

    switch (cor) {
        case 'azul': document.body.style.backgroundColor = 'blue'
            break
        case 'amarelo': document.body.style.backgroundColor = 'yellow'
            break
        default:
            document.body.style.backgroundColor = 'white'
    }
}
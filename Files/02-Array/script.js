
let note = [
    'notebook',
    1500.00,
    { memo: '16gb', hd: '250gb' },
    ['modelo 1200', 'modelo 1500']
]
//array completa
console.log(note)

//terceiro índice
console.log(note[2])

//segundo item dentro do terceiro índice(objeto)
console.log(note[2].hd)

//primeiro item dentro do quarto índice
console.log(note[3][0])

//------------------------------------

//acrescentar índice ao final da lista
note.push('Nacional')
console.log(note)

//acrescentar outro índice ao final
note[note.length] = ['preto', 'branco', 'prata']
console.log(note)

//note é uma array?
console.log(Array.isArray(note))

//total de índices
console.log(note.length)

//ultimo índice da lista
console.log(note[note.length - 1])

//terceiro item dentro do último índice
console.log(note[note.length - 1][2])
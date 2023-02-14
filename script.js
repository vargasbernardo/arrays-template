// Pratica guiada I
const tresStrings = ['Bernardo', 'Bolo de cenoura com calda de chocolate', 'Coca zero']


const tresNumeros = [6, 2, 1997]


const umDeCada = ['Chuva', 35, true]


const numeroSolitario = [58]


const arrayVazio = []

// Pratica guiada II
const tamanhoArrayStrings = tresStrings.length
// console.log(`O tamanho do array eh: `, tamanhoArrayStrings)

const acessandoIndiceTres = tresStrings[3]
// console.log(`O terceiro indice imprime: `, acessandoIndiceTres)

const temChuva = umDeCada.includes('Chuva')
// console.log('O array possui "Chuva"? ', temChuva)

const temTrintaECinco = umDeCada.includes(35)
// console.log('o Array possui o numero 35?', temTrintaECinco)

const temTrue = umDeCada.includes(true)
// console.log('O array possui true?', temTrue)

const valorItemUnico = numeroSolitario[0]
// console.log('o valor do numero solitario eh:', valorItemUnico )

const tamanhoItemSolitario = numeroSolitario.length
// console.log('O tamanho do array solitario eh: ', tamanhoItemSolitario)

// Pratica guiada III
const tresStringsCopiaErrada = tresStrings
// tresStringsCopiaErrada.push('Macarrao')

// console.log('original', tresStrings)
// console.log('copia',  tresStringsCopiaErrada)

const tresStringsCopiaCerta = tresStrings.slice()
// console.log('primeira copia', tresStringsCopiaCerta)

tresStringsCopiaCerta.splice(2, 2)
// console.log('original', tresStrings)
// console.log('itens removidos', tresStringsCopiaCerta)

// Exercicio de Fixacao

const arr = [12, 33, 44, 65, 73, 99, 0, 100]

const newArr = arr.slice()
console.log(newArr)

newArr.pop()
console.log(newArr)

newArr.push(6)
console.log(newArr)

newArr.splice(2, 1)
console.log(newArr)
console.log(arr)



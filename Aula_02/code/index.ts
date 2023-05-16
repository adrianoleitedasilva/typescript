// Tipos de Dados

// Number
let price = 40 

// String = textos, caracteres e afins
let item = 'apple'

// Boolean True ou False
let inStore = true

// Any, ou simplesmente, qualquer coisa
let value 

// Arrays
// Arrays são lsitas que armazenam dados, esses dados podem ser mistos(numbers e strings)
// Mas dê preferência para arrays com tipos bem definidos
let otherValues = [10, 20, 30, 's']

// Numbers
let values: number[] = [10, 20, 30, 40]

//Tuples
// São basicamente, arrays, que eu sei o tamanho exato de dados que irei armazenar ali dentro
let otherItem: [string, number, boolean] = ['Apple', 3, true]

// Enum
enum Role { admin = 1, read = 2, backup = 3}

const user = {
    firstName: 'Adriano',
    age: 34,
    role: Role.admin
}

console.log(user)

// Function return
// Quando não definimos o tipo de dados, a função retorno acaba retornando um any
// Aqui poderiamos concatenar textos, mas como não é a ideia, vamos colocar o :number
// na frente de cada uma das informações recebidas na function
function somarDois(numero1: number, numero2: number) {
    return numero1 + numero2
}
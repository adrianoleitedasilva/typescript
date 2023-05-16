// console.log('Hey')

// let a = 10
// let b = "Adriano"

// Aqui estamos trabalhando sem definir um tipo para os dados
// Dessa forma automaticamente o Typescript assimila como sendo 
// any, ou seja, qualquer tipo de dado.
// function soma(num1, num2) {
//     return num1 + num2
// }

// Agora definindo o tipo como número
// 
function soma(num1, num2) {
    return num1 + num2
}


let resultado = soma(5, 8)
console.log(resultado)
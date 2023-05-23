"use strict";
// Tipos de Dados
// Number
let price = 40;
// String = textos, caracteres e afins
let item = 'apple';
// Boolean True ou False
let inStore = true;
// Any, ou simplesmente, qualquer coisa
let value;
// Arrays
// Arrays são lsitas que armazenam dados, esses dados podem ser mistos(numbers e strings)
// Mas dê preferência para arrays com tipos bem definidos
let otherValues = [10, 20, 30, 's'];
// Numbers
let values = [10, 20, 30, 40];
//Tuples
// São basicamente, arrays, que eu sei o tamanho exato de dados que irei armazenar ali dentro
let otherItem = ['Apple', 3, true];
// Enum
var Role;
(function (Role) {
    Role[Role["admin"] = 1] = "admin";
    Role[Role["read"] = 2] = "read";
    Role[Role["backup"] = 3] = "backup";
})(Role || (Role = {}));
const user = {
    firstName: 'Adriano',
    age: 34,
    role: Role.admin
};
console.log(user);
// Function return
// Quando não definimos o tipo de dados, a função retorno acaba retornando um any
// Aqui poderiamos concatenar textos, mas como não é a ideia, vamos colocar o :number
// na frente de cada uma das informações recebidas na function
function somarDois(numero1, numero2) {
    return numero1 + numero2;
}
// Function void
// Quando não precisamos retornar nada, ou seja, void.
// Armazenamos algo, fazemos algo, mas não necessáriamente devemos ter um método de return como acima
function result(price) {
    console.log("O valor é " + price);
}
result(somarDois(5, 6));
// Objetos
const userNovo = {
    nome: 'Adriano',
    idade: 34
};
// Tipo Unknowm
let inputItem;
let itemName;
inputItem = 10;
itemName = 'Apple';
if (inputItem === 'string') {
    itemName = inputItem;
}
// Tipo NEVER
// Nunca retorna uma informação para a console
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError("A aplicação explodiu!", 467);

import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  console.log("Hello Rigo from the console!");
};


/*tipo de datos de js */

/* primitivos */
/*
number --> 1 1.5 -15 0.58
int --> numero entero
float --> numero con decimales
bigInt ---> el que sea mayor que el limite de number 

string --> texto --> "" '' `` ---> todo lo que este entre comillas (la que sea) ES TEXTO
char -> UNA SOlA LETRA --> en js no existe
boolean --> verdadero/falso ---> true/false 1/0

undefined ---> no esta definido 
null --> vacio
NaN ---> Not a number --> no es numero 


todo lo que no esta entre comillas es una variable O un palabra reservada de js


objetos
array --> [] --> coleccion de datos. puede o no tener los datos relaciones entre si
[1,2,33,4, 'Pepe', true, [5,"Lola"]]

objeto --> {} ---> describe un elemento. Almacena la informacion con pares llave: valor 
car = {
  fruta_preferia: 'Melon' // es un coche, no una fruteria
  modelo: 'prius',
  marca: 'toyota',
  color: 'rojo'
}


tipos de variables:

var ---> olvidenla --> problema con alcance (scope)
let ---> variable que permite la reasignacion de valor
const --> variable que NO permite la reasignacion de valor //---> la que mas usaremos. porque da mas seguridad


*/

//declarar una variable

let age  //variable declarada

// nombres de variables no pueden empezar por numeros (ni deben tenerlos en ninguna parte)
// nombres SIEMPRE los escribiremos usando camelCase ---> esteEsMiNombreDeVariable
// los nombres de variables TIENEN que ser descriptivos

let x // NO
let sumaTotal //variables que almacena la suma de N numeros

console.log(sumaTotal, x, age) //fundamental, mejor amigo
age = 22
console.log(age)
age = 23 //se puede reasignar valor tantas veces como sea necesario
console.log(age)

const name = 'Pepe'
//name = 'Lola' // no permite reasignacion de valor
console.log(name)
// el = es asignacion de valor

let lastName = 'Magnifico'
console.log('pepe')


// OPERADORES LOGICOS

//expresiones que se resolveran en booleanos (true/false)

/*


<
>
<=
>=
== --> igual a 
=== --> estrictamente igual a

! --> delante de una variable o de un operador logico es negacion 
!= --> NO es igual
!== --> NO es estrictamente igual
&& --> y ---> para que devuelva True, tienen que cumplirse TODAS las condiciones. Si una condicion es false, devuelve false
|| --> o ---> devuelve true, si una de las condiciones es true

SE RESUELVEN EN BOOLEAN

*/

console.log('1<5', 1 < 5)
console.log('1>5', 1 > 5)
console.log('5>5', 5 > 5)
console.log('5<5', 5 < 5)
console.log('5>=5', 5 >= 5)
console.log('5<=5', 5 <= 5)
console.log('4!=3', 4 != 3) //verdadero. 4 no es igual a 3
console.log('4!="4"', 4 != "4") // falso porque compara VALOR, no tipo de dato
console.log('4!=="4"', 4 !== "4") // mismo valor pero con diferente tipos de datos ---> es verdadero porque NO ES estrictamente igual
console.log('5 es igual a 5', 5 == 5) // compara VALOR
console.log('5 es igual a "5"', 5 == '5') // compara VALOR (en este caso number con string)
console.log('5 es igual a 5', 5 === 5) // compara VALOR y TIPO de dato ---> mas usado
console.log('si 5 es igual a 5 y 6 es igual a 7', 5 === 5 && 6 === 7)
console.log('si 5 es igual a 5 y 6 es igual a 6', 5 === 5 && 6 === 6)
console.log('si 5 es igual a 5 o 6 es igual a 7', 5 === 5 || 6 === 7)
console.log('mixed', (5 === 5 && 6 === 5) || 5 === 5) // true
console.log('true', true)
console.log('!true', !true)
console.log('!!true', !!true) //negacion de negacion es afirmacion

//para saber tipo de dato, ya sea de una variable o de lo que le pongamos
console.log(typeof 5)
console.log(typeof '5')
console.log('typeof age', typeof age)

//CONDICIONES

// if (condicion) {
//   //bloque de codigo... que sucede si se cumple
// }

age = 22

console.log(age)

// if (age>16) {
//   console.log('puede manejar en USA')
// }
//anidar condiciones
// if (age > 16) {
//   console.log('puede manejar')
//   if (age > 20) {
//     console.log('puede beber')
//     console.log('si estas manejando, NO!')
//   }
// } else {
//   console.log('un zumito')
// }

//siempre la condicion mas compleja, mas dificil, menos problable ES la primera
if (age > 20) {
  console.log('puede beber y manejar')
  console.log('al mismo tiempo, NO!')
} else if (age > 16) {
  console.log('puede manejar')
} else {
  console.log('un zumito')
}


// el ; significa final de instruccion 



let prueba; //variable indefinida --> es como si fuese false para las condiciones
let test = 15  // variables definidas, con valor asignado, son true en condiciones
//if (test) --> estamos preguntando si tenemos valor o no en la variable, si esta definida --> se cumple, test = 1
//if (prueba) --> no se cumple, prueba esta indefinida

//verficamos que test tiene valor/esta definida
if (test) {
  console.log('se cumplio!!!!')
}
if (prueba) {
  console.log('prueba sin negacion')
}

//verificamos que prueba NO este definida/tenga valor asignado
if (!prueba) {
  console.log('que me han negao')
}
//esta fdorma de escribir instrucciones NO
console.log('primera'); console.log('segunda')


age = 18

if (age > 15 && age < 21) {
  console.log('puedes manejar pero no tomar')
}
if (age < 16 || age > 100) {
  console.log('ni por mucho ni por poco')
}

if (prueba || test) {
  console.log('con uno me basta')
}

if (age > 15 && !prueba) {
  console.log('es mayor a 15 y test tiene informacion')
}


let alive = false

// ternarias

// condicion ? true : false 
//SIMPLE

alive ? console.log('avemus vida!') : console.log('zombie!!!!')
age = 25
age === 18 ? console.log('tienes 18 años') : console.log("no se que edad tienes")
age > 20 ? console.log('puedes tomar') : console.log('zumito')
//ESTO SE DEBE EVITAR A TODA COSTA!!!!
//anidar ternarias
age === 20 ? console.log('tienes 20') : age > 20 ? console.log('eres mayor de 20') : console.log('eres menor de 20')

// arrays y objetos

//array --> []
//dentro del array, puede haber todo tipo de dato
// los datos no tiene por que estar relacionados 

// se usan MUUUUUUUUUCCHCCCHHHHOOOOO para almacenar datos
// las posiciones (indices) de los arrays empiezan SIEMPRE en 0
// los arrays siempre CONST
// los arrays originales NO SE MODIFICAN
const arr = [25, 58, 65, 32, 15, 78, 163653]

console.log(arr)
console.table(arr)
console.log(arr[0])
console.log(arr[1])

console.log(arr.length) //devuelve el largo del array--> comienza a contar en 1 
console.log(arr[arr.length]) //--> devuelve undefined 
console.log(arr[arr.length - 1]) // devuelve el ultimo elemento del array


arr[0] = 50 //puedo modificar los valores del array

arr[0] = arr[1] + arr[3]
console.log(arr)

arr.push('pepe', 'matia') // añade al final del array el elemento
console.log('antes de pop', arr)
arr.pop() // elimina ultimo elemento del array
console.log('despues de pop', arr)
arr.shift() // elimina primer elemento del array
console.log(arr)
arr.unshift('lola', 'barbara') // inserta al principio el elemento
console.log(arr)

console.table(arr)
//slice no modifica el array original
// slice(3,6) --> empieza en posicion 3, termina en posicion 6
const slicedArr = arr.slice(3, 6)

console.table(slicedArr)
console.table(arr)

//splice --> OJO!!! MODIFICA EL ARRAY
// splice(0,1) --> empieza en posicion 0 y elimina 1 elemento

const newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
newArr.splice(1, 1) //desde la posicion 1, elimina un elemento
console.table(newArr)
newArr.splice(3, 3) // desde la posicion 3, elimina 3 elementos
console.table(newArr)

//como insertar informacion en cualquier lugar del array???
//splice(3,0,'zombie') --> en la posicion 3, el 0 es para que no elimine elementos, 'zombie'  es el elemento a insertar
newArr.splice(3, 0, 'zombie') // --> inserta en la posicion 3, el elemento 'zombie'
console.table(newArr)
newArr.splice(3, 1, 'walking dead')// -> cambia el elemento de la tercera posicion por 'walking dead'
console.table(newArr)
//ejemplo de Juan
newArr.splice(3, 3, 'pepe', 'lola', 'maria', 'matia') // desde la posicion 3, elimina 3 elementos e inserta todos los 
// que escriba separados por coma
console.table(newArr)


const partyArr = ['pepe', 'maria', 'lola', 'matia']
// lola y matia se han ido a hablar a solas PERO no se han ido. crear un array para ellos dos
//  const slicedArr = arr.slice(3, 6)
const priv = partyArr.slice(2, partyArr.length)
console.table(partyArr)
console.log('priv', priv)
//no invitaron a la fiesta a Barbara, como podemos insertarla entre maria y lola?
partyArr.splice(2, 0, 'Barbara')
console.log(partyArr)
// pepe y maria se han ido de la fiesta, quitalos del array?
partyArr.splice(0, 2)
console.log(partyArr)



//objetos
// se definen por {}
// se almacena con pares llave: valor --> llave o propiedad
// describen algo
// siempre const

const person = {
  name: 'Pepe',
  age: 50,
  obj: {
    quejesto: 'madre mia',
    inception: {
      actor: 'ese mismo'
    }
  }
}

console.log(person)
console.table(person)

console.log(person.age)
console.log(person.name)
console.log(person.obj.quejesto)
console.log(person.obj.inception.actor)

person.age = 25
console.log(person)
delete person.obj
console.log(person)


//si el objeto no tiene una propiedad pero le damos valor, la crea
console.log(person.city)
person.city = 'Sevilla'
console.log(person.city)
console.log(person)
person.cty = 'Madrid'
console.log(person)


// funciones

// una funcion, una unica responsabilidad

function funcClasica() {
  //bloque de codigo
  return
}

//funcion flecha 
const arrowFunc = () => {
  //bloque de codigo
  return
}
//declaracion de una funcion
const myFunc = () => {
  console.log('pepe se prepara para estar en funcion')
  return 'pepe esta funcion'
}

//NO SE DEBE HACER  
const badFunc = () => {
  return console.log('mal!') // nunca!
}

//ejecucion de una funcion
console.log(myFunc())
console.log(badFunc())
badFunc()

//console log en funcion siempre en el bloque de codigo

//cuando pensamos en 'voy a hacer una funcion para saludar' hablamos de lo que retorna la funcion

const saludar = () => {
  return 'Hola'
}

console.log('saludar con () ', saludar()) // () es para ejecutar

console.log('saludar sin () ', saludar) // sin parentesis NO ejecuta la funcion

const sumDeDosMasDos = () => {
  const total = 2 + 2
  return total
}

console.log(sumDeDosMasDos())


//parametros

// parametros van a ser como variables que va  atilizar la funcion para ejecutar su codigo

const saludarV2 = (nombre) => {
  console.log('valor de nombre ->', nombre)
  return `hola ${nombre}`
}

console.log(saludarV2('Pepe'))
console.log(saludarV2('Lola'))
console.log(saludarV2('Barbara'))
console.log(saludarV2('Matia'))


const sumOfTwoNumbers = (num1, num2) => {
  const total = num1 + num2
  console.log('numOne->', num1, 'numTwo->', num2)
  console.log('la suma es->', total)
  return total
}

console.log(sumOfTwoNumbers(5, 3))
console.log(sumOfTwoNumbers(5, 5))
console.log(sumOfTwoNumbers(87, 42))
console.log(sumOfTwoNumbers(852, 746))

//las funciones flechas, si reciben un unico parametro, se pueden escribir SIN parentesis
const nuevoSaludo = nombre => {
  return `Hola de nuevo ${nombre}`
}


console.log(nuevoSaludo('pepe'))

//cuando declaramos una funcion, los parentesis solo son obligados si no recibimos parametros o recibimos mas de uno

const multiplicacion = (a, b, c) => a * b * c

//al declarar una funcion flecha, si no voy a dar mas de un paso logico (una instruccion) pueden devolver directamente (escribir sin los {})
// const nuevoSaludo = nombre => `Hola de nuevo ${nombre}`

console.log(multiplicacion(2, 5, 8))


const personDescribe = (name, age=29, city='Valencia') => {
  return `Se llama ${name}, tiene ${age} de edad y vivie en ${city}.`
}

console.log(personDescribe('Pepe', 22, 'Madrid'))
//el orden importa
console.log(personDescribe(22, 'Madrid', 'Pepe'))
console.log(personDescribe('Lola'))

const isGreaterThanFive = (num) => {
  return num>5 ? 'es mayor' : 'es menor'
}

console.log(isGreaterThanFive(8))

const isGreaterThanOrEqualToTen = (num) => {
  if (num>=10) {
    return 'es mayor' //en el return termina la funcion
  }
  console.log('si es menor me ejecuto')
  return 'es menor'
}

console.log(isGreaterThanOrEqualToTen(2))

//funcion con array
const arrPrueba = [1,2]
console.log(arrPrueba)
const addToArr = (arr, num) => {
  arr.push(num)
  return arr
}

console.log(arrPrueba)
console.log(addToArr(arrPrueba, 99))

const newObj = {
  model: 'c-hr'
}

const addToObj = (obj, key, value) => {
  //cuando decimos obj.algo ese algo JS lo toma como llave
  //siempre que sea de manera dinamica (por variables) utilizamos [] 
  return obj[key] = value
}
console.log(newObj)
addToObj(newObj, 'year', 2008)
console.log(newObj)
addToObj(newObj, 'brand', 'toyota')
console.log(newObj)


//obj.city ---> js entiende que el objeto tiene la llave city y si no la tiene, la crea si le asignamos un valor
newObj.owner = 'Pepe'
console.log(newObj)
console.log(newObj.owner) // se usa mas cuando accedemos directamente a una llave

console.log(newObj['owner'])//se usa mas cuando vamos a usar una variable como llave
const key = 'model'

console.log(newObj[key]) // devolvera en dependecia del valor de la variable key
// loops



// switch
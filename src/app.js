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

if (age>15 && age < 21) {
  console.log('puedes manejar pero no tomar')
} 
if (age<16 || age > 100) {
  console.log('ni por mucho ni por poco')
}

if (prueba || test) {
  console.log('con uno me basta')
}

if (age>15 && !prueba) {
  console.log('es mayor a 15 y test tiene informacion')
}


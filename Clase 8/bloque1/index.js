/* let numero = 20;

numero = numeros + 1;
numero += 1;
numero++; */

/* 
estructura del ternario
condicion ? verdad : falso
condicion ? codigo en caso de que condicion sea verdadera : codigo en caso de que condicion sea falsa
*/

/* let edad = 29;
let nombre = "mariana";

if(edad >= 18){
  console.log("Puedes entrar");
}else{
  console.log("no puedes entrar");
}
const validateName = () => {
  nombre === "mariana" ? console.log("puedes entrar") : console.log("no eres mariana y no puedes entrar");
}

edad >= 18 ? validateName() : console.log("no puedes entrar"); */

/* let usuario = {
  nombre: "carlos",
  edad: 20
} */
/* let permiso;

if(usuario.edad >= 18){
  permiso = true;
}else{
  permiso = false;
}

if(permiso){
  console.log("puedes entrar");
}else{
  console.log("no puedes entrar");
} */

/* let permiso = usuario.edad >= 18 ? true : false;
permiso ? console.log("puedes entrar") : console.log("no puedes entrar"); */

// const carrito = [];

/* if(carrito.length === 0){
  console.log("el carrito está vacío");
} */

// carrito.length === 0 && console.log("el carrito está vacío");

/* 
operador1 && operador2
si operador1 es verdadero o representa un verdadero entonces retorna operador2
en caso contrario retorna operador1
*/

/* let usuario = {
  nombre: "carlos",
  edad: 20
}

const hora = usuario.edad >= 18 && new Date();
console.log(hora); */

/* 
operador1 || operador2
operador1 no es falsy entonces retorna operador1 de lo contrario retorna operador2
*/

/* console.log( 0 || "Falsy")  // Falsy
console.log( 40 || "Falsy") // 40
console.log( null || "Falsy")  // Falsy
console.log( undefined || "Falsy")  // Falsy
console.log( "Hola Mundo" || "Falsy")  //  "Hola Mundo"
console.log( "" || "Falsy")  // Falsy
console.log( NaN || "Falsy")  // Falsy
console.log( true || "Falsy")  //true
console.log( false || "Falsy") // Falsy */

/* let usuario1 = null;

console.log(usuario1 || "El usuario no existe"); */

/* let carrito;

let carritoStorage = JSON.parse(localStorage.getItem("carrito"));

if(carritoStorage){
  carrito = carritoStorage;
}else{
  carrito = [];
} */

// const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

/* console.log( 0 ?? "Nullish")  
console.log( 40 ?? "Nullish") 
console.log( null ?? "Nullish")  
console.log( undefined ?? "Nullish")  
console.log( "Hola Mundo" ?? "Nullish")  
console.log( "" ?? "Nullish")  
console.log( NaN ?? "Nullish")  
console.log( true ?? "Nullish")  
console.log( false ?? "Nullish") */

/* let usuario = {
  nombre: "carlos",
  edad: 20,
  familiar: null
} */
/* let usuario = null; */

// console.log(usuario?.nombre || "El usuario no existe");

// console.log(usuario?.familiar?.nombre || "La propiedad no existe");
// const usuario = {
//   nombre: "andres",
//   edad: 45,
//   direccion: "AV",
//   familiar: {
//     nombreFamiliar: "camilo",
//     edad: 45
//   }
// };

/* let nombre = usuario.nombre;
let edad = usuario.edad;
let direccion = usuario.direccion; */

// let {
//   nombre,
//   edad,
//   direccion,
//   color,
//   familiar: {nombreFamiliar}
// } = usuario;

// console.log(nombre);
// console.log(edad);
// console.log(direccion);
// console.log(color);
// console.log(nombreFamiliar);

// const usuario = {
//   nombre: "andres",
//   edad: 45,
//   direccion: "AV",
//   familiar: {
//     nombreFamiliar: "camilo",
//     edad: 45,
//   },
// };

// let { nombre: namePerson, edad: age } = usuario;

// console.log(namePerson);
// console.log(age);

/* function mostrarObjeto(objeto){
  let {precio, nombre} = objeto;
  console.log(precio);
  console.log(nombre);
} */

/* function mostrarObjeto({precio, nombre}){
  console.log(precio);
  console.log(nombre);
}

const objeto = {precio: 1000, nombre: "camisa"};
mostrarObjeto(objeto); */

/* const personas = ["Pepito", "mariano", "camila", "martin"];
const [, , a, b] = personas;
console.log(a);
console.log(b); */

/* let numero = 2;
let numero1 = numero;
numero1 = 5;
console.log(numero); */

/* let obj = {nombre: "andres", edad: 56};
let obj1 = {...obj};

obj1.nombre = "camila";

console.log(obj); */

/* const personas = ["Pepito", "mariano", "camila", "martin"];
console.log(personas.join(" "));
console.log(...personas); */

/* const numeros = [1,2,3,4,5,4,3,67];
console.log(Math.max(...numeros)); */

/* const usuario = {
  nombre: "andres",
  edad: 45,
  direccion: "AV"
};

const usuario1 = {
  ...usuario,
  nombre: "camila",
  colorCabello: "negro"
}

console.log(usuario1); */

/* function mostrar(...numeros){
  console.log(numeros);
};

mostrar(1,2,3,4,5,6,7,20) */
/* 
if(condicion){
  codigo a ejecutar en caso de que la condicion sea verdadera
}

if(condicion){
  codigo a ejecutar en caso de que la condicion sea verdadera
}else{
  codigo a ejecutar en caso de que la condicion sea falsa
}

if(condicion1){
  codigo a ejecutar cuando la condicion1 es verdadera
}else if(condicion2){
    codigo a ejecutar cuando la condicion2 es verdadera
}else{
  codigo a ejecutar en caso de que ninguna de las condiciones sea verdadera
}
*/
// let condicion = false;
// if(condicion){
//   console.log("hola");
// }

// let condicion = false;

// if(condicion){
//   console.log("entramos a la condicion");
// }else{
//   console.log("no entramos a la condicion");
// }

/* let edad = 20;
let apellido = "asdf";

if(edad === 10 && apellido === "ruiz"){
  console.log("entramos a la condicion 1");
}else if(edad === 20 && apellido === "ayala"){
  console.log("entramos a la condicion 1");
}else{
  console.log("entramos al else");
} */

/* 
bucles
for
while
do while

for(desde; hasta; actualizacion){
  codigo a repetir
}

while(condicion){
  codigo se ejecuta siempre y cuando la condicion sea verdadera
}

do{
  codigo a ejecutar por primera vez y se sigue ejecutando si la condicion es verdadera
}while(condicion);
*/

// for(let i = 10; i <= 100; i++){
//   console.log(i);
// }
/* let i = 0;

while(i < 10){
  console.log("soy menor que 10");
  i++;
}

console.log("finalizamos proceso"); */

/* 
funciones
function nombreFuncion(parm1, parm2, ... , parmn){
  codigo cuando se llame la funcion
}

const nombreVariable = () => {
  codigo de la funcion
}

const nombreVariable = (x, y) => {
  codigo de la funcion
}

const nombreVariable = (x, y) => {
  return x + y;
}

const nombreVariable = (x, y) => x + y;
*/
/* suma(4,3);

function suma(x, y){
  console.log(x + y);
} */

/* const resta = (x, y) => {
  console.log(x - y);
}

resta(9, 8); */

/* let persona = {
  nombre: "camilo",
  edad: 46,
  direccion: "AV"
};

function Persona(nombre, edad, direccion){
  this.nombre = nombre;
  this.edad = edad;
  this.direccion = direccion;
  this.correr = function (){console.log(`yo ${this.nombre} estoy corriendo`);}
}

let persona1 = new Persona("pepito", 59, "AV");
let persona2 = new Persona("camilo", 59, "AV");

console.log(persona);
console.log(persona1); */

/* class Producto{
  constructor(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
    this.vendido = false;
  }

  vender(){
    this.vendido = true;
  }
}

let producto1 = new Producto("pan", 1000);
console.log(producto1.vendido);
producto1.vender();
console.log(producto1.vendido); */

// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "pantalon", precio: 1100 },
//   { id: 3, nombre: "gorra", precio: 1500 },
//   { id: 4, nombre: "zapato", precio: 300 },
// ];

// let nombres = productos.map(elemento => elemento.nombre);
// console.log(nombres);
// let precios = productos.map(elemento => elemento.precio);
// console.log(precios);
/* let id = prompt("Ingrese el id del producto");

let producto = productos.find(elemento => elemento.id === 1);
let div = document.createElement("div");
div.innerHTML = `
  ID: ${producto.id}
  Nombre: ${producto.nombre}
  Precio: <b>$${producto.precio * precio}</b>
`;
document.body.append(div); */

// let filtro = parseInt(prompt("Ingrese el precio menor"));
// let productosEncontrados = productos.filter(
//   (elemento) => elemento.precio > filtro
// );

// productosEncontrados.forEach((elemento) => {
//   let div = document.createElement("div");
//   div.innerHTML = `
//   ID: ${elemento.id}
//   Nombre: ${elemento.nombre}
//   Precio: <b>$${elemento.precio}</b>
//   <hr/>
// `;
//   document.body.append(div);
// });

//traemos el formulario para obtener sus valores
let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log(e.target.children[0].value);
  console.log(e.target.children[1].value);
});

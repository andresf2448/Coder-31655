/* 
function nombreFuncion(parm1, parm2, ...){
  codigo a ejecutar por la funcion
}
*/

/* function mensaje(){
  console.log("Hola a todos");
}

mensaje(); */

/* function pedirNombre(){
  let apellido = prompt("Ingrese su apellido");
  alert(apellido);
} */

/* function saludoPersona(nombre, apellido){
  let saludo = `Hola cómo vas ${nombre} ${apellido}`;
  alert(saludo);
}

let casa = prompt("Ingresa tu nombre");
let apellido = prompt("Ingresa tu apellido");

saludoPersona("cat", apellido); */
/* 
function suma(num1, num2){
  return num1 + num2;
}

let resultadoSuma = suma(3, 4);
console.log(resultadoSuma + 7); */

/* function calculadora(num1, num2, operacion){
  switch(operacion){
    case "+":
      return num1 + num2;
      break;
    case "-":
      return num1 - num2;
      break;
    case "*":
      return num1 * num2;
      break;
    case "/":
      return num1 / num2;
      break;
    default:
      return 0;
      break;
  }
}

let num1 = parseInt(prompt("Ingrese el numero 1"));
let num2 = parseInt(prompt("Ingrese el numero 2"));
let operacion = prompt("Ingrese la operacion a ejecutar");

let resultado = calculadora(num1, num2, operacion);
alert(resultado); */

/* function saludo(){
  console.log("hola");
  return 
  console.log("chao");
}

saludo(); */

/* function suma(num1, num2, num3){
  console.log("1");
}

function suma(num1, num2){
  console.log("2");
};

suma(3,4, 5);
suma(3,4); */

/* {
  let suma = 4;
}
console.log(suma); */

/* let result;

function sumar(num1, num2){
  result = num1 + num2;
}

sumar(4, 5);
console.log(result);
 */
/* function sumar(num1, num2){
  let result = num1 + num2;
}

sumar(4, 5);
console.log(result); */

/* let nombre = "andres";

function saludar(){
  let nombre = "Juan";
  console.log(nombre);
}

console.log(nombre);

saludar(); */

/* function sumar(num1, num2){
  let resultado = num1 + num2;
  return resultado;
}

function resta(num1, num2){
  let resultado = num1 - num2;
  return resultado;
}

function multiplicar(num1, num2){
  let resultado = num1 * num2;
  return resultado;
}

function division(num1, num2){
  let resultado = num1 / num2;
  return resultado;
} */

/* function suma(a, b){
  return a + b;
} */

/* const suma = function (a, b){ return a + b; };
console.log(suma(8, 5)); */

/* const suma = (a, b) => { return a + b; };
const resta = (a, b) => a - b;

console.log(suma(3,4)); */

/* const suma  = (a,b) => a + b;
const resta = (a,b) => a - b;

const iva   = x => x * 0.21;
let precioProducto  = 500;
let descuento = 50;

let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento);
                = resta(suma(precioProducto, iva(500)), descuento);
                = resta(suma(precioProducto, 500 * 0.21), descuento);
                = resta(suma(500, 500 * 0.21), descuento);
                = resta(500 + 500 * 0.21, 50);
                = resta(500 + 500 * 0.21, 50);
                = 500 + 500 * 0.21 - 50; */

/* let nombre1 = "andres";
let edad1 = 50;
let direccion1 = "AV"; */

/* const persona = {
  nombre: "andres", 
  edad: 50, 
  direccion: "AV"
}; */

/* console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.direccion);

let clave = "nombre";
console.log(persona[clave]);
console.log(persona["edad"]);
console.log(persona["direccion"]); */
/* let nombre = prompt("ingrese nuevo nombre")

persona.edad = 30;
persona["nombre"] = nombre;
console.log(persona); */

/* function Persona(nombre, edad, direccion){
  this.nombre = nombre;
  this.edad = edad;
  this.direccion = direccion;
}

const persona1 = new Persona("andres", 50, "AV");
const persona2 = new Persona("camila", 30, "AV");
persona2.edad = 40;
console.log(persona1.nombre);
console.log(persona2.nombre); */

/* let numero1 = 4;
let numero2 = numero1;

numero2 = 7;
console.log(numero1);

|   4   |       |   7   | 
numero1          numero2 */

/* let objeto1 = {nombre: "andres", edad: 50};
let objeto2 = objeto1;

objeto2.nombre = "Sofia";
console.log(objeto1);

|{nombre: "sofia", edad: 50}|    ||
        objeto1 objeto2 */

/* let nombre = prompt("Ingrese el nombre");
let edad = parseInt(prompt("Ingrese su edad"));

const alumno = (nombre, edad) => {
  if (edad <= 5) {
    console.log(`${nombre} tiene ${edad} va al jardin`);
  } else if (edad <= 13) {
    console.log(`${nombre} tiene ${edad} va a la primaria`);
  } else if (edad <= 18) {
    console.log(`${nombre} tienes ${edad} va al secundario`);
  } else {
    console.log(`${nombre} tienes ${edad} seguis estudiando?`);
  }
};

alumno(nombre, edad); */

/* function Persona(nombre, edad, direccion){
  this.nombre = nombre;
  this.edad = edad;
  this.direccion = direccion;
  this.gritar = function(){console.log("aaaaaaaaaaahhhhhhhhhhhh!!!!!!!" + this.nombre);}
}

const persona1 = new Persona("andres", 50, "AV");
const persona2 = new Persona("camila", 30, "AV"); */
/* persona2.gritar(); */

/* function Persona(nombre, edad, direccion){
  this.nombre = nombre;
  this.edad = edad;
  this.direccion = direccion;
}

const persona1 = new Persona("andres", 50, "AV");
const persona2 = new Persona("camila", 30, "AV");

for(const propiedad in persona1){
  console.log(persona1[propiedad]);
} */

/* function Persona(nombre, edad, direccion) {
  this.nombre = nombre;
  this.edad = edad;
  this.direccion = direccion;
  this.gritar = function () {
    console.log("aaaaaaaaaaahhhhhhhhhhhh!!!!!!!" + this.nombre);
  };
} */

/* class Persona {
  constructor(nombre, edad, direccion) {
    this.nombre = nombre;
    this.edad = edad;
    this.direccion = direccion;
  }

  gritar(){
    console.log("aaaaaaaaaaahhhhhhhhhhhh!!!!!!!" + this.nombre);
  }
}

const persona1 = new Persona("andres", 50, "AV");
const persona2 = new Persona("camila", 30, "AV");

persona1.gritar(); */

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

const producto1 = new Producto("Pan", 1000);
const producto2 = new Producto("Cafe", 1000);

console.log(producto1);
producto1.vender();
console.log(producto1);
console.log(producto2); */

class Producto{
  constructor(img, nombre, precio, envioGratis){
    this.img = img;
    this.nombre = nombre;
    this.precio = precio;
    this.envioGratis = envioGratis;
    this.vendido = false;
    this.idCompras = [1, 3, 4, 6, 3, 7];
  }

  vender(){
    this.vendido = true;
  }
}

const producto1 = new Producto("image.png", "televisor", 10000, true);
console.log(producto1);

persona.idCompras.push(objeto.id);
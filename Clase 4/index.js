/* const arr1 = [];
const arr2 = [1, 2, 3];
const arr3 = ["andres", "Emma", "Agostina"];
const arr4 = [true, false];
const arr5 = ["andres", true, false, 4];

console.log(arr2[0] + arr2[2]); */

/* const numeros = [3, 4, 7, 10, 90, 100, 102];

for(let i = 0; i < numeros.length; i++){
  console.log(numeros[i]);
} */

/* const productos = ["Camisa", "Zapato"];
console.log(productos);
productos.push("Gorra");
console.log(productos);
productos.unshift("Pantalon");
console.log(productos); */

/* const productos = ["Camisa", "Zapato", "Pantalon", "Gorra"];
console.log(productos);
productos.pop();
console.log(productos);
productos.shift();
console.log(productos); */

//El splice te permite eliminar uno o más  elementos en la posicion seleccionada
/* const productos = ["Camisa", "Zapato", "Pantalon", "Gorra"];
productos.splice(1, 2);
console.log(productos); */

//El join une los elmentos del arreglo separados por el parametro pasado en el join
/* const productos = ["Camisa", "Zapato", "Pantalon", "Gorra"];
console.log(productos.join("+++++")); */

//el concat te permite unir o concatenar dos arreglos generando uno solo
/* const productos = ["Camisa", "Zapato", "Pantalon", "Gorra"];
const productos1 = ["Arroz", "Galletas"];

const productosTotales = productos.concat(productos1);
console.log(productosTotales); */

//Generar una copia o fragmento de un arreglo
/* const productos = ["Camisa", "Zapato", "Pantalon", "Gorra"];
const fragmento = productos.slice(1, 3);
console.log(fragmento); */

//indexOf te dice la posicion de un elemento pasado por parametro, si no lo encuentra retorna -1
/* const productos = ["Camisa", "Zapato", "Pantalon", "Gorra"];

console.log(productos.indexOf("Pantalon")); */

/* const productos = ["Camisa", "Zapato", "Pantalon", "Gorra"];
let producto = prompt("Ingrese el producto a buscar");

alert(productos.includes(producto)); */
/* const productos = ["Camisa", "Zapato", "Pantalon", "Gorra"];
productos.reverse();
console.log(productos); */

/* const productos = ["Camisa", "Zapato", "Pantalon", "Gorra"];

const eliminar = (nombre) => {
  let posicion = productos.indexOf(nombre);

  if(posicion != -1){
    productos.splice(posicion, 1);
  }
}

let producto = prompt("Ingrese el producto para eliminarlo");
eliminar(producto);
console.log(productos); */

/* const productos = [
  {nombre: "camisa", precio: 1001},
  {nombre: "pantalon", precio: 1200},
  {nombre: "gorra", precio: 1500},
  {nombre: "correa", precio: 2000}
];

for(const producto of productos){
  console.log(producto.nombre);
} */

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

const listaProductos = [];

const ventaManual = (producto) => {
  console.log(listaProductos);
  console.log(producto);
  // listaProductos debe ser un arreglo de la forma ["camisa", "pantalon", "gorra", ...]
  let indexProducto = listaProductos.indexOf(producto);
  let productoEncontrado = listaProductos[indexProducto];
  productoEncontrado.vender();
}

listaProductos.push(new Producto("camisa", 1000));
listaProductos.push(new Producto("pantalon", 1500));
listaProductos.push(new Producto("gorra", 1700));
listaProductos.push(new Producto("correa", 2000));

let nombreProducto = prompt("Ingrese el producto a vender")
ventaManual(nombreProducto) */

/* const suma = (x, y) => x + y;

console.log(suma(4,5)); */

/* function mayorQue(n){
  return m => m > n;
}

let mayorQueCinco = mayorQue(5);
console.log(mayorQueCinco(3)); */

/* function operaciones(operacion){
  if(operacion === "suma"){
    return (x, y) => x + y;
  }

  if(operacion === "resta"){
    return (x, y) => x - y;
  }

  if(operacion === "multiplicacion"){
    return (x, y) => x * y;
  }

  if(operacion === "division"){
    return (x, y) => x / y;
  }
}

let suma = operaciones("suma");
let multiplicacion = operaciones("multiplicacion");
console.log(multiplicacion(3, 4)); */

/* function iteradora(arreglo, funcion){
  for(const elemento of arreglo){
    funcion(elemento);
  }
}

iteradora([1, 2, 3, "pepito"], console.log) */

//forEach recorre cada uno  de los elementos del arreglo y realiza una operacion especificada
/* const numeros = [1, 2, 3, 4, 5, 4, 7, 6, 8, , 39, 7, 6];
numeros.forEach(elemento => console.log(elemento)); */

/* const productos = [
  { nombre: "pan", precio: 1100 },
  { nombre: "arroz", precio: 1200 },
  { nombre: "cafe", precio: 1500 },
  { nombre: "pastel", precio: 2000 },
  { nombre: "muffin", precio: 700 },
  { nombre: "mate", precio: 900 },
];

//find encuentra el primer elemento que coincida con la condicion dada
const producto = productos.find(elemento => elemento.nombre === "mate");
console.log(producto); */

/* const productos = [
  { id: 1, nombre: "pan", precio: 1100 },
  { id: 2, nombre: "arroz", precio: 1200 },
  { id: 3, nombre: "cafe", precio: 1500 },
  { id: 4, nombre: "pastel", precio: 2000 },
  { id: 5, nombre: "muffin", precio: 700 },
  { id: 6, nombre: "mate", precio: 900 },
];

let filtro = parseInt(prompt("Ingresa el precio minimo a filtrar"));
//filter encuentra todos los valores que cumplen la condicion
const productosFiltrados = productos.filter((elemento) => elemento.precio > filtro);
console.log(productosFiltrados); */

/* const productos = [
  { id: 1, nombre: "pan", precio: 1100 },
  { id: 2, nombre: "arroz", precio: 1200 },
  { id: 3, nombre: "cafe", precio: 1500 },
  { id: 4, nombre: "pastel", precio: 2000 },
  { id: 5, nombre: "muffin", precio: 700 },
  { id: 6, nombre: "mate", precio: 900 },
];

let producto = prompt("ingrese el producto a verificar su disponibilidad").toLowerCase();
let resultado = productos.some(elemento => elemento.nombre === producto);

if(resultado){
  alert("Producto disponible");
}else{
  alert("Producto no disponible");
} */

/* const productos = [
  { id: 1, nombre: "pan", precio: 1100 },
  { id: 2, nombre: "arroz", precio: 1200 },
  { id: 3, nombre: "cafe", precio: 1500 },
  { id: 4, nombre: "pastel", precio: 2000 },
  { id: 5, nombre: "muffin", precio: 700 },
  { id: 6, nombre: "mate", precio: 900 },
];

let nombres = productos.map(elemento => elemento.nombre);
console.log(nombres);

let actualizacionPrecios = productos.map(elemento => {
  return {
    id: elemento.id,
    nombre: elemento.nombre,
    precio: elemento.precio + 101
  };
});
console.log(actualizacionPrecios);
console.log(productos); */

/* const carrito = [
  { id: 1, nombre: "pan", precio: 1100 },
  { id: 2, nombre: "arroz", precio: 1200 },
  { id: 3, nombre: "cafe", precio: 1500 },
  { id: 4, nombre: "pastel", precio: 2000 },
  { id: 5, nombre: "muffin", precio: 700 },
  { id: 6, nombre: "mate", precio: 900 },
];

let total = carrito.reduce((acumulador, elemento) => acumulador + elemento.precio, 0);
console.log(total); */

/* const numeros = [1, 20, 3, 5, 70, 90, 50];

console.log(numeros.sort((a, b) => a - b));
console.log(numeros.sort((a, b) => b - a)); */

/* const items = [
  { name: "Pikachu", price: 21 },
  { name: "Charmander", price: 37 },
  { name: "Pidgey", price: 45 },
  { name: "Squirtle", price: 60 },
];

console.log(
  items.sort((a, b) => {
    if (a.name > b.name) {
      return -1;
    }
    if (a.name < b.name) {
      return 1;
    }
    // a es igual a b
    return 0;
  })
); */

/* console.log(Math.max(1,45,20,3,4, Infinity));
console.log(Math.min(1,45,20,3,4, -Infinity)); */

/* console.log(Math.ceil(3.14));
console.log(Math.floor(3.64));
console.log(Math.round(3.6));
console.log(Math.round(3.4));
console.log(Math.E);
console.log(Math.PI); */

/* console.log(Math.sqrt(9)); */
/* console.log(Math.random());
console.log(Math.random() * 50); */

/* console.log(Date()); */

/* console.log(new Date(2022, 6, 2)); */
/* const casiNavidad = new Date(2021, 11, 24, 23, 59, 59)
console.log(casiNavidad) */

/* const hoy = new Date("July 2, 2022"); */
/* console.log(hoy.getFullYear());
console.log(hoy.getMonth());
console.log(hoy.getDay()); */
/* console.log(hoy.toDateString());
console.log(hoy.toLocaleString());  
console.log(hoy.toLocaleDateString()); 
console.log(hoy.toTimeString());  */

/* const hoy = new Date("July 2, 2022");
const navidad = new Date("December 25, 2022");

console.log(navidad - hoy);

const milisegundosPorDia = 86400000;

console.log((navidad - hoy) / milisegundosPorDia); */

/* const inicio = new Date()

for (let i = 0; i < 1000; i++) {
    console.log("haciendo tiempo")
}

const final = new Date()

console.log("El proceso tardó: " + (final - inicio) + " milisegundos") */

class Producto{
  constructor(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
    this.vendido = false;
  }

  vender(){
    this.vendido = true;
  }
}

const listaProductos = [];

const ventaManual = (producto) => {
  // listaProductos debe ser un arreglo de la forma ["camisa", "pantalon", "gorra", ...]
  let productosModificados = [];
  for(const producto of listaProductos){
    productosModificados.push(producto.nombre);
  }

  let indexProducto = productosModificados.indexOf(producto);
  let productoEncontrado = listaProductos[indexProducto];
  productoEncontrado.vender();
}

listaProductos.push(new Producto("camisa", 1000));
listaProductos.push(new Producto("pantalon", 1500));
listaProductos.push(new Producto("gorra", 1700));
listaProductos.push(new Producto("correa", 2000));

let nombreProducto = prompt("Ingrese el producto a vender")
ventaManual(nombreProducto);

console.log(listaProductos);
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
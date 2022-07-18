/* 
localStorage
sessionStorage
setItem(key, value)
JSON.stringify(value)
JSON.parse(value)
getItem(key);
*/

/* const productos = [
  { id: 1, nombre: "camisa", precio: 1000 },
  { id: 2, nombre: "pantalon", precio: 1100 },
  { id: 3, nombre: "gorra", precio: 700 },
  { id: 4, nombre: "zapato", precio: 2000 },
];

localStorage.setItem("productos", JSON.stringify(productos)); */

/* function cambiarNombre(id, nombre){
  let productosStorage = JSON.parse(localStorage.getItem("productos"));
  let productoEncontrado = productosStorage.find(elemento => elemento.id === id);

  productoEncontrado.nombre = nombre;
  localStorage.setItem("productos", JSON.stringify(productosStorage));
}

let id = parseInt(prompt("Ingrese el id del elemento a modificar"));
let nombre = prompt("Ingrese el nuevo nombre");

cambiarNombre(id, nombre); */

function agregar(nombre, precio){
  let productosStorage = JSON.parse(localStorage.getItem("productos"));
  let producto = {
    id: productosStorage.length + 1,
    nombre: nombre,
    precio: precio
  };
  productosStorage.push(producto);
  localStorage.setItem("productos", JSON.stringify(productosStorage));
}

let nombre = prompt("Ingrese el nombre del nuevo producto");
let precio = prompt("Ingrese el precio del nuevo producto");

agregar(nombre, precio);
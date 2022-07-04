/* const elementos = [1, 2, "andres", true];
console.log(elementos[2]); */

/* const productos = [
  {nombre: "pan", precio: 1000},
  {nombre: "pan dulce", precio: 700},
  {nombre: "pan salado", precio: 500},
  {nombre: "ensalada", precio: 1100},
  {nombre: "jugo", precio: 1200},
  {nombre: "carne", precio: 1700},
]; */

/* let productosPedidos = [];

for(let i = 0; i < 2; i++){
  let nombre = prompt("nombre")
  let precio = prompt("precio")

  productosPedidos.push({nombre: nombre, precio: precio - 100});
} */

/* productos.forEach(el => console.log(el.nombre)); */
/* let productoBuscado = prompt("Ingrese el producto a buscar"); */

/* const producto = productos.find(el => el.nombre === productoBuscado);
let mensaje = `El producto ${producto.nombre} cuesta ${producto.precio} pesos`;
alert(mensaje); */

/* let productoBuscado = prompt("Ingrese el producto a buscar");

const productosFiltrados = productos.filter(el => el.nombre.includes(productoBuscado));
productosFiltrados.forEach(el => console.log(el)); */

/* let nombres = productos.map(el => el.nombre);
console.log(nombres);

let precios = productos.map(el => el.precio);
console.log(precios); */

/* let actualizacion = productos.map(el => {
  return {
    nombre: el.nombre,
    precio: el.precio - 101
  };
});

console.log(actualizacion); */

const servicios = {
  comidaRestaurante: [
    {},
    {},
    {},
    {}
  ],
  bebidas: [
    {},
    {},
    {}
  ]
}
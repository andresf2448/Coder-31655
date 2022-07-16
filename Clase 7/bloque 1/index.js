// localStorage.setItem("nombre", "pepito");
// localStorage.setItem("valor", "true");
// localStorage.setItem("numero", "20");

// let nombre = localStorage.getItem("nombre");
// let valor = localStorage.getItem("valor");
// let numero = localStorage.getItem("numero");
// let nombre1 = localStorage.getItem("nombre1");
// console.log(nombre);
// console.log(valor);
// console.log(numero);
// console.log(nombre1);

/* sessionStorage.setItem("nombre", "pepito");
sessionStorage.setItem("valor", "true");
sessionStorage.setItem("numero", "20"); */

// let nombre = sessionStorage.getItem("nombre");
// let valor = sessionStorage.getItem("valor");
// let numero = sessionStorage.getItem("numero");
// let nombre1 = sessionStorage.getItem("nombre1");
// console.log(nombre);
// console.log(valor);
// console.log(numero);
// console.log(nombre1);

/* localStorage.setItem("array", [1,2,3,4]);
localStorage.setItem("object", {nombre: "andres", edad: 70}); */

// let array = localStorage.getItem("array");
/* let object = localStorage.getItem("object");

console.log(typeof(object)); */
// localStorage.direccion = "AV";

/* for(let i = 0; i < localStorage.length; i++){
  let clave = localStorage.key(i);
  console.log("clave", clave);
  console.log("valor", localStorage.getItem(clave));
} */

/* let object = {name: "andres", age: 24};
localStorage.setItem("person", JSON.stringify(object));
let person = localStorage.getItem("person");
console.log(JSON.parse(person)); */

/* let array = ["nombre", 23, true];
localStorage.setItem("array", JSON.stringify(array));
let items = localStorage.getItem("array");
console.log(JSON.parse(items)); */
/* const guardarStorage = (clave, valor) => {localStorage.setItem(clave, valor)}

const productos = [
  { id: 1, nombre: "camisa", precio: 1000 },
  { id: 2, nombre: "zapato", precio: 1100 },
  { id: 3, nombre: "pantalon", precio: 1500 },
  { id: 4, nombre: "gorra", precio: 800 },
];

for(const producto of productos){
  guardarStorage(producto.id, JSON.stringify(producto));
}

localStorage.setItem("productos", JSON.stringify(productos)) */

let user;
let userStorage = sessionStorage.getItem("usuario");

if(userStorage){
  user = userStorage;
  let response = `Bienvenido ${user}`;
  alert(response);
}else{
  user = prompt("Ingrese su nombre");
  sessionStorage.setItem("usuario", user);
}
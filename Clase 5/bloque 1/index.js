/* let div = document.getElementById("container");
console.log(div.innerHTML);
console.log(div.innerText); */

/* let parrafo = document.getElementById("parrafo");
console.log(parrafo.innerHTML);
console.log(parrafo.innerText); */

/* let perritos = document.getElementsByClassName("perritos");
console.log(perritos[0].innerHTML);
console.log(perritos[1].innerHTML);
console.log(perritos[2].innerHTML); */

/* let divs = document.getElementsByTagName("div");
console.log(divs[0].innerHTML);
console.log(divs[1].innerHTML);
console.log(divs[2].innerHTML); */

/* let perritos = document.getElementsByClassName("perritos");

for(const perrito of perritos){
  console.log(perrito.innerHTML);
} */

/* let saludo = document.getElementById("saludo");
let seccion = prompt("Ingrese el nombre de la seccion");

if(seccion === "carrito"){
  saludo.innerHTML = "<h1>seccion del carrito</h1>";
}else if(seccion === "favoritos"){
  saludo.innerHTML = "<h1>seccion de favoritos</h1>";
}else{
  saludo.innerHTML = "<h1>Hola Bienvenido</h1>";
} */

/* let saludo = document.getElementById("saludo");

let color = prompt("Ingrese un color");

if(color === "amarillo"){
  saludo.className = "amarillo";
}else if(color === "verde"){
  saludo.className = "verde";
}else{
  saludo.className = "azul";
} */

/* // pasos para la creación e implementación de un nodo
//1 creación
let container = document.getElementById("container");
let saludo = document.createElement("div");

//2 asignación de contenido
saludo.innerHTML = "<h2>Hola a todos</h2>";

//3 asignarle un padre
container.append(saludo); */

//quitar nodos de nuestra página
/* let saludo = document.getElementById("saludo");
saludo.remove(); */

/* let perritos = document.getElementsByClassName("perritos");
perritos[1].remove(); */

/* let container = document.getElementById("productos");
let producto = prompt("Ingrese el nombre del producto");
let listProducts = ["camisa", "zapato", "gorra"];
listProducts.push(producto);

for(const producto of listProducts){
  let li = document.createElement("li");
  li.innerHTML = producto;
  container.append(li);
} */

/* let container = document.getElementById("container");
let listProducts = [
  { id: 1, nombre: "gorra", precio: 1200},
  { id: 2, nombre: "camisa", precio: 1300 },
  { id: 3, nombre: "pantalon", precio: 1700 },
  { id: 4, nombre: "zapato", precio: 700 },
  { id: 4, nombre: "zapato", precio: 700 },
  { id: 4, nombre: "zapato", precio: 700 },
  { id: 4, nombre: "zapato", precio: 700 },
  { id: 4, nombre: "zapato", precio: 700 },
  { id: 4, nombre: "zapato", precio: 700 },
];

for(const producto of listProducts){
  let item = document.createElement("div");
  item.innerHTML = `<h2>ID: ${producto.id}</h2>
                    <p>Producto: ${producto.nombre}</p>
                    <b>$${producto.precio}</b>
                   `;

  container.append(item);
} */

/* let contenedor = document.querySelector("#contenedor");
let parrafo = document.querySelector("#contenedor p");
let texto = document.querySelector(".texto"); */

/* let perritos = document.querySelectorAll(".perritos");
console.log(perritos[0].innerHTML);
console.log(perritos[1].innerHTML);
console.log(perritos[2].innerHTML);
console.log(perritos[3].innerHTML); */

/* let divs = document.getElementsByTagName("div");
let div = divs[0];

div.className = "color1";
div.classList= "color2";
console.log(div); */
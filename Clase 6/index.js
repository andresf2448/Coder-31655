/* estructura del if
if(condicion){
  codigo a ejecutar cuando la condicion es verdadera
}

if(condicion){
  codigo a ejecutar cuando la condicion es verdadera
}else{
  codigo que se ejecuta en caso de que la condicion no sea verdadera
}

if(condicion){
  codigo a ejecutar cuando la condicion es verdadera
}else if(condicion1){
  codigo que se ejecuta en caso de que la condicion1 sea verdadera
}else if(condicion 2){
  codigo que se ejecuta en caso de que la condicion2 sea verdadera
}else{
  codigo que se ejecuta en caso de que ninguna de las condiciones anteriores sea verdadera
}
*/
/* let nombre = prompt("Ingrese un nombre");

if(nombre === "camila"){
  console.log("hola camila");
}else if(nombre === "andres"){
  console.log("Hola andres");
}else{
  console.log("hola desconocido");
} */

/* 
estructura del for
for(desde; hasta; actualizacion){
  codigo a repetir
}
*/

/* for (let index = 0; index < 5; index++) {
  let indicador = false;
  for(let i = 0; i < 20; i++){
    console.log("segundo bucle");
    if(i === 2){
      indicador = true;
      break;
    }
  }

  if(indicador){
    break;
  }

  console.log("primer bucle");
} */

/* 
estructura del while
while(condicion){
  codigo a repetir siempre y cuando la condicion sea verdadera
}
*/

/* let data = prompt("Ingrese la data");

while(data != "salir"){
  alert("vuelve a intentar");
  data = prompt("Ingrese la data");
}

alert("proceso finalizado"); */

/* 
funciones
console.log(nombreFuncion())

function nombreFuncion(par1, par2, ..., parn){
  codigo a ejecutar
}

const nombreFuncion = (par1, par2, ..., parn) => {
  codigo de la funcion
}

nombreFuncion(arg1, arg2, ..., argn);
*/

/* const eliminarElemento = (arreglo, posicion) => {
  codigo para eleminar elemento del arreglo en la posicion dada
} */

/* function Persona(nombre, edad){
  this.nombre = nombre;
  this.edad = edad;
  this.caminar = function(){ console.log("estoy caminando"); }
}

class Persona{
  constructor(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
  }

  caminar(){
    console.log("estoy caminando");
  }
} */

/* class Persona{
  constructor(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
  }

  caminar(){
    console.log(`yo ${this.nombre} estoy caminando`);
  }
} */

/* const persona1 = new Persona("mariana", 45);
const persona2 = new Persona("jaime", 50);

persona1.caminar();
persona2.caminar(); */
/* let personas = [];

for (let index = 0; index < 5; index++) {
  let nombre = prompt("ingrese el nombre del usuario");
  let edad = prompt("ingrese la edad del usuario");

  let persona = new Persona(nombre, edad);
  personas.push(persona);
} */
/* find, filter y map */
/* let array = [{nombre: "mari",edad: 10}, {nombre: "cami", edad: 20}, {nombre: "juan", edad: 50}];
let nombre = array.find(elemento => elemento.nombre === "juan");
console.log(nombre); */

/* let array = [{nombre: "mari",edad: 10}, {nombre: "cami", edad: 20}, {nombre: "juan", edad: 50}];

let filtrados = array.filter(elemento => elemento.edad > 19);
console.log(filtrados);
let nombres = array.map(elemento => elemento.nombre);
console.log(nombres); */

/* 
Storage

localStorage
setItem("nombre", "andres") para guardar en localStorage
getItem("nombre") para recuperar de localStorage
JSON.stringify  para convertir a formato json
JSON.parse  Convierte de json al objeto en cuestion en nuestro codigo
*/

let miFormulario = document.getElementById("formulario");
miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e) {
  e.preventDefault();

  console.log(e.target);
  console.log(e.target.children);
}

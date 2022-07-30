/* 
setTimeout(fn, time)
*/
/* console.log("Iniciando");

setTimeout(() => {
  console.log("Intermedio");
}, 5000);

console.log("Finalizando"); */

/* const boton = document.getElementById("boton");
const saludo = document.getElementById("saludo");

boton.addEventListener("click", () => {
  saludo.classList.add('rojo');

  setTimeout(() => {
    saludo.classList.remove('rojo');
  }, 5000);
}); */

/* for(let letra of "hola"){
  setTimeout(() => {
    console.log(letra);
  },1000);
}

for(let letra of "mundo"){
  setTimeout(() => {
    console.log(letra);
  },3000);
} */

/* console.log("Iniciando");

setTimeout(() => {
  console.log("Intermedio");
}, 0);

console.log("Finalizando"); */

/* function multiply (x, y) {    
  return x * y;
}

function printSquare (x) {    
  let s = multiply(x, x);    
  console.log(s);
}

printSquare(5);
 */

/* setInterval(() => {
  console.log("ejecutando");
}, 500);
 */
/* let counter = 0;

const interval = setInterval(() => {
    counter++;
    console.log("Counter: ", counter);

    if (counter >= 5) {
        clearInterval(interval);
        console.log("Se removió el intervalo");
    }
}, 1000) */

/* console.log("Inicio");

const fin = setTimeout(() => {
    console.log("fin");
}, 2000)

clearTimeout(fin); */

//PROMESAS

/* 
estructura de una promesa
new Promise((resolve, reject) => {
  cuerpo de la promesa
}); 
*/

/* const evento = (value) => {
  return new Promise((resolve, reject) => {
    // if(value === true){
    //   resolve("Promesa resuelta");
    // }else{
    //   reject("Promesa rechazada");
    // }

    setTimeout(() => {
      value === true ? resolve([{nombre: "andres", edad: 50}, {nombre: "Mati", edad: 20}]) : reject("conexion con el servidor rechazada");
    }, 3000);
  });
}

evento(false)
.then(response => console.log(response))
.catch(error => {
  console.log("cuidado error revisar urgente", error);
})
.finally(() => {
  console.log("Proceso finalizado");
}); */

//datos y peticion al servidor
/* const BD = [
  { id: 1, nombre: "camisa", precio: 1000 },
  { id: 2, nombre: "zapato", precio: 1000 },
  { id: 3, nombre: "gorra", precio: 1000 },
  { id: 4, nombre: "pantalon", precio: 1000 },
];

const conseguirInfo = () => {
  return new Promise((resolve, recject) => {
    const producto = BD.find(el => el.id === 1);
    setTimeout(() => {
      resolve(producto);
    }, 3000);
  });
}

conseguirInfo()
.then(response => {
  console.log(response);
})
.catch(error => console.log(error)); */
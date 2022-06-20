/* 
if(condiciones){
  codigo a ejecutar
}else if (otra condicion){
  codigo a ejecutar
}else{
  codicion a ejecutar
}
*/

/* let nombre = "Rocioo";

if(nombre === "Rocio"){
  console.log("Hola Rocio");
}else{
  console.log("No sé quien eres.");
} */

//true o false
/* let nombre = "Rocioo";
let valor = nombre === "Rocioo";

if(valor){
  console.log("hola");
}else{
  console.log("chao");
} */

/* let valor = 500;

if(valor <= 100){
  console.log("tienes menos o igual a 100");
}else if(valor < 500){
  console.log("tienes menos de 500 y más de 100");
}else if(valor < 900){
  console.log("tienes menos de 900");
}else{
  console.log("tienes más de 900");
} */

/* let numero = 10;
let valor = numero === 10;
console.log(valor); */
/* let i = 0;

while(i < 10){
  console.log("hola ", i);
  i++;
}

console.log("terminamos proceso"); */

/* 
for(let i = 1; i < 100; i++){
  codigo que se repite o se ejecuta en cada iteracion
}
*/

/* for(let i = 0; i < 100; i++){
  if(i === 20){
    break;
  }

  console.log(i);
}

console.log("Terminamos proceso"); */

/* for(let i = 0; i < 100; i++){
  if(no tener covid){
    continue;
  }

  console.log(i);
}

console.log("Terminamos proceso"); */

/* 
while(condicion){
  codigo
}
*/
/* let numero = 0;

while(numero < 100){
  console.log(numero);
  numero++;
}

do{
  console.log(numero);
  numero++;
}while(numero < 100); */

/* let i = 0;

while(i < 100){
  console.log(i);
  i++;
} */
let nombre = "asdf";

switch(nombre){
  case "ana":
    console.log("hola Ana");
    break;

  case "andres":
    console.log("Hola andres");
    break;
  
  default:
    console.log("Quién eres?");
    break;
}
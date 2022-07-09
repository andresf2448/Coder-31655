/* let boton = document.getElementById("btnPrincipal"); */

// boton.addEventListener("mousedown", () => console.log("mousedown"));
// boton.addEventListener("mouseup", () => console.log("mouseup"));
// boton.addEventListener("mouseover", () => console.log("mouseover"));
// boton.addEventListener("mouseout", () => console.log("mouseout"));
// boton.addEventListener("mousemove", () => console.log("mousemove"));
// boton.addEventListener("click", () => console.log("click"));
// boton.addEventListener("dblclick", () => console.log("dblclick"));

/* let saludo = document.getElementById("saludo");

boton.addEventListener("mouseover", () => {
  saludo.className = "amarillo";
});
boton.addEventListener("mousedown", () => {
  saludo.className = "verde";
});
boton.addEventListener("click", () => {
  saludo.className = "azul";
}); */
/* 
let nombre = document.getElementById("nombre");
let saludo = document.getElementById("saludo"); */
// nombre.addEventListener("keydown", () => console.log("KeyDown"));
// nombre.addEventListener("keyup", () => console.log("KeyUp"));
/* nombre.addEventListener("keyup", (e) => {
  if(e.key === "a"){
    saludo.className = "amarillo";
  }

  if(e.key === "s"){
    saludo.className = "verde";
  }

  if(e.key === "d"){
    saludo.className = "azul";
  }
}); */
/* let saludo = document.getElementById("saludo");
let nombre = document.getElementById("nombre");
// nombre.addEventListener("change", () => console.log("change"));
nombre.addEventListener("input", () => {
  if(nombre.value.length === 5){
    saludo.className = "amarillo";
  }
}); */

let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  let info = e.target;
  /* console.log(info.children[0].value);
  console.log(info.children[1].value); */
  if(info.children[0].value.includes("@") && info.children[0].value.includes(".")){
    alert("formulario enviado");
  }else{
    let info = document.createElement("h1");
    info.className = "rojo";
    info.innerHTML = "Correo erroneo"
    document.body.append(info);
  }  
});

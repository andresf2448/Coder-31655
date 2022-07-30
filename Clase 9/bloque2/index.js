//estructura del fetch
// fetch(url, config);

/* fetch("https://jsonplaceholder.typicode.com/posts")
.then(response => response.json())
.then(data => {
  console.log(data[0].title);
  console.log(data[0].body);
}); */

/* const lista = document.getElementById("lista");

fetch("https://jsonplaceholder.typicode.com/posts")
.then(response => response.json())
.then(publicaciones => {
  publicaciones.forEach(publicacion => {
    const li = document.createElement("li");
    li.innerHTML = `
      <h2>${publicacion.title}</h2>
      <p>${publicacion.body}</p>
    `;

    lista.append(li);
  });
}); */

/* fetch("https://jsonplaceholder.typicode.com/posts", {
  method: 'POST',
  body: JSON.stringify({
    title: "Probando",
    body: 'Mirando las peticiones de creacion',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
.then(response => response.json())
.then(data => console.log(data)); */

/* const lista = document.getElementById("lista");

fetch("./data.json")
.then(response => response.json())
.then(productos => {
  productos.forEach(producto => {
    const li = document.createElement("li");
    li.innerHTML = `
      <h2>${producto.nombre}</h2>
      <p>${producto.precio}</p>
      <p>codigo: ${producto.id}</p>
      <hr/>
    `;

    lista.append(li);
  });
}); */

const lista = document.getElementById("lista");
const pedirDatos = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  data.forEach((element) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <h4>${element.title}</h4>
      <p>${element.body}</p>
    `;

    lista.append(li);
  });
};

pedirDatos();

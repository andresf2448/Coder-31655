let boton = document.getElementById("btn");

/* boton.addEventListener("click", () => {
  Swal.fire({
    title: "Error!",
    text: "No se pudo guardar el elemento",
    icon: "error",
    confirmButtonText: "ok",
  });
}); */

/* boton.addEventListener("click", () => {
  Swal.fire({
    title: "Genial!",
    text: "Producto agregado exitosamente",
    icon: "success",
    confirmButtonText: "Cool",
  });
}); */

/* boton.addEventListener("click", () => {
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Your work has been saved",
    showConfirmButton: true,
    timer: 5000,
  });
}); */

/* boton.addEventListener("click", () => {
  Swal.fire({
    title: "Sweet!",
    text: "Modal with a custom image.",
    imageUrl: "https://unsplash.it/400/200",
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: "Custom image",
  });
}); */

boton.addEventListener("click", () => {
  Swal.fire({
    ltite: "Está seguro de agregar el producto?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Sí, seguro",
    cancelButtonText: "No, no quiero",
  }).then((result) => {
    if (result.isConfirmed) {
      // let carrito = JSON.parse(localStorage.getItem("carrito"));
      // carrito.push(producto);
      // localStorage.setItem("carrito", JSON.stringify(carrito));


      Swal.fire({
        title: "Agregado!",
        icon: "success",
        text: "El archivo ha sido borrado",
      });
    }
  });
});

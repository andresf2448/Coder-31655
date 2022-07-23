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

/* boton.addEventListener("click", () => {
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
        background: "red"
      });
    }
  });
}); */

/* boton.addEventListener("click", () => {
  Toastify({
    text: "Probando toast!",
    duration: 3000,
  }).showToast();
}); */

/* boton.addEventListener("click", () => {
  Toastify({
    text: "Probando toast!",
    duration: 3000,
    style: {
      background: "linear-gradient(to left, #00b09b, #96c92d)",
    },
  }).showToast();
}); */

/* boton.addEventListener("click", () => {
  Toastify({
    text: "Probando toast!",
    duration: 3000,
    className: "amarillo"
  }).showToast();
}); */

/* boton.addEventListener("click", () => {
  Toastify({
    text: "Probando toast!",
    duration: 3000,
    onClick: () => {
      Toastify({
        text: "Clickeaste un Toast!",
        duration: 1500,
      }).showToast();
    },
  }).showToast();
}); */

/* boton.addEventListener("click", () => {
  Toastify({
    text: "Click aquí para ir a Coder!",
    duration: 3000,
    destination: "https://www.coderhouse.com",
  }).showToast();
}); */

const DateTime = luxon.DateTime;
// const dt = DateTime.local(2022,7,23,12,53);
// console.log(dt.c);
// console.log(dt.toString());
// console.log(dt.year);
// console.log(dt.month);
// console.log(dt.second);
// console.log(dt.day);
// console.log(dt.weekday);
/* console.log(dt.zoneName);
console.log(dt.daysInMonth); */
// console.log(dt.toLocaleString());
// console.log(dt.toLocaleString(DateTime.DATE_FULL));
// console.log(dt.toLocaleString(DateTime.TIME_SIMPLE));
// console.log(dt.setLocale("en").toLocaleString(DateTime.DATE_FULL));
// console.log(dt.setLocale("es").toLocaleString(DateTime.DATE_FULL));

const dt = DateTime.now();
const Interval = luxon.Interval;

// console.log( dt.toLocaleString(DateTime.DATETIME_SHORT) )

// const suma = dt.plus({ hours: 5, minutes: 15 })
// console.log(suma.toLocaleString(DateTime.DATETIME_SHORT))

// const resta = dt.minus({ month: 2, days: 10 })
// console.log(resta.toLocaleString(DateTime.DATETIME_SHORT))

/* const now = DateTime.now();
const later = DateTime.local(2022, 11, 25);
const i = Interval.fromDateTimes(now, later);

console.log(i.length('days'));
console.log(i.length('hours'));
console.log(i.length('minutes')); */

Swal.fire({
  title: 'Submit your Github username',
  input: 'text',
  inputAttributes: {
    autocapitalize: 'off'
  },
  showCancelButton: true,
  confirmButtonText: 'Look up',
  allowOutsideClick: () => !Swal.isLoading()
}).then((result) => {
  if (result.isConfirmed) {
    console.log(result.value);
  }
})
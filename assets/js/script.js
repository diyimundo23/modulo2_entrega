let contador = 0;

const badgeCarrito = document.getElementById('contadorCarrito');

function agregarAlCarrito() {
    contador++;
    badgeCarrito.textContent = contador;
    localStorage.setItem("carritoCount", contador);
}

function limpiarCarrito() {
    contador = 0;
    badgeCarrito.textContent = 0;
    localStorage.setItem("carritoCount", 0);
}

document.addEventListener("DOMContentLoaded", () => {
    const guardado = localStorage.getItem("carritoCount");
    if (guardado) {
        contador = Number(guardado);
        badgeCarrito.textContent = contador;
    }
});

// Array para almacenar los amigos.
let amigos = [];

// Función para añadir un amigo a la lista
function agregarAmigo() {
    // Capturar el valor del campo de entrada
    const inputAmigo = document.getElementById("amigo");
    const nombre = inputAmigo.value.trim(); // Eliminar espacios en blanco al inicio y al final

    // Validar la entrada
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Actualizar el array de amigos
    amigos.push(nombre);

    // Actualizar la lista en el DOM
    actualizarListaAmigos();

    // Limpiar el campo de entrada
    inputAmigo.value = "";
}
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

// Función para actualizar la lista de amigos en el DOM
function actualizarListaAmigos() {
    // Obtener el elemento de la lista en el DOM
    const listaAmigos = document.getElementById("listaAmigos");
    // Limpiar la lista existente
    listaAmigos.innerHTML = ""; // Limpiar la lista actual

    // Iterar sobre el array amigos
    for (let i = 0; i < amigos.length; i++) {
       // Crear un elemento <li> para cada amigo
       const li = document.createElement("li");
       li.textContent = amigos[i];

       // Agregar el <li> a la lista
       listaAmigos.appendChild(li);
    }
}
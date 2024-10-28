document.addEventListener("DOMContentLoaded", function () {
    const botonEnviar = document.getElementById("btnEnviar");
    botonEnviar.addEventListener("click", enviarFormulario);
});

function enviarFormulario() {
    // Obtener los datos del formulario
    const id = document.getElementById("noBien").value;
    const descripcion = document.getElementById("Descripcion").value;
    const nombreDepositario = document.getElementById("Depositario").value;
    const nombreLugar = document.getElementById("Ubicacion").value;
    const etiqueta = document.getElementById("Etiqueta").value;
    const estado = document.getElementById("Estado").value;

    // Crear el objeto con los datos, siguiendo el formato del DTO
    const bienflat = {
        id: id ? parseInt(id) : null,
        descripcion: descripcion,
        estado: estado,
        etiqueta: etiqueta,
        depositario: nombreDepositario,
        ubicacion: nombreLugar
    };

    // Configuración de la petición
    fetch("http://127.0.0.1:8080/api/bienes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(bienflat)
    })
        .then(response => {
            if (response.ok) {
                return response.json(); // Si la respuesta es exitosa, convertir a JSON
            } else {
                throw new Error("Error al guardar el bien");
            }
        })
        .then(data => {
            console.log("Bien guardado exitosamente:", data);
            alert("Bien guardado exitosamente");
        })
        .catch(error => {
            console.error("Hubo un problema con la petición:", error);
            alert("Hubo un error al guardar el bien");
        });
}
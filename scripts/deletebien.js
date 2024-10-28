async function eliminarBien(id) {
    const confirmar = confirm("¿Seguro que deseas eliminar este bien?");
    if (!confirmar) return;

    try {
        const response = await fetch(`http://127.0.0.1:8080/api/bienes/${id}`,
            {
                method: 'DELETE'
            });
        if (response.ok) {
            alert("Bien eliminado exitosamente");
            //document.querySelector(`tr[data-id='${id}']`).remove(); // Elimina la fila de la tabla
        } else {
            alert("Error al eliminar el bien");
        }
    } catch (error) {
        console.error("Error al eliminar:", error);
    }
}
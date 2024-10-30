async function llamarAPI() {
    try {
        const responce = await fetch("http://127.0.0.1:8080/api/bienes")
        if (!responce.ok) { throw new Error("No se encontraron los datos"); }
        const data = await responce.json();
        data.forEach(element => {
            addbbienrow(element);
        });
    } catch (error) {
        console.log(error);
    }
}

llamarAPI();

function addbbienrow(bien) {
    const tablaBody = document.getElementById('Data_body_data');
    const addrow = tablaBody.insertRow();

    const celdaId = addrow.insertCell(0);
    const celdaDescripcion = addrow.insertCell(1);
    const celdaDepositario = addrow.insertCell(2);
    const celdaEstado = addrow.insertCell(3);
    const celdaEtiqueta = addrow.insertCell(4);
    const celdaUbicacion = addrow.insertCell(5);
    const celdaAcciones = addrow.insertCell(6);

    celdaDepositario.classList.add("hidden-column");
    celdaEtiqueta.classList.add("hidden-column");
    // Añadir contenido a las celdas
    celdaId.textContent = bien.id;
    celdaDescripcion.textContent = bien.descripcion;
    celdaDepositario.textContent = bien.depositario.nombre;
    celdaUbicacion.textContent = bien.ubicacion.lugar;
    celdaEtiqueta.textContent = bien.etiqueta;
    celdaEstado.textContent = bien.estado;
    celdaAcciones.innerHTML = `
                        <div class="row">
                            <a class="col" href="" onclick="eliminarBien(${bien.id})"><i class="bi bi-trash3"></i></a>
                            <a class="col" href="/updateform.html?id=${bien.id}"><i class="bi bi-pencil"></i></a>
                        </div>
    `;

}
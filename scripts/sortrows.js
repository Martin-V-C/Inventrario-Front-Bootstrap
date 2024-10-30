function ordenarTabla(columna) {
    const tabla = document.getElementById("tabla_bienes");
    let filas = Array.from(tabla.rows).slice(1); // Excluye el encabezado

    // Alterna entre ordenar ascendente y descendente
    let ordenAscendente = tabla.getAttribute("data-orden") === "asc";
    tabla.setAttribute("data-orden", ordenAscendente ? "desc" : "asc");

    filas.sort((a, b) => {
        const valorA = a.cells[columna].innerText;
        const valorB = b.cells[columna].innerText;
        return ordenAscendente
            ? valorA.localeCompare(valorB, undefined, { numeric: true })
            : valorB.localeCompare(valorA, undefined, { numeric: true });
    });

    // Reconstruye el tbody con las filas ordenadas
    const tbody = tabla.querySelector("tbody");
    tbody.innerHTML = "";
    filas.forEach(fila => tbody.appendChild(fila));
}
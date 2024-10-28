async function getUbicaciones() {
    try {
        const responce = await fetch("http://127.0.0.1:8080/api/ubicaciones")
        if (!responce.ok) { throw new Error("No se encontraron los datos"); }
        const data = await responce.json();
        const selectUbi = document.getElementById("Ubicacion");
        data.forEach(ubicacion => {
            const option = document.createElement("option");
            option.value = ubicacion.lugar;
            option.textContent = ubicacion.lugar;
            selectUbi.appendChild(option);
        });
    } catch (error) {
        console.log(error);
    }
}

getUbicaciones();
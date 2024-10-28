async function getDepositarios() {
    try {
        const responce = await fetch("http://127.0.0.1:8080/api/depositarios")
        if (!responce.ok) { throw new Error("No se encontraron los datos"); }
        const data = await responce.json();
        const selectDep = document.getElementById("Depositario");
        data.forEach(depositario => {
            const option = document.createElement("option");
            option.value = depositario.nombre;
            option.textContent = depositario.nombre;
            selectDep.appendChild(option);
        });
    } catch (error) {
        console.log(error);
    }
}

getDepositarios();
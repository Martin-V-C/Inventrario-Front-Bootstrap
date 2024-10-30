//funcion que llena los selects con los depositarios de la base de datos

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

//funcion que llena los selects con las ubicaciones de la base de datos
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

//funciones que llenan los datos del del formulario
const params = new URLSearchParams(window.location.search);
const id = params.get('id');

async function obtenerDatosBien() {
    try {
        const responce = await fetch("http://127.0.0.1:8080/api/bien/"+id)
        if (!responce.ok) { throw new Error("No se encontraron los datos"); }
        const data = await responce.json();  
        console.log(data);
            llenarformulario(data);
            verificarRol(data);
    } catch (error) {
        console.log(error);
    }
}
//funcion para rellenar los datos de bien a modificar
function llenarformulario(bien){
document.getElementById("noBien").value= bien.id;
document.getElementById("Descripcion").value= bien.descripcion;
document.getElementById('Depositario').value = bien.depositario.nombre;  // depositarioId debe coincidir con el valor en las opciones
        
document.getElementById("Ubicacion").value=bien.ubicacion.lugar;
document.getElementById("Etiqueta").value=bien.etiqueta;
document.getElementById("Estado").value=bien.estado;
}
//funcion para habilitar o desabilitar el cambio de depositario en funcion del rol
//esta funcion debe de obtener el rol del depositario, pero aun debdo de hacer la aprte de sesion 

function verificarRol(bien) { 
    const selectdepo = document.getElementById("Depositario")   ;
    if (bien.depositario.rol.tipo =="admin")    {
        selectdepo.removeAttribute("disabled");    
}
}




getDepositarios().then(()=>getUbicaciones().then(()=>obtenerDatosBien()));
//getUbicaciones();

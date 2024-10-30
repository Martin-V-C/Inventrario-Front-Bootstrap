const params = new URLSearchParams(window.location.search);
const id = params.get('id');

console.log(id);

async function obtenerDatosBien() {
    try {
        const responce = await fetch("http://127.0.0.1:8080/api/bien/"+id)
        if (!responce.ok) { throw new Error("No se encontraron los datos"); }
        const data = await responce.json();  
        console.log(data);
            llenarformulario(data);
    } catch (error) {
        console.log(error);
    }
}

obtenerDatosBien();

function llenarformulario(bien){
document.getElementById("noBien").value= bien.id;
document.getElementById("Descripcion").value= bien.descripcion;
//document.getElementById("Depositario").value=bien.depositario.nombre;
document.getElementById('Depositario').value = bien.depositario.nombre;  // depositarioId debe coincidir con el valor en las opciones
        
document.getElementById("Ubicacion").value=bien.ubicacion.lugar;
document.getElementById("Etiqueta").value=bien.etiqueta;
document.getElementById("Estado").value=bien.estado;

}
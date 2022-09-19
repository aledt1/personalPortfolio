let btnCalcular = document.getElementById("btnCalcular");

// funcion para calcular el costo del servicio donde se incluye las horas de trabajo, el costo por hora, los servicios adicionales y el IVA
function cotizacion(ho,hc,iva,serv) {
    let costoHoras = ho*hc;
    let i = 0;
    while (i < serv.options.length) {
        if (serv.options[i].selected){
            costoHoras += parseFloat(serv.options[i].value);
        }
        i++
    }
    if (iva){
        costoHoras *= 1.16;
    }
    return costoHoras;
}
//evento para validar campos y mostrar resultado en pantalla
btnCalcular.addEventListener("click", function(event){ 
    event.preventDefault();
    let nombre = document.getElementById("campoNombre").value;
    let correo = document.getElementById("campoCorreo").value;
    let horas = parseInt(document.getElementById("campoHora").value);
    let hcosto = parseFloat(document.getElementById("campoCosto").value);
    let servicios = document.getElementById("campoServicios");
    let fecha = document.getElementById("campoFecha").value
    let iva = document.getElementById("campoIva").checked;
    let camposTxt = document.getElementById("camposTexto");
    let campoTotal = document.getElementById("campoCostoFinal");


    camposTxt.innerHTML = `Fecha de cotización: ${fecha} <br/>Nombre del solicitante: ${nombre}, <br/>Correo: ${correo}, <br/>Servicios adicionales: ${servicios}`;
    campoTotal.innerHTML = `<strong>Precio total: </strong>$${cotizacion(horas, hcosto, iva, servicios).toFixed(2)}`;
})

//Evento para imprimir el resumen de la cotización
let btnImprimir = document.getElementById("btnImprimir");
btnImprimir.addEventListener("click", function(print){
    print.preventDefault();
    window.print();
});

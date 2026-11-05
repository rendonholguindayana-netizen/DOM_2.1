
function calcularPresupuesto(){

    let invitados = Number(document.getElementById("numero-inv").value);
    let comida = Number(document.getElementById("cost-comida").value);
    let bebida = Number(document.getElementById("cost-bebida").value);
    let decoracion = Number(document.getElementById("cost-decor").value);
    let musica = Number(document.getElementById("cost-musica").value);
    let porcentaje = Number(document.getElementById("propina-porc").value);


    let comidaTotal = invitados * comida;

    let bebidaTotal = invitados * bebida;

    let subtotal = comidaTotal + bebidaTotal + decoracion + musica;

    let propina = subtotal * (porcentaje / 100);

    let totalGeneral = subtotal + propina;

    let costoInvitado = totalGeneral / invitados;

    if(invitados<=0){
        alert("Ingrese un número de invitados válidos");return;};

    if(comida<0 || bebida<0 || decoracion<0 || musica<0 || porcentaje<0){
        alert("Por favor, ingrese valores válidos en todos los campos");return;};

    let filas = document.querySelectorAll("tbody tr");

    filas[0].children[1].textContent = comidaTotal.toLocaleString("es-CO");
    filas[1].children[1].textContent = bebidaTotal.toLocaleString("es-CO");
    filas[2].children[1].textContent = decoracion.toLocaleString("es-CO");
    filas[3].children[1].textContent = musica.toLocaleString("es-CO");
    filas[4].children[1].textContent = subtotal.toLocaleString("es-CO");
    filas[5].children[1].textContent = propina.toLocaleString("es-CO");
    filas[6].children[1].textContent = totalGeneral.toLocaleString("es-CO");
    filas[7].children[1].textContent = costoInvitado.toLocaleString("es-CO");

}

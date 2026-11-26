function conectarBoton(idBoton, idInstrucciones) {
    const boton = document.getElementById(idBoton);
    const instrucciones = document.getElementById(idInstrucciones);

    boton.addEventListener("click", function () {
        instrucciones.hidden = !instrucciones.hidden;

        if (instrucciones.hidden) {
            boton.textContent = "Cómo se juega";
        } else {
            boton.textContent = "Ocultar instrucciones";
        }
    });
}

conectarBoton("botonScratch", "instruccionesScratch");
conectarBoton("botonRPG", "instruccionesRPG");
conectarBoton("botonGodot", "instruccionesGodot");
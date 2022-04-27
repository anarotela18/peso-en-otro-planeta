function calcularPeso() {
    var peso_usuario = document.getElementById("peso").value;
    if (peso_usuario == "") {
        swal({
            type: 'error',
            title: 'Error',
            text: 'Debe ingresar su peso'
        })
    } else {
        const PESO_TIERRA = 9.8;
        // Calcular peso en el planeta Mercurio
        calcular_peso_mercurio = parseInt(peso_usuario * 3.7 / PESO_TIERRA);
        document.getElementById("mercurio").value = calcular_peso_mercurio + " kg";

        // Calcular peso en el planeta Venus
        calcular_peso_venus = parseInt(peso_usuario * 8.87 / PESO_TIERRA);
        document.getElementById("venus").value = calcular_peso_venus + " kg";

        // Calcular peso en el planeta Luna
        calcular_peso_luna = parseInt(peso_usuario * 1.62 / PESO_TIERRA);
        document.getElementById("luna").value = calcular_peso_luna + " kg";

        // Calcular peso en el planeta Marte
        calcular_peso_marte = parseInt(peso_usuario * 3.71 / PESO_TIERRA);
        document.getElementById("marte").value = calcular_peso_marte + " kg";

        // Calcular peso en el planeta Jupiter
        calcular_peso_jupiter = parseInt(peso_usuario * 24.7 / PESO_TIERRA);
        document.getElementById("jupiter").value = calcular_peso_jupiter + " kg";

        // Calcular peso en el planeta Saturno
        calcular_peso_saturno = parseInt(peso_usuario * 10.44 / PESO_TIERRA);
        document.getElementById("saturno").value = calcular_peso_saturno + " kg";

        // Calcular peso en el planeta Urano
        calcular_peso_urano = parseInt(peso_usuario * 8.87 / PESO_TIERRA);
        document.getElementById("urano").value = calcular_peso_urano + " kg";

        // Calcular peso en el planeta Neptuno
        calcular_peso_neptuno = parseInt(peso_usuario * 11.15 / PESO_TIERRA);
        document.getElementById("neptuno").value = calcular_peso_neptuno + " kg";

        // Calcular peso en el planeta Pluton
        calcular_peso_pluton = parseInt(peso_usuario * 0.62 / PESO_TIERRA);
        document.getElementById("pluton").value = calcular_peso_pluton + " kg";
    }
}
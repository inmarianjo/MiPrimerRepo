"use strict";
function calcularNomina(sueldo) {
    let auxTransporte = 140606;
    let apSalud = (sueldo * 0.04);
    let apPension = (sueldo * 0.04);
    if (sueldo <= 2320000) {
        (auxTransporte = 140606);
    }
    else {
        (auxTransporte = 0);
    }
    return sueldo + auxTransporte;
}
console.log("El sueldo del empleado es de: " + (calcularNomina(2500000)));

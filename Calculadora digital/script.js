// Función para realizar las operaciones
function realizarOperaciones() {
    // Obtener los valores de los campos de entrada
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);
    var resultadosDiv = document.getElementById("resultados");
    resultadosDiv.innerHTML = ""; // Limpiar resultados anteriores

    // Realizar las operaciones en un bucle de 5 iteraciones
    for (var i = 1; i <= 5; i++) {
        var resultado;
        switch (i) {
            case 1:
                resultado = numero1 + numero2;
                resultadosDiv.innerHTML += `Operación #${i}: Suma = ${resultado}<br>`;
                break;
            case 2:
                resultado = numero1 - numero2;
                resultadosDiv.innerHTML += `Operación #${i}: Resta = ${resultado}<br>`;
                break;
            case 3:
                resultado = numero1 * numero2;
                resultadosDiv.innerHTML += `Operación #${i}: Multiplicación = ${resultado}<br>`;
                break;
            case 4:
                if (numero2 !== 0) {
                    resultado = numero1 / numero2;
                    resultadosDiv.innerHTML += `Operación #${i}: División = ${resultado}<br>`;
                } else {
                    resultadosDiv.innerHTML += `Operación #${i}: División por 0 no permitida<br>`;
                }
                break;
            case 5:
                resultado = numero1 % numero2;
                resultadosDiv.innerHTML += `Operación #${i}: Mod(%) = ${resultado}<br>`;
                break;
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const clienteForm = document.getElementById("clienteForm");
    const mensajeExito = document.getElementById("mensajeExito");

    clienteForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const apellidos = document.getElementById("apellidos").value;
        const email = document.getElementById("email").value;
        const telefono = document.getElementById("telefono").value;
        const direccion = document.getElementById("direccion").value;
        
        const cliente = { nombre, apellidos, email, telefono, direccion };

        // Agregar cliente a la lista de clientes registrados
        try {
            let clientesGuardados = JSON.parse(localStorage.getItem("clientes")) || [];
            clientesGuardados.push(cliente);
            localStorage.setItem("clientes", JSON.stringify(clientesGuardados));
        } catch (error) {
            console.error("Error al guardar cliente:", error);
        }

        limpiarFormulario();

        // Mostrar mensaje de éxito
        mostrarMensajeExito();

        // Ocultar el mensaje después de 2 segundos
        setTimeout(function () {
            ocultarMensajeExito();
        }, 2000);
    });

    function limpiarFormulario() {
        document.getElementById("nombre").value = "";
        document.getElementById("apellidos").value = "";
        document.getElementById("email").value = "";
        document.getElementById("telefono").value = "";
        document.getElementById("direccion").value = "";
    }

    function mostrarMensajeExito() {
        mensajeExito.textContent = "Cliente guardado con éxito.";
        mensajeExito.style.display = "block";
    }

    function ocultarMensajeExito() {
        mensajeExito.style.display = "none";
    }
});









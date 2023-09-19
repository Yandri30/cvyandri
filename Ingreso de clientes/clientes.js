document.addEventListener("DOMContentLoaded", function () {
    const listaClientes = document.getElementById("listaClientes");

    function mostrarClientes() {
        listaClientes.innerHTML = ""; // Limpiar la lista antes de mostrarla

        const clientesGuardados = JSON.parse(localStorage.getItem("clientes")) || [];

        if (clientesGuardados.length === 0) {
            listaClientes.innerHTML = "<p>No hay clientes registrados.</p>";
            return;
        }

        clientesGuardados.forEach((cliente, index) => {
            const clienteDiv = document.createElement("div");
            clienteDiv.classList.add("cliente-item");
            clienteDiv.innerHTML = `
                <p><strong>Cliente ${index + 1}:</strong></p>
                <p><strong>Nombres:</strong> ${cliente.nombre}</p>
                <p><strong>Apellidos:</strong> ${cliente.apellidos}</p>
                <p><strong>Email:</strong> ${cliente.email}</p>
                <p><strong>Teléfono:</strong> ${cliente.telefono}</p>
                <p><strong>Dirección:</strong> ${cliente.direccion}</p>
                <button class="borrarCliente" data-index="${index}">Borrar Cliente</button>
            `;
            listaClientes.appendChild(clienteDiv);
        });

        // Agregar evento para borrar cliente
        const botonesBorrar = document.querySelectorAll(".borrarCliente");
        botonesBorrar.forEach((boton) => {
            boton.addEventListener("click", function () {
                const indexABorrar = parseInt(boton.getAttribute("data-index"));
                borrarCliente(indexABorrar);
            });
        });
    }

    function borrarCliente(index) {
        try {
            let clientesGuardados = JSON.parse(localStorage.getItem("clientes")) || [];
            clientesGuardados.splice(index, 1);
            localStorage.setItem("clientes", JSON.stringify(clientesGuardados));
        } catch (error) {
            console.error("Error al borrar cliente:", error);
        }

        mostrarClientes();
    }

    mostrarClientes();
});


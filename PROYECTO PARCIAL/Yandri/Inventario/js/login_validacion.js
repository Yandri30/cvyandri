		// Función para validar el formulario
		function validateForm() {
			var userName = document.getElementById("userName").value;
			var password = document.getElementById("pass").value;

			// Validar que el nombre de usuario no esté vacío
			if (userName.trim() === "") {
				alert("Por favor, ingresa un nombre de usuario.");
				return false;
			}

			// Validar que la contraseña no esté vacía
			if (password.trim() === "") {
				alert("Por favor, ingresa una contraseña.");
				return false;
			}

			// Aquí puedes agregar más reglas de validación según tus necesidades

			return true;
		}
	
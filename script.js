<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario de Contacto</title>
</head>
<body>
    <h2>Formulario de Contacto</h2>
    <form action="#" method="POST" onsubmit="return validarFormulario()">
        <!-- Campo Nombre -->
        <label for="nombre">Nombre:</label><br>
        <input type="text" id="nombre" name="nombre" required><br><br>

        <!-- Campo Apellidos -->
        <label for="apellidos">Apellidos:</label><br>
        <input type="text" id="apellidos" name="apellidos" required><br><br>

        <!-- Campo Email -->
        <label for="email">Email:</label><br>
        <input type="email" id="email" name="email" required><br><br>

        <!-- Campo CIF -->
        <label for="cif">CIF:</label><br>
        <input type="text" id="cif" name="cif" pattern="[A-Za-z]{1}\d{8}" title="El CIF debe empezar con una letra seguida de 8 dígitos" required><br><br>

        <!-- Campo Teléfono -->
        <label for="telefono">Teléfono (9 dígitos):</label><br>
        <div style="display: flex; align-items: center;">
            <!-- Prefijo Internacional -->
            <select id="prefijo" name="prefijo" required>
                <option value="+34">+34 España</option>
                <option value="+1">+1 Estados Unidos</option>
                <option value="+44">+44 Reino Unido</option>
                <option value="+33">+33 Francia</option>
                <option value="+49">+49 Alemania</option>
                <!-- Puedes añadir más prefijos según lo necesites -->
            </select>

            <!-- Número de Teléfono -->
            <input type="tel" id="telefono" name="telefono" pattern="\d{9}" title="El teléfono debe tener 9 dígitos" required style="margin-left: 10px; width: 150px;">
        </div>
        <br><br>

        <!-- Campo Mensaje -->
        <label for="mensaje">Mensaje:</label><br>
        <textarea id="mensaje" name="mensaje" rows="4" cols="50" required></textarea><br><br>

        <button type="submit">Enviar</button>
    </form>

    <script>
        function validarFormulario() {
            // Validación de Nombre
            var nombre = document.getElementById("nombre").value;
            if (nombre.trim() === "") {
                alert("Por favor, ingresa tu nombre.");
                return false;
            }

            // Validación de Apellidos
            var apellidos = document.getElementById("apellidos").value;
            if (apellidos.trim() === "") {
                alert("Por favor, ingresa tus apellidos.");
                return false;
            }

            // Validación de Email
            var email = document.getElementById("email").value;
            var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|es)$/;
            if (!emailPattern.test(email)) {
                alert("El correo electrónico debe contener un '@' y terminar en .com o .es");
                return false;
            }

            // Validación de CIF
            var cif = document.getElementById("cif").value;
            var cifPattern = /^[A-Za-z]{1}\d{8}$/;
            if (!cifPattern.test(cif)) {
                alert("El CIF debe empezar con una letra seguida de 8 dígitos.");
                return false;
            }

            // Validación de Teléfono
            var telefono = document.getElementById("telefono").value;
            var telefonoPattern = /^\d{9}$/;
            if (!telefonoPattern.test(telefono)) {
                alert("El teléfono debe tener 9 dígitos.");
                return false;
            }

            // Validación del mensaje
            var mensaje = document.getElementById("mensaje").value;
            if (mensaje.trim() === "") {
                alert("Por favor, ingresa un mensaje.");
                return false;
            }

            return true; // Si todo es válido, se envía el formulario
        }
    </script>
</body>
</html>

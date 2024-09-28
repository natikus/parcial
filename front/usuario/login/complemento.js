import { login } from "./../../importante/metodos.js";

// Asignar el evento al botón de login
document.getElementById('btnLogin').addEventListener('click', async function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const contraseña = document.getElementById('contraseña').value;

    try {
        const { token, usuario, is_admin } = await login(username, contraseña);
        // Guardar en localStorage
        console.log(token, usuario);
        localStorage.setItem('token', token);
        localStorage.setItem('usuario', JSON.stringify(usuario));
        localStorage.setItem('is_admin', is_admin);
        // Redirigir al usuario
        window.location.href = '../../index.html';
    } catch (error) {
        console.error('Error durante el login:', error);
        alert('Error al iniciar sesión. Verifique sus credenciales.');
    }
});

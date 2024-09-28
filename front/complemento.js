import { getAllTareas, getYourTareas } from "./importante/metodos.js";
//no pude obtener si es admin
const userId = localStorage.getItem('id');
try {
    const tareas = await getAllTareas();
    tareas.forEach(tarea => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <h2>${tarea.nombre} </h2>
            <p><strong>Duracion:</strong> ${tarea.duracion}</p>
            <button class="btnSee" data-id="${tarea.id}">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zm-8 4.5c-2.485 0-4.5-2.015-4.5-4.5S5.515 3.5 8 3.5 12.5 5.515 12.5 8 10.485 12.5 8 12.5z"/>
                    <path d="M8 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/>
                </svg>
            </button>
        `;
        cardContainer.appendChild(card);
    });
    const buttons = document.querySelectorAll('.btnSee');
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const id = this.getAttribute('data-id');
            seePerson(id);
        });
    });
} catch {

    const tareas = await getYourTareas(userId,);
    tareas.forEach(tarea => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <h2>${tarea.nombre} </h2>
            <p><strong>Duracion:</strong> ${tarea.duracion}</p>
            <button class="btnSee" data-id="${tarea.id}">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zm-8 4.5c-2.485 0-4.5-2.015-4.5-4.5S5.515 3.5 8 3.5 12.5 5.515 12.5 8 10.485 12.5 8 12.5z"/>
                    <path d="M8 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/>
                </svg>
            </button>
        `;
        cardContainer.appendChild(card);
    });
    const buttons = document.querySelectorAll('.btnSee');
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const id = this.getAttribute('data-id');
            seePerson(id);
        });
    });

}

async function seePerson(id) {
    window.location.href = `./../ver/index.html?id=${id}`;
}



//salir 
document.getElementById('btnSalir').addEventListener('click', () => {
    // Eliminar el token de localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');

    // Redirigir al usuario a la página de inicio o login
    window.location.href = './usuario/login'; // Cambia esto según tu ruta de login
});
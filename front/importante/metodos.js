// Definir la URL base de tu API
const API_URL = "http://localhost/backend/personas"; // Asegúrate de ajustar esto según sea necesario

// Función para obtener todas las personas (GET /persona)
export async function getAllTareas() {
    try {
        const response = await fetch(`http://localhost/back/tareas`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}` // Suponiendo que el JWT está almacenado en localStorage
            }
        });
        if (!response.ok) throw new Error("Error al obtener las tareas");
        return await response.json();  // Retorna la lista de personas
    } catch (error) {
        console.error(error);
        return null;
    }
}
// Función para crear una nueva tarea
export async function createTarea(Tarea) {
    try {
        const response = await fetch(`http://localhost/back/tareas`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(Tarea)
        });
        if (!response.ok) throw new Error("Error al crear la persona");
        return await response.json();  // Retorna la nueva tarea creada
    } catch (error) {
        console.error(error);
        return null;
    }
}
// Función para obtener una persona por ID (GET /persona/:id)
export async function getPersonas(id_usuario) {
    try {
        const response = await fetch(`http://localhost/back/usuario/${id_usuario}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        });
        if (!response.ok) throw new Error("Error al obtener la tarea");
        return await response.json();  // Retorna los datos de la persona
    } catch (error) {
        console.error(error);
        return null;
    }
}

// Función para obtener una tarea por ID -
export async function getYourTareas(id_usuario, id_tareas) {
    try {
        const response = await fetch(`http://localhost/back/usuario/${id_usuario}/tareas/${id_tareas}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        });
        if (!response.ok) throw new Error("Error al obtener la persona");
        return await response.json();  // Retorna los datos de la persona
    } catch (error) {
        console.error(error);
        return null;
    }
}
// Función para actualizar una tarea del usuario
export async function updateTareas(id_usuario, id_tareas) {
    try {
        const response = await fetch(`http://localhost/back/usuario/${id_usuario}/tareas/${id_tareas}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify(personaData)
        });

        if (!response.ok) throw new Error("Error al actualizar la tarea");

        // Lee la respuesta una sola vez
        return await response.json(); // Retorna la tarea actualizada
    } catch (error) {
        console.error(error);
        return null; // Retorna null en caso de error
    }
};
export async function deleteTareaAsignada(id) {
    try {
        const response = await fetch(`http://localhost/back/usuario/${id_usuario}/tareas/asignadas/${id_tareas}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        });
        if (!response.ok) throw new Error("Error al eliminar la tarea");
        return await response.json();  // Retorna el mensaje de confirmación
    } catch (error) {
        console.error(error);
        return null;
    }
}


// Función para actualizar una persona
export async function updateTarea(id_usuario) {
    try {
        const response = await fetch(`http://localhost/back/usuario/${id_usuario}/tareas`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify(personaData)
        });

        if (!response.ok) throw new Error("Error al actualizar la persona");

        // Lee la respuesta una sola vez
        return await response.json(); // Retorna la persona actualizada
    } catch (error) {
        console.error(error);
        return null; // Retorna null en caso de error
    }
};


// Función para eliminar una persona por ID (DELETE /persona/:id)
export async function deleteTarea(id) {
    try {
        const response = await fetch(`http://localhost/back/usuario/${id_usuario}/tareas/${id_tareas}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        });
        if (!response.ok) throw new Error("Error al eliminar la tarea");
        return await response.json();  // Retorna el mensaje de confirmación
    } catch (error) {
        console.error(error);
        return null;
    }
}
export async function login(username, contraseña) {
    console.log("intantando hacer login")
    try {
        const response = await fetch('http://localhost/back/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, contraseña }),
        });

        if (response.ok) {
            const data = await response.json();
            console.log("Datos del login:", data);
            // Guardar el token JWT en el almacenamiento local o en cookies
            localStorage.setItem('token', data.token);
            localStorage.setItem('usuario', data.usuario);
            alert('Login exitoso');
            return {
                token: data.token,
                usuario: data.usuario,
                is_admin: data.is_admin,
            };
        } else {
            const errorData = await response.json();
            alert(errorData.message || 'Error en el login');
        }
    } catch (error) {
        console.error('Error al intentar hacer login:', error);
        alert('Error al intentar hacer login');
    }
};


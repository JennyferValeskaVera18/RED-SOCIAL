// Importación de funciones relacionadas con la base de datos desde el módulo "firebase.js"
import { createTask, onGetTask, updateTask, deleteTask, getTask } from "./firebase.js";

// Selección de elementos del DOM, como el formulario para crear tareas y el contenedor para mostrar las tareas.
const taskForm = document.getElementById("create-form"); // Id del form para agregar tareas
const tasksContainer = document.getElementById("tasks-container"); // Id del div que tendrá los tasks

// Variables globales: Se definen variables globales para almacenar el ID de la tarea y el estado de edición.
let id = "";
let editStatus = false;
let userGlobAL; // Variable global para almacenar el usuario actualmente autenticado.

export default function setUpTasks(user) {
    userGlobAL = user;

    onGetTask((querySnapshot) => {
        let html = '';

        querySnapshot.forEach(doc => {
            console.log("Document ID:", doc.id);
            const data = doc.data();
            console.log("Document Data:", data);
            
            const isOwner = data.userName === userGlobAL.displayName || data.userEmail === userGlobAL.email;

            const pfp = data.photoURL ? data.photoURL : "https://i.pinimg.com/564x/0d/42/90/0d42905fc5e9d14fa032d8ea0282bf68.jpg";

            // Construir el HTML para mostrar la tarea en el contenedor de tareas.
            html += `
            <div class="card mb-3" data-id="${doc.id}">
                <div class="card-body">
                    <div class="user-info">
                        <img src="${pfp}" class="profile-photo" alt="Foto de Perfil">
                        <h6 class="user-name">${data.userName}</h6>
                    </div>
                    <p class="opacity-75 fs-6 p-secondary">${data.date} ${data.time}</p>
                    <h4 class="card-title">${data.title}</h4>
                    <div class="border border-transparent shadow p-3 mb-5 bg-body rounded">
                        <p class="card-text m-1">${data.description}</p>
                    </div>
                    <div class="row">
                        ${isOwner ? `
                            <button class='btn btn-danger btn-delete-custom mx-auto col-5' data-id='${doc.id}'>🗑 Eliminar</button>
                            <button class='btn btn-info btn-edit-custom mx-auto col-5' data-id='${doc.id}'>🖉 Editar</button>
                        ` : ''}
                    </div>
                </div>
            </div>
            `;

            // Agregar la foto y el nombre del usuario al contenedor user-info-container
            const userInfoContainer = document.getElementById("user-info-container");

            // Crear la imagen de perfil
            const userImage = document.createElement("img");
            userImage.src = pfp;
            userImage.alt = "Profile";
            userImage.classList.add("profile-photo");

            // Crear el elemento para el nombre de usuario
            const userNameElement = document.createElement("h6");
            userNameElement.textContent = data.userName;
            userNameElement.classList.add("user-name");
            userNameElement.classList.add("text-white"); // Agregar la clase de Bootstrap para el texto blanco

            // Limpiar el contenido anterior antes de agregar nuevos elementos
            userInfoContainer.innerHTML = '';

            // Agregar la imagen de perfil y el nombre de usuario al contenedor
            userInfoContainer.appendChild(userImage);
            userInfoContainer.appendChild(userNameElement);
        });

        tasksContainer.innerHTML = html; //se establece el contenido HTML del contenedor de tareas (tasksContainer) con el HTML generado.

        // DELETE
        //Seleccionamos a todos los btnes de eleiminar
        const btnsDelete = document.querySelectorAll(".btn-delete-custom");
        
        /*Cuando se hace clic en uno de estos botones, se ejecutará una función.
         La función recibe un parámetro, {target: { dataset }}, que representa el elemento HTML 
         en el que se hizo clic y permite acceder a los atributos data- del elemento. */
        btnsDelete.forEach(btn => {
            btn.addEventListener("click", ({target: { dataset }}) => deleteTask(dataset.id));
        });
       
        // UPDATE
        const btnsEdit = document.querySelectorAll(".btn-edit-custom");

        btnsEdit.forEach(btn => {
            btn.addEventListener("click", async ({ target: { dataset } }) => {
                const doc = await getTask(dataset.id);
                const task = doc.data();

                // Rellenar el formulario de edición con los datos de la tarea
                const editTaskForm = document.getElementById("editTaskForm");
                editTaskForm.editedTitle.value = task.title;
                editTaskForm.editedDescription.value = task.description;

                // Abrir el modal de edición de tarea
                const editTaskModal = new bootstrap.Modal(document.getElementById('editTaskModal'));
                editTaskModal.show();

                // Manejar la actualización de la tarea
                editTaskForm.addEventListener("submit", async (e) => {
                    e.preventDefault();

                    const editedTitle = editTaskForm.editedTitle.value;
                    const editedDescription = editTaskForm.editedDescription.value;

                    await updateTask(doc.id, { title: editedTitle, description: editedDescription });

                    // Cerrar el modal después de actualizar la tarea
                    editTaskModal.hide();
                });
            });
        });


    });
};



// CREATE
taskForm.addEventListener("submit", (e) => {
    // Evitamos que recargue la pagina
    e.preventDefault();
    
    //Fecha
    const fullDate = new Date();
    const date = getFormattedDate(fullDate);
    const time = getFormattedTime(fullDate);
    
    // Obtención del nombre de usuario del usuario actualmente autenticado.
    const userName = userGlobAL.displayName;

    // Obtención del título y la descripción de la tarea del formulario.
    const title = taskForm["task-title"].value;
    const description = taskForm["task-content"].value;
    
    // Si no se está editando, se crea una nueva tarea; de lo contrario, se actualiza la tarea existente.
    if (!editStatus) {
        createTask(title, description, userName, userGlobAL.photoURL, date, time);
    }
    else {
        updateTask( id, ({
            title : title,
            description : description,
            photoURL : photoURL,
            userName: userName
        }));
        editStatus = false; // Cambio del estado de edición a falso.
        taskForm["btn-task-save"].innerHTML = "Create"; // Cambio del texto del botón de envío del formulario a "Create".
    }
    taskForm.reset();  // Restablecimiento del formulario a su estado inicial.
});

// Función para formatear la fecha en el formato "dd/mm/yyyy".
function getFormattedDate(date) {
    var year = date.getFullYear();
    var month = (1 + date.getMonth()).toString().padStart(2, '0');
    var day = date.getDate().toString().padStart(2, '0');
    
    return `${day}/${month}/${year}`;
}

// Función para formatear la hora en el formato "hh:mm".
function getFormattedTime(date) {
    var hours = date.getHours().toString().padStart(2, '0');
    var minutes = date.getMinutes().toString().padStart(2, '0');

    return `${hours}:${minutes}`;
}

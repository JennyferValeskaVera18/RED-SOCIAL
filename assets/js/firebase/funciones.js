// funciones.js
import { createTask, onGetTask, updateTask, deleteTask, getTask } from "./firebase.js";

let userGlobAL;
let editStatus = false;

export default function setUpTasks(user, tasksContainer) {
    userGlobAL = user;

    onGetTask((querySnapshot) => {
        let html = '';

        querySnapshot.forEach(doc => {
            const data = doc.data();
            const isOwner = data.userName === userGlobAL.displayName || data.userEmail === userGlobAL.email;

            html += `
                <div class="card mb-3" data-id="${doc.id}">
                    <!-- Resto del código... -->
                </div>
            `;
        });

        if (tasksContainer) {
            tasksContainer.innerHTML = html;

            // Resto del código...
        } else {
            console.error("Elemento tasks-container no encontrado en el DOM");
        }
    });

    // Resto del código...
}

document.getElementById("create-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const fullDate = new Date();
    const date = getFormattedDate(fullDate);
    const time = getFormattedTime(fullDate);

    const userName = userGlobAL.displayName;
    const title = document.getElementById("task-title").value;
    const description = document.getElementById("task-content").value;

    if (!editStatus) {
        createTask(title, description, userName, date, time);
    } else {
        updateTask(id, { title: title, description: description });
        editStatus = false;
        document.getElementById("btn-task-save").innerHTML = "Create";
    }

    document.getElementById("create-form").reset();
});

function getFormattedDate(date) {
    var year = date.getFullYear();
    var month = (1 + date.getMonth()).toString().padStart(2, '0');
    var day = date.getDate().toString().padStart(2, '0');
    
    return `${day}/${month}/${year}`;
}

function getFormattedTime(date) {
    var hours = date.getHours().toString().padStart(2, '0');
    var minutes = date.getMinutes().toString().padStart(2, '0');

    return `${hours}:${minutes}`;
}

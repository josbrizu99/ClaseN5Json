<<<<<<< HEAD
// script.js

// Variable global para almacenar los datos del proyecto
let projectData = {
  proyecto: [
    {
      id: 1,
      nombre: "TAREAS DE CLINICA ODONTOLÓGICA",
      descripcion: "Listado de tareas pendientes para el proyecto.",
      tareas: [
        {
          id: 1,
          nombre: "Diseñar la base de datos",
          descripcion: "Crear la estructura de la base de datos",
          estado_completado: false,
          fecha_limite: "2024-12-01",
        },
        {
          id: 2,
          nombre: "Desarrollar la interfaz de usuario",
          descripcion: "Crear la interfaz de usuario para el sistema",
          estado_completado: false,
          fecha_limite: "2024-12-15",
        },
        {
          id: 3,
          nombre: "Implementar la lógica de negocio",
          descripcion: "Crear la lógica de negocio para el sistema",
          estado_completado: false,
          fecha_limite: "2024-12-20",
        },
      ],
    },
  ],
};

// Función para inicializar la aplicación
document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  setupEventListeners();
});

// Función para manejar el formulario
function setupEventListeners() {
  const addTaskForm = document.getElementById("task-form");
  const addTaskBtn = document.getElementById("add-task-btn");

  if (addTaskBtn) {
    addTaskBtn.addEventListener("click", (e) => {
      e.preventDefault();

      const taskName = document.getElementById("task-name").value;
      const taskDesc = document.getElementById("task-desc").value;
      const taskDeadline = document.getElementById("task-deadline").value;

      if (!taskName || !taskDesc || !taskDeadline) {
        alert("Por favor, complete todos los campos");
        return;
      }

      // Crear nueva tarea
      const newTask = {
        id: getNextTaskId(),
        nombre: taskName,
        descripcion: taskDesc,
        estado_completado: false,
        fecha_limite: taskDeadline,
      };

      // Agregar la tarea al proyecto
      projectData.proyecto[0].tareas.push(newTask);

      // Limpiar el formulario
      clearForm();

      // Actualizar la vista
      renderProjects();
    });
  }
}

// Función para obtener el siguiente ID de tarea
function getNextTaskId() {
  const tareas = projectData.proyecto[0].tareas;
  return tareas.length > 0 ? Math.max(...tareas.map((t) => t.id)) + 1 : 1;
}

// Función para limpiar el formulario
function clearForm() {
  document.getElementById("task-name").value = "";
  document.getElementById("task-desc").value = "";
  document.getElementById("task-deadline").value = "";
}

// Función para renderizar los proyectos
function renderProjects() {
  const projectContainer = document.getElementById("project");
  if (!projectContainer) return;

  projectContainer.innerHTML = "";

  projectData.proyecto.forEach((proyecto) => {
    const projectElement = document.createElement("div");
    projectElement.classList.add("project");

    // Crear la tabla de tareas
    const tableHTML = `
            <h2>${proyecto.nombre}</h2>
            <p>${proyecto.descripcion}</p>
            <table>
                <thead>
=======
document.addEventListener('DOMContentLoaded', () => {
    fetch('base.json')
        .then(response => response.json())
        .then(data => {
            const projectContainer = document.getElementById('project');
            data.proyecto.forEach(proyecto => {
                const projectElement = document.createElement('div');
                projectElement.classList.add('project');
                
                const projectTitle = document.createElement('h2');
                projectTitle.textContent = proyecto.nombre;
                projectElement.appendChild(projectTitle);
                
                const projectDescription = document.createElement('p');
                projectDescription.textContent = proyecto.descripcion;
                projectElement.appendChild(projectDescription);

                const table = document.createElement('table');
                const thead = document.createElement('thead');
                const tbody = document.createElement('tbody');

                thead.innerHTML = `
>>>>>>> 1bfff691bcca77d2d59ab7cd00b2e1d77c6543aa
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Descripción</th>
<<<<<<< HEAD
                        <th>Estado</th>
                        <th>Fecha Límite</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    ${proyecto.tareas
                      .map(
                        (tarea) => `
                        <tr class="task ${tarea.estado_completado ? 'completed' : ''}">
                            <td>${tarea.id}</td>
                            <td>${tarea.nombre}</td>
                            <td>${tarea.descripcion}</td>
                            <td>
                                <input type="checkbox" 
                                    ${tarea.estado_completado ? 'checked' : ''} 
                                    onchange="toggleTaskStatus(${tarea.id})">
                            </td>
                            <td>${tarea.fecha_limite}</td>
                            <td>
                                <button onclick="editTask(${tarea.id})">Editar</button>
                                <button onclick="deleteTask(${tarea.id})">Eliminar</button>
                            </td>
                        </tr>

                    `
                      )
                      .join("")}
                </tbody>
            </table>
        `;

    projectElement.innerHTML = tableHTML;
    projectContainer.appendChild(projectElement);
  });
}

// Función para cambiar el estado de una tarea
function toggleTaskStatus(taskId) {
  const task = projectData.proyecto[0].tareas.find((t) => t.id === taskId);
  if (task) {
    task.estado_completado = !task.estado_completado;
    renderProjects();
  }
}

// Función para editar una tarea
function editTask(taskId) {
  const task = projectData.proyecto[0].tareas.find((t) => t.id === taskId);
  if (!task) return;

  const newName = prompt("Nuevo nombre:", task.nombre);
  const newDesc = prompt("Nueva descripción:", task.descripcion);
  const newDate = prompt("Nueva fecha límite (YYYY-MM-DD):", task.fecha_limite);

  if (newName && newDesc && newDate) {
    task.nombre = newName;
    task.descripcion = newDesc;
    task.fecha_limite = newDate;
    renderProjects();
  }
}

// Función para eliminar una tarea
function deleteTask(taskId) {
  if (confirm("¿Está seguro de que desea eliminar esta tarea?")) {
    const taskIndex = projectData.proyecto[0].tareas.findIndex(
      (t) => t.id === taskId
    );
    if (taskIndex !== -1) {
      projectData.proyecto[0].tareas.splice(taskIndex, 1);
      renderProjects();
    }
  }
}
=======
                        <th>Estado Completado</th>
                        <th>Fecha Límite</th>
                    </tr>
                `;

                proyecto.tareas.forEach(tarea => {
                    const row = document.createElement('tr');
                    row.classList.add('task');
                    if(tarea.estado_completado) row.classList.add('completed');

                    row.innerHTML = `
                        <td>${tarea.id}</td>
                        <td>${tarea.nombre}</td>
                        <td>${tarea.descripcion}</td>
                        <td>${tarea.estado_completado ? 'Sí' : 'No'}</td>
                        <td>${tarea.fecha_limite}</td>
                    `;

                    tbody.appendChild(row);
                });

                table.appendChild(thead);
                table.appendChild(tbody);
                projectElement.appendChild(table);

                projectContainer.appendChild(projectElement);
            });
        })
        .catch(error => console.error('Error al cargar el archivo JSON:', error));
});

>>>>>>> 1bfff691bcca77d2d59ab7cd00b2e1d77c6543aa

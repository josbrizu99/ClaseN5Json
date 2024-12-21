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
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Descripción</th>
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


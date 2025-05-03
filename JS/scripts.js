document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('pacienteForm');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            // Generar código automáticamente
            const codigoGenerado = 'P-' + Date.now();

            const paciente = {
                codigo: codigoGenerado,
                primerNombre: document.getElementById('1nombre-paciente').value,
                segundoNombre: document.getElementById('2nombre-paciente').value,
                apellidos: document.getElementById('apellidos-paciente').value,
                fechaNacimiento: document.getElementById('fecha').value,
                edad: document.getElementById('edad').value,
                sexo: document.getElementById('sexo').value,
                alergias: document.getElementById('alergias').value
            };

            let pacientes = JSON.parse(localStorage.getItem('pacientes')) || [];
            pacientes.push(paciente);
            localStorage.setItem('pacientes', JSON.stringify(pacientes));

            form.reset();
        });
    }
});

//Tabla Tutores

  
// Funciones para manejar el formulario de citas
const citaForm = document.getElementById('citaForm');
if (citaForm) {
    generarCodigoCita(); // Generar código de cita automáticamente (para mientras no tenemos Base de datos conectada)

    citaForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita el envío del formulario por defecto
        if (citaForm.checkValidity()) {
            agregarCitaATabla();
            alert('Cita agendada correctamente.');
            citaForm.reset(); // Reiniciar el formulario
            generarCodigoCita(); // Generar un nuevo código de cita
        } else {
            alert('Por favor, complete todos los campos requeridos.');
        }
    });
}

// Función para generar un código de cita
function generarCodigoCita() {
    const codigo = Math.random().toString(36).substring(2, 15).toUpperCase();
    document.getElementById('codigoCita').value = codigo;
}

// Funciones para manejar el formulario de pacientes
const pacienteForm = document.getElementById('pacienteForm');
if (pacienteForm) {
    generarCodigoPaciente(); // Generar código de paciente automáticamente

    pacienteForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita el envío del formulario por defecto
        if (pacienteForm.checkValidity()) {
            agregarPacienteATabla();
            alert('Paciente registrado correctamente.');
            pacienteForm.reset(); // Reiniciar el formulario
            generarCodigoPaciente(); // Generar un nuevo código de paciente
        } else {
            alert('Por favor, complete todos los campos requeridos.');
        }
    });
}

// Función para generar un código de paciente
function generarCodigoPaciente() {
    const codigo = Math.random().toString(36).substring(2, 15).toUpperCase();
    document.getElementById('codigoPaciente').value = codigo;
}


// Aumento de tamaño en los contenedores de misión y visión
const infoMContainer = document.querySelector('.infoM-container');
const infoVContainer = document.querySelector('.infoV-container');
const infoVVContainer = document.querySelector('.infoVV-container');

function scaleUp(container) {
    container.style.transform = 'scale(1.05)';
    container.style.transition = 'transform 0.3s';
}

function scaleDown(container) {
    container.style.transform = 'scale(1)';
}

// Agregar eventos de hover para los contenedores de misión y visión
if (infoMContainer) {
    infoMContainer.addEventListener('mouseover', function() {
        scaleUp(infoMContainer);
    });
    infoMContainer.addEventListener('mouseout', function() {
        scaleDown(infoMContainer);
    });
}

if (infoVContainer) {
    infoVContainer.addEventListener('mouseover', function() {
        scaleUp(infoVContainer);
    });
    infoVContainer.addEventListener('mouseout', function() {
        scaleDown(infoVContainer);
    });
}

if (infoVVContainer) {
    infoVVContainer.addEventListener('mouseover', function() {
        scaleUp(infoVVContainer);
    });
    infoVVContainer.addEventListener('mouseout', function() {
        scaleDown(infoVVContainer);
    });
}

// Ajustar el margen del footer al cargar la página
function ajustarMargenFooter() {
}




 // Cargar datos de localStorage y mostrarlos en la tabla
 window.onload = function() {
    const pacientes = JSON.parse(localStorage.getItem('pacientes')) || [];
    const tabla = document.getElementById('tablaPacientes').getElementsByTagName('tbody')[0];

    pacientes.forEach((paciente, index) => {
        const nuevaFila = tabla.insertRow();
        nuevaFila.innerHTML = `
            <td>${paciente.codigo}</td>
            <td>${paciente.primerNombre}</td>
            <td>${paciente.segundoNombre}</td>
            <td>${paciente.apellidos}</td>
            <td>${paciente.fechaNacimiento}</td>
            <td>${paciente.edad}</td>
            <td>${paciente.sexo}</td>
            <td>${paciente.alergias}</td>
            <td>
                <button class="editar-btn" onclick="editarFila(${index})">Editar</button>
                <button class="eliminar-btn" onclick="eliminarFila(${index})">Eliminar</button>
            </td>
        `;
    });
};


function eliminarFila(index) {
    let pacientes = JSON.parse(localStorage.getItem('pacientes')) || [];
    pacientes.splice(index, 1); // Eliminar el paciente
    localStorage.setItem('pacientes', JSON.stringify(pacientes)); // Guardar cambios
    location.reload(); // Recargar la página para actualizar la tabla
}

function editarFila(index) {
    let pacientes = JSON.parse(localStorage.getItem('pacientes')) || [];
    const paciente = pacientes[index]; // Obtener el paciente a editar

    // Aquí puedes implementar la lógica para editar el paciente
    // Por ejemplo, abrir un formulario con los datos del paciente
    const nuevoNombre = prompt("Editar Primer Nombre:", paciente.primerNombre);
    if (nuevoNombre !== null && nuevoNombre !== "") {
        paciente.primerNombre = nuevoNombre; // Actualizar el nombre
        localStorage.setItem('pacientes', JSON.stringify(pacientes)); // Guardar cambios
        location.reload(); // Recargar la página para actualizar la tabla
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('pacienteForm');
  
    if (form) {
      form.addEventListener('submit', function (event) {
        event.preventDefault(); // Evitar el envío del formulario
  
        // Obtener pacientes existentes
        let pacientes = JSON.parse(localStorage.getItem('pacientes')) || [];
  
        // Generar código automático (ejemplo: P0001, P0002...)
        const nuevoCodigo = 'P' + String(pacientes.length + 1).padStart(4, '0');
  
        // Capturar datos del formulario
        const paciente = {
          codigo: nuevoCodigo,
          primerNombre: document.getElementById('1nombre-paciente').value,
          segundoNombre: document.getElementById('2nombre-paciente').value,
          apellidos: document.getElementById('apellidos-paciente').value,
          fechaNacimiento: document.getElementById('fecha').value,
          sexo: document.getElementById('sexo').value,
          alergias: document.getElementById('alergias').value
        };
  
        // Guardar paciente
        pacientes.push(paciente);
        localStorage.setItem('pacientes', JSON.stringify(pacientes));
  
        // Limpiar el formulario
        form.reset();
  
        alert("Paciente registrado correctamente");
      });
    }
  });
  

  /**/ 
const canvas = document.getElementById("graficoPacientes");
const ctx = canvas.getContext("2d");

const datos = [
  { label: "Total Pacientes", valor: 1500, color: "#4caf50" },
  { label: "Registrados este mes", valor: 250, color: "#2196f3" },
  { label: "Menores de 10 años", valor: 560, color: "#ff9800" }
];

const maxValor = Math.max(...datos.map(d => d.valor));
const chartHeight = 300;
const barWidth = 100;
const spacing = 50;
const baseX = 50;
const baseY = 350;

// Ejes
ctx.beginPath();
ctx.moveTo(baseX, 50);
ctx.lineTo(baseX, baseY);
ctx.lineTo(canvas.width - 30, baseY);
ctx.strokeStyle = "#000";
ctx.lineWidth = 2;
ctx.stroke();

// Dibujar barras
datos.forEach((d, i) => {
  const barHeight = (d.valor / maxValor) * chartHeight;
  const x = baseX + spacing + i * (barWidth + spacing);
  const y = baseY - barHeight;

  // Barra
  ctx.fillStyle = d.color;
  ctx.fillRect(x, y, barWidth, barHeight);

  // Etiqueta numérica
  ctx.fillStyle = "#000";
  ctx.font = "14px Arial";
  ctx.fillText(d.valor, x + 20, y - 20);

  // Etiqueta debajo
  ctx.fillText(d.label, x - 0, baseY + 20);
});

const canvasCitas = document.getElementById('graficoPastel');
const ctxCitas = canvasCitas.getContext('2d');

// Datos ficticios de pacientes por día
const datosCitas = [
  { label: "Lunes", valor: 120, color: "#4caf50" },
  { label: "Miércoles", valor: 80, color: "#2196f3" },
  { label: "Viernes", valor: 60, color: "#ff9800" }
];

// Total de pacientes
const totalCitas = datosCitas.reduce((sum, d) => sum + d.valor, 0);

// Dibujar gráfico de pastel
let inicioAngulo = 0;
datosCitas.forEach(d => {
  const angulo = (d.valor / totalCitas) * 2 * Math.PI;
  ctxCitas.beginPath();
  ctxCitas.moveTo(200, 200);
  ctxCitas.arc(200, 200, 150, inicioAngulo, inicioAngulo + angulo);
  ctxCitas.closePath();
  ctxCitas.fillStyle = d.color;
  ctxCitas.fill();
  inicioAngulo += angulo;
});

// Dibujar etiquetas
inicioAngulo = 0;
datosCitas.forEach(d => {
  const angulo = (d.valor / totalCitas) * 2 * Math.PI;
  const medio = inicioAngulo + angulo / 2;
  const x = 200 + Math.cos(medio) * 100;
  const y = 200 + Math.sin(medio) * 100;

  ctxCitas.fillStyle = "#000";
  ctxCitas.font = "15px Arial";
  ctxCitas.textAlign = "center";
  ctxCitas.fillText(`${d.label}: ${d.valor}`, x, y);

  inicioAngulo += angulo;
});

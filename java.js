let estudiantes = []
let notas = 0
let promedio = 0

document.getElementById('ingresarEstuBtn').addEventListener('click', function() {
    document.getElementById('formulario').style.display = 'block';
});

document.getElementById('enviarBtn').addEventListener('click', function() {
    
    let nombre = document.getElementById('nombre').value;
    let nota = document.getElementById('nota').value;

    let nuevoEstudiante = { nombre, nota };
    estudiantes.push(nuevoEstudiante);

    mostrarUsuario(indiceActual);
    actualizarBotones();

    document.getElementById('Gestiones').reset();
    document.getElementById('Gestiones').style.display = 'none';
});

function mostrarUsuario(indice) {
    let usuario = usuarios[indice];
    if (usuario) {
        document.getElementById('usuarioInfo').innerHTML = `
            <p><strong>Estudiante:</strong> ${estudiantes.nombre}</p>
            <p><strong>Nota:</strong> ${estudiantes.nota}</p>
        `;
    }
}

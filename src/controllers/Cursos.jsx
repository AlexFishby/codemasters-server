const cursos = [
    { nombre: 'Matemáticas', curso: 'Curso 1', descripcion: 'Descripción del curso de Matemáticas' },
    { nombre: 'Ciencias', curso: 'Curso 2', descripcion: 'Descripción del curso de Ciencias' },
    { nombre: 'Historia', curso: 'Curso 3', descripcion: 'Descripción del curso de Historia' },
];

exports.getCursos = (req, res) => {
    res.json(cursos);
};

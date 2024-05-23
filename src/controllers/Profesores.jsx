const profesores = [
    { nombre: 'Profesor A' },
    { nombre: 'Profesor B' },
    { nombre: 'Profesor C' },
];

exports.getProfesores = (req, res) => {
    res.json(profesores);
};

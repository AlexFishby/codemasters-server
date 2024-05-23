const alumnos = [
    { nombre: 'Juan Pérez' },
    { nombre: 'María García' },
    { nombre: 'Carlos López' },
];

exports.getAlumnos = (req, res) => {
    res.json(alumnos);
};

import express from 'express';
import { getAlumnos, getAlumnoById, addAlumno } from '../data.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.json(getAlumnos());
});

router.get('/:id', (req, res) => {
    const alumno = getAlumnoById(parseInt(req.params.id, 10));
    if (alumno) {
        res.json(alumno);
    } else {
        res.status(404).send('Alumno no encontrado');
    }
});

router.post('/', (req, res) => {
    addAlumno(req.body);
    res.status(201).send('Alumno añadido');
});

export default router;

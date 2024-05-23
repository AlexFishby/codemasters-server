import express from 'express';
import {
    getAsignaturas, getAsignaturaById,
    getAsignaturasByProfesorId, getAsignaturasByAlumnoId,
    addAsignatura
} from '../data.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.json(getAsignaturas());
});

router.get('/:id', (req, res) => {
    const asignatura = getAsignaturaById(parseInt(req.params.id, 10));
    if (asignatura) {
        res.json(asignatura);
    } else {
        res.status(404).send('Asignatura no encontrada');
    }
});

router.get('/profesor/:id', (req, res) => {
    const asignaturas = getAsignaturasByProfesorId(parseInt(req.params.id, 10));
    res.json(asignaturas);
});

router.get('/alumno/:id', (req, res) => {
    const asignaturas = getAsignaturasByAlumnoId(parseInt(req.params.id, 10));
    res.json(asignaturas);
});

router.post('/', (req, res) => {
    addAsignatura(req.body);
    res.status(201).send('Asignatura añadida');
});

export default router;

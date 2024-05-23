import express from 'express';
import { getProfesores, getProfesorById, addProfesor } from '../data.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.json(getProfesores());
});

router.get('/:id', (req, res) => {
    const profesor = getProfesorById(parseInt(req.params.id, 10));
    if (profesor) {
        res.json(profesor);
    } else {
        res.status(404).send('Profesor no encontrado');
    }
});

router.post('/', (req, res) => {
    addProfesor(req.body);
    res.status(201).send('Profesor añadido');
});

export default router;

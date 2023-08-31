const { Router } = require('express');
const { check } = require('express-validator');
const { getEOD, getEODById, createEOD, updateEOD } = require('../controllers/eod.controller');

const router = Router();

router.get('/', getEOD);
router.get('/:id', getEODById);
router.post('/', createEOD);
router.put('/:id', updateEOD);

module.exports = router;
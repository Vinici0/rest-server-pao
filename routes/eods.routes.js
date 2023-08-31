const { Router } = require('express');
const { check } = require('express-validator');
const { getEOD, getEODById, postEOD } = require('../controllers/eod.controller');

const router = Router();

router.get('/', getEOD);
router.get('/:id', getEODById);
router.post('/', postEOD);

module.exports = router;
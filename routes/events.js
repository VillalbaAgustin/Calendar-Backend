/*
  Event Routes
  /api/events
 */

const { Router } = require('express');
const { check } = require('express-validator');
const {
  getEventos,
  crearEvento,
  actualizarEvento,
  eliminarEvento,
} = require('../controllers/events');
const { validarJWT } = require('../middlewares/validar-jwt');
const { validarCampos } = require('../middlewares/validar-campos');
const { isDate } = require('../helpers/isDate');

const router = Router();

// Todas tiene que pasar por la validación del JWT
// CRUD  Create-Read-Update-Delete

// Crear un nuevo evento
router.post(
  '/',
  [
    check('title', 'El titulo es obligatorio').not().isEmpty(),
    check('start', 'Fecha de inicio es obligatoria').custom(isDate),
    check('end', 'Fecha de fin es obligatoria').custom(isDate),
    validarCampos,
  ],
  validarJWT,
  crearEvento
);

// Obtener eventos
router.get('/', validarJWT, getEventos);

// Actualizar un Evento
router.put(
  '/:id',
  [
    check('title', 'El titulo es obligatorio').not().isEmpty(),
    check('start', 'Fecha de inicio es obligatoria').custom(isDate),
    check('end', 'Fecha de finalización es obligatoria').custom(isDate),
    validarCampos,
  ],
  validarJWT,
  actualizarEvento
);

// Borrar evento
router.delete('/:id', validarJWT, eliminarEvento);

module.exports = router;

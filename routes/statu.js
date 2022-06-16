const { Router } = require('express');
const { createStatu, getStatu , getStatus, updateStatu, deleteStatu } = require('../controllers/status');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const statusRouter = Router();

statusRouter.get('/',       getStatus);

statusRouter.post('/new', [
    check('status', 'El status es obligatorio').not().isEmpty(),
    validarCampos
],   createStatu),

statusRouter.get('/:id',    getStatu),

statusRouter.delete('/:id', deleteStatu );

statusRouter.put('/:id',[
    check('status', 'El status es obligatorio').not().isEmpty(),
    validarCampos
],    updateStatu)

module.exports = statusRouter;

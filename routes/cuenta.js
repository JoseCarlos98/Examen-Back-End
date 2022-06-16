const { Router } = require('express');
const { createAccount, getAccount , getAccounts, updateAccount, deleteAccount } = require('../controllers/cuenta');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const cuentaRouter = Router();

cuentaRouter.get('/',       getAccounts);

cuentaRouter.post('/new', [
    check('alias', 'El alias es obligatorio').not().isEmpty(),
    check('ultimos_digitos', 'Los ultimos digitos son obligatorio').not().isEmpty(),
    validarCampos
],   createAccount),

cuentaRouter.get('/:id',    getAccount),

cuentaRouter.delete('/:id', deleteAccount );

cuentaRouter.put('/:id',[
    check('alias', 'El alias es obligatorio').not().isEmpty(),
    check('ultimos_digitos', 'Los ultimos digitos son obligatorio').not().isEmpty(),
    validarCampos
],    updateAccount)

module.exports = cuentaRouter;

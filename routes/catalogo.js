const { Router } = require('express');
const { createCatalog, getCatalogs, getCatalog, deleteCatalog, updateCatalog } = require('../controllers/catalogo');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const catalogoRouter = Router();

catalogoRouter.get('/',       getCatalogs);

catalogoRouter.post('/new',[
    check('clave',        'La clave es obligatoria').not().isEmpty(),
    check('nombre_corto', 'El nombre corto es obligatorio').not().isEmpty(),
    check('banco',        'El banco es obligatorio').not().isEmpty(),
    check('orden',        'La orden es obligatorio').not().isEmpty(),
    check('id_status',    'El status es obligatorio').not().isEmpty(),
    validarCampos
],   createCatalog),

catalogoRouter.get('/:id',    getCatalog),

catalogoRouter.delete('/:id', deleteCatalog );

catalogoRouter.put('/:id', [
    check('clave',        'La clave es obligatoria').not().isEmpty(),
    check('nombre_corto', 'El nombre corto es obligatorio').not().isEmpty(),
    check('banco',        'El banco es obligatorio').not().isEmpty(),
    check('orden',        'La orden es obligatorio').not().isEmpty(),
    check('id_status',    'El status es obligatorio').not().isEmpty(),
    validarCampos
],   updateCatalog)

module.exports = catalogoRouter;

const { response } = require('express');
const { Catalogo } = require('../models/catalogo');
const { Status } = require('../models/Status');

const createCatalog  = async ( req, res = response) => {
    const { body } = req;

    try {
        const newCatalog  = new Catalogo(body);
        await newCatalog .save();
        return res.status(201).json({
            ok: true,
            newCatalog
        }); 

    } catch (error) {
        console.log(error);
        res.status(404).json('Hubo un error, hable con el administrador')
    }
}

const getCatalogs  = async (req, res = response) => {
    try {
        const catalogs = await Catalogo.findAll({
            include : [
                {
                    model: Status,
                },
            ]
        });
        
        return res.status(201).json(catalogs); 

    } catch (error) {
        console.log(error);
        res.status(404).json('Hubo un error, hable con el administrador traer todos')
    }
}

const getCatalog = async (req, res = response) => {
    const { id } = req.params;

    try {
        const catalog = await Catalogo.findByPk(id,{
            include : [
                {
                    model: Status,
                },
            ]
        })

        if (!catalog) {
            return res.status (400).json({
                  error: `Catalogo no existe!`
            })
        }

        return res.status(201).json({
            catalog
        }); 

    } catch (error) {
        console.log(error);
        res.status(404).json('Hubo un error, hable con el administrador')
    }
}

const updateCatalog = async (req, res = response) => {
    const { id } = req.params;
    const { body } = req;
    
    try {
        const catalog = await Catalogo.findByPk( id );

        if (!catalog) {
            return res.status(404).json({
                ok: true,
                msg: 'Catalogo no encontrado por id',
            });
        }

        await catalog.update(body);

        res.json({
            ok: true,
            catalog
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }
}

const deleteCatalog = async(req, res = response) => {
    const { id } = req.params;

    try {
        const catalog = await Catalogo.findByPk( id );

        if (!catalog) {
            return res.status(404).json({
                ok: true,
                msg: 'Catalogo no encontrado por id',
            });
        }

        await catalog.destroy();

        res.json({
            ok: true,
            msg: 'Catalogo eliminado'
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }
}

module.exports = { 
    createCatalog ,
    getCatalogs,
    getCatalog,
    deleteCatalog,
    updateCatalog
}
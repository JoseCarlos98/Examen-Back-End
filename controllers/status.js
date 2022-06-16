const { response } = require('express');
const { Status } = require('../models/Status');

const createStatu  = async ( req, res = response) => {
    const { body } = req;

    try {
        const newStatus  = new Status(body);
        
        await newStatus .save();
        
        return res.status(201).json({
            ok: true,
            newStatus 
        }); 

    } catch (error) {
        console.log(error);
        res.status(404).json('Hubo un error, hable con el administrador')
    }
}

const getStatus  = async (req, res = response) => {
    try {
        const status = await Status.findAll({ });
        return res.status(201).json(status); 

    } catch (error) {
        console.log(error);
        res.status(404).json('Hubo un error, hable con el administrador traer todos')
    }
}

const getStatu = async (req, res = response) => {
    const { id } = req.params;

    try {
        const status = await Status.findByPk(id)

        if (!status) {
            return res.status (400).json({
                  error: `Status no existe!`
            })
        }

        return res.status(201).json({
            status
        }); 

    } catch (error) {
        console.log(error);
        res.status(404).json('Hubo un error, hable con el administrador')
    }
}

const updateStatu = async (req, res = response) => {
    const { id } = req.params;
    const { body } = req;

    try {
        const status = await Status.findByPk( id );

        if ( !status ) {
            return res.status(404).json({
                ok: true,
                msg: 'Status no encontrado por id',
            });
        }

        await status.update(body)

        res.json({
            ok: true,
            status
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }
}

const deleteStatu = async(req, res = response) => {
    const { id } = req.params;

    try {
        const status = await Status.findByPk( id );
        if ( !status ) {
            return res.status(404).json({
                ok: true,
                msg: 'Status no encontrado por id',
            });
        }

        await status.destroy();

        res.json({
            ok: true,
            msg: 'Status eliminado'
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
    createStatu ,
    getStatus,
    getStatu,
    deleteStatu,
    updateStatu
}
const { response } = require('express');
const { Catalogo } = require('../models/catalogo');
const { Cuenta } = require('../models/Cuenta');


const createAccount  = async ( req, res = response) => {
    const { body } = req;

    try {
        const newAccount  = new Cuenta(body);
        await newAccount .save();
        return res.status(201).json({
            ok: true,
            newAccount 
        }); 

    } catch (error) {
        console.log(error);
        res.status(404).json('Hubo un error, hable con el administrador')
    }
}

const getAccounts  = async (req, res = response) => {
    try {
        const accounts = await Cuenta.findAll({
            include : [
                {
                    model: Catalogo,
                },
            ]
        });
        console.log(accounts);
        return res.status(201).json(accounts); 

    } catch (error) {
        console.log(error);
        res.status(404).json('Hubo un error, hable con el administrador traer todos')
    }
}

const getAccount = async (req, res = response) => {
    const { id } = req.params;

    try {
        const account = await Cuenta.findByPk(id,{
            include : [
                {
                    model: Catalogo,
                },
            ]
        })

        if (!account) {
            return res.status (400).json({
                  error: `Cuenta no existe!`
            })
        }

        return res.status(201).json({
            account
        }); 

    } catch (error) {
        console.log(error);
        res.status(404).json('Hubo un error, hable con el administrador')
    }
}

const updateAccount = async (req, res = response) => {
    const id  = req.params.id;
    const { body } = req;

    try {
        const account = await Cuenta.findByPk( id );

        if ( !account ) {
            return res.status(404).json({
                ok: true,
                msg: 'Cuenta no encontrado por id',
            });
        }

        await account.update(body)

        res.json({
            ok: true,
            account: account
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }
}

const deleteAccount = async(req, res = response) => {
    const id  = req.params.id;

    try {
        const account = await Cuenta.findByPk( id );
        if ( !account ) {
            return res.status(404).json({
                ok: true,
                msg: 'Cuenta no encontrado por id',
            });
        }

        await account.destroy();

        res.json({
            ok: true,
            msg: 'Cuenta eliminado'
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
    createAccount ,
    getAccounts,
    getAccount,
    deleteAccount,
    updateAccount
}
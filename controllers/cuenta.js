const { response } = require('express');
const { Catalogo } = require('../models/catalogo');
const { Cuenta } = require('../models/Cuenta');


const createAccount  = async ( req, res = response) => {
 
}

const getAccounts  = async (req, res = response) => {
}

const getAccount = async (req, res = response) => {
   
}

const updateAccount = async (req, res = response) => {
    
}

const deleteAccount = async(req, res = response) => {
    
}

module.exports = { 
    createAccount ,
    getAccounts,
    getAccount,
    deleteAccount,
    updateAccount
}
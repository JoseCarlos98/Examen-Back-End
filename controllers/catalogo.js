const { response } = require('express');
const { Catalogo } = require('../models/catalogo');
const { Status } = require('../models/Status');

const createCatalog  = async ( req, res = response) => {
  
}

const getCatalogs  = async (req, res = response) => {
   
}

const getCatalog = async (req, res = response) => {
  
}

const updateCatalog = async (req, res = response) => {
   
}

const deleteCatalog = async(req, res = response) => {
  
}

module.exports = { 
    createCatalog ,
    getCatalogs,
    getCatalog,
    deleteCatalog,
    updateCatalog
}
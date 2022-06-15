const DataTypes = require('sequelize')
const { db } = require('../db/connection')

const Cuenta = db.define('c_cuentas_bancarias',{
    id_banco: {
        type: DataTypes.INTEGER
    },
    alias: {
        type: DataTypes.STRING
    },
    ultimos_digitos: {
        type: DataTypes.STRING
    }
});



exports.Cuenta = Cuenta;

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
}),

 Catalogo = db.define('c_banco',{
    clave: {
        type: DataTypes.STRING
    },
    nombre_corto: {
        type: DataTypes.STRING,
    },
    banco: {
        type: DataTypes.TEXT
    },
    id_status: {
        type: DataTypes.NUMBER
    },
    order: {
        type: DataTypes.NUMBER
    }
});

Cuenta.belongsTo(Catalogo, {foreignKey: 'id_banco'})

exports.Cuenta = Cuenta;

const DataTypes = require('sequelize')
const { db } = require('../db/connection')

const Catalogo = db.define('c_banco',{
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
    orden: {
        type: DataTypes.NUMBER
    }
}),

Status = db.define('Statu',{
    status: {
        type: DataTypes.STRING
    }
});


Catalogo.belongsTo(Status, {foreignKey: 'id_status'})

exports.Catalogo = Catalogo;

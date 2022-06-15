const DataTypes = require('sequelize')
const { db } = require('../db/connection')

const Status = db.define('Statu',{
    status: {
        type: DataTypes.STRING
    }
});

exports.Status = Status;

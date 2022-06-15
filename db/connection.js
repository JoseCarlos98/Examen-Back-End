const Secuelize = require('sequelize');

const db = new Secuelize('banco', 'root', 'jclb',{
    host: 'localhost',
    dialect: 'mysql'
});

exports.db = db;

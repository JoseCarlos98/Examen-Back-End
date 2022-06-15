const express = require('express');
const cors    = require('cors');
const catalogosRouter = require('./routes/catalogo')
const cuentasRouter = require('./routes/cuenta')
const { db } = require('./db/connection');

require('dotenv').config();

const app = express();

app.use(express.json());

app.use(cors());

// MYSQL 
try {
	db.authenticate()
    console.log('BASE DE DATOS CONECTADA');
} catch (error) {
    throw new Error (error)
}

app.use('/catalogos', catalogosRouter);
app.use('/cuentas',   cuentasRouter);

app.listen(process.env.PORT, ()=>{
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);
})
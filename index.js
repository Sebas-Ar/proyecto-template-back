import bodyParser from 'body-parser'
import express from 'express'
import dbClient from './db.js'

const app = express()

// permite recibir datos en el body
app.use(bodyParser.json())

// DB info
const dbName = ''
const tasksCollectionName = ''


// Obtener Todo
app.get('/', async (req, res) => {

    // 1. Conexion a la DB
    await dbClient.connect()
    // 2. Seleccionar la DB
    const taskAppDB = dbClient.db(dbName)
    // 3. Seleccionar la coleccion
    const tasksCollection = taskAppDB.collection(tasksCollectionName)

    // 4. Realizar la query


    // 5. Cerrar conexion
    await dbClient.close()

    res.json({
        message: 'documentos entregados',
    })
})

// Obtener Uno
app.get('/', async (req, res) => {

    // 1. Conexion a la DB
    await dbClient.connect()
    // 2. Seleccionar la DB
    const taskAppDB = dbClient.db(dbName)
    // 3. Seleccionar la coleccion
    const tasksCollection = taskAppDB.collection(tasksCollectionName)

    // 4. Realizar la query


    // 5. Cerrar conexion
    await dbClient.close()


    res.json({
        message: 'documento entregado'
    })
})

// Crear
app.post('/', async (req, res) => {

    // 1. Conexion a la DB
    await dbClient.connect()
    // 2. Seleccionar la DB
    const taskAppDB = dbClient.db(dbName)
    // 3. Seleccionar la coleccion
    const tasksCollection = taskAppDB.collection(tasksCollectionName)

    // 4. Realizar la query



    // 5. Cerrar conexion
    await dbClient.close()


    res.json({
        message: 'documento creado'
    })
})

// Editar
app.put('/', async (req, res) => {

    // 1. Conexion a la DB
    await dbClient.connect()
    // 2. Seleccionar la DB
    const taskAppDB = dbClient.db(dbName)
    // 3. Seleccionar la coleccion
    const tasksCollection = taskAppDB.collection(tasksCollectionName)

    // 4. Realizar la query



    // 5. Cerrar conexion
    await dbClient.close()

    res.json({
        message: 'documento editado'
    })
})

// Eliminar
app.delete('/', async (req, res) => {

    // 1. Conexion a la DB
    await dbClient.connect()
    // 2. Seleccionar la DB
    const taskAppDB = dbClient.db(dbName)
    // 3. Seleccionar la coleccion
    const tasksCollection = taskAppDB.collection(tasksCollectionName)

    // 4. Realizar la query



    // 5. Cerrar conexion
    await dbClient.close()

    res.json({
        message: 'documento eliminado'
    })
})

const PORT = 3000
app.listen(PORT, () => {
    console.log(`API escuchando en el puert: ${PORT}`)
})
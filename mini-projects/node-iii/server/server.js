require('dotenv').config()
const express = require('express')
// massive goes to database and brings back info
const massive = require('massive')
const app = express()
const ctrl = require('./controller')
const {PORT, CONNECTION_STRING} = process.env

app.use(express.json())

app.get('/api/class', ctrl.getClass)
app.put('/api/class/:id', ctrl.updateClassMate)
app.post('/api/class', ctrl.addMate)
app.delete('/api/class/:id', ctrl.deleteMate)

massive(CONNECTION_STRING)
    .then((database) => {
        app.set('db', database)
        app.listen(PORT, () => console.log(`Honky on port ${PORT}`))
    })
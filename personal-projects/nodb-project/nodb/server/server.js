const express = require('express')
const app = express()
const PORT = 4001
const movieCtrl = require('./movieCtrl')

app.use(express.json())

// Endpoints
app.get('/api/movies', movieCtrl.getAll)
app.delete('/api/movies/:id', movieCtrl.delete)
app.post('/api/movies', movieCtrl.add)
app.put('/api/movies/:id', movieCtrl.edit)

// listener
app.listen(PORT, () => console.log(`Honky be listening on port ${PORT}`))

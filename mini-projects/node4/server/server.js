require('dotenv').config()
const express = require('express')
const app = express()
const session  = require('express-session')
const { PORT, SESSION_SECRET } = process.env
const middleware = require('./middleware')
const ctrl = require('./controller')


// Top level middleware needs to be above endpoints
app.use(express.json())
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}))
// app.use(middleware.customMiddleware)
// app.use(middleware.authenticate)


// Endpoint
app.get('/api/points', middleware.authenticate, ctrl.getPoints)
app.post('/auth/login', ctrl.login)

app.listen(PORT, () => console.log(`Honky on port ${PORT}`))

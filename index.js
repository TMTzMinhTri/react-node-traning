const express = require('express')
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')

const key = require('./config/keys')
const passport = require('passport')
require('./modals/user') 
require('./services/passport')
const authRoutes = require('./routes/authRoutes')
const app = express()

mongoose.connect(key.mongoURI);

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys:[key.cookieKey]
    })
)
app.use(passport.initialize())
app.use(passport.session())
authRoutes(app)

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
const express = require('express')
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')
const bodyParser = require('body-parser')

const key = require('./config/keys')
const passport = require('passport')
require('./modals/user') 
require('./services/passport')

const authRoutes = require('./routes/authRoutes')
const billingRoutes = require('./routes/billingRoutes')


const app = express()

//connect mongodb
mongoose.connect(key.mongoURI,{useNewUrlParser: true});

app.use(bodyParser.json())
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys:[key.cookieKey]
    })
)
app.use(passport.initialize())
app.use(passport.session())

authRoutes(app)
billingRoutes(app)

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname,'client', 'build', "index.html"))
        
    })
}

const port = process.env.PORT ||5000
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
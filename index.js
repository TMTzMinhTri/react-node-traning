const express = require('express')
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const keys = require('./config/keys')

const app = express()

// client ID: 394911232807-bkkjvsicm52sh5v8m081i2fa5nuqsocd.apps.googleusercontent.com
// client secret: WTcw-qCsKBAKo_xmwKk1zhcP

passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,  
        callbackURL: '/auth/google/callback'
    }, (accessToken, refreshToken, profile, done) => {
        console.log(accessToken)
        console.log(refreshToken)
        console.log(profile)
    })
)


app.get('/', (req, res) => res.send({ hi: 'adasdas' }))
app.get(
    '/auth/google',
    passport.authenticate('google', {
        scope: ['profile', 'email'],

    })
);

app.get(
    '/auth/google/callback',
    passport.authenticate('google')
)

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
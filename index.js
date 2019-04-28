const express = require('express')
const app = express()
const port = 3000 || process.env.PORT

app.get('/', (req, res) => res.send({hi:'adasdas'}))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
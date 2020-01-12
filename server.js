const express = require('express')
const bodyParser = require('body-parser')
const router = require('./config/router')
require('./config/database')

const port = 30000

const app = express()

app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())
app.use(router)

app.listen(port, (error) => {
    if(error) console.error(error)

    console.log(`Server running on port ${port}`)
})
const mongoose = require('mongoose')

const uri = 'mongodb://localhost/opticaStore'

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true, 
    useCreateIndex: true
})

const db = mongoose.connection

db.on('error', console.error)
db.once('open', () => {
    console.log('Connected to MongoDB.')
})

module.exports = db
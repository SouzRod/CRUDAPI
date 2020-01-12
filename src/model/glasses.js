const { Schema, model } = require('mongoose')

const glassesSchema = Schema({
    marca: { type: String },
    modelo: { type: String, required: true },
    grau: {
        direito: { type: Number },
        esquerdo: { type: Number }
    },
    preco: { type: Number }
})

module.exports = model('Glasses', glassesSchema)



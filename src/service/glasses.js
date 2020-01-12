const Glasses = require('../model/glasses')

async function store(id=null) {
    if (id) {
        return await Glasses.findById(id)
    }
    return await Glasses.find()
}

async function save(obj) {
    const newGlasses = new Glasses(obj)
    return await newGlasses.save()
}

async function update(id, obj) {
    const glasses = await Glasses.findById(id).exec().then(gl => {
        const { modelo, preco, marca, grau } = gl
        return { modelo, preco, marca, grau }
    })
    const updatedGlasses = {
        ...glasses,
        ...obj
    }

    const result = await Glasses.updateOne({_id: id}, updatedGlasses)
    return result.ok == 1 ? 'Alteração realizada com sucesso!' : result
}

async function del(id) {
    return await Glasses.findByIdAndDelete(id)
}

module.exports = { store, save, update, del }
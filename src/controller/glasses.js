const service = require('../service/glasses')

async function store(req, res) {
    const { id } = req.params
    const result = await service.store(id)
    res.send(result)
}

async function save(req, res) {
    const glasses = req.body
    const result = await service.save(glasses)
    res.send(result)
}

async function update(req, res) {
    const glasses = req.body
    const { id } = req.params
    const result = await service.update(id, glasses)
    res.send(result)
}

async function del(req, res) {
    const { id } = req.params
    const result = await service.del(id)
    res.send(result)
}

module.exports = { store, save, update, del }


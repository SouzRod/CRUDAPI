const router = require('express').Router()
const glassesController = require('../src/controller/glasses')

router.get('/', glassesController.store)
router.get('/:id', glassesController.store)
router.post('/save', glassesController.save)
router.put('/update/:id', glassesController.update)
router.delete('/delete/:id', glassesController.del)

module.exports = router
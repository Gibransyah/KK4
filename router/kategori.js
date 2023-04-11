const kategoriController = require('../controllers/kategori');
const router = require('express').Router();

router.post('/', kategoriController.create);
router.get('/', kategoriController.getAll);
router.get('/:id', kategoriController.findOne);
router.put('/:id', kategoriController.update);
router.delete('/:id', kategoriController.delete);

module.exports = router;
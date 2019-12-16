const express = require('express');
const router = express.Router();
const ctrlCats = require('../controllers/cats');

router.get('/', ctrlCats.getCats); // api/cats/

router.get('/:id', ctrlCats.getCat); // api/cats/:id

router.post('/', ctrlCats.addCat); // api/cats/

router.put('/:id', ctrlCats.editCat); // api/cats/:id

router.delete('/:id', ctrlCats.deleteCat); // api/cats/:id

module.exports = router;
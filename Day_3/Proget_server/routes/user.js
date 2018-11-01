const express = require('express');
const router = express.Router();
const ctrlUsers = require('../controllers/user');

router.get('/:id', ctrlUsers.getUser);

router.post('/', ctrlUsers.addUser);

module.exports = router;
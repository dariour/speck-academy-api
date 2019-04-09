const express = require('express');
const usersController = require('./controller');
const router = new express.Router();

router.route('/').get(usersController.getUsers);

router.route('/:userId').get(usersController.getUsersId);

module.exports = router;
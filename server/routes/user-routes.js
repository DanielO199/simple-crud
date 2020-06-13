const express = require('express');

const usersControllers = require('../controllers/users-controllers');

const router = express.Router();

//GET ALL USERS
router.get('/', usersControllers.getAllUsers);
//GET SINGLE USER
router.get('/:uid', usersControllers.getUserById);
//ADD USER
router.post('/', usersControllers.createUser);
//UPDATE USER
router.patch('/:uid', usersControllers.updateUser);
//DELETE USER
router.delete('/:uid', usersControllers.deleteUser);

module.exports = router;

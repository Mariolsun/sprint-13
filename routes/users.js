const router = require('express').Router();

const { createUser, getUser, getUsers } = require('../controllers/users');

console.log('user router is working');
router.get('/', getUsers);
router.get('/:id', getUser);
router.post('/', createUser);


module.exports = router;

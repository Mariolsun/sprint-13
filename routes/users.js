const router = require('express').Router();
const { doesUserExists } = require('../middlewares/doesUserExists');
const { createUser, getUser, getUsers } = require('../controllers/users');

router.get('/', getUsers);

router.get('/:id', doesUserExists);
router.get('/:id', getUser);

router.post('/', createUser);


module.exports = router;

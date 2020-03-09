const router = require('express').Router();

const { createCard, getCard, getCards } = require('../controllers/cards');

console.log('card router is working');
router.get('/', getCards);
router.get('/:id', getCard);
router.post('/', createCard);


module.exports = router;

const router = require('express').Router();
const { checkOwner } = require('../middlewares/checkOwner');
const { doesCardExists } = require('../middlewares/doesCardExists');
const {
  createCard, getCard, getCards, deleteCard,
} = require('../controllers/cards');


router.get('/', getCards);

router.get('/:id', doesCardExists);
router.get('/:id', getCard);

router.post('/', createCard);

router.delete('/:id', doesCardExists);
router.delete('/:id', checkOwner);
router.delete('/:id', deleteCard);

module.exports = router;

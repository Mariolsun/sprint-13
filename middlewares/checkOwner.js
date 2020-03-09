const Card = require('../models/card');

module.exports.checkOwner = (req, res, next) => {
  Card.findById(req.params.id, (err, card) => {
    if (card.owner.toString() !== req.user._id) {
      res.status(403).send({ message: 'Карточку может удалить только ее создатель!' });
      return;
    }
    next();
  });
};

const Card = require('../models/card');

module.exports.doesCardExists = (req, res, next) => {
  Card.findById(req.params.id, (err, card) => {
    if (!card) {
      res.status(400).send({ message: 'Такой карточки нет в базе' });
      return;
    }
    next();
  });
};

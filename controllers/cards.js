const Card = require('../models/card');

module.exports.createCard = (req, res) => {
  const {
    name, link,
  } = req.body;
  Card.create({
    name, link, owner: req.user._id,
  })
    .then((card) => {
      Card.findById(card._id) // находим новую карточку, чтобы ответ был с инфой про ее создателя
        .populate('owner')
        .then((item) => res.send({ data: item }))
        .catch((err) => res.status(500).send({ message: err.message || 'Произошла ошибка' }));
    })
    .catch((err) => res.status(500).send({ message: err.message || 'Произошла ошибка' }));
};

module.exports.getCards = (req, res) => {
  Card.find({})
    .populate('owner')
    .then((cards) => res.send({ data: cards }))
    .catch((err) => res.status(500).send({ message: err.message || 'Произошла ошибка' }));
};

module.exports.getCard = (req, res) => {
  Card.findById(req.params.id)
    .populate('owner')
    .then((card) => res.send({ data: card }))
    .catch((err) => res.status(500).send({ message: err.message || 'Произошла ошибка' }));
};


module.exports.deleteCard = (req, res) => {
  Card.findByIdAndDelete(req.params.id)
    .then((DeletedCard) => {
      res.send({ message: `Карточка ${DeletedCard.name} удалена` });
    })
    .catch((err) => res.status(500).send({ message: err.message || 'Произошла ошибка' }));
};

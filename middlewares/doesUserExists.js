const User = require('../models/user');

module.exports.doesUserExists = (req, res, next) => {
  User.findById(req.params.id, (err, user) => {
    if (!user) {
      res.status(400).send({ message: 'Пользователь не найден' });
      return;
    }
    next();
  });
};

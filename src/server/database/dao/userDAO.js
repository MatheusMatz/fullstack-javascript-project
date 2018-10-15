const UserSchema = require('../schemas/userSchema');

exports.create = (req, res) => {

  const user = new UserSchema({email: req.body.email, username: req.body.username, password: req.body.password});

  user.save((err, data) => {
    if (err) {
      res.status(500).send({ message: 'Some error occurred while creating the User.' });
    } else {
      res.send(data);
      return data;
    }
  });
};

exports.login = (req, res) => {
  res.send({ message: 'Some error occurred while creating the User.' });
};

exports.findAll = (req, res) => {
  UserSchema.find((err, users) => {
    if (err) res.status(500).send({ message: 'Some error occurred while retrieving users.' });
    else res.send(users);
  });
};

exports.findOne = (req, res) => {
  UserSchema.findById(req.params.userId, (err, user) => {
    if (err) {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({ message: `User not found with id ${  req.params.userId}` });
      }
      return res.status(500).send({ message: `Error retrieving user with id ${  req.params.userId}` });
    }

    if (!user) {
      return res.status(404).send({ message: `User not found with id ${  req.params.userId}` });
    }

    res.send(user);
  });
};

exports.update = (req, res) => {
  UserSchema.findById(req.params.userId, (err, user) => {
    if (err) {
      if (err.kind === 'ObjectId') return res.status(404).send({ message: `User not found with id ${  req.params.userId}` });
      return res.status(500).send({ message: `Error finding user with id ${  req.params.userId}` });
    }

    if (!user) return res.status(404).send({ message: `User not found with id ${  req.params.userId}` });

    user.title = req.body.title;
    user.content = req.body.content;

    user.save((err, data) => {
      if (err) res.status(500).send({ message: `Could not update user with id ${  req.params.userId}` });
      else res.send(data);
    });
  });
};

exports.delete = (req, res) => {
  UserSchema.findByIdAndRemove(req.params.userId, (err, user) => {
    if (err) {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({ message: `User not found with id ${  req.params.userId}` });
      }
      return res.status(500).send({ message: `Could not delete user with id ${  req.params.userId}` });
    }

    if (!user) {
      return res.status(404).send({ message: `User not found with id ${  req.params.userId}` });
    }

    res.send({ message: 'User deleted successfully!' });
  });
};

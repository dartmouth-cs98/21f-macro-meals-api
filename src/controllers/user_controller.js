/* eslint-disable import/no-named-as-default */
// eslint-disable-next-line import/no-named-as-default-member
import User from '../models/user_model';

export const userRegister = (req, res) => {
  const user = new User();

  user.username = req.body.username;
  user.password = req.body.password;

  user.save()
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};

export const userLogin = (req, res) => {
  User.find({ username: req.username })
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};

export const userCheck = (req, res) => {
  User.find({ username: req.username })
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};

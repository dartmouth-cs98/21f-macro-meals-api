/* eslint-disable import/no-named-as-default */
// eslint-disable-next-line import/no-named-as-default-member
import Fav from '../models/fav_model';

export const newFav = (req, res) => {
  const fav = new Fav();

  fav.username = req.body.username;
  fav.foodId = req.body.foodId;

  fav.save()
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};

export const checkFav = (req, res) => {
  Fav.findOne({ username: req.body.username, foodId: req.body.foodId })
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};

export const deleteFav = (req, res) => {
  Fav.findOneAndDelete({ username: req.body.username, foodId: req.body.foodId })
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};

export const getUserFav = (req, res) => {
  Fav.find({ username: req.body.username }).sort({ createdAt: -1 }).limit(25)
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};
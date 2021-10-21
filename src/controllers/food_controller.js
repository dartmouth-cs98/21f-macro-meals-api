/* eslint-disable import/no-named-as-default */
// eslint-disable-next-line import/no-named-as-default-member
import Food from '../models/food_model';

export const createFood = (req, res) => {
  const food = new Food();

  food.name = req.body.name;
  food.servingSize = req.body.servingSize;
  food.servingUnit = req.body.servingUnit;
  food.calories = req.body.calories;
  food.protein = req.body.protein;
  food.carb = req.body.carb;
  food.fat = req.body.fat;

  food.save()
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};

export const getFoods = (req, res) => {
  Food.find({})
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};

export const getFood = (req, res) => {
  Food.findById(req.params.id)
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};

export const deleteFood = (req, res) => {
  Food.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};

export const updateFood = (req, res) => {
  const food = req.body;

  Food.findByIdAndUpdate(req.params.id, food, { new: true })
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};

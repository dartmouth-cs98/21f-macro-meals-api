/* eslint-disable import/no-named-as-default */
// eslint-disable-next-line import/no-named-as-default-member
import Food from '../models/food_model';

export const createFood = (req, res) => {
  const food = new Food();

  food.username = req.body.username;
  food.customName = req.body.customName;
  food.description = req.body.description;
  food.mealTime = req.body.mealTime;
  food.mood = req.body.mood;
  food.imageUrl = req.body.imageUrl;
  food.classification = req.body.classification;
  food.calories = req.body.calories;
  food.protein = req.body.protein;
  food.carb = req.body.carb;
  food.fat = req.body.fat;
  food.publicFood = req.body.publicFood;

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

export const getUserFoods = (req, res) => {
  Food.find({ username: req.body.username }).sort({ createdAt: -1 })
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};

export const getCommunityFoods = (req, res) => {
  let obj;
  Food.find({ public: 1 }).sort({ createdAt: -1 }).limit(25) // recent pull
    .then((result1) => {
      obj.recent = result1;
      Food.find({ public: 1 }).sort({ createdAt: -1 }).limit(25) // favorite pull - needs update
        .then((result2) => {
          obj.favorite = result2;
          Food.find({ public: 1 }).sort({ createdAt: -1 }).limit(25) // top pull - needs update
            .then((result3) => {
              obj.top = result3;
              res.json(obj);
            })
            .catch((error) => {
              res.status(500).json({ error });
            });
        })
        .catch((error) => {
          res.status(500).json({ error });
        });
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

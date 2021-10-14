import { Router } from 'express';
import * as Food from './controllers/food_controller';

const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'Welcome to Macro API!' });
});

router.route('/food')
  .get(Food.getFoods);

router.route('/food/:id')
  .get(Food.getFood)
  .put(Food.updateFood)
  .delete(Food.deleteFood);

export default router;
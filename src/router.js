import { Router } from 'express';
import * as Food from './controllers/food_controller';

const router = Router();

router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

router.get('/', (req, res) => {
  res.json({ message: 'Welcome to Macro API!' });
});

router.route('/food')
  .post(Food.createFood)
  .get(Food.getFoods);

router.route('/food/:id')
  .get(Food.getFood)
  .put(Food.updateFood)
  .delete(Food.deleteFood);

export default router;

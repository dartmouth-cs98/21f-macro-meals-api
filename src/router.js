import { Router } from 'express';
import * as Food from './controllers/food_controller';
import * as User from './controllers/user_controller';
import signS3 from './services/s3';
import classifyFlask from './services/flask';

const router = Router();

router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

router.get('/', (req, res) => {
  res.json({ message: 'Welcome to Macro API!' });
});

router.get('/sign-s3', signS3);
router.post('/classifyImage', classifyFlask);

router.post('/user/login', User.userLogin);
router.post('/user/register', User.userRegister);
router.post('/user/check', User.userCheck);

router.route('/food')
  .post(Food.createFood)
  .get(Food.getFoods);

router.route('/food/:id')
  .get(Food.getFood)
  .put(Food.updateFood)
  .delete(Food.deleteFood);

export default router;

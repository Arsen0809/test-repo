import { Router } from 'express';
const router = Router();

router.use('/cart', require('./controllers/cart'));
router.use('/', require('./controllers/default'));

module.exports = router;

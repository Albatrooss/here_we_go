import express from 'express';
import controller from '../controllers/messages';

const router = express.Router();

router.get('/', controller.all);
router.post('/add-one', controller.addOne);

export = router;
import express from 'express';

import * as BusesController from '../controllers/buses.controller.js';

const router = express.Router();

router.get('', BusesController.getAll);
router.post('', BusesController.save);
export default router;
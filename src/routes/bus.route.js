import express from 'express';
import * as BusValidator from '../utils/validators/bus.validator.js'

import * as BusesController from '../controllers/buses.controller.js';

const router = express.Router();



router.get('', BusesController.getAll);
router.post('', ...BusValidator.createBusValidator(), BusesController.save);
export default router;
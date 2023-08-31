import express from 'express';
import * as BusValidator from '../utils/validators/bus.validator.js'
import * as BusesController from '../controllers/buses.controller.js';
import { catchErrors } from '../utils/error.handling.js'

const router = express.Router();

router.get('', catchErrors(BusesController.getAll));
router.get('/:id', catchErrors(BusesController.getById));
router.post('', ...BusValidator.createBusValidator(), catchErrors(BusesController.save));
export default router;
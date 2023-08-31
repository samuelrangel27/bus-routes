import express from 'express';
import * as BusValidator from '../utils/validators/bus.validator.js'
import * as BusesController from '../controllers/buses.controller.js';
import { catchErrors } from '../utils/error.handling.js'

const router = express.Router();

router.get('', catchErrors(BusesController.getAll));
router.get('/:_id', catchErrors(BusesController.getById));
router.post('', ...BusValidator.createBusValidator(), catchErrors(BusesController.save));
router.put('', ...BusValidator.createBusValidator(), catchErrors(BusesController.update));
router.delete('/:_id', catchErrors(BusesController.deleteById));
export default router;
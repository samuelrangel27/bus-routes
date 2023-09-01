import express from 'express';
import * as StationsController from '../controllers/stations.controller.js';
import * as StationValidator from '../utils/validators/station.validator.js'
import { catchErrors } from '../utils/error.handling.js'

const router = express.Router();
router.get('', catchErrors(StationsController.getAll));
router.get('/:_id', catchErrors(StationsController.getById));
router.post('', ...StationValidator.createStationValidator(), catchErrors(StationsController.save));
router.put('', ...StationValidator.updateStationValidator(), catchErrors(StationsController.update));
router.delete('/:_id', catchErrors(StationsController.deleteById));
export default router;
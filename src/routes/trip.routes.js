import express from 'express';
import * as TripsController from '../controllers/trip.controler.js';
// import * as StationValidator from '../utils/validators/station.validator.js'
import { catchErrors } from '../utils/error.handling.js';

const router = express.Router();
router.get('', catchErrors(TripsController.getAll))
router.post('', catchErrors(TripsController.save));
export default router;
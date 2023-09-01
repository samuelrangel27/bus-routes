import express from 'express';
import * as RoutesController from '../controllers/routes.controller.js';
// import * as StationValidator from '../utils/validators/station.validator.js'
import { catchErrors } from '../utils/error.handling.js';

const router = express.Router();
router.get('', catchErrors(RoutesController.getAll))
router.post('', catchErrors(RoutesController.save));
export default router;
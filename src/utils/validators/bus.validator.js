import { body } from 'express-validator';
import { handleValidationErrors } from './common.validator.js';

export const createBusValidator = () => [
    body('vin').isLength({min: 14, max: 14}).withMessage('Vin field is required and must be 14 characters length string'),
    body('brand').isLength({min:1, max:50}).withMessage('Brand field is required and must be a 50 characters max string'),
    body('model').isLength({min:1, max:50}).withMessage('Model field is required and must be a 50 characters max string'),
    body('seatsAmount').isInt({min:1,max:100}).withMessage('Seats amount must be a number between 1 and 100'),
    handleValidationErrors
];

export const updateBusValidator = () => [
    body('_id').exists().withMessage('Id field is required'),
    ...createBusValidator()
]
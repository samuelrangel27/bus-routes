import { body } from 'express-validator';
import { handleValidationErrors } from './common.validator.js';

export const createStationValidator = () => [
    body('address').exists().withMessage('Address field is required'),
    body('city').exists().withMessage('City field is required'),
    body('zip').matches(/^(\d{5})?$/).withMessage('Invalid Zip code'),
    body('description').exists().withMessage('Description field is required'),
    handleValidationErrors
];

export const updateStationValidator = () => [
    body('_id').exists().withMessage('Id field is required'),
    ...createStationValidator()
]
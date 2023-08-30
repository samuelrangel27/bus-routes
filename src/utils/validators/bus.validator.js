import { body,validationResult } from 'express-validator';

export const parseErrors = ({errors}) => errors.map(e => e.msg);

export const createBusValidator = () => [
    body('vin').isLength({min: 14, max: 14}).withMessage('Vin field is required and must be 14 characters length string'),
    body('marca').isLength({min:1, max:50}).withMessage('Marca field is required and must be a 50 characters max string'),
    body('modelo').isLength({min:1, max:50}).withMessage('Modelo field is required and must be a 50 characters max string'),
    (req,res,next) => {
        const errors = validationResult(req);
        if(!errors.isEmpty())
            return res.status(400)
                .json({
                    message: 'There are some validation errors',
                    errors: parseErrors(errors)
                })
        next();
    }
];
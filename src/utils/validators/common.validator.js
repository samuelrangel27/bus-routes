import { validationResult } from 'express-validator';
import { ApplicationError } from '../error.handling.js';
import HttpStatus from 'http-status-codes';

export const parseErrors = ({errors}) => errors.map(e => e.msg);

export const handleValidationErrors = (req,res,next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty())
        throw new ApplicationError('There are some validation errors', HttpStatus.BAD_REQUEST, parseErrors(errors));
    next();
}
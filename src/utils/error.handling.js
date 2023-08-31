export const catchErrors = action => (req,res,next) => action(req, res).catch(next);

export const errorHandler = (err,req,res,next) => {
	console.log('error management:', err);
    let errObj = {
		message: 'An unexpected error has ocurred'
	};
    if(err instanceof ApplicationError){
        const {message, errors, code} = err;
        errObj = { message, errors, code};
    }
	res.status(500).json(errObj);
}

export class ApplicationError extends Error {
    constructor(message, code, errors) {
        super(message || 'Business rule validation error');
        this.name = 'Validation Error';
        this.code = code || 400;
        this.errors = errors || [message];
    }
}
import HttpStatus from 'http-status-codes';
import * as TripService from '../services/trip.service.js';

export const getAll = async (req,res,next) => {
	const data = await TripService.getAll();
	res.status(HttpStatus.OK)
		.json({
			code: HttpStatus.OK,
			data,
			message: 'Success'
		});
}

export const save = async (req, res, next) => {
	const data = await TripService.add(req.body);
	if(data)
		return res.status(HttpStatus.CREATED).json({ 
			message: 'Success',
            code: HttpStatus.CREATED,
			data
		});
}
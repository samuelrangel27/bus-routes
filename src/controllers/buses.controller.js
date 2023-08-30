import HttpStatus from 'http-status-codes';
import * as BusService from '../services/bus.service.js';

export const getAll = async (req,res,next) => {
	try{
		const data = await BusService.getAllBuses();
		res.status(HttpStatus.OK)
			.json({
				code: HttpStatus.OK,
				data,
				message: 'Success'
			});
	}
	catch(ex){
		next(ex);
	}
}

export const save = async (req, res, next) => {
	try{
		console.log(req.body);
		const bus = await BusService.addBus(req.body);
		if(bus)
			return res.status(201).json({ 
				message: 'created',
				data: bus
			});
	}
	catch(ex){
		console.log(ex);
		next(ex);
	}
}
import HttpStatus from 'http-status-codes';
import * as BusService from '../services/bus.service.js';

export const getAll = async (req,res,next) => {
	const data = await BusService.getAllBuses();
	res.status(HttpStatus.OK)
		.json({
			code: HttpStatus.OK,
			data,
			message: 'Success'
		});
}

export const getById = async (req,res,next) => {
	const data = await BusService.getById(req.params);
	res.status(HttpStatus.OK)
		.json({
			code: HttpStatus.OK,
			data,
			message: 'Success'
		});
}

export const save = async (req, res, next) => {
	const bus = await BusService.addBus(req.body);
	if(bus)
		return res.status(201).json({ 
			message: 'Created',
			data: bus
		});
}
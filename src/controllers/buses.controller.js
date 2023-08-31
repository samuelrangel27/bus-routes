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
		return res.status(HttpStatus.CREATED).json({ 
			message: 'Success',
			data: bus
		});
}

export const update = async (req, res, next) => {
	const bus = await BusService.updateBus(req.body);
	if(bus)
		return res.status(HttpStatus.OK).json({ 
			message: 'Success',
			code: HttpStatus.OK,
			data: bus
		});
}

export const deleteById = async (req, res, next) => {
	const bus = await BusService.deleteById(req.params);
	return res.status(HttpStatus.OK).json({ 
		message: 'Success',
		code: HttpStatus.OK,
		data: bus
	});
}
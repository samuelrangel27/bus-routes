import HttpStatus from 'http-status-codes';
import * as StationService from '../services/station.service.js';

export const getAll = async (req,res,next) => {
    const data = await StationService.getAllStations();
    res.status(HttpStatus.OK)
        .json({
            code: HttpStatus.OK,
            data,
            message: 'Success'
        });
}
export const getById = async (req,res,next) => {
	const data = await StationService.getById(req.params);
	res.status(HttpStatus.OK)
		.json({
			code: HttpStatus.OK,
			data,
			message: 'Success'
		});
}

export const save = async (req, res, next) => {
	const data = await StationService.add(req.body);
	if(data)
		return res.status(HttpStatus.CREATED).json({ 
			message: 'Success',
            code: HttpStatus.CREATED,
			data
		});
}

export const update = async (req, res, next) => {
	const data = await StationService.update(req.body);
	if(data)
		return res.status(HttpStatus.OK).json({ 
			message: 'Success',
			code: HttpStatus.OK,
			data: data
		});
}

export const deleteById = async (req, res, next) => {
	const data = await StationService.deleteById(req.params);
	return res.status(HttpStatus.OK).json({ 
		message: 'Success',
		code: HttpStatus.OK,
		data: data
	});
}
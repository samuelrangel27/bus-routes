import HttpStatus from 'http-status-codes';
import * as StudentService from '../services/bus.service.js';

export const getAll = async (req,res,next) => {
	try{
		const data = await StudentService.getAllBuses();
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
import Route from '../models/route.js';
import { ApplicationError } from '../utils/error.handling.js';

export const getAll = async () => { 
	return Route.find().populate(['source','destiny']);
}

export const getScheduleFromRoute = async ({_id, scheduleId}) => {
    const route = await Route.findById(_id);
    if(!route)
        throw new ApplicationError(`No route with id:${_id} found`);
    const schedule = route.schedules.id(scheduleId)
    if(!schedule)
        throw new ApplicationError(`No schedule with id: ${scheduleId} was found for route:${_id}`);
    return schedule;
}

export const add = ({source, destiny, schedules,ticketPrices}) => {
    const data = new Route({source, destiny, schedules, ticketPrices});
    return data.save()
        .then(result => result);
}
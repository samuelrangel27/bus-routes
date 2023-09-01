import Trip from '../models/trip.js';
import { ApplicationError } from '../utils/error.handling.js';
import * as RouteService from './route.service.js';

export const getAll = async () => { 
	return Trip.find().populate('route');
}

export const add = async ({routeId, scheduleId, day}) => {
    const schedule = await RouteService.getScheduleFromRoute({_id:routeId, scheduleId});
    if(!schedule.days.some(x => x === day))
        throw new ApplicationError('No day');
    schedule.days = [day];
    const data = new Trip({route:routeId, schedule});
    return data.save()
        .then(result => result);
}
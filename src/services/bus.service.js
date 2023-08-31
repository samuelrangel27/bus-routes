import Bus from '../models/bus.js';
import { ApplicationError } from '../utils/error.handling.js';
export const getAllBuses = async () => { 
	return Bus.find();
}

export const getById = ({id}) => {
    return Bus.findById(id);
}

export const addBus = ({vin, brand, model, seatsAmount}) => {
    if (brand.toLowerCase() === 'honda')
        throw new ApplicationError('Honda brand is no longer supported');
    const bus = new Bus({
        vin,
        brand,
        model,
        seatsAmount
    });
    return bus.save().then(result => {
        console.log(result);
        return result;
    })
    .catch(err => {
        console.log(err);
        throw err;
    })
}
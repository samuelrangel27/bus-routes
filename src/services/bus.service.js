import Bus from "../models/bus.js";
import { ApplicationError } from '../utils/error.handling.js';

export const getAllBuses = async () => { 
	return Bus.find();
}

export const getById = ({_id}) => {
    return Bus.findById(_id);
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

export const updateBus = async ({_id, vin, brand, model, seatsAmount}) => {
    // const bus = getById(id);
    const bus = await Bus.findByIdAndUpdate(_id, {brand, model, seatsAmount});
    if(!bus)
        throw new ApplicationError(`No bus with id ${_id} was found`, 404);
    return getById({_id});
}

export const deleteById = async ({_id}) => {
    const bus = await getById({_id});
    if(!bus)
        throw new ApplicationError(`No bus with id ${_id} was found`, 404);
    await Bus.deleteOne({_id});
    return bus;
}
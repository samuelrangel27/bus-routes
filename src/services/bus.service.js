import Bus from '../models/bus.js';
export const getAllBuses = async () => { 
	return Bus.find();
}

export const addBus = ({vin, brand, model, seatsAmount}) => {
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
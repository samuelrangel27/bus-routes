import Bus from '../models/bus.js';
export const getAllBuses = async () => { 
	return Bus.find();
}

export const addBus = ({vin, marca, modelo}) => {
    const bus = new Bus({
        vin,
        marca,
        modelo
    });
    bus.save().then(result => {
        console.log(result);
        return result;
    })
    .catch(err => {
        console.log(err);
        throw err;
    })
}
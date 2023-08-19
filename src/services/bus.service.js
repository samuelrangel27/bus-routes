import Bus from '../models/bus.js';
export const getAllBuses = async () => { 
	return Bus.find();
}

export const addBus = () => {
    const bus = new Bus({
        vin: '12345',
        marca: 'Kia',
        modelo: 'Busstage'
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
import Station from "../models/station.js";

export const getAllStations = async () => { 
	return Station.find();
}

export const getById = ({_id}) => {
    return Station.findById(_id);
}

export const add = ({address, city, zip, description}) => {
    const data = new Station({ address, city, zip, description});
    return data.save()
        .then(result => result);
}

export const update = async ({_id,address, city, zip, description}) => {
    const data = await Station.findByIdAndUpdate(_id, {brand, model, seatsAmount});
    if(!data)
        throw new ApplicationError(`No station with id ${_id} was found`, 404);
    return getById({_id});
}

export const deleteById = async ({_id}) => {
    const data = await getById({_id});
    if(!data)
        throw new ApplicationError(`No bus with id ${_id} was found`, 404);
    await Bus.deleteOne({_id});
    return data;
}
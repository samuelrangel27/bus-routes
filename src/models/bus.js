import mongoose from 'mongoose';
const { Schema } = mongoose;

const busSchema = new Schema({
    vin: {
        type:String,
        required: true
    },
    brand: {
        type:String,
        required: true
    },
    model: {
        type:String,
        required: true
    },
    seatsAmount: {
        type: Number,
        required: true
    }
}, {timestamps: true});

export default mongoose.model('Bus', busSchema);
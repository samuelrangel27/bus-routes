import mongoose from 'mongoose';
const { Schema } = mongoose;

const busSchema = new Schema({
    vin: {
        type:String,
        required: true
    },
    marca: {
        type:String,
        required: true
    },
    modelo: {
        type:String,
        required: true
    }
}, {timestamps: true});

export default mongoose.model('Bus', busSchema);
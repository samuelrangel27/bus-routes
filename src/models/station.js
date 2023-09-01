import mongoose from 'mongoose';
const { Schema } = mongoose;

const stationSchema = new Schema({
    address: {
        type:String,
        required: true
    },
    city: {
        type:String,
        required: true
    },
    zip: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, {timestamps: true});

export default mongoose.model('Station', stationSchema);
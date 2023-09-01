import mongoose from 'mongoose';
import PassengerType from './passenger.type.js';
import scheduleSchema from './schedule.js';

const { Schema } = mongoose;

const routeSchema = new Schema({
    source: {
        type: mongoose.ObjectId,
        ref: 'Station'
    },
    destiny: {
        type: mongoose.ObjectId,
        ref: 'Station'
    },
    schedules: [scheduleSchema],
    ticketPrices :[new Schema({
        price: {
            type: Number,
            required: true
        },
        passengerType: {
            type: Number,
            required: true,
            default: PassengerType.Normal
        }
    })]
});

export default mongoose.model('Route', routeSchema);
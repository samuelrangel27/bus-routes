import mongoose, { Schema } from 'mongoose';
import scheduleSchema from './schedule.js';

const ticketSchema = new Schema({
    passenger: new Schema({
        name: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        }
    }),
    seatNumber: {
        type: Number,
        required: true
    }
});

const tripSchema = new Schema({
    route : {
        type: mongoose.ObjectId,
        ref: 'Route',
        required: true
    },
    schedule : scheduleSchema,
    tickets: [ticketSchema]
})

export default mongoose.model('Trips', tripSchema);
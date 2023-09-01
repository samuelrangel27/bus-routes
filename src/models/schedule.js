import { Schema } from 'mongoose';
const scheduleSchema = new Schema({
    hour: {
        type: Number,
        required: true
    },
    minute: {
        type: Number,
        required: true
    },
    days: [{
        type: Number,
        required: true
    }]
});

export default scheduleSchema;
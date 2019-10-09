const mongoose = require ('mongoose');
const { Schema } = require ('mongoose');

const eventsSchema = new Schema({
    eventName: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        require: true
    },
    time: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = mongoose.model('Event', eventsSchema);
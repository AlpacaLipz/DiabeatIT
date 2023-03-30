const mongoose = require('mongoose')

// !Edit
const LogsSchema = new mongoose.Schema(
    {
        bloodSugar: { 
            type: Number,
            required: [true, 'Please enter a number' ],
            minLength: [1, 'Must be at least 1 digit']
        },
        date: {
            type: Date,
            required: [true, 'Date required' ],
        }, 
        dayNight: { type: String
        },
    },
    { timestamps: true }
);

// !Edit
const Logs = mongoose.model('Logs', LogsSchema );

// !Edit
module.exports = Logs;

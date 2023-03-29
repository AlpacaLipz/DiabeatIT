const mongoose = require('mongoose')

// !Edit
const userSchema = new mongoose.Schema(
    {
        userId: { 
            type: Number
        },

    },
    { timestamps: true }
);

// !Edit
const User = mongoose.model('User', LogsSchema );

// !Edit
module.exports = User;

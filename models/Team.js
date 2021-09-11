const mongoose = require('mongoose');


const TeamSchema = mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    sheet: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    tier: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Teams', TeamSchema);
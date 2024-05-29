const mongoose = require('mongoose')

const Schema = mongoose.Schema

const rideSchema = new Schema({
    title : {
        type : String,
        required : true
    },
    distance : {
        type : Number,
        required : true
    },
    duration : {
        type : Number,
        required : true
    }
} , {timestamps : true})

const Ride = mongoose.model('ride',rideSchema)

module.exports = Ride
const Ride = require('../models/rides')

const rides = async (req,res) => {
    const result = await Ride.find()
    if (!result){
        return res.json("Cannot find any ride")
    }
    
    res.json(result)
}

const insert_ride = async (req,res) => {
    const rides = new Ride(req.body)

    const result = await rides.save()

    if (!result){
        return res.json("Cannot add new ride")
    }
    
    res.json(result)
}

const get_ride = async (req,res) => {
    const result = await Ride.findById(req.params.id)

    if (!result){
        return res.json("Cannot find ride")
    }
    
    res.json(result)
}


const delete_ride = async (req,res) => {
    const result = await Ride.findByIdAndDelete(req.params.id)
    
    if (!result){
        return res.json("Cannot delete ride")
    }
    
    res.json(result)
}

const update_ride = async (req,res) => {
    const result = await Ride.findByIdAndUpdate( req.params.id , req.body)
    
    if (!result){
        return res.json("Cannot find ride")
    }
    
    res.json(result)
}

module.exports = {
    rides,
    insert_ride,
    get_ride,
    delete_ride,
    update_ride
}
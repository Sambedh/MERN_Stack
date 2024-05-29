const express = require('express')
const routes = express.Router()
const {rides,insert_ride,get_ride,delete_ride,update_ride} = require('../controller/rideController')

routes.get('/',rides)

routes.post('/',insert_ride)

routes.get('/:id',get_ride)

routes.delete('/:id',delete_ride)

routes.patch('/:id',update_ride)

module.exports = {routes}
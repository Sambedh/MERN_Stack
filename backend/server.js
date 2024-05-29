const express = require('express')
const app = express()
const env = require('dotenv').config()
const rideRoutes = require('./routes/rideRoutes')
const mongoose = require('mongoose')

mongoose.connect(process.env.URI)
.then(()=>{
    console.log("Connected to Database and listening on Port",process.env.PORT)
    app.listen(process.env.PORT)
}).catch((err)=>{
    console.log("Cannot connect to database.\n",err)
})

app.use(express.json())


app.use((req,res,next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/ride', rideRoutes.routes)
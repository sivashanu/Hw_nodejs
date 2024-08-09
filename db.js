const mongoose = require('mongoose');


const mongoURL =  'mongodb://localhost:27017/hotels'

mongoose.connect(mongoURL

)

const db = mongoose.connection;


db.on('connected',() => {
    console.log('Connected to MongoDB Server');
})

db.on('error',(err) => {
    console.log('MongoDB connection error : ',err);
})

db.on('disconnected',() => {
    console.log('MongoDB disconnected');
})

module.exports = db;

const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/CloudBook?readPreference=primary&appname=MongoDB%20Compass&ssl=false';

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log('Connected to Mongo Successfully');
    })
}

module.exports = connectToMongo;
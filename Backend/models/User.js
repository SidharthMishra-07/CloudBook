const mongoose = require('mongoose');

const UserSchema = new Schema({
    username:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
  });

  model.exports = mongoose.model('user',UserSchema)  //mongoose.model takes,the name of the model and a schema.
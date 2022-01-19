const mongoose = require('mongoose');

const NotesSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    subject:{
        type: String
    },
    description:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
  });

  model.exports = mongoose.model('notes',NotesSchema)  //mongoose.model takes,the name of the model and a schema.
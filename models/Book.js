const mongoose = require('mongoose');

//creating book schema
const BookSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String
    }
});
//exporting Book schema
module.exports = mongoose.model('books', BookSchema);
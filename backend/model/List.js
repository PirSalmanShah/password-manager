const mongoose = require('mongoose');
const { Schema } = mongoose;
const ListSchema = new Schema({
    id: String,
    name: String,
    url: String,
    password:String
})

module.exports= mongoose.model("list",ListSchema)
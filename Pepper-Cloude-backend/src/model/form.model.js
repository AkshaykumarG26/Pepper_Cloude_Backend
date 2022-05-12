const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
  form: { type: String },
},{
    versionKey: false,
    timestamps: true
});


module.exports = mongoose.model('form', formSchema)
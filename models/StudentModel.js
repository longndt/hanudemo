const mongoose = require("mongoose")

var StudentSchema = new mongoose.Schema({
   name: String,
   age: Number,
   email: String,
   phone: String
}, {
   versionKey: false
})

var StudentModel = mongoose.model('student', StudentSchema, 'student')
module.exports = StudentModel


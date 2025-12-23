const mongoose = require('mongoose')

const schema ={
    studentName:String,
    studentMobile:Number,
    studentAge:Number,
}

module.exports = mongoose.model("students",schema)
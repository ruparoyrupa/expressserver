const mongoose = require('mongoose');


const studentModel = mongoose.Schema({

    name     : String ,
    age      : Number ,
    skill    : String ,
    location : String
},{
    timestamps : true
})

module.exports = mongoose.model( 'student' ,  studentModel );

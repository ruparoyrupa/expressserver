const mongoose = require('mongoose');

// Admin models schema...............

const adminModel = mongoose.Schema({
    name :{
        type : String ,
        required : [ true , 'Name fields is require']
    },
    age : {
        type : Number ,
        required : [ true , 'Age fields is require'],
        
    },
    email : {
        type : String ,
        required : [ true , 'Email fields is require'],
        unique : true
    },
    phone : {
        type : String ,
        required : [ true , 'Phone fields is require'],
        unique : true
    },
    username : {
        type : String ,
        required : [ true , ' Username fields is require'],
        unique : true,
        minLength : 5,
        maxLenth : 10,
        lowercase  : true
    },
    password : {
        type : String ,
        required : [ true , ' Password fields is require'],
        unique : true,
        minLength : 4,
        maxLenth : 10
    },
    location : {
        type : String ,
        required : false,
        default : "Dhaka"
    },
    skill : {
        type : String ,
        
        required : false
    
    }
} , {
    timestamps : true
});

module.exports = mongoose.model('Admin' , adminModel);
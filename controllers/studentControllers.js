
const student = require('../models/studentModel');


// Get All Students

const getAllStudents = async ( req , res ) => {
  
  let data = await student.find();
  res.status(200).json(data);
};


// Get Single Students

const getSingleStudents = async ( req , res ) => {
   
  let id = req.params.id;

  singal_data = await student.findById(id);

  res.status(200).json(singal_data);
  };


  // Post Students data

const creatStudents = async ( req , res ) => {
  let data = await student.create({
    
   name :req.body.name,
   age  : req.body.age,
   skill: req.body.skill,
   location : req.body.location
  });

  
  res.status(201).json({
    message : 'Data add succesfully'
  });
  };
  

  // Update Students data

const updateStudents =  async ( req , res ) => {
   
  let id = req.params.id ;
  
  await student.findByIdAndUpdate(id , req.body ,{
    new : true

  })

  res.status(200).json({
    message : 'Students data updated succesfully'
  })

  };

  //  Students Data Delete

const DeleteStudents = async ( req , res ) => {
  let id = req.params.id ;

  await student.findOneAndDelete(id);

  res.status(200).json({
    message : 'Student data deleted succesfully'
  })

  };



  module.exports = {
    getAllStudents ,
    getSingleStudents ,
    creatStudents ,
    updateStudents ,
    DeleteStudents
  }
  
  
  
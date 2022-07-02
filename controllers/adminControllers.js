
const Admin = require('../models/adminModels')
const bcrypt = require('bcryptjs');



const getAllAdmins = async ( req ,res ) => {

  let data = await Admin.find();

    res.status(302).json(data);
};


const getSingleAdmin = async ( req ,res ) => {

    let id = req.params.id ;

    let data = await Admin.findById(id)

    if (!data) {

        res.status(404).json({
            message : 'Data not found'
        })
        
    }else{
     
        res.status(302).json(data);

    }

   

};


const creatAdmins = async ( req ,res ) => {

 const { name , age , email , phone , username , password , location , skill } = req.body ;

//  ShasPassword


   const salt = await bcrypt.genSalt(10);
   const shasPassword = await bcrypt.hash( password , salt );

   if ( !name || !age || !email || !phone || !username || !password  || !skill ) {
    res.status(400).json({
        message : 'All fields are required'
    })

   }else{

    await Admin.create({
        ...req.body,
        password : shasPassword
       })
    
       res.status(201).json({
        message : 'Admin are created'
    })

   }

 
};


const updateAdmin = async ( req ,res ) => {

     await Admin.findByIdAndUpdate(req.params.id , req.body , {
        new :true
    });

    res.status(200).json({
        message : 'Data update succesfully'
    })

   
};


const deleteAdmin = async ( req ,res ) => {
  
  const delete_data = await Admin.findById(req.params.id );

  if (delete_data) {

    const data = await Admin.findByIdAndDelete(req.params.id );

    res.status(200).json({
        message : `${data.name} data deleted succesfully`
    })
   

  }else{
   
    res.status(404).json({
        message : 'Data not found'
    })

  }


   
};


// Admin profile controlar

const adminProfile = ( req ,res ) => {
    res.status(200).json(req.user)
}

// Admin home controlar

const adminHome = ( req ,res ) => {
    res.status(200).json(req.user)
}


module.exports ={
    getAllAdmins,
    getSingleAdmin,
    creatAdmins,
    updateAdmin,
    deleteAdmin,
    adminHome,
    adminProfile

}
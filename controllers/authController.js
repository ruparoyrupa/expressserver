
const Admin = require('../models/adminModels');

const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken')

//  Auth countroller

const adminLogin = async ( req , res ) => {

    const { email , phone , password } = req.body ;

// Cheak user by email or passord

    const long_data = await Admin.findOne({email}) ;
    const long_phone = await Admin.findOne({phone}) ;


  
 
// Validated email or phone

 if (!long_data) {
    res.status(400).json({
        message : 'Invaild email'
    })
 }else if (!long_phone) {
    res.status(400).json({
        message : 'Invaild phone'
    })
 }else {
   
    if   ((await bcrypt.compare(password , long_data.password)) ) {


       const token = jwt.sign({id : long_data.id} , process.env.JWT_SECRET , {

        expiresIn : "1d"
        
       }) 


        res.status(200).json({
            id : long_data.id,
            name : long_data.name,
            phone : long_data.phone,
            email : long_data.email,
            token : token
            
        })
        
    }else {
         res.status(400).json({
            message : 'Wrong password'
        })

    }

 }
   
}

//  Auth export

module.exports = {
    adminLogin  
}
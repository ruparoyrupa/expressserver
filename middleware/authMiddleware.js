const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const Admin = require('../models/adminModels');


const authCheak = asyncHandler( async (req , res , next) =>{


    if (req.headers.authorization) {

        // creat token

        const token = req.headers.authorization.split(' ')[1];

        // valedate token

        const {id} = jwt.verify(token , process.env.JWT_SECRET);

        req.user = await Admin.findById(id);

        next();

    }else{
        res.status(404).json({
            message : 'Token not found'
        })
    }
  
}); 

module.exports = authCheak;
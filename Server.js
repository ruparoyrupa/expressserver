const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const colors = require('colors');
const connectMongoDB = require('./config/db');
const path = require('path');


const multer = require('multer');

const storage = multer.diskStorage({
  
  destination : (req , file , cb) => {

    if (file.fieldname == 'photo') {

      cb(null , './media/users');
      
    }else if (file.fieldname == 'cv') {
      
      cb(null , './media/cv');

    }


  },

  filename : (req , file , cb) => {

    if (file.fieldname == 'photo') {

      const extName = path.extname(file.originalname);
   

      let fileName = Date.now() + '-' + Math.round(Math.random() * 10000)  + extName ;
  
      cb(null , fileName);
      
    }else if (file.fieldname == 'cv') {
      let date = new Date();

      let current_date = date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear();
      
      let fileName = current_date + '-' + file.originalname

      cb(null , fileName);

    }

   
  }


});

const upload = multer({
  storage : storage,
  lomits : (1024 * 1024),
  fileFilter : (req , file , cb) => {


    if (file.fieldname == 'photo') {

      if (file.mimetype == 'image/webp' || file.mimetype == 'image/png' || file.mimetype == 'image/jpg' || file.mimetype == 'image/jpeg' || file.mimetype == 'image/gif') {

        cb(null , true)
      }else{
        console.log('File invalied');
      }
      
    } else if (file.fieldname == 'cv') {

      if (file.mimetype == 'application/pdf') {

        cb(null , true)

      }else{
        console.log('CV file invalied');
      }
      
    }

    

  }
})




// Request body init
app.use(express.json());
app.use(express.urlencoded({extended : false}));

// Single field upload router

// app.post('/upload' , upload.array('photo' , 10) , (req , res) => {

//   console.log(req.files);
// })


// .............................................................


// Multiple fields upload


const cpUpload = upload.fields([
  {
    name : 'photo',
    maxCount : 10

  },
  {
    name : 'cv',
    maxCount : 1

  }
])



// Multiple fields upload router

app.post('/upload' , cpUpload , (req , res) => {

  console.log(req.files);
})


// Mongodb connection init

connectMongoDB();

// Environment variable init

const PORT = process.env.SERVER_PORT

// Student route use

app.use('/api/students' , require('./routes/Students'));


// Admin route use

app.use('/api/admins' , require('./routes/admin'))

// Add express server listener with port

app.listen( PORT , () => console.log(` Server is running on port ${PORT}`));
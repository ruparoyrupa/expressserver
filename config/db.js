const mongoose = require('mongoose');


const connectMongoDB  = async () => {

    try {

        let connect = await mongoose.connect(process.env.MONGO_DB);
        console.log(`Mongodb connect succesfull HOST : ${connect.connection.host}`.green);

    } catch (error) {
        console.log(`${error}`.red);
    }
}
  
    
module.exports = connectMongoDB ;
const mongoose = require('mongoose');
const config = require('../../config');

const Connect = async () => {
    try{

        //mongo db cloud connection
        const con = await mongoose.connect(config.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            
            })

            console.log(`MongoDB connected: ${con.connection.host}`);


    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = Connect;
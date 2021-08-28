const mongoose = require('mongoose');
require('dotenv').config();
const { MONGO_URI } = process.env


//create a connection function for mongodb
const connectDB = () => {
    mongoose.connect(MONGO_URI,{
        useNewUrlParser: true,
        useCreateIndex: true,
        UseUnifiedTopology: true,
        useFindAndModify:false
    })
    .then(()=>{
        console.log('mongodb connected successfully')

        //seed data
    })
    .catch((err) => {
        console.error(err.message);

        //Exit with failure
        Process.exit(1)
    })
}


//Async function
/*
const connectDB = async () => {
    try{
        await mongoose.connect(MONGO_URI,{
        useNewUrlParser: true,
        useCreateIndex: true,
        UseUnifiedTopology: true,
        useFindAndModify:false
        });

        console.log('Mongodb connected...')

        //seed
    } catch (error) {
console.error(err.message);

process.exit(1)
    }
}
*/
module.exports = connectDB







//C:\>"C:\Program Files\MongoDB\Server\4.4\bin/mongod.exe" --dbpath "c:\data\db"
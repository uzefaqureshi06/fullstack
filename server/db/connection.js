const mongoose = require('mongoose')
const MONGO_URI = 'mongodb+srv://uzefa-fullstack:uzefa-fullstack@uzefa-fullstack.wlpdn.mongodb.net/?retryWrites=true&w=majority&appName=uzefa-fullstack'

//1. create a normal async arrow function
//2. using mongoose library .connect method make the connection with the mongodb
//3. export the created function using module.exports
const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log('Connected to database')
    } catch (error) {
        console.log('Error connecting to database ', error);
    }
}

module.exports = connectDB
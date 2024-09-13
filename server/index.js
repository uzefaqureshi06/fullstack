const express = require('express')
const cors = require('cors');
const connectDB = require('./db/connection')
const blogRouter = require('./routes/blog')


//initialize the express application
const app = express();

//setting up cors
app.use(cors());

//setting up body-parser
app.use(express.json());

//creating blog route
app.use('/post', blogRouter)

//setting up the port
const PORT = 8000

//connecting database 
connectDB();





//listen the server app on the above port
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
})
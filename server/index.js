const express = require('express')
const cors = require('cors');

//initialize the express application
const app = express();

//setting up cors
app.use(cors());

//setting up body-parser
app.use(express.json());

//setting up the port
const PORT = 8000


//listen the server app on the above port
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
})
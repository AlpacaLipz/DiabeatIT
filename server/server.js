const express = require("express");
const app = express();
require('dotenv').config();
const port = process.env.PORT;
const cors = require("cors");
    
require("./config/mongoose.config");
    
app.use(cors(), express.json(), express.urlencoded({ extended: true }));

// !Edit for correct Database
const AllMyLogsRoutes = require("./routes/logs.routes");
AllMyLogsRoutes(app);


app.listen(port, () => console.log(`Listening on port: ${port}`) );

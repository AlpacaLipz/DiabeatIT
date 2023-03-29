const mongoose = require('mongoose')
const dbName = process.env.DB;
const username = process.env.ATLAS_USERNAME;
const pw = process.env.ATLAS_PASSWORD;
const connection_string = process.env.ATLAS_CONNECTION_STRING

const uri = `mongodb+srv://${username}:${pw}${connection_string}/${dbName}?retryWrites=true&w=majority`
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));
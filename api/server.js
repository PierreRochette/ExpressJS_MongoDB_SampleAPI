const express = require("express"); 
const bodyParser = require("body-parser"); 
const dbConfig = require("./config/database.config.js"); 
const mongoose = require("mongoose"); 
const UserRoute = require("./routes/userRoutes.js"); 

const app = express(); 

app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json()); 

mongoose.Promise = global.Promise; 

console.log(dbConfig.url); 

// function connectWithRetry() {
mongoose.connect(dbConfig.url)
.then(() => {
    console.log("Successfully connected to MongoDB");
}).catch(err => {
    console.log("Could not connect to the database : ", err); 
    // setTimeout(connectWithRetry, 5000); 
}); 
//}; 

// connectWithRetry(); 


app.get("/", (req, res) => {
    res.json({ "message": "Hello World"}); 
}); 

app.use("/user", UserRoute); 

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is listening on port 3000'); 
}); 
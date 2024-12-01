const path = require("path"); 
require("dotenv").config({ path: path.resolve(__dirname, '../../.env')}); 

var host = process.env.NODE_ENV === 'production' ? 'mongodb' : 'localhost'; 
console.log(host); 
var user = process.env.MONGO_INITDB_ROOT_USERNAME; 
var password = process.env.MONGO_INITDB_ROOT_PASSWORD;  
var url = `mongodb://${user}:${password}@${host}:27017`; 
console.log(url); 


module.exports = {
    url
}; 
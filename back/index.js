var express = require("express");
var apiServer = express();
var cors = require("cors");
apiServer.use(cors());
let mysql = require('mysql');

var host = "localhost";
var port = 3000;

const connection = mysql.createConnection({
  host: 'russo.salvatore.tave.osdb.it',
  user: 'c190_salvo',
  database: 'c190_primo',
  password:  "Az-17694"
});
connection.connect(function(error){
    if(!!error){
        console.log('error: '+error)
    }else{
        console.log('connection on db')
    }
 })
apiServer.listen(port, host, () => {
    console.log("Server start: http://%s:%d/", host, port);
});
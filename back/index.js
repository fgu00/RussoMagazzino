var express = require("express");
var apiServer = express();
var cors = require("cors");
apiServer.use(cors());
let mysql = require('mysql');

var host = "localhost";
var port = 3000;

const connection = mysql.createConnection({
  host: 'russo.salvatore.tave.osd',
  user: 'c190_salvo',
  database: 'c190_primo',
  password:  "Az-17694"
});
connection.connect(function(error){
    if(!!error){
        console.log('error: '+error)
    }else{
        console.log('connesso al db')
    }
 })
apiServer.listen(port, host, () => {
    console.log("Server partito: http://%s:%d/", host, port);
});
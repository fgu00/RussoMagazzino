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
apiServer.get("/insert",(req,res)=>{
    var a=req.query.id;
    console.log(a);
    var b=req.query.name;
    console.log(b);
    var c=req.query.quant;
    console.log(c);
    connection.query("INSERT INTO c190_primo.magazzino (id,nome,quantita) VALUES ('"+a+"','"+b+"','"+c+"')",
    function(err,rows,fields){
        if(err){
            res.status(400).json({ message: "sign-up faileds" });
        }else{
          res.status(200).json({ message: "sign-up success" });
      }
  }
      )
      connection.query("SELET *FROM magazzino ORDER BY name ASC",
      function(err,rows,fields){
        if(err){
            res.status(400).json({ message: "sign-up faileds" });
        }else{
          res.status(200).json({ message: "sign-up success" });
      }
  }
      )

  }); 
var express = require('express');
var app = express();

app.get('/', function(req,res){
  res.send('Node@Done');
}).listen(3000); 

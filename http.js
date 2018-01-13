var http = require("http");
var fs = require("fs");

http.createServer(function(request, response){
  fs.readFile("index.html", function(erro, conteudo){
    if(erro){
      console.log(erro);
    }
    else{
      response.write(conteudo);
    }
    response.end();
  })
}).listen(3000);

console.log("Servidor rodando em http://localhost:3000");

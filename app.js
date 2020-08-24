const http = require('http');

http.createServer(function(req, res){

    res.write("Servidor de NodeJS");
    res.end();
     
}).listen(3000);

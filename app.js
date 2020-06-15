var http = require('http');
var port = process.env.PORT || 3000;

http.createServer(function(req,res){
    res.writeHead(200,{'Content-type':'text/plain'});
    res.end('hello world!');
}).listen(port)
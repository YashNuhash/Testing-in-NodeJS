var formidable = require('formidable');
var http = require('http');

http.createServer( function(req,res){
 res.writeHead(200,{'Content-Type': 'text.html'});
 res.write('<form action= "fileupload" method="post" entype=
 "multipart/form-data">');

}).listen(8080);
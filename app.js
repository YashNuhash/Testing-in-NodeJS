var http = require('http');
var date = require('./module');
var fs = require('fs');

http.createServer(function(req,res){
    fs.readFile('index.html',function(err,data){

        res.writeHead(200,{'content-Type': 'text/html'});
        res.write(" The Current Time is : " + date.myDateTime());
        res.write(data);
        return res.end();
    });

    fs.appendFile('newFile.js','"This file created using appendFile() Module"', function(err){
        if(err) throw err;
        console.log(' OK, File Saved !');
    });

    fs.writeFile('newFile.js', '"This is my new text using writeFile() module"', function (err) {
        if (err) throw err;
        console.log('Replaced!');
      });

}).listen(8080);
var http = require('http');
var date = require('./module');
var fs = require('fs');
var url = require('url');


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

      var adress = 'http://localhost:8080/default.htm?year=2024&month=JUNE';
      var query = url.parse(adress, true);
      console.log(query.host);
      console.log(query.pathname);
      console.log(query.search);

      var queryData = query.query;
      console.log(queryData.month);


}).listen(8080);
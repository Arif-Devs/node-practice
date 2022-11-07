var fs = require('fs'); 
var http = require('http');

var server = http.createServer(function(req,res){

      if(req.url == "/"){
       
        // asynchronous way

       /* fs.readFile('Home.html', function (error, data){
            res.writeHead(200,{'content-type' : 'text/html'}); // head 
            res.write(data); //body
            res.end(); // request end
        });*/
     
        // synchronous way

        let mydata = fs.readFileSync('Home.html');
        res.writeHead(200,{'content-type' : 'text/html'});
        res.write(mydata);
        res.end();







    }  



});

server.listen(5050);
console.log("server run successful")
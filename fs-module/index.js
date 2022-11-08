var fs = require('fs'); 
var http = require('http');
const { type } = require('os');

var server = http.createServer(function(req,res){

      if(req.url == "/"){
       
        // asynchronous way

        fs.readFile('Home.html', function (error, data){
            res.writeHead(200,{'content-type' : 'text/html'}); // head 
            res.write(data); //body
            res.end(); // request end
        });
     
        // synchronous way

        /*let mydata = fs.readFileSync('index.html');
        res.writeHead(200,{'content-type' : 'text/html'});
        res.write(mydata);
        res.end();*/

        //fs File Write Async
       // ------------------------------------------------------------------------

       /* fs.writeFile('demo.txt', 'I am learning fs Module', function(error){

            if (error){
                res.writeHead(200,{'content-type' : 'text/html'})
                res.write('file write faild')
                res.end()
            }
            else{
                res.writeHead(200,{'content-type' : 'text/html'})
                res.write('file write success')
                res.end()
            }

        })*/

            
        //fs File Write sync
        //--------------------------------------------------

        


























}  



});

server.listen(5050);
console.log("server run successful")
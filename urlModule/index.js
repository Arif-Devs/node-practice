var http = require ('http')
var URL = require ('url')

var server = http.createServer(function (req, res){
    if (req.url == '/'){  // '/' means home page
        res.writeHead(200, {'Content-Type' : 'text/html'}) // Head section
        res.write('<h1>This Is Home Page</h1>') // Body section
        res.end(); //for end receive 
        
    }
    else if (req.url == '/about'){
        res.writeHead(200,{'content.type' : 'text/html'})
        res.write('<h1>This Is About Me Page</h1>')
        res.end();
    }
    
    else if (req.url == '/contact'){
        res.writeHead(200,{'content-type' : 'text/html'})
        res.write('<h1>This Is Contact Page</h1>')
        res.end();
    }


})

server.listen(5050)
console.log('server is running')


var server = http.createServer(function (req, res){
    var myURL = 'http://arifsaad.com/blog.html?year=2022&month=november';

    var myURLobj = URL.parse(myURL, true);

    var myHostName = myURLobj.host;
    var myPathName = myURLobj.PathName
    var mySearchName = myURLobj.search

    res.writeHead(200,{'content-Type' : 'text/html'})
    res.write(myHostName);
    res.end();

})



server.listen(5050);
console.log('server run successfully')


var fs = require ('fs')
var http = require ('http')

var server=http.createServer(function (req, res){

    if (req.url == "/"){

        /*let result = fs.existsSync('demo.txt')
        if(result){
            res.end('true')
        }
        else{
            res.end('false')
        }*/
    
    //-------------async--------------

    fs.exists ('demo.txt', function (result){

        if(result){
            res.end('file exists')
        }
        else {
            res.end('file missing')
        }
    })
    
    }   
    
})

server.listen(5050)
console.log('okay')
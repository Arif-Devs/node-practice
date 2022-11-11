var fs = ('fs')
var http = ('http')

var server=http.createServer(function (req, res){

    if (req.url == "/"){

        let result = fs.existsSync('demo.txt')
        if(result){
            res.end('true')
        }
        else{
            res.end('false')
        }
    }

})

server.listen(5050)
console.log('okay')
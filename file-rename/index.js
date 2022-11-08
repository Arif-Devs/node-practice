var fs = require ('fs')
var http = require ('http')


var server = http.createServer(function(req, res){
    
    if(req.url == '/'){

        fs.rename('demo.txt','new demo' ,function(error){

            if(error){
                res.writeHead(200,{'content-type' : 'text/html'})
                res.write('rename faild')
                res.end()
            }
            else{
                res.writeHead(200,{'content-type' : 'text/html'})
                res.write('rename success')
                res.end()
            }


        })
     }
})

server.listen(5050)
console.log('file-rename')
var fs = require ('fs')
var http = require ('http')


var server = http.createServer(function(req, res){
    
    if(req.url == '/'){

        /*for sync
       let error = fs.renameSync('demo.txt', 'new demo.txt')*/

        fs.rename('demo.txt','abc.txt',function(error){

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
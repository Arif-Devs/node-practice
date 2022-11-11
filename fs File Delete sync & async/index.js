var fs = require ('fs')
var http = require ('http')

var server = http.createServer(function(req, res){

    if(req.url == "/"){

       /* fs.unlink ('demo.txt', function (error){
            if (error){
                res.writeHead(200,{'content-type' : 'text/html'})
                res.write('file delete falid')
                res.end()
                
            }
            else{
                res.writeHead(200,{'content-type' : 'text/html'})
                res.write('file delete success')
                res.end()
            }
     
     
      })*/
//-----------------------sync way------------------------------
      
let error = fs.unlinkSync ('index.html')

        if (error){
            res.writeHead(200,{'content-type' : 'text/html'})
            res.write('file delete falid')
            res.end()
            
        }
        else{
            res.writeHead(200,{'content-type' : 'text/html'})
            res.write('file delete success')
            res.end()
        }
  


}
})

server.listen(5050)
console.log('server is okay')
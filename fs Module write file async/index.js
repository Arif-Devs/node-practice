var fs = require ('fs')
var http = require ('http')
const { type } = require('os')


var server = http.createServer(function(req, res){

    if (req.url == '/'){


        /*fs.writeFile('demo.txt', 'hello', function(error){
           
            if(error){
                res.writehead(200,{'content-type' : 'text/html'})
                res.write('file write faild')
                res.end()
            }
                else{
                    res.writeHead(200,  {'content-type' : 'text/html'})
                    res.write('file read success')
                    res.end()
                }
        })
    }*/


    //sync way

   let error = fs.writeFileSync('demo.txt', 'hello')

    if(error){
        res.writeHead(200, {'content-type' : 'text/html'})
        res.write('file write faild')
        res.end()
    }
    else{
        res.writeHead(200,{'content-type' : 'text/html'})
        res.write('file write success')
        res.end()
    }
   
}

})

server.listen(5050)
console.log('run success')
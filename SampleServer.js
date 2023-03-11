var http=require('http')
var url =require('url')
var fs=require('fs')
http.createServer(function(req,res){
    var q = url.parse(req.url,true)
    console.log(q.query)
    if(q.pathname==='/'){
        fs.readFile('index.html',function(err,data){
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write(data)
            res.end()
        })
    }else if(q.pathname==='/signupAction'){
        res.write('Signup')
        res.end()
    }
    else{
        res.write('err')
        res.end()
    }
}).listen(7000)
console.log('Server up')
const express =require('express')
const app=express()
const path=require('path')
app.use(function(req,res,next){console.log("middleware")
next()
})
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'index.html'))
})
app.get('/signupAction',function(req,res){
    res.sendFile(path.join(__dirname,'index.html'))
})
app.post('/signupAction',(req,res)=>res.send('account created'))
app.get('/about',(req,res)=>res.send('about'))

app.listen(3000,function(){
    console.log('Server up')
})


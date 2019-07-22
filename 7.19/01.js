var express=require('express')
var app=express()
var path=require("path")
var bodyParser=require('body-parser')
var publicpath=path.resolve(__dirname,"public")

// post 针对JSON和字符串
// 处理JSON数据的请求
app.use(bodyParser.json())
// 处理字符串数据的请求
app.use(bodyParser.urlencoded({extended:false}))
// 使用静态资源
app.use(express.static(publicpath))
app.get("/",(req,res)=>{
    res.send("首页")
})
app.post("/dopost",(req,res)=>{
    var body=req.body;
    console.log(body)
    res.send("post数据请求成功")
})
app.listen(3000)
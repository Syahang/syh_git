var express=require('express')
console.log(express)
var app=express()
// 设置模板引擎
// app.engine("views engine","ejs")
app.set("views",__dirname+"/views")
app.set("view engine","ejs")
app.get("/",(req,res)=>{
    // express包含ejs res=》render
    console.log(res)
    var list=['1','2','3']
    res.render('index',{list:list})
})
app.listen(3000)
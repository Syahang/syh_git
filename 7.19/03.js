var express=require('express')
var art=require("express-art-template")
console.log(express)
var app=express()
// 设置模板引擎
app.engine("art",art)
app.get("/",(req,res)=>{
    // 
    console.log(res)
    var list=['1','2','3']
    // .art必须写上，不然express-art-template识别不到模板引擎
    res.render('new.art',{list:list})
})
app.listen(3000)
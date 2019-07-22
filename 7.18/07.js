// 搭建静态资源服务器
var express=require('express')
var path=require("path")
var app=express()
// express.static:使用静态资源
// app.use() 使用，中间件 插件

console.log(__dirname) //D:\jqury\4、框架\7.18

// 把最后一个参数转化为绝对路径
var publicpath=path.resolve(__dirname,"public")
app.use(express.static(publicpath)) 
app.listen(3000)   
 

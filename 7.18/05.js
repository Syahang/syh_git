// 在express中路径不区分大小写,还支持链式调用
// send和end的区别
var express=require("express")
console.log(express)
var app=express()
// 相当于执行get请求
// app.get("/",(req,res)=>{
//     res.send({"success":"ok"})
// })
// app.get("/About",(req,res)=>{
//     res.send("about")
// }).get("/news",(req,res)=>{
//     res.send('news')
// })

app.get("/",(req,res)=>{
    res.send('首页')
})
// 获取路由的动态参数
//get()前端规定  不是后台的get
app.get("/about/:id",(req,res)=>{
    console.log(req.params)
    res.send("路由接收的参数为："+req.params.id)
})
app.listen(3000)

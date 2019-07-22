var express=require("express")
// console.log(express)
var app=express()
app.get("/new",(req,res)=>{
    console.log(req.query)
    res.send("路由接收成功")
})
app.listen(3000)

// post：使用中间件 

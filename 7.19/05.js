var express=require('express')
var app=express()
var cookieParser=require("cookie-parser")
app.use(cookieParser())
app.get("/",(req,res)=>{
    res.send("首页")
})
app.get("/set",(req,res)=>{
    // 如何设置cookie
    // cookie domain:域名 MaxAge:有效期 size：大小 
    //Expries：过期时间 httpOnly:防止xss攻击
    res.cookie("username","tom",{maxAge:200000,httpOnly:true})
    res.send("cookie设置成功")
})
app.get("/get",(req,res)=>{
    var name=req.cookies.username
    console.log(name)
    res.send("读取成功"+name)
})
app.listen(3000)
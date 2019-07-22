var express=require('express')
// console.log(express)
var router=express.Router()
var app=express()
app.use(router)

router.get('/',(req,res)=>{
    res.send({"success":"ok"})
})


router.get("/getcode",(req,res)=>{
    // 封装一个随机数函数
    var randomNum=function(min,max){
        return Math.ceil(Math.random()*(max-min)+min);
    }
    var str='abcdefghijklmnopqrstuvwxyz0123456789'
    console.log(str.length)
    var result=''
    // 循环根据index输出4位随机数
    for(var i=0;i<4;i++){
        result+=str[randomNum(0,str.length-1)]
    }
    res.send({"data":result})
})
app.listen(3000)


// 验证码
var express=require('express')
var router=express.Router()
var app=express()
// 使用插件
app.use(router)
router.get('/',(req,res)=>{
    res.send({"success":"ok"})
})
router.get('/getcode',(req,res)=>{
    // 封装函数
    var randomNum=function(max,min){
        return Math.ceil(Math.random()*(max-min)+min)
    }
    var str='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWSYZ0123456789'
    var result=''
    for(var i=0;i<4;i++){
        result+=str[randomNum(0,str.length-1)]
    }
    res.send({"data":result})
})
app.listen(3000)
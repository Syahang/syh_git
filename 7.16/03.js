var http=require("http")
http.createServer((req,res)=>{
    res.end((1+2+3).toString())
}).listen(8888)
// 第一个错误：只能是字符串类型或者buffer
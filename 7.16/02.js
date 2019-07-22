// import和require的区别
var http=require("http")
// fs=file system   文件系统
var fs=require("fs")
http.createServer((req,res)=>{
    console.log(req.url)
    res.writeHead(200,{"Content-Type":"text/html;charset=UTF8"})
    // 实现跳转，判断url
    if(req.url=="/red"){
        fs.readFile("./red.html",(err,data)=>{
            res.end(data)
            if(err){
                res.end("err")
            }
        })
    }else if(req.url=="/green"){
        fs.readFile("./green.html",(err,data)=>{
            res.end(data)
        })
    } 
}).listen(8888)



// var http=require("http")
// var fs=require("fs")
// http.createServer((req,res)=>{
//     console.log(req.url)
//     if(req.url=="/red"){
//         fs.readFile('./red.html',(err,data)=>{
//             res.end(data)
//         })
//     }else if(req.url=="/green"){
//         fs.readFile('./red.html',(err,data)=>{
//             res.end(data)
//         })
//     } 
// }).listen(8888)
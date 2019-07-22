var http=require("http")
var fs=require("fs")
http.createServer((req,res)=>{
    // 写入
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
    fs.readFile('./1.txt',(err,data)=>{
        res.end(data.toString())
    })
    // a:append追加   r：read读    w:write写
    fs.writeFile("./1.txt",'我是写入的',{flag:"a"},(err)=>{
        if(err){
            throw err;
        }
    })
    // 先读取后写入
    fs.readFile('./1.txt',(err,data)=>{
        fs.writeFile("./2.txt",data,(err)=>{
            res.end("success")
        })
    })
    // copyFile 复制
    fs.copyFile("./1.txt","./3.txt",(err)=>{
        res.end("复制成功")
    })
    // rename 改名
    fs.rename("./1.txt","./gai.txt",(err)=>{
        res.end("改名字成功")
    })
    // unlink 删除
    fs.unlink("./3.txt",(err)=>{
        res.end("删除成功")
    })
}).listen(3000)
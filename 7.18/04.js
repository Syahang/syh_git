var http=require("http")
var fs=require("fs")
http.createServer((req,res)=>{
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
    fs.mkdir('./fs/aa',(err)=>{
        res.end('创建成功')
    })
    // 删除目录
    // fs.rmdir('./fs/aa',(err)=>{
    //     res.end('删除成功')
    // })

    //读取目录
    fs.readdir("./fs",(err,data)=>{
        console.log(data)
        res.end()
    })

    // 查看目录信息 stat
    fs.stat("./fs/3.txt",(err,stats)=>{
        console.log(stats)
        // 判断是否为文件
        console.log(stats.isFile())
        // 判断是否为目录
        console.log(stats.isDirectory())
        res.end()
    })


    // 流   stream  文件流 createReadStream创建一个读取文件流
    // 块
   /* var stream=fs.createReadStream("./fs/3.txt")
    var content=""; 
        // data 读取数据的过程 end  数据读写完成 事件
        // chunk 块
    stream.on('data',(chunk)=>{
        console.log(chunk)
        content+=chunk;
    })
    stream.on('end',(chunk)=>{
        console.log('数据接收完毕'+content)
    })
    res.end("完啦")*/

}).listen(3000)
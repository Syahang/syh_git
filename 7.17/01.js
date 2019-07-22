var http=require("http")
var path=require("path")
http.createServer((req,res)=>{
    //path.resolve 将最后一个参数转化为绝对路径
    /* var local=path.resolve("./7.16")
     console.log(local)*/

    //path.normalize 路径的格式化 
    /*var local=path.normalize("/aa/bb////cc")
    console.log(local)*/

    // 获取文件的后缀名
    /*var local=path.extname("01.js")
    console.log(local)*/

    // path.format 将对象转化为路径
    var local=path.format({
        root:"",
        dir:"c:\a\b",
        base:"\d"
    })
    console.log(local)

    // path.isAbsolute 返回绝对路径
    // path.join() 将多段路径进行拼接
    // path.relative 返回相对路径
    // path.dirname 返回文件目录
    // path.parse 解析文件路径
    res.end()
}).listen(3000)
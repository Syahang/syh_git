// http模块 cmd Amd区别
// 引入http模块
var http=require("http")
// 创建服务器
http.createServer((req,res)=>{
    // request: 请求    response：响应
    console.log("hello node")
    // writeheader:写入响应头   text/html：文本类型 
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"})
    // 结束响应
    res.end("响应结束")
}).listen(8888)
// listen:监听端口

// module.exports   exports
// node_modules 项目依赖
// npm  包管理工具
// 内置模块     外置模块
var http=require("http")
var router=require('./router')

http.createServer((req,res)=>{
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
    if(req.url=="/"){
        router.shouindex(res,req)
    }else if(req.url=="/about"){
        router.shouabout(res,req)
    }else if(req.url=="/new"){
        router.shounew(res,req)
    }else{
        router.shou404(res,req)
    }
}).listen(9090)


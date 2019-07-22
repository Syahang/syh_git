var http=require("http")
var url=require("url")
http.createServer((req,res)=>{
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
    if(req.url=="favicon.ico"){
        return
    }
    var local=url.parse(req.url,true).query;
    console.log(local)
    if(local.user=='teacher'){
        
        res.end("此老师的工号是:"+local.id)
    }else if(local.user=='student'){
        res.end("此学生的工号是："+local.id)
    }
}).listen(8888)
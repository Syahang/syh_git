/* 
登录：
前端：username  password    submit 
        form表单，拼接地址栏用get方式
后端：http服务器    拿到地址栏的信息，与数据库对比，结束响应输出=》
                    url.parse(req.url,true).query


*/




// 数据库存放的问题
var obj = {
    username: "tom",
    password: '123'
}

var http=require("http")
var url=require("url")
// console.log(url)
http.createServer((req,res)=>{
    var loca=url.parse(req.url,true).query;
    console.log(req.url)
    if(req.url=='/favicon.ico'){
        return;
    }
    // console.log(url.parse(req.url,true).query)
    // console.log(loca)
    // console.log(loca.username)
    res.writeHead(200,{"Content-Type":"text/html;charset=UTF8"})
    if(loca.username==obj.username&&loca.password==obj.password){

        res.end("登录成功");
    }else{

        res.end("请核对信息");
    }
}).listen(1234)



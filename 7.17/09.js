// ejs 模块渲染
var http=require("http")
var ejs=require("ejs")
var fs=require("fs")
http.createServer((req,res)=>{
    // ejs  render(渲染) compiler(编译)
    // 数据
    var obj={
        "list":[
            {
                name:"tom",
                age:12
            },{
                name:"syh",
                age:18
            }
        ]
        
    }
    // 读取ejs模板
    fs.readFile("./index.ejs",(err,data)=>{
        // ejs模板转字符串
        var template=data.toString()
        // 把数据渲染过来，内容为obj
        var result=ejs.render(template,obj)
        // 在页面显示
        res.end(result)
    })
    
}).listen(9090)
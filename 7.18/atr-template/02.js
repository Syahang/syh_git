var http=require("http")
var art=require("art-template")
var fs=require("fs")
http.createServer((req,res)=>{
    var obj={
        "list":["1","2","3"]
    }
    fs.readFile("./form.art",function(err,data){
        var tem=data.toString()
        var result=art.render(tem,obj)
        res.end(result)
    })
}).listen(3000)
var http=require("http")
var ejs=require("ejs")
var url=require("url")
var fs=require("fs")
http.createServer((req,res)=>{
    var obj={
        "arr":{
            "teacher":[
                {000000:"tea0"},
                {000001:"tea1"},
                {000002:"tea2"},
                {000003:"tea3"}
            ],
            "student":[
                {100000:"stu0"},
                {100001:"stu1"},
                {100002:"stu2"},
                {100003:"stu3"}
            ]
        }
        
    }
    local=url.parse(req.url,true).query;
    fs.readFile("./01.ejs",(err,data)=>{
        
        var str=data.toString()
        var result=ejs.render(str,obj)
        res.end(result)
    })
}).listen(3000)
// npm:包管理工具
// SEO优化  keywords description
/**
 * npm init= npm init -y:项目初始化  ==》package.json
 * npm install：下载    ==npm i
 * --save = -S:生产环境(dependencies)  --save-dev = -D:开发环境(devpendence)
 * npm uninstall:卸载
 * 
 * 生产环境
 *      线上运行的环境
 * 
 * 开发环境
 *      开发过程中
 *  */

// 时间戳格式化
// var time=sd.format(new Date(),"YYYY-MM-DD-hh-mm-ss")
// console.log(time)

var http=require("http")
var sd=require("silly-datetime")
var fs=require("fs")

var fd=require("formidable")
var path=require("path")
http.createServer((req,res)=>{
    if(req.url=="/favicon.ico"){
        return
    } 
    if(req.url=="/dopost"){
        var form=new fd.IncomingForm();
        console.log(form)
        form.uploadDir="./upload"
        // 收集所有字段，传递给回调
        form.parse(req,function(err,fields,files){
            console.log(files)
            var oldpath=files.pic.path;
            console.log(oldpath)
            var extname=path.extname(files.pic.name)
            var tt=sd.format(new Date(),"YYYYMMDDhhmmss")
            var newpath="upload/"+tt+extname
            console.log(newpath)
            fs.rename(oldpath,newpath,(err)=>{
                res.end("success")
            })
            
        })
        
    }
    // res.end("fail")
}).listen(9090,function(){
    console.log("running...")
})

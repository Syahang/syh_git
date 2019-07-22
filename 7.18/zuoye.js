var http = require('http')
var fs = require('fs')
var html = ''
var arr = []
http.createServer((req, res) => {
    if (req.url == '/favicon.ico') {
        return
    }
    res.writeHead(200, { "Content-type": "text/html;charset=utf-8" })
    /*fs.readdir('./fs',(err,data)=>{
        console.log(data)
        for(let i=0;i<data.length;i++){
            console.log(data[i])
            let template=data[i].toString();
            fs.stat('./fs/'+template,(err,stats)=>{
                
                console.log(template,stats)
                if(stats.isFile()==true){
                    html+=template+"是文件"
                    console.log(data[i]+ "是文件")
                    res.end('full')
                }else if(stats.isDirectory()==true){
                    html+=template+"是目录"
                    console.log(data[i]+ "是目录")
                    res.end('full')
                }else{
                    res.end('error')
                }
            })
        }
    })*/
    function abc(a){
        var i=a.splice(0,1)
        var item=i.join()
        console.log(i,item,a)
        fs.stat('./fs/'+item,(err,stats)=>{
            if(stats.isFile()==true){
                console.log(item+ "是文件")
                res.end('full')
            }if(stats.isDirectory()==true){
                console.log(item+ "是目录")
                res.end('full')
            }else{
                res.end('err')
            }
        })
        if(a.length>0){
            abc(a)
        }
    }
    fs.readdir('./fs',(err,data)=>{
        console.log(data)
        abc(data)
        res.end()
    })

    /*fs.readdir('./fs', (err, data) => {
        for (var i = 0; i < data.length; i++) {
            (function (i) {
                fs.stat('./fs/' + data[i], (err, stats) => {
                    if (stats.isFile() == true) {
                        console.log(data[i]+ "是文件")
                        res.end('full')
                    } else if (stats.isDirectory() == true) {
                        console.log(data[i]+ "是目录")
                        res.end('full')
                    } else {
                        res.end('error')
                    }
                })
            })(i)
        }
    })*/
}).listen(3000, (err) => {
    console.log("running...")
})
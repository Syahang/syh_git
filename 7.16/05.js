// url req.url url模块
var http=require("http")
var url=require("url")
console.log(url)
http.createServer((req,res)=>{
    //url.parse(解析地址栏):如果第二个参数为true事，则会转换为对象，反之是字符串
    var loca=url.parse(req.url).query;
    console.log(loca)
    res.end(loca)

    // 解析 把多段路径进行合并
    /*var loca=url.resolve("http://127.0.0.1:2222",'/aa/bb');
    console.log(loca)
    res.end()*/

    // var local=url.format({
    //     protocol: null,
    //     slashes: null,
    //     auth: null,
    //     host: '127.0.0.1',
    //     port: '2222',
    //     hostname: null,
    //     hash: null,
    //     search: '?name=syh',
    //     query: 'name=syh',
    //     pathname: '/',
    //     path: '/?name=syh',
    //     href: '/?name=syh'
    // })
    // console.log(local)
    // res.end()
}).listen(2222)
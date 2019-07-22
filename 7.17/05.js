// queryString 查询字符串
var queryString=require("querystring")
console.log(queryString)
// 将对象转换为字符串
var url=queryString.stringify({name:'tom',age:18})
console.log(url)
// eval 安全隐患 xss sql注入
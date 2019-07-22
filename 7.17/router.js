function shouindex(res,req){
    res.end("首页")
}
function shouabout(res,req){
    res.end("关于")
}
function shounew(res,req){
    res.end("首新闻页")
}
function shou404(res,req){
    res.end("404")
}
module.exports={
    shouindex:shouindex,
    shouabout:shouabout,
    shounew:shounew,
    shou404:shou404
}



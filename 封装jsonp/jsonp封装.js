// 封装jsonp函数
// options是一个对象 url属性保存请求地址 success属性保存成功回调函数 data属性保存的是传递给服务器的参数
function jsonp(options) {
    // 生成script标签
    var script = document.createElement("script");
    // success已经不是一个全局函数了,我们要想办法将他变成全局变量
    var funRandomName = "myjsonp" + Math.random().toString().replace(".", "");

    window[funRandomName] = options.success;

    // 拼接字符串
    var params = "";
    // 遍历options.data
    for (attr in options.data) {
        params = params + "&" + attr + "=" + options.data[attr];

    }

    // 设置script标签相关属性
    script.src = options.url + "?callback=" + funRandomName + params;
    // 把script标签追加到body中
    document.body.appendChild(script);
    // 加载完毕以后，我们删除这个script标签
    script.onload = function(){
        this.remove();
    }
}
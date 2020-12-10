const path = require('path');//nodejs 模块写法
const HtmlWebpackPlugin = require("html-webpack-plugin");//加载html-webpack-plugin 插件模块
const HtmlWebpackPlugin2 = require("mini-css-extract-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");//加载清理模块
module.exports = {
    entry: {
        index: './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, '../dist/'),
        // filename:'[name].[hash].js'
        filename: '[name].js'
    },
    devServer:{//开发服务器配置
        contentBase:path.join(__dirname,"../dist"),
        compress:true,//是否压缩
        port:9000,//开启服务器端口
        open:true//是否自得打开浏览器
    },
    module: {
        //解析规则
        rules: [
            {
                test: /\.css$/,//他是一个文件解析匹配规则，正则规则
                use: [//表示匹配到的文件 需要用那些loader来处理
                    {loader:HtmlWebpackPlugin2.loader},
                    // { loader: "style-loader" },//把引入css写入style标签
                    { loader: "css-loader" },//把css文件引入并处理
                    
                ]
            },
            {
                test: /\.less$/,//他是一个文件解析匹配规则，正则规则
                use: [//表示匹配到的文件 需要用那些loader来处理
                    {loader:HtmlWebpackPlugin2.loader},
                    // { loader: "style-loader" },//把引入css写入style标签
                    { loader: "css-loader" },//把css文件引入并处理
                    { loader: "less-loader" }//把less文件引入并处理
                ]
            },
            {
                test: /\.scss$/,//他是一个文件解析匹配规则，正则规则
                use: [//表示匹配到的文件 需要用那些loader来处理
                    {loader:HtmlWebpackPlugin2.loader},
                    // { loader: "style-loader" },//把引入css写入style标签
                    { loader: "css-loader" },//把css文件引入并处理
                    { loader: "sass-loader" }//把less文件引入并处理
                ]
            },
            {
                test: /\.(jpg|png|gif|webp|jpeg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1024000  //单位byte 图片小于100K时候转换成base64
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,//babel转化时排除 node_moddules 和 bower_components文件
                use: [
                    {
                        loader: 'babel-loader',
                        options: {//选择参数
                                //预设 es6转化 es5
                                presets: ['env']
                        }
                    },
                ]
            },
        ],
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:"tgssss",//网页标题
            template:"./index.html",//处理html模板路径
            inject:true,//（true|false）
            minify:{
                removeComments:true,//移除注释
                removeAttributeQuotes:true,//移除属性的引号
                collapseWhitespace:true//是否移除空白
            },
            filename:"index.html",//输出模板名称
        }),
        new HtmlWebpackPlugin2({
            filename:'[name].css'
        }),
        new CleanWebpackPlugin()//创建清理插件
    ]
}
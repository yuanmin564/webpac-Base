const path = require('path');

var webpack = require('webpack');
module.exports = {
    //页面入口文件配置
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js'
    }
};

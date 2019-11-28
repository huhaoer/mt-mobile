var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
    entry: {
        index: './src/js/meituan.js',
        goodsInfo: './src/js/goodsInfo.js'
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/out'
    },
    module: {
        rules: [
            { test: /.js$/, use: ['babel-loader'] },
            { test: /.(jpg|png|gif|svg|eot|ttf|woff)$/, use: ['url-loader?limit=1000&name=./[name].[ext]'] },
            { test: /.css$/, use: ['style-loader', 'css-loader'] },
        ]
    },
    plugins: [
        // new UglifyJsPlugin()
    ],
    mode: 'development',
    devServer:{
        port:'9090'
    }
}
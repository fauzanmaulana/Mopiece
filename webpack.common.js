const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    entry : {
        app : "./src/app.js"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module : {
        rules : [
            {
                test : /\.css$/,
                use : [
                    {loader : "style-loader"},
                    {loader : "css-loader"}
                ]
            },
            {
                test : /\.html$/,
                use : [
                    {
                        loader : 'file-loader',
                        options : {
                            name : '[name].[ext]'
                        }
                    }
                ],
                exclude : path.resolve(__dirname, './src/index.html')
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html"
        })
    ]
}
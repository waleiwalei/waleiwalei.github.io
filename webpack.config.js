const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ScriptExt = require('script-ext-html-webpack-plugin')

module.exports = {
    entry: {
        hello: {
            import: './src/index.js',
        }

    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    target: "web",
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.ts$/i,
                use: 'ts-loader'
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
        ]
    },
    devServer: {
        hot: true,
        port: 8081,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'test 6.22'
        }),
    ]
}
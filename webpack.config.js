const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin=require("copy-webpack-plugin");
 
 
module.exports = {
 
    mode: 'development',
    output: {
        clean:true
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    // Disables attributes processing
                sources: false,
                minimize: false,
                },
            },
            {
                test: /\.css$/,
                exclude: /styles.css$/,
                use:['style-loader','css-loader']
            },
            {
                test: /styles.css$/,
                use: [MiniCssExtractPlugin.loader,'css-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader:'file-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',   //fichero Base
            filename: './index.html'
        }),

        new MiniCssExtractPlugin({
            filename:'[name].css',  //para no mantener en Cache el archivo en el navegador cliente
            ignoreOrder:false
        }),
        new CopyPlugin({
            patterns:[
                { from:'src/assets/',to:'assets/'}
            ] 
        })
    ]
 
    
}
 
 

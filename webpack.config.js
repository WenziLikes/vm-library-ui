const path = require("path")
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: "production",
    entry: "./src/index.ts",
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "dist"),
        libraryTarget: "umd",
        assetModuleFilename: 'assets/images/[name]-[hash][ext]',
        clean: true
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'index.css',
        }),
    ],
    resolve: {
        extensions: [".ts", ".tsx"]
    },
    externals: {
        react: "react"
    },
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(scss|css)?$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
                exclude: /node_moodules/
            },
            {
                test: /\.(ts|tsx)?$/,
                use: ["ts-loader"],
                exclude: /node_moodules/
            },
        ],
    }
}
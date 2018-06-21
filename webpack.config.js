
const path = require("path")

module.exports = {

    mode: "development",

    entry: "./src/app/index.js",

    output: {
        path: path.resolve(__dirname,"dist"),

        filename: "bundle.js",

        publicPath: "/"
    },

    devServer: {  // configuration for webpack-dev-server
        contentBase: './dist',  //source of static assets
        port: 7700, // port to run dev-server
    } 


}
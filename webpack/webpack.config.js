const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
module.exports = {
   mode: "production",
   entry: {
      background: path.resolve(__dirname, "..", "src", "background.ts"),
      app: path.resolve(__dirname, "..", "src", "app.ts"),
      // popup: path.resolve(__dirname, "..", "src", "popup.html"),
   },
   output: {
      path: path.join(__dirname, "../dist"),
      //filename: "[base]",
      filename: (pathData) => {
        return pathData.chunk.name === 'popup' ? '[name].html' : '[name].js';
      }
   },
   resolve: {
      extensions: [".ts", ".js"],
   },
   module: {
      rules: [
         {
            test: /\.tsx?$/,
            loader: "ts-loader",
            exclude: /node_modules/,
         },
         // {
         //    test: /\.html$/,
         //    type: "resources",
         //    generator: {
         //      filename: "[name][ext]",
         //    },
         //  },
         // {
         //    test: /\.html$/i,
         //    use: ["html-loader"],
         // },
         // {
         //   test: /\.html$/i,
         //   loader: "html-loader",
         //   options: {
         //      sources: false
         //   } 
         // },
      ],
   },
   plugins: [
      new CopyPlugin({
         patterns: [
            {from: ".", to: ".", context: "public"},
            // {from: ""}
         ]
      }),
   ],
};
const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    entry: './src/index.ts',
    mode: 'development',
    devtool: false,
    devServer: {
        hot: true,
        open: true
      },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'docs')
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: {
            loader: 'babel-loader',
            options: { presets: ['@babel/preset-typescript'] }
          }
        }
      ]
    },
    plugins: [new ESLintPlugin({ extensions: ['.js', '.ts'] }), new HtmlWebpackPlugin({
        templateContent: `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>ear</title>
    </head>
    <body>
      <div id="app" />
      <div>my ear</div>
    </body>
  </html>
      `,
      }),
    ]
  }
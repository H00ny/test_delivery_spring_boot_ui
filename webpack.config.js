const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
  return {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.[contenthash].js',
      clean: true,
    },
    mode: env.mode || 'development',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          }
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
        title: 'React App',
        ARM_VERSION: env.ARM_VERSION || '01.01',
        ARM_DATE: env.ARM_DATE || '01.06.2018'
      })
    ],
    devServer: {
      static: {
        directory: path.join(__dirname, 'build'),
      },
      compress: true,
      port: 3000,
      open: true,
      hot: true
    },
    resolve: {
      extensions: ['.js', '.jsx']
    }
  };
};
// webpack.config.js

const path = require('path');
const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin'); // 要使用需要一个个文件引入...
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  mode: 'development',
  
  devServer: {
    port: 3000,
    hot: true,
    contentBase: '../dist'
  },
  
  entry: ['@babel/polyfill', path.resolve(__dirname, '../src/view.js')],    // 入口文件
  
  output: {
    filename: '[name].[hash:8].js',
    path: path.resolve(__dirname, '../dist') // 输出文件夹
  },
  
  module: {
    rules: [
      // Vue 文件
      {
        test: /\.vue$/,
        use: ['vue-loader']
      },
      // JavaScript 文件 babel 转义高级 ES 语法
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        },
        exclude: /node_modules/
      },
      // Css 文件
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      // Less 文件
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
      },
      // 图片 文件
      {
        test: /\.(jpe?g|png|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10240,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'img/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      // 媒体 文件
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10240,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'media/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      // 字体 文件
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10240,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'fonts/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
    ]
  },
  
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.runtime.esm.js',
      '@src': path.resolve(__dirname, '../src'),
      '@assets': path.resolve(__dirname, '../assets'),
    },
    extensions: ['*', '.js', '.json', '.vue']
  },
  
  plugins: [
    new CleanWebpackPlugin(),
  
    new Webpack.HotModuleReplacementPlugin(),
    
    new VueLoaderPlugin(),
    
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
    }),
    
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].css',
    })
  ]
};

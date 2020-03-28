// webpack.config.js

const devMode = process.env.NODE_ENV === 'development';

const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin'); // 要使用需要一个个文件引入...
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: ['@babel/polyfill', path.resolve(__dirname, '../index.view.js')],    // 入口文件

  output: {
    filename: '[name].[hash:8].js',
    path: path.resolve(__dirname, '../dist') // 输出文件夹
  },

  module: {
    rules: [
      // Vue 文件
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              compilerOptions: {
                preserveWhitespace: false
              }
            }
          }
        ]
      },
      // TypeScript 文件
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        enforce: 'pre',
        loader: 'tslint-loader'
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/],
        }
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
        use: [
          {
            loader: devMode ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../dist/css/',
              hmr: devMode
            }
          },
          'css-loader'
        ]
      },
      // Less 文件
      {
        test: /\.less$/,
        use: [
          {
            loader: devMode ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../dist/css/',
              hmr: devMode
            }
          },
          'css-loader', 'less-loader'
        ]
      },
      // 图片 文件
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10240,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'image/[name].[hash:8].[ext]'
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
    // 文件后缀名
    extensions: ['*', '.js', '.json', '.vue', '.ts'],

    // 路径别名
    alias: {
      'vue$': 'vue/dist/vue.runtime.esm.js',
      '@': path.resolve(__dirname, '../src')
    }
  },

  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['**/*', '!.gitkeep'],
    }),

    new Webpack.HotModuleReplacementPlugin(),

    new VueLoaderPlugin(),

    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
    }),

    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css'
    })
  ]
};

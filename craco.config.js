const CracoLessPlugin = require('craco-less');
const webpack = require('webpack');
const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
module.exports = {
  webpack: {
    plugins: [
      // new BundleAnalyzerPlugin(), // 打包分析
      new SimpleProgressWebpackPlugin(), // 查看打包进度
      // 打包忽略console和debugger
      // new UglifyJsPlugin({
      //   uglifyOptions: {
      //     compress: {
      //       warnings: false,
      //       drop_debugger: true,
      //       drop_console: true
      //     }
      //   },
      //   sourceMap: false,
      //   parallel: true
      // })
    ]
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true
          }
        }
      }
    }
  ],
  babel: {
    plugins: [
      [
        'import',
        {
          libraryName: 'antd',
          libraryDirectory: 'es', // default: lib
          style: 'css'
        }
      ]
    ]
  }
};

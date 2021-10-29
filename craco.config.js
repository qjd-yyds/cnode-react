const CracoLessPlugin = require('craco-less');
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');
const webpack = require('webpack');
const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
module.exports = {
  webpack: {
    alias: {
      '@': path.resolve('src')
    },
    plugins: [
      // new BundleAnalyzerPlugin(), // 打包分析
      new SimpleProgressWebpackPlugin(), // 查看打包进度
      new AntdDayjsWebpackPlugin()
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

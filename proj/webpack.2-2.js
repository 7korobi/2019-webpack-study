const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")


// MiniCssExtractPlugin の出力はentryごと。
// [name] chunk名 
// [hash] entry側ファイルと同値。
// [contenthash] CSS内容のみでのhash値。
const stylesheet = new MiniCssExtractPlugin({
  filename: 'css/[name]-[contenthash].css',
  chunkFilename: 'css/[id]-[contenthash].css',
})

// HtmlWebpackPluginはHTMLをひとつだけ出力する。
// [template] Webpack生成物へのリンクを埋め込むための、原稿HTML
const html = new HtmlWebpackPlugin({
  template: "./src/index.html",
})


// 見やすさのため、loader設定を分割
const loader = {
  css: {
    loader: 'css-loader',
    options: {
      minimize: true,
      url: false,
    }
  },
  sass: {
    loader: 'sass-loader'
  }
};

// 見やすさのため、rule設定を分割
const rule = {
  css: {
    test: /\.css$/,
    use: [ MiniCssExtractPlugin.loader, loader.css ]
  },
  sass: {
    test: /\.sass$/,
    use: [ MiniCssExtractPlugin.loader, loader.css, loader.sass ]
  },
};

module.exports = {
  devtool: 'source-map',

  // default chunk name は main.
  entry: './src/js/app2.js',
  output: {
    // [name] chunk名
    // [hash] entry内容によるhash値
    filename: 'js/[name]-[hash].js',
    path: path.join(__dirname, 'public')
  },

  module: {
    rules: [
      rule.css,
      rule.sass,
    ]
  },
  plugins: [
    stylesheet,
    html,
  ]
};
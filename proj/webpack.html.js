const path = require('path');

// HTMLファイルを自動生成するようになる。
// ただし、ExtractTextPlugin をHMR更新することはできない。
const HTML = require('html-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const stylesheet = new ExtractTextPlugin('css/[name]-[sha512:contenthash:base36:20].css');

const loader = {
  css: {
    loader: 'css-loader',
    options: {
      minimize: true,
      url: false,
    }
  },
  sass: {
    loader: 'sass-loader',
    options: {
      indentedSyntax: 'sass',
    }
  }
};

const rule = {
  css: {
    test: /\.css$/,
    use: stylesheet.extract( loader.css ),
  },
  sass: {
    test: /\.sass$/,
    use: stylesheet.extract({
      use: [ loader.css, loader.sass ]
    }),
  },
};

module.exports = {
  devtool: 'source-map',

  entry: './src/js/app.js',
  output: {
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
    new HTML()
  ]
};
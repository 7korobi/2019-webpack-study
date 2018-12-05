const path = require('path');

const loader = {
  // babelで、ES2016,2017,2018をES5に変換。
  // 対象はブラウザではなく、いま実行しているバージョンのnode.js
  babel: {
    loader: 'babel-loader',
    options: {
      presets: [
        ['env', {
          modules: false,
          targets: {
            node: 'current'
          }
        }]
      ]
    }
  },
};

const rule = {
  js: {
    test: /\.js$/,
    exclude: /node_modules/,
    use: [ loader.babel ]
  },
};

module.exports = {
  // node.js を対象としたビルドを行う。
  target: 'node',

  devtool: 'source-map',

  entry: {
    lib2: './src/js/lib2.js',
  },
  output: {
    // ライブラリとしての使われ方を指定する。通常は umd を指定しておく。
    libraryTarget: 'umd',
    filename: '[name].js',
    path: path.join(__dirname, 'lib')
  },

  module: {
    rules: [
      rule.js,
    ]
  },
};
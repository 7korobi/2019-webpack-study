const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const stylesheet = new ExtractTextPlugin('css/[name]-[sha512:contenthash:base36:20].css');
const html = new HtmlWebpackPlugin({
  template: "./src/index.html",
})

// サポートブラウザを定義。
const browsers = [
  "last 2 versions",
  "not ie < 11",
  "Android >= 4",
  "iOS >= 9",
]

const loader = {
  // babelで、ES2016,2017,2018をES5に変換。
  babel: {
    loader: 'babel-loader',
    options: {
      presets: [
        ['env', {
          modules: false,
          browsers
        }]
      ]
    }
  },
  css: {
    loader: 'css-loader',
    options: {
      minimize: true,
      url: false,
      // 他にpostcss-loader, sass-loader を使うなら、２
      importLoaders: 2
    }
  },
  sass: {
    loader: 'sass-loader'
  },
  // postcssを使う。
  postcss: {
    loader: 'postcss-loader',
    options: {
      plugins: [
        // autoprefixerは、postcss plugin。
        require('autoprefixer')({
          browsers
        }),
      ],
    }
  }
};

const rule = {
  js: {
    test: /\.js$/,
    exclude: /node_modules/,
    use: [ loader.babel ]
  },
  css: {
    test: /\.css$/,
    use: stylesheet.extract({
      use:[ loader.css, loader.postcss ]
    }),
  },
  sass: {
    test: /\.sass$/,
    use: stylesheet.extract({
      fallback: 'style-loader',
      use: [ loader.css, loader.postcss, loader.sass ]
    }),
  },
};

module.exports = {
  devtool: 'source-map',

  entry: './src/js/app3.js',
  output: {
    filename: 'js/[name]-[hash].js',
    path: path.join(__dirname, 'public')
  },

  module: {
    rules: [
      rule.js,
      rule.css,
      rule.sass,
    ]
  },
  plugins: [
    stylesheet,
    html,
  ]
};
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { loader } = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/javascripts/main.js', //エントリーポイント => ./src/javascripts/内に変更 + main.jsに変更
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: './javascripts/main.js', //defaultは 'main.js' + ./javascripts/とすることでフォルダ内に出力される
  },
  module: {
    rules: [
      {
        test: /\.css/, //testはファイル名(.css)を検知
        use: [
          {
            // loader: 'style-loader',
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
        ],
      },
      {
        //Asset Modulesを使う際の記述
        test: /\.(png|jpg)/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext]',
        },
        use: [
          //{
          //file-loaderを使うのでコメントアウト
          // loader: 'url-loader',
          //Asset Modulesを使うのでfile-loaderをコメントアウト
          // loader: 'file-loader',
          //  options: {
          //    esModule: false,
          //    name: 'images/[name].[ext]',
          //  },
          //},
        ],
      },
      {
        test: /\.pug/,
        use: [
          {
            loader: 'html-loader',
          },
          {
            loader: 'pug-html-loader',
            options: {
              //prettyをつけることでHTMLが整形される
              pretty: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      //srcと同じ名前のCSSファイルがdistに出力される(src内のmy.cssにあわせる=> main.css)
      filename: './stylesheets/main.css',
    }),
    new HtmlWebpackPlugin({
      //srcフォルダ内にHTMLファイルの雛形を作り、ここから読ませる + src配下のtemplatesフォルダに入れる
      // template: './src/templates/index.html',
      //srcフォルダ内をpugファイルに変更
      template: './src/templates/index.pug',
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/templates/access.pug',
      filename: 'access.html',
    }),

    new CleanWebpackPlugin(),
  ],
};

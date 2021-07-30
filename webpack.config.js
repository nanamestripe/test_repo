const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

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
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      //srcと同じ名前のCSSファイルがdistに出力される(src内のmy.cssにあわせる=> main.css)
      filename: './stylesheets/main.css',
    }),
    new HtmlWebpackPlugin({
      //srcフォルダ内にHTMLファイルの雛形を作り、ここから読ませる + src配下のtemplatesフォルダに入れる
      template: './src/templates/index.html',
    }),
    new CleanWebpackPlugin(),
  ],
};

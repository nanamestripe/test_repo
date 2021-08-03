## 何らかの方法でファイルが消えてしまった場合

git checkout (ファイル名)

## CSS を別ファイルに出力

プラグイン

Webpack5 の場合、「Asset Modules」を使うことが可能なので、file-loader(もしくは url-loader)をアンインストールすることが可能

pug-html-loader をインストールした際にでたエラー
npm WARN deprecated core-js@2.6.12: core-js@<3.3 is no longer maintained and not recommended for usage due to the number of issues. Because of the V8 engine whims, feature detection in old core-js versions could cause a slowdown up to 100x even if nothing is polyfilled. Please, upgrade your dependencies to the actual version of core-js.

added 63 packages, and audited 264 packages in 9s

36 packages are looking for funding
run `npm fund` for details

2 high severity vulnerabilities

To address all issues (including breaking changes), run:
npm audit fix --force

Run `npm audit` for details.

# 49. テンプレート拡張を利用した効率化

1. extents \_layout.pug
   \_layout.pug の内容を拡張して表示

2. block content
   block content の直下(タブで前一つ分開ける)にして、block content の下の内容を表示させる。(html が書き出されたときに、'block content'は表示されない)

# pug のドキュメントについて

1. [Iteration](https://pugjs.org/language/iteration.html)
2. [Conditionals](https://pugjs.org/language/conditionals.html)

# Autoprefixer

https://ics.media/entry/17376/#postcss-autoprefixer

# npm audit の結果

# npm audit report

glob-parent <5.1.2
Severity: moderate
Regular expression denial of service - https://npmjs.com/advisories/1751
fix available via `npm audit fix --force`
Will install webpack-dev-server@1.16.5, which is a breaking change
node_modules/glob-parent
chokidar 1.0.0-rc1 - 2.1.8
Depends on vulnerable versions of glob-parent
node_modules/chokidar
webpack-dev-server 2.0.0-beta - 3.11.2
Depends on vulnerable versions of chokidar
node_modules/webpack-dev-server

pug <3.0.1
Severity: high
Remote Code Execution - https://npmjs.com/advisories/1643
fix available via `npm audit fix --force`
Will install pug-html-loader@1.0.0, which is a breaking change
node_modules/pug
pug-html-loader >=1.0.1
Depends on vulnerable versions of pug
node_modules/pug-html-loader

5 vulnerabilities (3 moderate, 2 high)

すべての差分を確認するには
git diff
続きを見る=>(d キー)
終了する =>(q キー)

webpack.config.js を記述し直した場合、一度 webpack dev server を停止(Control + C)してから立ち上げし直すこと

# カーソル移動

Control ＋ F
カーソルを右に移動
Control ＋ B
カーソルを左に移動
Control ＋ P
カーソルを上に移動
Control ＋ N
カーソルを下に移動
Control ＋ A
カーソルを行頭に移動
Control ＋ E
カーソルを行末に移動

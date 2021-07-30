//my.jsの読み込みの定義 + modules配下の記述だったので、並列の記述に変更する
import my from './my.js';

console.log('Webpack!');

//my.jsの実行
my();

//srcからCSSの読み込み(※ここで読み込まないとloaderの意味がない)
import '../stylesheets/main.css';

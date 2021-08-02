//reactApp.jsxの読み込み
import './reactApp.jsx';

//Vueの読み込み
import Vue from 'vue';
import VueApp from './VueApp.vue';

new Vue({
  el: '#vue-root',
  render: h => h(VueApp),
});

//my.jsの読み込みの定義 + modules配下の記述だったので、並列の記述に変更する
import my from './my.js';

console.log('This is index.js');

//my.jsの実行
my();

//srcからCSSの読み込み(※ここで読み込まないとloaderの意味がない)
import '../stylesheets/main.scss';

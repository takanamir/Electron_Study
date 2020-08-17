'use strict';

//------------------------------------------------------------
console.log('----------');

// Hello World
console.log('Hello World');

//------------------------------------------------------------
console.log('----------');

// 引数の出力
// i = 0 の場合 → node.js のパス
// i = 1 の場合 → 実行スクリプトのパス
// i = 2 以上 の場合 → アプリの引数
// バッチファイルにファイルをドラッグ＆ドロップなどで引数を渡す。
for (var i = 0; i < process.argv.length; i ++) {
	console.log(i, process.argv[i]);
}

//------------------------------------------------------------
console.log('----------');

// 変数の初期化
var cnt = 0;
var max = 5;

// 繰り返し処理
setInterval(function() {
	if (cnt >= max) {
		// process.exit() で、処理の途中で終了
		// exitの引数
		//    0          → 'success' code 
		//    その他の数 → 'failure' code
		process.exit(0);
	}
	console.log(cnt);
	cnt ++;
}, 500);

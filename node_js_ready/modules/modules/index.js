'use strict';

//------------------------------------------------------------
console.log('----------');

// 組み込みモジュール読み込み
const path = require('path');
const exec = require('child_process').exec;

// 組み込みモジュール使用
var curDir = process.argv[1];
var p = path.resolve(curDir, '../test.txt');
var cmd = `notepad "${p}"`;
exec(cmd, (err, stdout, stderr) => {console.log('閉じた', stdout)});

//------------------------------------------------------------
console.log('----------');

// パッケージをインストールする方法
//    package.json のあるディレクトリで、以下のコマンドを実行。
//    「node_modules」ディレクトリが作られ、その中に格納される。
// ※ --save：package.json の dependencies に追記するオプション。
//
// npm install パッケージ名 --save
//
// 例）
// npm install moment --save
// サンプルコードでは、moment をインストール済み。
// http://momentjs.com/

// インストールモジュール読み込み
const moment = require('moment');

// インストールモジュール使用
var t = moment().format('YYYY-MM-DD, hh:mm:ss');
console.log(t);

//------------------------------------------------------------
console.log('----------');

// 「node_modules」ディレクトリに入れずに、自作モジュールを使う
// 際は、require()の引数に「./」を付け忘れないようにする。
// 拡張子の「.js」はいらない。

// 自作モジュール読み込み
const oi   = require('./lib.objItrator');
const pckg = require('./package.json');		// package.json

// 自作モジュール使用
oi.each(pckg, (val, key, obj) => {
	console.log(`${key} => ${val}`);
});

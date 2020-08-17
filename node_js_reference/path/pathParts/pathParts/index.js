'use strict';

// モジュール
var path = require('path');

// 変数の初期化
var curDir = process.argv[1];
var pth = path.resolve(curDir, '../run.bat');

// 出力
console.log('--------------------');
console.log('path',     pth);
console.log('dirname',  path.dirname(pth));  // ディレクトリ名
console.log('extname',  path.extname(pth));  // 拡張子
console.log('basename', path.basename(pth)); // ファイル名
console.log('basename', path.basename(pth, path.extname(pth))); // ファイル名(拡張子なし)
console.log('path.sep', path.sep); // パス区切り文字
console.log('--------------------');

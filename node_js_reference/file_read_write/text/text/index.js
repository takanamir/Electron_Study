'use strict';

// モジュール
var path = require('path');
var fs = require('fs');

// 変数の初期化
var curDir = process.argv[1];
var p = path.resolve(curDir, '../test.txt');
var pOut1 = path.resolve(curDir, '../test1.txt');
var pOut2 = path.resolve(curDir, '../test2.txt');

//------------------------------------------------------------

// テキスト読み込み1 非同期
var read1 = function(p, callback) {
	fs.readFile(p, 'utf8', function(err, data) {
		var txt = null;
		if (err) {
			console.log('[Err] : ' + err);
		} else {
			txt = data;
		}
		callback(txt);
	});
};

// テキスト読み込み2 同期
var read2 = function(p) {
	var txt = null;
	try {
		txt = fs.readFileSync(p, 'utf8');
	} catch(e) {
		console.log('[Err] : ' + e);
	}
	return txt;
};

//------------------------------------------------------------

// テキスト書き込み1 非同期
var write1 = function(p, txt, callback) {
	fs.writeFile(p, txt, 'utf8', function(err) {
		var res = 'ok';
		if (err) {
			console.log('[Err] : ' + err);
			res = 'err';
		}
		callback(res);
	});
};

// テキスト書き込み2 同期
var write2 = function(p, txt) {
	var res = 'ok';
	try {
		fs.writeFileSync(p, txt, 'utf8');
	} catch(e) {
		console.log('[Err] : ' + e);
		res = 'err';
	}
	return res;
};

//------------------------------------------------------------

// 非同期実行
read1(p, function(txt) {
	console.log('--< read1 >------------------');
	console.log(txt);
});

// 同期実行
console.log('--< read2 >------------------');
var txt = read2(p);
console.log(txt);

//------------------------------------------------------------

var txt = 'あいうえお\nかきくけこ\n';

// 非同期実行
write1(pOut1, txt, function(res) {
	console.log('--< write1 >------------------');
	console.log(res);
});

// 同期実行
console.log('--< write2 >------------------');
var res = write2(pOut2, txt);
console.log(res);

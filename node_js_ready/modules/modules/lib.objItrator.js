'use strict';

//------------------------------------------------------------
// 公開モジュールの構築
var _o = {};

//------------------------------------------------------------
// each
//   fnc - function(val, key, obj)
_o.each = function(obj, fnc) {
	for(var key in obj) {
		fnc(obj[key], key, obj);
	}
};

//------------------------------------------------------------
// エクスポート
module.exports = _o;

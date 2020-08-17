'use strict';

//------------------------------------------------------------
// DOM準備完了後の処理
$(function() {
	var msg = 'This is a Renderer Process';
	console.log(msg);
	$('#appBdy').text(msg);
});


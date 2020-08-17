'use strict';

//process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = true;

// モジュールの読み込み
const electron         = require('electron');
const {app}            = electron;	// App
const {BrowserWindow}  = electron;	// ブラウザウィンドウ

// デバッグ表示
console.log('This is a Main Process');

//----------------------------------------
// 変数の初期化
var mainWin  = null;
var urlIndex = `file://${__dirname}/index.html`;

// 全ウィンドウ終了時の処理
app.on('window-all-closed', () => {app.quit()});

// 準備が整った際の処理
app.on('ready', () => {
	// ブラウザの起動
	mainWin = new BrowserWindow({width: 1200, height: 800,
		webPreferences: {nodeIntegration: true} });
	mainWin.loadURL(urlIndex);	// index.htmlを開く
});


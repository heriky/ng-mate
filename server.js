const path = require('path');
const child_process = require('child_process');
const jsonServer = require('json-mock-kuitos');
const serverConfig = require('./server-config');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfigration = require('./webpack-dev.config');

const compiler = webpack(webpackConfigration);

const app = jsonServer.create();

// 配置开发环境及热启动
app.use(webpackDevMiddleware(compiler, {
	noInfo: true,
	publicPath: webpackConfigration.output.publicPath
}));
app.use(webpackHotMiddleware(compiler, {
	log: console.log,
	path: '/__webpack_hmr',
	heartbeat: 10 * 1000
}));

app.use(jsonServer.defaults({ static: path.resolve(__dirname) }));

// API 是否使用mock
app.use(serverConfig.apiPrefix, jsonServer.proxy(serverConfig.apiUri, serverConfig.apiPort));

app.listen(serverConfig.serverPort, err => {
	if (err) {
		console.log(err);
		return;
	}

	const url = `http://127.0.0.1:${serverConfig.serverPort}/fake-portal/index.html`;
	console.log(`Listening at ${url}`);
});

const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const TARGET = process.env.npm_lifecycle_event;

process.env.BABEL_ENV = TARGET;

const srcDir = path.join(__dirname, './src');
module.exports = {
	resolve: {
		extensions: ['.js', '.json', '.less', '.html'],
		enforceExtension: false,
		modules: ['node_modules', './'],
		alias: {
			'@': srcDir
		}
	},
	externals: {
		'angular': 'angular',
		'angular-resource': '\'ngResource\'',
		'angular-ui-router': '\'ui.router\'',
		'ccms-components': '\'ccms.components\''
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader'
		}, {
			test: /\.less/,
			use: ExtractTextPlugin.extract({
				use: [{
					loader: 'css-loader'
				}, {
					loader: 'less-loader'
				}],
				// use style-loader in development
				fallback: 'style-loader'
			}),
			include: srcDir
		}, {
			test: /\.str\.html$/,
			use: [{
				loader: 'html-loader',
				options: {
					minimize: true,
					removeComments: false,
					collapseWhitespace: false
				}
			}],
			exclude: /(node_modules|bower_components)/,
			include: [path.join(srcDir, 'app'), path.join(srcDir, 'components')]
		}, {
			test: /\.tpl\.html$/,
			use: [{
				loader: 'file-loader',
				options: {
					name: '[path][name]-[hash:8].[ext]',
					minimize: true,
					removeComments: false,
					collapseWhitespace: false
				}
			}],
			include: srcDir
		}, {
			test: /\.css$/,
			use: ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use: [{
					loader: 'css-loader', options: {importLoaders: 1}
				}, 'postcss-loader']
			})
		}, {
			test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
			loader: 'url-loader?limit=10000&mimetype=application/font-woff'
		}, {
			test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
			loader: 'url-loader?limit=10000&mimetype=application/font-woff2'
		}, {
			test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
			loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
		}, {
			test: /\.otf(\?v=\d+\.\d+\.\d+)?$/,
			loader: 'url-loader?limit=10000&mimetype=application/font-otf'
		}, {
			test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
			loader: 'file-loader'
		}, {
			test: /\.(jpe?g|png|gif|svg)$/i,
			loaders: [
				'file-loader?hash=sha512&digest=hex&name=[path][name]-[hash:8].[ext]'
			]
		}]
	},
	resolveLoader: {
		modules: ['node_modules', path.resolve(__dirname, 'project-scripts', 'loaders')]
	},
	plugins: [
		new ExtractTextPlugin({
			filename: 'ng-mate.css',
			disable: false,
			allChunks: true
		}),
		new webpack.NoEmitOnErrorsPlugin()
	]
};



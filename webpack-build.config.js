const webpack = require('webpack');
const path = require('path');
// const HTMLPlugin = require('html-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const merge = require('webpack-merge');

const srcDir = path.join(__dirname, './src');
const buildOutputDir = path.join(__dirname, 'dist');
const webpackCommon = require('./webpack-common.config.js');


const production = env => ({
	// devtool: 'source-map',
	context: srcDir,
	entry: {
		app: './index.js'
	},
	output: {
		path: buildOutputDir,
		filename: 'index.js'
	},
	plugins: [
		new CleanPlugin([buildOutputDir]),
		new webpack.optimize.UglifyJsPlugin({
			sourceMap: true,
			minimize: true
		})
	]
});

module.exports = env => {
	return merge(production(env), webpackCommon);
};

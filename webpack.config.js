const webpack = require('webpack');

module.exports = {
	entry: './src/main.js',
	resolve: {
		alias: {
			@: 'src/'
	}
};
